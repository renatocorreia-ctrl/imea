/**
 * Tokens oficiais da marca IMEA.
 * Fonte única de verdade para cores, tipografia e ativos.
 * Quando a identidade for atualizada, altere os valores AQUI
 * (e os espelhos em tailwind.config.ts).
 */

export type ColorToken = {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  pantone?: string;
  usage?: string;
};

export const institutionalPalette: ColorToken[] = [
  { name: 'Verde Escuro', hex: '#003828', rgb: '0 / 56 / 40', cmyk: '93 / 47 / 82 / 63', pantone: '3308 C', usage: 'Solidez e confiança. Fundos institucionais e títulos sobre claro.' },
  { name: 'Verde Teal', hex: '#056D4F', rgb: '5 / 109 / 79', cmyk: '88 / 31 / 77 / 22', pantone: '336 C', usage: 'Equilíbrio e conexão com a terra. Apoio em gráficos e destaques.' },
  { name: 'Verde Campo', hex: '#139050', rgb: '19 / 144 / 80', cmyk: '83 / 17 / 90 / 3', pantone: '347 C', usage: 'Cor de ação. Botões, links e elementos interativos.' },
  { name: 'Verde Folha Jovem', hex: '#C2DCA5', rgb: '194 / 220 / 165', cmyk: '30 / 0 / 48 / 0', pantone: '7486 C', usage: 'Transparência e renovação. Fundos de apoio e tags.' },
  { name: 'Off-white Algodão', hex: '#F2EFEB', rgb: '242 / 239 / 235', cmyk: '6 / 6 / 8 / 0', pantone: 'Bright White', usage: 'Base de respiro. Fundo padrão de páginas e materiais.' },
];

export const categoryPalettes: { category: string; colors: ColorToken[] }[] = [
  {
    category: 'Soja',
    colors: [
      { name: 'Soja 900', hex: '#123B29', rgb: '18 / 59 / 41', cmyk: '90/50/80/60' },
      { name: 'Soja 700', hex: '#097152', rgb: '9 / 113 / 82', cmyk: '90/30/75/20' },
      { name: 'Soja 500', hex: '#008B51', rgb: '0 / 139 / 81', cmyk: '90/17/89/3' },
      { name: 'Soja 200', hex: '#A9D29D', rgb: '169 / 210 / 157', cmyk: '40/0/51/0' },
    ],
  },
  {
    category: 'Milho',
    colors: [
      { name: 'Milho 900', hex: '#8F651F', rgb: '143 / 101 / 31', cmyk: '20/50/100/40' },
      { name: 'Milho 700', hex: '#E2A530', rgb: '226 / 165 / 48', cmyk: '10/40/100/0' },
      { name: 'Milho 500', hex: '#F8BF44', rgb: '248 / 191 / 68', cmyk: '0/30/90/0' },
      { name: 'Milho 200', hex: '#EFBE6B', rgb: '239 / 190 / 107', cmyk: '5/30/70/0' },
    ],
  },
  {
    category: 'Algodão',
    colors: [
      { name: 'Algodão 900', hex: '#394C5C', rgb: '57 / 76 / 92', cmyk: '60/30/15/65' },
      { name: 'Algodão 700', hex: '#667487', rgb: '102 / 116 / 135', cmyk: '50/30/15/40' },
      { name: 'Algodão 500', hex: '#8798B2', rgb: '135 / 152 / 178', cmyk: '50/30/15/10' },
      { name: 'Algodão 200', hex: '#B2BDCB', rgb: '178 / 189 / 203', cmyk: '35/20/15/1' },
    ],
  },
  {
    category: 'Bovinocultura de Corte',
    colors: [
      { name: 'Corte 900', hex: '#53361C', rgb: '83 / 54 / 28', cmyk: '30/60/80/70' },
      { name: 'Corte 700', hex: '#835633', rgb: '131 / 86 / 51', cmyk: '30/60/80/40' },
      { name: 'Corte 500', hex: '#A0683F', rgb: '160 / 104 / 63', cmyk: '30/60/80/20' },
      { name: 'Corte 200', hex: '#D7C19D', rgb: '215 / 193 / 157', cmyk: '10/20/40/10' },
    ],
  },
];

export const typography = {
  primary: { family: 'Ubuntu', roles: 'Títulos (Bold) e textos (Regular/Light)', source: 'Google Fonts' },
  system: { family: 'Segoe UI', roles: 'Fallback para documentos internos (.pptx, .docx)', source: 'Sistema Windows' },
};
