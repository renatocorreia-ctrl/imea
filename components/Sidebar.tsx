'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col bg-verde-escuro text-off-white lg:flex">
      <Link href="/" className="flex items-center gap-3 px-6 pb-6 pt-7">
        <img src="/brand/logo/imea-simbolo-negativo.svg" alt="IMEA" className="h-10 w-10" />
        <div className="leading-tight">
          <span className="block text-lg font-bold tracking-wide">IMEA</span>
          <span className="block text-[11px] uppercase tracking-[0.18em] text-verde-folha">
            Brand System
          </span>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-verde-folha/80">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const href = `/${item.slug}`;
                const active = pathname === href;
                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        active
                          ? 'bg-verde-campo font-medium text-white'
                          : 'text-off-white/85 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 px-6 py-4 text-xs text-off-white/60">
        O IMEA é uma marca do Sistema Famato.
      </div>
    </aside>
  );
}
