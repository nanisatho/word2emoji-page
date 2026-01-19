export const locales = ['en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt-BR', 'ru', 'zh-Hans'] as const;
export type Locale = (typeof locales)[number];
