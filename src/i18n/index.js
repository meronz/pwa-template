import { createI18n } from 'vue-i18n'

import en from './locales/en.json'

export function setI18nLanguage(locale) {
  document.querySelector('html').setAttribute('lang', locale)
}

export function create() {
  const locale = 'en'
  const i18n = createI18n({
    locale: locale,
    messages: {
      en
    }
  })
  setI18nLanguage(locale)
  return i18n
}

const i18n = create();
export default i18n;