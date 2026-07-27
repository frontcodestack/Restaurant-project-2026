import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import ar from "./locales/ar/translation.json";

const STORAGE_KEY = "i18nextLng";

export const SUPPORTED_LANGUAGES = [
  "en",
  "fr",
  "ar",
] as const;

export type SupportedLanguage =
  (typeof SUPPORTED_LANGUAGES)[number];

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") {
    return "fr";
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const language = saved.split("-")[0] as SupportedLanguage;

      if (SUPPORTED_LANGUAGES.includes(language)) {
        return language;
      }
    }
  } catch (error) {
    console.warn("Unable to access localStorage.", error);
  }

  return "fr";
}

i18n.use(initReactI18next);

export const initPromise = i18n.init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },

  lng: getInitialLanguage(),

  fallbackLng: "en",

  supportedLngs: SUPPORTED_LANGUAGES,

  load: "languageOnly",

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (language) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    console.warn("Unable to save language.", error);
  }
});

export default i18n;