type AnalyticsEvent = 'ViewContent' | 'InitiateCheckout';

declare global {
  type MetaPixel = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue: unknown[][];
    push: (...args: unknown[]) => void;
    loaded: boolean;
    version: string;
  };

  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: MetaPixel;
    __visaTrackedEvents?: Set<string>;
  }
}

const tracked = (window.__visaTrackedEvents ??= new Set<string>());

function initializeAnalytics() {
  const { metaPixelId, ga4MeasurementId } = import.meta.env;

  if (metaPixelId && !document.querySelector('[data-meta-pixel]')) {
    const script = document.createElement('script');
    script.dataset.metaPixel = 'true';
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
    const pixel: MetaPixel = (...args: unknown[]) => {
      if (pixel.callMethod) pixel.callMethod(...args);
      else pixel.queue.push(args);
    };
    pixel.queue = [];
    pixel.push = pixel;
    pixel.loaded = true;
    pixel.version = '2.0';
    window.fbq = pixel;
    window.fbq('init', metaPixelId);
  }

  if (ga4MeasurementId && !document.querySelector('[data-ga4]')) {
    const script = document.createElement('script');
    script.dataset.ga4 = 'true';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}`;
    document.head.appendChild(script);
    window.dataLayer ??= [];
    window.gtag ??= (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag('js', new Date());
    window.gtag('config', ga4MeasurementId, { send_page_view: false });
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (tracked.has(event)) return;
  tracked.add(event);
  initializeAnalytics();

  const { metaPixelId, ga4MeasurementId } = import.meta.env;
  if (metaPixelId) window.fbq?.('track', event);
  if (ga4MeasurementId) {
    window.gtag?.('event', event === 'ViewContent' ? 'view_item' : 'begin_checkout', {
      currency: 'BRL',
      value: Number(import.meta.env.VITE_PRODUCT_PRICE ?? '29.90'),
      item_name: 'Guia Completo do Visto Americano 2027',
    });
  }
}
