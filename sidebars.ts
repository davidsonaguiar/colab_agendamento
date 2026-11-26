import type {SidebarsConfig} from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Guia do usuário',
      items: [
        'intro',
        'guia-do-usuario/fluxo-de-agendamento',
        'guia-do-usuario/conta-e-acesso',
      ],
    },
    {
      type: 'category',
      label: 'Desenvolvimento',
      items: [
        'desenvolvimento/arquitetura-integracao',
        'desenvolvimento/execucao-local',
        'desenvolvimento/api-dados',
      ],
    },
  ],
}

export default sidebars
