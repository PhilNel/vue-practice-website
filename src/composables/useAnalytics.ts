import { getGoogleTagManagerId } from "@/utils/env";
import { loadScript } from "@/utils/script";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GOOGLE_TAG_MANAGER_CONFIG_KEY = "config";
const GOOGLE_TAG_MANAGER_JS_KEY = "js";

export const useAnalytics = () => {
  const measurementId = getGoogleTagManagerId();

  const initialize = async (): Promise<void> => {
    if (!measurementId) return;

    const scriptSource = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    loadScript(scriptSource);

    configureGoogleTagManager();
  };

  const configureGoogleTagManager = (): void => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag(GOOGLE_TAG_MANAGER_JS_KEY, new Date());
    window.gtag(GOOGLE_TAG_MANAGER_CONFIG_KEY, measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  };

  const trackPageView = (path: string): void => {
    const isConfigured = measurementId && typeof window.gtag === "function";
    if (!isConfigured) return;

    window.gtag(GOOGLE_TAG_MANAGER_CONFIG_KEY, measurementId, {
      page_path: path,
      anonymize_ip: true,
    });
  };

  return {
    initialize,
    trackPageView,
  };
};
