/*
File: script.js
Version: 0.9
Last updated: 2026-10-13
System: frontend
*/

const translations = {
br: {
name: 'luiz domingues',
bio: '8+ anos em tech, telecom e times multiculturais, transformando necessidades complexas em soluções claras, requisitos sólidos e processos melhores – conectando stakeholders e times técnicos para entregar valor.',
developmentTitle: 'desenvolvimento',
developmentRoles: `analista de negócios
analista de requisitos
analista de testes (qa)`,
managementTitle: 'gerenciamento',
managementRoles: `product owner
scrum master`,
recruitmentTitle: 'recrutamento',
recruitmentRoles: `headhunter
recrutador`,
aiTitle: 'ia',
aiRoles: 'training expert'
},
en: {
name: 'luiz domingues',
bio: '8+ years in tech, telecom, and multicultural teams, turning complex business needs into clear solutions, strong requirements, and better processes – bridging stakeholders and technical teams to deliver value.',
developmentTitle: 'development',
developmentRoles: `business analyst
functional analyst
test (qa) analyst`,
managementTitle: 'management',
managementRoles: `product owner
scrum master`,
recruitmentTitle: 'recruitment',
recruitmentRoles: `headhunter
recruiter`,
aiTitle: 'ai',
aiRoles: 'training expert'
}
};

const root = document.documentElement;
const toggle = document.querySelector('[data-language-toggle]');
const options = document.querySelectorAll('[data-language-option]');
const translatableNodes = document.querySelectorAll('[data-i18n]');
let currentLanguage = 'en';

function applyLanguage(language) {
currentLanguage = language;
root.lang = language === 'br' ? 'pt-BR' : 'en';

translatableNodes.forEach((node) => {
node.textContent = translations[language][node.dataset.i18n];
});

options.forEach((option) => {
option.classList.toggle('is-active', option.dataset.languageOption === language);
});
}

toggle.addEventListener('click', () => {
applyLanguage(currentLanguage === 'br' ? 'en' : 'br');
});

applyLanguage(currentLanguage);