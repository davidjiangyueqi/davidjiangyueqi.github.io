import { HeroHeader } from "../components/HeroHeader";
import { bio } from "../data/bio";

export function AboutPage() {
  return (
    <div className="space-y-8">
      <HeroHeader
        title={bio.name || "Pianist & Gastronomist"}
        subtitle={bio.short}
      />
      <section className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="relative space-y-4 text-sm text-slate-100 sm:text-base">
          {bio.long.map((paragraph, idx) => (
            <p key={idx} className="max-w-3xl">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}


