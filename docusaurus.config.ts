import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const url = 'https://davidsonaguiar.github.io'
const baseUrl = '/colab_agendamento/'
const repositoryUrl = 'https://github.com/davidsonaguiar/colab_agendamento'
const backendUrl = 'https://github.com/davidsonaguiar/agendamento_espacos'
const frontendUrl = 'https://github.com/davidsonaguiar/agendamento_espacos_front'

const config: Config = {
  title: 'COLAB Agendamento',
  tagline: 'Gestão de espaços e solicitações de uso do COLAB',
  future: {
    v4: true,
  },
  url,
  baseUrl,
  organizationName: 'davidsonaguiar',
  projectName: 'colab_agendamento',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repositoryUrl}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'COLAB Agendamento',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        { to: '/sobre', label: 'Sobre', position: 'left' },
        {
          href: frontendUrl,
          label: 'Frontend',
          position: 'right',
        },
        {
          href: backendUrl,
          label: 'Backend',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Visão geral',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Projetos',
          items: [
            {
              label: 'Frontend',
              href: frontendUrl,
            },
            {
              label: 'Backend',
              href: backendUrl,
            },
          ],
        },
        {
          title: 'Desenvolvimento',
          items: [
            {
              label: 'Arquitetura',
              to: '/docs/desenvolvimento/arquitetura-integracao',
            },
            {
              label: 'Site da documentação',
              href: repositoryUrl,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} COLAB Agendamento — IFAL Campus Maceió.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  'markdown': {
    'mermaid': true,
  },
  'themes': ['@docusaurus/theme-mermaid'],
  clientModules: ['./src/clientModules/mermaid-d3-transition.js'],
}

export default config
