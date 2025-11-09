import { SupportedLocales } from "./types";
import { localeContent } from "./locales";

// Tipo genérico para acessar qualquer seção do locale
type LocaleSection = keyof (typeof localeContent)[SupportedLocales];

export class I18nRoot {
  constructor(private locale: SupportedLocales = "pt") {}

  /**
   * Atualiza o idioma atual
   * Lança erro se o locale não for suportado
   */
  setLocale(locale: SupportedLocales) {
    if (!localeContent[locale]) {
      throw new Error(`Locale "${locale}" não é suportado.`);
    }
    this.locale = locale;
  }

  /**
   * Retorna a seção do locale atual
   * Ex.: messages, errors, placeholders
   */
  private getSection<T extends LocaleSection>(section: T) {
    return localeContent[this.locale][
      section
    ] as (typeof localeContent)[SupportedLocales][T];
  }

  // Getters para cada seção
  get messages() {
    return this.getSection("messages");
  }
  get placeholders() {
    return this.getSection("placeholders");
  }
  get titles() {
    return this.getSection("titles");
  }
  get descriptions() {
    return this.getSection("descriptions");
  }
  get buttons() {
    return this.getSection("buttons");
  }
  get errors() {
    return this.getSection("errors");
  }
  get httpErrors() {
    return this.getSection("httpErrors");
  }
  get labels() {
    return this.getSection("labels");
  }

  /** Retorna mensagem HTTP ou fallback */
  getHttpErrorMessage(statusCode: number): string {
    return this.httpErrors[statusCode] ?? this.errors.unknown;
  }

  /** Retorna mensagem dinâmica de validação (tipada) */
  getMessage(key: keyof typeof this.messages, ...args: any[]): string {
    const msg = this.messages[key];
    return typeof msg === "function" ? msg(...args) : msg;
  }
}

// Singleton global
export const i18n = new I18nRoot();
