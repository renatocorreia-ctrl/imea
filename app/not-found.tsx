import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-verde-campo">Erro 404</p>
      <h1 className="mt-2 text-3xl font-bold text-verde-teal">Página não encontrada</h1>
      <p className="mt-3 text-ink/70">
        Esta diretriz ainda não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-verde-campo px-5 py-2.5 font-medium text-white hover:bg-verde-teal"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
