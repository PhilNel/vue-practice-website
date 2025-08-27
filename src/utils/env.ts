function ensureTrailingSlash(url: string): string {
  return url.endsWith("/") ? url : `${url}/`;
}

export function getAssetsBaseUrl(): string {
  const configured = import.meta.env.VITE_ASSETS_BASE_URL;
  const fallback = "https://nelskincare.co.za/images/";
  return ensureTrailingSlash(configured || fallback);
}

export function buildTreatmentImageUrl(relativePath: string): string {
  return `${buildAssetUrl("treatments/")}${relativePath}`;
}

function buildAssetUrl(relativePath: string): string {
  return `${getAssetsBaseUrl()}${relativePath}`;
}

export function getGoogleTagManagerId(): string | undefined {
  return import.meta.env.VITE_ANALYTICS_MEASUREMENT_ID;
}
