export const languages = ["en", "fr"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

export function isLanguage(value: string | undefined): value is Language {
  return languages.includes(value as Language);
}

export function getLanguageLabel(language: Language): string {
  const labels: Record<Language, string> = {
    en: "EN",
    fr: "FR",
  };

  return labels[language];
}