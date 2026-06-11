export default function Callout({
  type = 'info',
  children,
}: {
  type?: 'info' | 'warning' | 'do' | 'dont';
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    info: 'border-verde-campo bg-verde-folha/30',
    warning: 'border-amber-500 bg-amber-50',
    do: 'border-verde-campo bg-verde-folha/30',
    dont: 'border-red-500 bg-red-50',
  };
  const labels: Record<string, string> = {
    info: 'Nota',
    warning: 'Atenção',
    do: 'Faça',
    dont: 'Não faça',
  };
  return (
    <div className={`not-prose my-6 rounded-r-lg border-l-4 p-4 ${styles[type]}`}>
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ink/70">{labels[type]}</p>
      <div className="text-sm leading-relaxed text-ink/85">{children}</div>
    </div>
  );
}
