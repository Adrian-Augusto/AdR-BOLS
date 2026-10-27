const parsedPrice = Number(import.meta.env.VITE_PRODUCT_PRICE ?? '29.90');

export const config = {
  checkoutUrl: import.meta.env.VITE_CHECKOUT_URL?.trim() || 'https://pay.cakto.com.br/dkcaos6_1247730',
  companyName: import.meta.env.VITE_COMPANY_NAME?.trim() || 'Sua Marca',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL?.trim() || '',
  privacyUrl: import.meta.env.VITE_PRIVACY_URL?.trim() || '',
  termsUrl: import.meta.env.VITE_TERMS_URL?.trim() || '',
  refundUrl: import.meta.env.VITE_REFUND_URL?.trim() || '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID?.trim() || '',
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() || '',
  price: Number.isFinite(parsedPrice) && parsedPrice > 0 ? parsedPrice : 29.9,
};

export const formattedPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(config.price);

export function getCheckoutUrl(): string | null {
  if (!config.checkoutUrl) return null;

  try {
    const checkout = new URL(config.checkoutUrl);
    if (checkout.protocol !== 'https:' && checkout.protocol !== 'http:') return null;

    const current = new URLSearchParams(window.location.search);
    for (const [key, value] of current.entries()) {
      if (key.toLowerCase().startsWith('utm_') || key === 'gclid' || key === 'fbclid') {
        checkout.searchParams.set(key, value);
      }
    }

    return checkout.toString();
  } catch {
    return null;
  }
}
