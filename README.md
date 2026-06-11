# IMEA Brand System

Sistema web que organiza todas as diretrizes de marca do IMEA (Instituto Mato-grossense de Economia Agropecuária), com conteúdo em MDX, sidebar de navegação, paletas copiáveis e download de arquivos da marca.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — tokens da marca em `tailwind.config.ts`
- **MDX** via `next-mdx-remote` — conteúdo em `/content/**/*.mdx`
- Fonte **Ubuntu** via `next/font` (tipografia oficial da marca)

## Rodando localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

## Como o conteúdo funciona

1. Cada página é um arquivo `.mdx` em `/content` com frontmatter (`title`, `description`).
2. O sidebar é configurado em `lib/navigation.ts` — o `slug` de cada item aponta para o arquivo MDX correspondente (ex.: `identidade/cores` → `content/identidade/cores.mdx`).
3. Dentro do MDX você pode usar componentes registrados em `components/mdx-components.tsx`:
   - `<PaletaInstitucional />` e `<PaletasCategorias />` — paletas com copiar ao clicar
   - `<ColorPalette colors={[...]} />` — paleta customizada
   - `<AssetCard title="..." formats={[{label, href}]} />` — card de download
   - `<Callout type="info|warning|do|dont">...</Callout>`

## Tokens da marca

`lib/brand-tokens.ts` é a fonte única de verdade para cores (HEX/RGB/CMYK/Pantone) e tipografia. **Quando a identidade atualizada chegar, troque os valores ali** (e os espelhos em `tailwind.config.ts`) — todo o sistema reflete a mudança.

## Arquivos da marca

Os downloads servem arquivos estáticos de `public/brand/`:

```
public/brand/
├── logo/          imea-horizontal.(svg|png|pdf), imea-vertical.*, imea-negativo.*, imea-simbolo.*
├── grafismos/     pattern-institucional.*, elementos.zip, icones-categorias.zip
└── templates/     imea-apresentacao.pptx, imea-timbrado.docx, imea-brandbook.pdf
```

> Os arquivos atuais são **placeholders**. Substitua pelos finais mantendo os nomes — os links continuam funcionando.

## Próximas etapas (já previstas na arquitetura)

- **Banco de dados** — mover tokens/ativos de arquivos estáticos para tabelas (sugestão: Postgres via Supabase ou Prisma + Neon).
- **Autenticação** — proteger áreas internas (sugestão: NextAuth/Auth.js ou Supabase Auth), com papéis para equipe vs. parceiros.
- **Storage** — servir os arquivos da marca de um bucket (Supabase Storage ou S3) com versionamento, substituindo `public/brand/`.

A separação atual (tokens em `lib/`, conteúdo em `content/`, arquivos em `public/brand/`) foi pensada para que cada uma dessas camadas seja substituída sem reescrever a interface.
