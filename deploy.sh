#!/usr/bin/env bash
set -euo pipefail

BUCKET="polar-ac-website"
DISTRIBUTION_ID="E17V478H622JID"
AWS_PROFILE="montania-deploy"

echo "==> Building..."
npm run build

echo "==> Syncing assets (long cache)..."
aws --profile "$AWS_PROFILE" s3 sync dist/ "s3://$BUCKET/" \
  --delete \
  --exclude "index.html" \
  --cache-control "public, max-age=31536000, immutable"

echo "==> Syncing index.html (no cache)..."
aws --profile "$AWS_PROFILE" s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"

echo "==> Invalidating CloudFront..."
if aws --profile "$AWS_PROFILE" cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query "Invalidation.Id" \
  --output text; then
  echo "==> Done. https://d1xvnbh5v5o6be.cloudfront.net"
else
  echo "⚠️  CloudFront invalidation failed — S3 is up to date but CDN cache may be stale."
  echo "   Grant cloudfront:CreateInvalidation on arn:aws:cloudfront::508587295478:distribution/$DISTRIBUTION_ID to $AWS_PROFILE"
  exit 1
fi
