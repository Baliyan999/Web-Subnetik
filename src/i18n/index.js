import { createI18n } from 'vue-i18n'
import ru from './locales/ru.js'
import en from './locales/en.js'
import zh from './locales/zh.js'
import uz from './locales/uz.js'

const messages = {
  ru,
  en,
  zh,
  uz
}

const i18n = createI18n({
  legacy: false,
  locale: 'ru', // язык по умолчанию
  fallbackLocale: 'ru',
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
