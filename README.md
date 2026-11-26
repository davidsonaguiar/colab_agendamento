# Documentação do COLAB Agendamento

Site de documentação dos projetos de gestão e agendamento de espaços do
Laboratório COLAB/IFAL:

- [API backend](https://github.com/davidsonaguiar/agendamento_espacos)
- [Aplicação web frontend](https://github.com/davidsonaguiar/agendamento_espacos_front)

O site é construído com Docusaurus e publicado no GitHub Pages por meio do
workflow em `.github/workflows/deploy.yml`.

## Desenvolvimento local

Requer Node.js 26, conforme `.nvmrc`.

```powershell
npm ci
npm run dev
```

O servidor local abre o site em `http://localhost:3000`. Os documentos ficam em
`docs/`; a ordem das categorias da navegação é definida em `sidebars.ts`.

## Verificação e build

```powershell
npm run typecheck
npm run build
```

O build gera os arquivos estáticos em `build/` e falha quando encontra links
internos quebrados.
