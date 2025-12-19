type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{eyebrow}</p>
      )}
      <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
        {title}
      </h2>
      {description && <p className="max-w-2xl text-sm text-slate-300">{description}</p>}
    </div>
  );
}


