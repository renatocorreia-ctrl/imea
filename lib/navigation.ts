export type NavItem = { title: string; slug: string };
export type NavSection = { title: string; items: NavItem[] };

/**
 * Estrutura do sidebar. Cada slug corresponde a um arquivo em /content.
 * Ex.: slug "plataforma/proposito" -> content/plataforma/proposito.mdx
 */
export const navigation: NavSection[] = [
  {
    title: 'Começando',
    items: [
      { title: 'Visão geral', slug: 'visao-geral' },
    ],
  },
  {
    title: 'Plataforma de Marca',
    items: [
      { title: 'Propósito', slug: 'plataforma/proposito' },
      { title: 'Arquétipo', slug: 'plataforma/arquetipo' },
      { title: 'Personalidade e Valores', slug: 'plataforma/personalidade' },
      { title: 'Arquitetura de Marca', slug: 'plataforma/arquitetura' },
    ],
  },
  {
    title: 'Identidade Visual',
    items: [
      { title: 'Logotipo', slug: 'identidade/logotipo' },
      { title: 'Paleta de Cores', slug: 'identidade/cores' },
      { title: 'Tipografia', slug: 'identidade/tipografia' },
      { title: 'Grafismos', slug: 'identidade/grafismos' },
      { title: 'Fotografia', slug: 'identidade/fotografia' },
    ],
  },
  {
    title: 'Universo Verbal',
    items: [
      { title: 'Tom de Voz', slug: 'verbal/tom-de-voz' },
      { title: 'Territórios de Linguagem', slug: 'verbal/territorios' },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { title: 'Categorias e Ícones', slug: 'categorias' },
      { title: 'Downloads', slug: 'downloads' },
    ],
  },
];

export const allSlugs = navigation.flatMap((s) => s.items.map((i) => i.slug));
