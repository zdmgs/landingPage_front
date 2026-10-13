<!--
File: docs/architecture.md
Version: 0.4
Last updated: 2026-10-13
System: docs
-->

# Arquitetura do Frontend

## Visão geral

Frontend estático para a landing page pessoal de Luiz Domingues. A página apresenta uma breve bio, áreas de atuação profissional e um toggle para alternar o conteúdo entre português e inglês.

## Stack

- HTML
- CSS
- JavaScript
- Google Fonts

## Estrutura

- `index.html`: estrutura da página, perfil, categorias profissionais e toggle de idioma
- `style.css`: estilos visuais, layout responsivo e grade de categorias
- `script.js`: traduções e lógica de alternância entre os idiomas `br` e `en`
- `assets/background.jpeg`: imagem de fundo da página
- `assets/icon.png`: ícone exibido ao lado do nome
- `assets/favicon.svg`: favicon do site

## Layout

- Em desktop, o perfil é exibido à esquerda e as categorias profissionais à direita.
- Em telas intermediárias e mobile, o conteúdo é organizado verticalmente.
- As categorias usam uma grade de duas colunas por duas linhas em telas estreitas.
- Os textos dos cargos mantêm suas linhas definidas e não sofrem quebra automática.

## Hospedagem e serviços

- GitHub Pages: publicação do frontend
- GitHub: versionamento e histórico do código

## Domínios

- [https://luizdomingues.com](https://luizdomingues.com)
- [https://www.luizdomingues.com](https://www.luizdomingues.com)

## Fluxo de deploy

1. Editar os arquivos do frontend localmente.
2. Fazer commit das alterações.
3. Fazer push para o repositório no GitHub.
4. O GitHub Pages publica a nova versão.

## Segurança

- Não salvar segredos, tokens ou credenciais no frontend.
- Todo arquivo entregue pelo navegador é público.
- O domínio customizado deve permanecer configurado para os endereços apex e `www`.