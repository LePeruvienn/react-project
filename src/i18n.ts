
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import enTranslations from "./locales/en/translations.json";
import frTranslations from "./locales/fr/translations.json";
import esTranslations from "./locales/es/translations.json";

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: enTranslations,
			},
			es: {
				translation: esTranslations,
			},
			fr: {
				translation: frTranslations,
			},
		},
		lng: 'en', // Langue par défaut
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
