import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import ar from "./locales/ar/translation.json";

const STORAGE_KEY = "i18nextLng";
const SUPPORTED_LANGUAGES = ["en", "fr", "ar"] as const;

const getInitialLanguage = (): string => {
  if (typeof window === "undefined") {
    return "fr";
  }

  try {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage) {
      const language = savedLanguage.split("-")[0];

      if (
        SUPPORTED_LANGUAGES.includes(
          language as (typeof SUPPORTED_LANGUAGES)[number],
        )
      ) {
        return language;
      }
    }
  } catch (error) {
    console.warn("Unable to access localStorage.", error);
  }

  return "fr";
};

export const initPromise = i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      ar: {
        translation: ar,
      },
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
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    console.warn("Unable to save language.", error);
  }
});

export default i18n;