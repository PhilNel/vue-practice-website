#!/usr/bin/env node

import { execSync } from "child_process";

const CLOUDFRONT_DISTRIBUTION_ID =
  process.env.CLOUDFRONT_DISTRIBUTION_ID || "E35ZYSNPLLS4CE";
const AWS_PROFILE = process.env.AWS_PROFILE || "default";

console.log(`Invalidating CloudFront cache`);
console.log(`Distribution: ${CLOUDFRONT_DISTRIBUTION_ID}`);

try {
  const pathsToInvalidate = [
    "/index.html",
    "/assets/*",
    "/site.webmanifest",
    "/favicon.ico",
    "/favicon.svg",
    "/favicon-96x96.png",
    "/apple-touch-icon.png",
    "/web-app-manifest-192x192.png",
    "/web-app-manifest-512x512.png",
  ].join(" ");

  const invalidateCommand = `aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths ${pathsToInvalidate} --profile ${AWS_PROFILE}`;

  const invalidationResult = execSync(invalidateCommand, { encoding: "utf8" });
  const invalidationData = JSON.parse(invalidationResult);
  const invalidationId = invalidationData.Invalidation.Id;

  console.log(`✅ CloudFront invalidation created: ${invalidationId}`);
} catch (error) {
  console.error("❌ CloudFront invalidation failed:", error.message);
  process.exit(1);
}
