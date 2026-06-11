type Format = { label: string; href: string };

export default function AssetCard({
  title,
  description,
  preview,
  previewBg = '#FFFFFF',
  formats,
}: {
  title: string;
  description?: string;
  preview?: string;
  previewBg?: string;
  formats: Format[];
}) {
  return (
    <div className="not-prose overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
      {preview && (
        <div
          className="flex h-40 items-center justify-center border-b border-ink/10 p-6"
          style={{ backgroundColor: previewBg }}
        >
          <img src={preview} alt={title} className="max-h-full max-w-[70%] object-contain" />
        </div>
      )}
      <div className="p-4">
        <p className="font-bold text-ink">{title}</p>
        {description && <p className="mt-1 text-sm text-ink/60">{description}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {formats.map((f) => (
            <a
              key={f.href}
              href={f.href}
              download
              className="rounded-md bg-verde-campo px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-verde-teal"
            >
              ↓ {f.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
