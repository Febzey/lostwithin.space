/// <reference types="vite/client" />
declare module "*.md";

interface ImportMetaEnv {
    readonly VITE_ANALYTICS_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
