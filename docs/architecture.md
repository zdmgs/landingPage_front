<!--
File: docs/architecture.md
Version: 0.3
Last updated: 2026-07-31
System: docs
-->
Frontend Architecture
Overview

Frontend estático para landing page pessoal com background animado usando Vanta.js.
Stack

    HTML

    CSS

    JavaScript

    Three.js (local, vendor)

    Vanta.js Fog (local, vendor)

Hosting and services

    GitHub Pages: publicação do frontend

    GitHub: versionamento e histórico

Domains

    https://luizdomingues.com

    https://www.luizdomingues.com

Deploy flow

    Editar arquivos do frontend no PC.

    Fazer commit.

    Fazer push para o GitHub.

    GitHub Pages publica a nova versão.

Security

    Não salvar segredos no frontend.

    O domínio customizado deve estar configurado com apex e www.

    Bibliotecas de terceiros (Three.js, Vanta.js) são servidas localmente em vendor/ para reduzir dependência de CDN.