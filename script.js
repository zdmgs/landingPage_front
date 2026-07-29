/*
File: script.js
Version: 0.2
Last updated: 2026-07-29
System: frontend
*/

const translations = {
  pt: {
    label: 'apresentação',
    description:
      'texto de apresentação em português para testar a landing page e validar o comportamento do seletor de idioma.',
    linkedin: 'linkedin',
    email: 'email'
  },
  en: {
    label: 'introduction',
    description:
      'english placeholder copy to test the landing page and confirm the language toggle behavior is working as expected.',
    linkedin: 'linkedin',
    email: 'email'
  }
};

const root = document.documentElement;
const toggle = document.querySelector('[data-lang-toggle]');
const options = document.querySelectorAll('[data-lang-option]');
const translatableNodes = document.querySelectorAll('[data-i18n]');

let currentLanguage = 'pt';

function applyLanguage(language) {
  currentLanguage = language;
  root.lang = language === 'pt' ? 'pt-BR' : 'en';
  toggle.dataset.lang = language;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[language][key]) {
      node.textContent = translations[language][key];
    }
  });

  options.forEach((option) => {
    const isActive = option.dataset.langOption === language;
    option.classList.toggle('is-active', isActive);
  });
}

toggle.addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  applyLanguage(nextLanguage);
});

applyLanguage(currentLanguage);