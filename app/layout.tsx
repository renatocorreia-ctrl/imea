import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'IMEA Brand System',
  description:
    'Diretrizes de marca, identidade visual e recursos do IMEA — Instituto Mato-grossense de Economia Agropecuária.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Sidebar />
        <div className="lg:pl-72">
          <main className="mx-auto max-w-4xl px-6 py-12 lg:px-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
