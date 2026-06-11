export default function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <header className="mb-10 border-b border-ink/10 pb-8">
      <h1 className="text-4xl font-bold tracking-tight text-verde-teal">{title}</h1>
      {description && <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/70">{description}</p>}
    </header>
  );
}
