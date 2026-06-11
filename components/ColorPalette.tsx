'use client';

import { useState } from 'react';
import type { ColorToken } from '@/lib/brand-tokens';

function isLight(hex: string) {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function Swatch({ color }: { color: ColorToken }) {
  const [copied, setCopied] = useState<string | null>(null);
  const light = isLight(color.hex);
  const fg = light ? 'text-ink' : 'text-white';

  async function copy(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
      <button
        onClick={() => copy(color.hex, 'HEX')}
        className={`group flex h-28 w-full items-end p-3 text-left ${fg}`}
        style={{ backgroundColor: color.hex }}
        title="Clique para copiar o HEX"
      >
        <span className="text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100">
          {copied === 'HEX' ? 'Copiado!' : 'Copiar HEX'}
        </span>
      </button>
      <div className="space-y-1.5 p-3">
        <p className="font-bold text-ink">{color.name}</p>
        <dl className="space-y-1 text-xs text-ink/70">
          {[
            ['HEX', color.hex],
            ['RGB', color.rgb],
            ['CMYK', color.cmyk],
            ...(color.pantone ? [['Pantone', color.pantone]] : []),
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <dt className="font-medium">{label}</dt>
              <dd>
                <button
                  onClick={() => copy(value as string, label as string)}
                  className="rounded px-1.5 py-0.5 font-mono hover:bg-verde-folha/40"
                  title={`Copiar ${label}`}
                >
                  {copied === label ? 'Copiado!' : value}
                </button>
              </dd>
            </div>
          ))}
        </dl>
        {color.usage && <p className="pt-1 text-xs leading-relaxed text-ink/60">{color.usage}</p>}
      </div>
    </div>
  );
}

export default function ColorPalette({ colors, title }: { colors: ColorToken[]; title?: string }) {
  return (
    <section className="not-prose my-8">
      {title && <h3 className="mb-4 text-lg font-bold text-verde-teal">{title}</h3>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {colors.map((c) => (
          <Swatch key={c.hex + c.name} color={c} />
        ))}
      </div>
    </section>
  );
}
