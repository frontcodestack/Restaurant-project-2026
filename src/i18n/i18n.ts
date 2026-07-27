import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import ar from "./locales/ar/translation.json";

const STORAGE_KEY = "i18nextLng";
const SUPPORTED_LANGUAGES = ["en", "fr", "ar"] as const;

const getInitialLanguage = (): string => {
  if (typeof window === "undefined") return "fr";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const lang = saved.split("-")[0];

      if (SUPPORTED_LANGUAGES.includes(lang as any)) {
        return lang;
      }
    }
  } catch (err) {
    console.warn("Unable to access localStorage.", err);
  }

  return "fr";
};

const initPromise = i18n
  .use(initReactI18next)
  .init({
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

// Save language whenever it changes
i18n.on("languageChanged", (lng) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch (err) {
    console.warn("Unable to save language.", err);
  }
});

export { initPromise };
export default i18n;