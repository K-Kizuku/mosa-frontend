/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FIREBASE_PRIVATE_KEY_ID: string;
  readonly PUBLIC_FIREBASE_PRIVATE_KEY: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly PUBLIC_FIREBASE_CLIENT_EMAIL: string;
  readonly PUBLIC_FIREBASE_CLIENT_ID: string;
  readonly PUBLIC_FIREBASE_AUTH_URI: string;
  readonly PUBLIC_FIREBASE_TOKEN_URI: string;
  readonly PUBLIC_FIREBASE_AUTH_CERT_URL: string;
  readonly PUBLIC_FIREBASE_CLIENT_CERT_URL: string;
  readonly PUBLIC_FIREBASE_UNIVERSE_DOMAIN: string;
  readonly PUBLIC_FIREBASE_API_KEY: string;
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  readonly PUBLIC_FIREBASE_MESSAGEING_SENDER_ID: string;
  readonly PUBLIC_FIREBASE_APP_ID: string;
  readonly PUBLIC_FIREBASE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
