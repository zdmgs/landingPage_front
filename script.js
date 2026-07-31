/*
File: script.js
Version: 0.8
Last updated: 2026-07-30
System: frontend
*/

// objeto com os textos em português e inglês
const translations = {
br: {
// título exibido no <h1>
title: 'luiz domingues',
// conteúdo multi-linha exibido no bloco principal
content: `desenvolvimento ↓
analista de negócios ;
analista de requisitos ;
analista de testes (qa) .

gerenciamento ↓
product owner ;
scrum master .

recrutamento ↓
headhunter ;
recrutador .


jobs@luizdomingues.com`
},
en: {
// mesma estrutura de título em inglês
title: 'luiz domingues',
// conteúdo equivalente em inglês
content: `development ↓
business analyst ;
functional analyst ;
test (qa) analyst .

management ↓
product owner ;
scrum master .

recruitment ↓
headhunter ;
recruiter .


jobs@luizdomingues.com`
}
};

// referência ao elemento <html> para mudar o atributo lang
const root = document.documentElement;
// botão de toggle de idioma (br/en)
const toggle = document.querySelector('[data-lang-toggle]');
// opções visuais de idioma dentro do botão (br / en)
const options = document.querySelectorAll('[data-lang-option]');
// elementos que terão texto traduzido, identificados por data-i18n
const translatableNodes = document.querySelectorAll('[data-i18n]');

// idioma inicial da página
let currentLanguage = 'en';

// função que aplica um idioma em toda a interface
function applyLanguage(language) {
currentLanguage = language;
// ajusta o atributo lang do <html> para acessibilidade e SEO
root.lang = language === 'br' ? 'br-BR' : 'en';

// atualiza o dataset do botão para refletir o idioma atual
if (toggle) toggle.dataset.lang = language;

// percorre cada nó traduzível e aplica o texto correspondente
translatableNodes.forEach((node) => {
const key = node.dataset.i18n; // pega a chave (title, content)
if (translations[language] && translations[language][key]) {
node.textContent = translations[language][key];
}
});

// atualiza o estado visual das opções de idioma (classe is-active)
options.forEach((option) => {
const isActive = option.dataset.langOption === language;
option.classList.toggle('is-active', isActive);
});
}

// adiciona o evento de clique no botão de toggle, se existir
if (toggle) {
toggle.addEventListener('click', () => {
// decide qual será o próximo idioma (alternando entre br e en)
const nextLanguage = currentLanguage === 'br' ? 'en' : 'br';
// aplica o próximo idioma
applyLanguage(nextLanguage);
});
}

// aplica o idioma inicial na primeira renderização da página
applyLanguage(currentLanguage);