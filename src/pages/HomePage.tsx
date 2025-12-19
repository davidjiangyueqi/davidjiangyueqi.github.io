import { Link } from "react-router-dom";
import { HeroHeader } from "../components/HeroHeader";
import { PhotoGrid } from "../components/PhotoGrid";

export function HomePage() {
  const photos = [
    {
      id: "portrait-1",
      alt: "Portrait placeholder",
      src: "/photos/portraits/portrait-1.jpg",
    },
    {
      id: "music-1",
      alt: "Performance placeholder",
      src: "/photos/music/performance-1.jpg",
    },
    {
      id: "food-1",
      alt: "Food placeholder",
      src: "/photos/food/food-1.jpg",
    },
  ];

  return (
    <div className="space-y-10">
      <HeroHeader
        title="Music at the keyboard, stories at the table."
        subtitle="A portfolio for a life split between the piano and the plate — concerts, recordings, restaurant criticism, and the spaces where they overlap."
      />

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <p className="text-sm text-slate-200 sm:text-base">
            This site will collect upcoming performances, selected awards, recordings and
            curated restaurant reviews — all in one place and presented with care.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              to="/music"
              className="rounded-full bg-slate-100 px-4 py-2 text-slate-900 transition hover:bg-slate-200"
            >
              Explore the music
            </Link>
            <Link
              to="/food"
              className="rounded-full border border-slate-500/70 px-4 py-2 text-slate-100 transition hover:border-slate-200/80"
            >
              Read the restaurant reviews
            </Link>
          </div>
        </div>
        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}


