// Suporta apenas os idiomas definidos
export type SupportedLocales = "pt" | "en";

// Estrutura de cada locale
export interface LocaleContentType {
  messages: Record<string, string | ((...args: any[]) => string)>;
  placeholders: Record<string, string>;
  titles: Record<string, string>;
  descriptions: Record<string, string>;
  buttons: Record<string, string>;
  errors: Record<string, string>;
  httpErrors: Record<number, string>;
  labels: Record<string, string>;
}
