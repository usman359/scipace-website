# Deploy Scipace website to AWS S3 + CloudFront

This guide walks you through hosting the Vite build (`dist/`) on **Amazon S3** with **CloudFront** in front (CDN + HTTPS).

**Time:** ~30–45 minutes the first time.

---

## What you need

- An [AWS account](https://aws.amazon.com/)
- [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed and configured (`aws configure`)
- Node.js (you already use this for the project)
- Optional: a custom domain (e.g. `scipace.com`) in Route 53 or another DNS provider

---

## Part 1 — Build the site locally

From the project folder:

```bash
cd scipace-website
npm install
npm run build
```

Confirm the `dist/` folder exists and contains `index.html`, `assets/`, and `favicon.svg`.

Preview locally (optional):

```bash
npm run preview
```

---

## Part 2 — Create an S3 bucket

### Option A: AWS Console

1. Open **S3** → **Create bucket**.
2. **Bucket name:** e.g. `scipace-website-prod` (must be globally unique).
3. **Region:** choose one close to your users (e.g. `us-east-1`).
4. **Block Public Access:** leave **all four ON** (recommended). CloudFront will access the bucket privately via OAC (step 4).
5. **Bucket Versioning:** optional (useful for rollbacks).
6. Create the bucket.

### Option B: AWS CLI

```bash
export AWS_REGION=us-east-1
export BUCKET_NAME=scipace-website-prod   # change to a unique name

aws s3api create-bucket \
  --bucket "$BUCKET_NAME" \
  --region "$AWS_REGION" \
  $( [ "$AWS_REGION" != "us-east-1" ] && echo --create-bucket-configuration LocationConstraint="$AWS_REGION" )
```

---

## Part 3 — Upload the build to S3

### Console

1. Open your bucket → **Upload**.
2. Upload **everything inside** `dist/` (not the `dist` folder itself).
   - `index.html` at the bucket root
   - `assets/` folder
   - `favicon.svg`
3. Finish upload.

### CLI (recommended for updates)

```bash
cd scipace-website
npm run build

aws s3 sync dist/ "s3://$BUCKET_NAME" --delete
```

`--delete` removes old hashed JS/CSS files after each deploy.

---

## Part 4 — Create a CloudFront distribution

### Console

1. Open **CloudFront** → **Create distribution**.
2. **Origin domain:** select your S3 bucket (the REST API endpoint, e.g. `scipace-website-prod.s3.us-east-1.amazonaws.com`).
3. **Origin access:** choose **Origin access control settings (recommended)** → **Create new OAC** → create it.
4. When prompted, **copy the bucket policy** CloudFront shows and apply it to the S3 bucket (S3 → bucket → **Permissions** → **Bucket policy** → paste → Save).
5. **Viewer protocol policy:** **Redirect HTTP to HTTPS**.
6. **Default root object:** `index.html`.
7. **Price class:** use **Use only North America and Europe** to save cost, or **All edge locations** for global.
8. Create distribution. Note the **Distribution domain name** (e.g. `d1234abcd.cloudfront.net`).

### Custom domain + HTTPS (optional)

1. In **ACM** (certificate manager), request a certificate in **`us-east-1`** for `scipace.com` and `www.scipace.com` (DNS validation).
2. In the distribution → **General** → **Edit** → add **Alternate domain name (CNAME)** and select the ACM certificate.
3. In DNS (Route 53 or your registrar), create a **CNAME** (or Alias A to CloudFront) pointing to the distribution domain.

### CLI (after bucket + OAC exist)

Creating a distribution via CLI is verbose; the console flow above is easier the first time. Use CLI later for invalidations (Part 6).

---

## Part 5 — SPA / single-page note

This site is one HTML page with no client-side routes. You do **not** need custom error pages unless you add a router later.

If you add React Router in the future, set CloudFront **Custom error responses**:

| HTTP code | Response page | Code |
|-----------|---------------|------|
| 403 | `/index.html` | 200 |
| 404 | `/index.html` | 200 |

---

## Part 6 — Deploy updates (every release)

```bash
cd scipace-website
npm run build
aws s3 sync dist/ "s3://$BUCKET_NAME" --delete
aws cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/*"
```

Or use the project script (after configuring `.env.deploy`):

```bash
cp .env.deploy.example .env.deploy
# Edit .env.deploy with your bucket and distribution ID
npm run deploy:aws
```

Invalidation takes 1–3 minutes; then visitors see the new site.

---

## Part 7 — Checklist

| Step | Done |
|------|------|
| `npm run build` succeeds | ☐ |
| S3 bucket created (private) | ☐ |
| `dist/` synced to bucket root | ☐ |
| CloudFront distribution created | ☐ |
| S3 bucket policy allows CloudFront OAC | ☐ |
| Default root object = `index.html` | ☐ |
| Site loads on `*.cloudfront.net` URL | ☐ |
| Custom domain + ACM (optional) | ☐ |
| Invalidation after each deploy | ☐ |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 403 from CloudFront | Apply the OAC bucket policy to S3; wait a few minutes. |
| Old content after deploy | Run CloudFront invalidation for `/*`. |
| Blank page | Ensure `index.html` is at the **root** of the bucket, not `dist/index.html` in a subfolder. |
| Broken assets | Run `npm run build` again; sync with `--delete`. |
| CLI “Unable to locate credentials” | Run `aws configure` with access key + secret. |

---

## Cost (rough)

- S3 storage + requests: usually **&lt; $1/month** for a small static site.
- CloudFront data transfer: depends on traffic; low traffic is often **a few dollars/month**.
- ACM certificates: **free** when used with CloudFront.

---

## Security tips

- Do not make the bucket public; use **OAC only**.
- Use an IAM user or role with minimal permissions: `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on that bucket, and `cloudfront:CreateInvalidation` on that distribution.
- Store credentials in `aws configure` or environment variables — never commit secrets to git.
