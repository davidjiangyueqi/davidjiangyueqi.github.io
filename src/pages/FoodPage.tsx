import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { HeroHeader } from "../components/HeroHeader";
import { SectionHeader } from "../components/SectionHeader";
import { restaurants, type Restaurant } from "../data/restaurants";

export function FoodPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Only convert purely vertical scrolls to horizontal (like mouse wheel)
      // If deltaX != 0, user might be on a trackpad scrolling horizontally already
      if (e.deltaY !== 0 && Math.abs(e.deltaX) === 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const restaurantMarkerIcon = L.divIcon({
    className: "",
      html:
        '<span style="display:inline-flex;width:14px;height:14px;border-radius:9999px;background:rgba(129,140,248,0.9);box-shadow:0 0 12px rgba(129,140,248,0.9);border:1px solid rgba(191,219,254,0.9);"></span>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  const formatVisitedDate = (isoDate?: string) => {
    if (!isoDate) return "";
    const [yearStr, monthStr, dayStr] = isoDate.split("-");
    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);
    if (!year || !month || !day) return isoDate;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Center of continental USA
  const center = {
    lat: 39.8283,
    lng: -98.5795,
  };

  const groupedRestaurants: Record<string, Restaurant[]> = {};
  restaurants.forEach((restaurant) => {
    const key = `${restaurant.latitude},${restaurant.longitude}`;
    if (!groupedRestaurants[key]) {
      groupedRestaurants[key] = [];
    }
    groupedRestaurants[key].push(restaurant);
  });

  return (
    <div className="space-y-10">
      <HeroHeader
        title="gastronomy"
        subtitle="Journeys &bull; Flavors &bull; Tastes"
      />
      <section className="space-y-4">
        <SectionHeader
          eyebrow="Map"
          title="Restaurants Visited"
          description="Pan around to see each stop—this map takes center stage."
        />
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-black/80 shadow-xl">
            <MapContainer
              center={[center.lat, center.lng]}
              zoom={4}
              style={{ height: 520, width: "100%" }}
              scrollWheelZoom={true}
              worldCopyJump={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              {Object.entries(groupedRestaurants).map(([key, group]) => {
                const [latStr, lngStr] = key.split(",");
                const lat = parseFloat(latStr);
                const lng = parseFloat(lngStr);
                
                return (
                  <Marker
                    key={key}
                    position={[lat, lng]}
                    icon={restaurantMarkerIcon}
                  >
                    <Popup>
                      <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2">
                        {group.map((restaurant, idx) => (
                          <div key={`${restaurant.slug}-${idx}`} className="space-y-1 text-xs border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                            <p className="font-semibold text-sm">{restaurant.name}</p>
                            <p className="text-slate-600">
                              {restaurant.city}, {restaurant.country}
                            </p>
                            {restaurant.cuisine && (
                              <p className="text-slate-600 font-medium">{restaurant.cuisine}</p>
                            )}
                            {restaurant.visitedAt && (
                              <p className="text-slate-500 italic">
                                Visited: {formatVisitedDate(restaurant.visitedAt)}
                              </p>
                            )}
                            {restaurant.rating !== "No review available" && (
                              <Link
                                to={`/food/${restaurant.slug}`}
                                className="mt-1.5 inline-block text-[0.7rem] font-medium text-indigo-600 hover:text-indigo-800 underline"
                              >
                                View full review
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Timeline"
          title="Culinary timeline"
          description="Scroll through stops and jump into full reviews."
        />
        <div 
          className="overflow-x-auto pb-6 pt-6"
          ref={scrollContainerRef}
        >
          <div className="relative min-w-full">
            {/* Timeline axis */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-slate-700" />

            <div className="flex gap-8 snap-x snap-mandatory px-4">
              {[...restaurants]
                .sort((a, b) => {
                  const dateA = new Date(a.visitedAt || "1970-01-01").getTime();
                  const dateB = new Date(b.visitedAt || "1970-01-01").getTime();
                  return dateA - dateB;
                })
                .map((restaurant, index) => {
                return (
                  <div
                    key={`${restaurant.slug}-${index}`}
                    className="relative flex min-w-[260px] snap-start flex-col items-center"
                  >
                    {/* Marker on axis */}
                    <div className="relative z-10 mb-3 flex items-center gap-2">
                      <div className="flex h-8 items-center rounded-full bg-black/90 px-3 text-xs text-slate-200 ring-1 ring-slate-700">
                        <span className="mr-1 text-slate-500">#{index + 1}</span>
                        <span className="h-1 w-4 rounded-full bg-black" />
                        {restaurant.visitedAt && (
                          <span className="ml-2 text-[0.7rem] text-slate-300">
                            {formatVisitedDate(restaurant.visitedAt)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card below axis */}
                    <div className="relative mt-2 w-full max-w-xs rounded-2xl border border-slate-800 bg-black/80 px-4 py-4 text-left shadow-sm transition hover:border-slate-400/80">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-50 pr-2">
                            {restaurant.name}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-300">
                            {restaurant.city}, {restaurant.country}
                            {restaurant.cuisine ? ` • ${restaurant.cuisine}` : null}
                          </p>
                        </div>
                        {restaurant.michelinStars ? (
                          <div className="flex items-center gap-0.5 whitespace-nowrap pt-0.5">
                            {Array.from({ length: restaurant.michelinStars }).map((_, i) => (
                              <img key={i} src="/michelin-star.png" alt="Michelin Star" className="h-4 w-4 drop-shadow-[0_0_2px_rgba(239,68,68,0.8)]" />
                            ))}
                          </div>
                        ) : null}
                      </div>

                      {restaurant.shortSummary && (
                        <p className="mt-2 text-xs text-slate-300">
                          {restaurant.shortSummary}
                        </p>
                      )}
                      
                      <div className="mt-3 flex items-center justify-between">
                        {restaurant.rating !== "No review available" ? (
                          <Link
                            to={`/food/${restaurant.slug}`}
                            className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-[0.7rem] font-semibold text-slate-50 shadow-sm transition hover:bg-gray-900"
                          >
                            <span>Open review</span>
                            <span aria-hidden="true">↗</span>
                          </Link>
                        ) : (
                          <div />
                        )}
                        <span className="text-[0.65rem] text-slate-500">
                          Timeline stop
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


