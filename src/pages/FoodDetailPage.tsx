import { useParams, Link } from "react-router-dom";
import { HeroHeader } from "../components/HeroHeader";
import { restaurants } from "../data/restaurants";
import { restaurantReviews } from "../data/reviews";

export function FoodDetailPage() {
  const { restaurantSlug } = useParams<{ restaurantSlug: string }>();

  const restaurant = restaurants.find((r) => r.slug === restaurantSlug);
  const review = restaurantReviews.find((r) => r.restaurantSlug === restaurantSlug);

  if (!restaurant) {
    return (
      <div className="space-y-4">
        <HeroHeader
          title="Review not found"
          subtitle="The restaurant you were looking for does not exist in this index yet."
        />
        <Link
          to="/food"
          className="inline-flex text-sm text-slate-200 underline underline-offset-4"
        >
          Back to all restaurant reviews
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <HeroHeader
        title={restaurant.name}
        subtitle={`${restaurant.city}, ${restaurant.country}${
          restaurant.cuisine ? ` • ${restaurant.cuisine}` : ""
        }`}
      />

      <p className="text-xs text-slate-300">
        This HTML layout is designed to mirror the structure of your original PDF review,
        while remaining readable on phones and laptops.
      </p>

      <section className="space-y-6">
        {review?.pages.map((page, pageIndex) => (
          <article
            key={pageIndex}
            className="relative mx-auto max-w-3xl rounded-[32px] border border-slate-800/90 bg-slate-950/95 p-7 shadow-soft-xl sm:p-9"
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-10 bg-gradient-to-b from-white/5 to-transparent" />
            <header className="mb-6 space-y-1">
              {page.title && (
                <h2 className="text-lg font-semibold tracking-tight text-slate-50">
                  {page.title}
                </h2>
              )}
              {page.subtitle && (
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  {page.subtitle}
                </p>
              )}
            </header>
            <div className="space-y-4 text-[0.9rem] leading-relaxed text-slate-100">
              {page.blocks.map((block, idx) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={idx} className="font-serif">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <figure
                      key={idx}
                      className="border-l-2 border-slate-600/80 pl-4 text-sm italic text-slate-200"
                    >
                      “{block.text}”
                    </figure>
                  );
                }
                if (block.type === "image") {
                  return (
                    <figure key={idx} className="overflow-hidden rounded-2xl border border-slate-800">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  );
                }
                return null;
              })}
            </div>
            <footer className="mt-6 flex items-center justify-between text-[0.7rem] text-slate-500">
              <span>
                {restaurant.name} • {restaurant.city}
              </span>
              <span>Page {pageIndex + 1}</span>
            </footer>
          </article>
        ))}
      </section>

      <Link
        to="/food"
        className="inline-flex text-sm text-slate-200 underline underline-offset-4"
      >
        Back to all restaurant reviews
      </Link>
    </div>
  );
}


