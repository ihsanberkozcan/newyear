import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      newYear: "New Year",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    },
  },
  tr: {
    translation: {
      newYear: "Yeni Yıl",
      days: "gün",
      hours: "saat",
      minutes: "dakika",
      seconds: "saniye",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;
