/*
File: script.js
Version: 0.4
Last updated: 2026-07-29
System: frontend
*/

const translations = {
  pt: {
    title: 'luiz domingues',
    content: `desenvolvimento ↓
analista de negócios ;
analista de requisitos ;
analista de testes (qa) .

gerenciamento ↓
product owner ;
scrum master .

recrutamento ↓
headhunter ;
recrutador .`
  },
  en: {
    title: 'luiz domingues',
    content: `development ↓
business analyst ;
functional analyst ;
test (qa) analyst .

management ↓
product owner ;
scrum master .

recruitment ↓
headhunter ;
recruiter .`
  }
};

const root = document.documentElement;
const toggle = document.querySelector('[data-lang-toggle]');
const options = document.querySelectorAll('[data-lang-option]');
const translatableNodes = document.querySelectorAll('[data-i18n]');

let currentLanguage = 'en';

function applyLanguage(language) {
  currentLanguage = language;
  root.lang = language === 'pt' ? 'pt-BR' : 'en';
  toggle.dataset.lang = language;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[language] && translations[language][key]) {
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