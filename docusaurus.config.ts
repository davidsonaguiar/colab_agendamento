import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const url = 'https://davidsonaguiar.github.io'
const baseUrl = '/colab_agendamento/'
const repositoryUrl = 'https://github.com/davidsonaguiar/colab_agendamento'

const config: Config = {
  title: 'Colab Agendamento',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            `${repositoryUrl}/tree/main/packages/create-docusaurus/templates/shared/`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Colab Agendamento',
      logo: {
        alt: 'Colab Agendamento Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/sobre', label: 'Sobre', position: 'left' },
        {
          href: repositoryUrl,
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: repositoryUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Colab Agendamento, Inc. Built with Docusaurus.`,
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
