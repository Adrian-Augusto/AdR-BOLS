/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHECKOUT_URL?: string;
  readonly VITE_COMPANY_NAME?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
  readonly VITE_PRIVACY_URL?: string;
  readonly VITE_TERMS_URL?: string;
  readonly VITE_REFUND_URL?: string;
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly VITE_PRODUCT_PRICE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
