/*
File: script.js
Version: 0.5
Last updated: 2026-07-29
System: frontend
*/

const translations = {
  pt: {
    content: `gerenciamento ↓
product owner ;
scrum master .

desenvolvimento ↓
analista de testes (qa) ;
analista de requisitos ;
analista de negócios .

recrutamento ↓
headhunter ;
recrutador .`
  },
  en: {
    content: `management ↓
product owner ;
scrum master .

development ↓
functional analyst ;
test (qa) analyst ;
business analyst .

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