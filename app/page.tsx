import Link from 'next/link';
import { navigation } from '@/lib/navigation';
import { institutionalPalette } from '@/lib/brand-tokens';

export default function HomePage() {
  return (
    <div>
      <section className="overflow-hidden rounded-2xl bg-verde-escuro p-10 text-off-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-verde-folha">
          IMEA · Brand System
        </p>
        <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight">
          Informação que transforma o Agro
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-off-white/80">
          Todas as diretrizes estratégicas, visuais e verbais da marca IMEA em um só lugar —
          para que comunicação, marketing e parceiros falem com uma só voz.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/identidade/logotipo"
            className="rounded-md bg-verde-campo px-5 py-2.5 font-medium text-white transition-colors hover:bg-verde-folha hover:text-verde-escuro"
          >
            Identidade visual
          </Link>
          <Link
            href="/downloads"
            className="rounded-md border border-off-white/30 px-5 py-2.5 font-medium text-off-white transition-colors hover:bg-white/10"
          >
            Baixar arquivos da marca
          </Link>
        </div>
        {/* Faixa de cores institucional — assinatura visual do sistema */}
        <div className="mt-10 flex h-3 overflow-hidden rounded-full">
          {institutionalPalette.map((c) => (
            <div key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {navigation
          .filter((s) => s.title !== 'Começando')
          .map((section) => (
            <div key={section.title} className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-verde-teal">
                {section.title}
              </h2>
              <ul className="mt-3 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${item.slug}`}
                      className="text-ink/80 underline-offset-2 hover:text-verde-campo hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
    </div>
  );
}
