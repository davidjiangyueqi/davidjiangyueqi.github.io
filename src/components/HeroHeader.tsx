type HeroHeaderProps = {
  title: string;
  subtitle: string;
};

export function HeroHeader({ title, subtitle }: HeroHeaderProps) {
  return (
    <header className="mb-10 space-y-4">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
        Pianist &amp; Gastronomist
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-sm text-slate-300 sm:text-base">{subtitle}</p>
    </header>
  );
}


