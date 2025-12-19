import { HeroHeader } from "../components/HeroHeader";
import { SectionHeader } from "../components/SectionHeader";
import { awards } from "../data/awards";
import { selectedPastPerformances, upcomingPerformances } from "../data/performances";
import { videos } from "../data/videos";

export function MusicPage() {
  return (
    <div className="space-y-10">
      <HeroHeader
        title="Music"
        subtitle="Awards, performances, and recordings gathered in one place."
      />

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Highlights"
          title="Selected awards"
          description="A few anchor points from competitions and festivals. Replace these entries with your own history."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {awards.map((award) => (
            <div
              key={`${award.year}-${award.title}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-slate-50">{award.title}</p>
                <span className="text-xs text-slate-400">{award.year}</span>
              </div>
              <p className="mt-1 text-xs text-slate-300">
                {award.organization}
                {award.location ? ` • ${award.location}` : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <SectionHeader
            eyebrow="On stage"
            title="Upcoming performances"
            description="Future dates will appear here, with programs and venues."
          />
          <div className="space-y-3 text-sm">
            {upcomingPerformances.map((perf) => (
              <article
                key={`${perf.date}-${perf.venue}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3"
              >
                <p className="text-xs text-slate-400">{perf.date}</p>
                <p className="mt-1 font-medium text-slate-50">{perf.venue}</p>
                <p className="text-xs text-slate-300">
                  {perf.city}
                  {perf.program ? ` • ${perf.program}` : null}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <SectionHeader
            eyebrow="Recently"
            title="Selected past performances"
          />
          <div className="space-y-3 text-sm">
            {selectedPastPerformances.map((perf) => (
              <article
                key={`${perf.date}-${perf.venue}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3"
              >
                <p className="text-xs text-slate-400">{perf.date}</p>
                <p className="mt-1 font-medium text-slate-50">{perf.venue}</p>
                <p className="text-xs text-slate-300">
                  {perf.city}
                  {perf.program ? ` • ${perf.program}` : null}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Media"
          title="Performance videos"
          description="Embed live performances or studio sessions from YouTube, Vimeo, or other platforms."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <div className="aspect-video overflow-hidden rounded-2xl bg-black/60">
                <iframe
                  className="h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-50">{video.title}</p>
                {video.description && (
                  <p className="mt-1 text-xs text-slate-300">{video.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


