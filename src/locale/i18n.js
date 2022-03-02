import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en_US } from './locales/en_US';
import { es_ES } from './locales/es_ES';


i18n
    .use( initReactI18next )
    .init({
        resources: {
            en: {
                translation:  en_US 
            },
            es: {
                translation: es_ES
            }
        },
        lng: "es",
        fallbackLng: "es",

        interpolation: {
            escapeValue: false
        }
    })

