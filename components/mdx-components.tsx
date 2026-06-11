import type { MDXComponents } from 'mdx/types';
import ColorPalette from './ColorPalette';
import AssetCard from './AssetCard';
import Callout from './Callout';
import {
  institutionalPalette,
  categoryPalettes,
} from '@/lib/brand-tokens';

/** Componentes disponíveis dentro dos arquivos .mdx */
export const mdxComponents: MDXComponents = {
  ColorPalette,
  AssetCard,
  Callout,
  // Atalhos prontos para usar no MDX sem props
  PaletaInstitucional: () => <ColorPalette colors={institutionalPalette} />,
  PaletasCategorias: () => (
    <>
      {categoryPalettes.map((p) => (
        <ColorPalette key={p.category} title={p.category} colors={p.colors} />
      ))}
    </>
  ),
};
