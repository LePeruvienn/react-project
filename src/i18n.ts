
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import frTranslations from './locales/fr/translation.json';
import esTranslations from './locales/es/translation.json';

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: enTranslations,
			},
			fr: {
				translation: frTranslations,
			},
			es: {
				translation: esTranslations,
			},
		},
		lng: 'en', // Langue par défaut
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
