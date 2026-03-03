import { translations } from '../data/translations.js';

export function initializeI18n() {
  const languageSelect = document.querySelector('#language');
  const i18nNodes = document.querySelectorAll('[data-i18n]');
  const i18nPlaceholderNodes = document.querySelectorAll('[data-i18n-placeholder]');

  const applyLanguage = (languageCode) => {
    const copy = translations[languageCode] || translations['en-US'];

    i18nNodes.forEach((node) => {
      const key = node.dataset.i18n;
      if (copy[key]) node.textContent = copy[key];
    });

    i18nPlaceholderNodes.forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      if (copy[key]) node.placeholder = copy[key];
    });

    document.documentElement.lang = languageCode;
  };

  const browserLanguage = navigator.language in translations ? navigator.language : 'en-US';
  languageSelect.value = browserLanguage;
  applyLanguage(browserLanguage);
  languageSelect.addEventListener('change', (event) => applyLanguage(event.target.value));
}
