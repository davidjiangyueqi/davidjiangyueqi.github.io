import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef, useState, useMemo } from "react";
import { Search, MapPin, ChevronRight, Filter } from "lucide-react";
import { HeroHeader } from "../components/HeroHeader";
import { SectionHeader } from "../components/SectionHeader";
import { restaurants, type Restaurant } from "../data/restaurants";

export function FoodPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showReviewsOnly, setShowReviewsOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
    html: '<span style="display:inline-flex;width:14px;height:14px;border-radius:9999px;background:rgba(129,140,248,0.9);box-shadow:0 0 12px rgba(129,140,248,0.9);border:1px solid rgba(191,219,254,0.9);"></span>',
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

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(
      (r) => !showReviewsOnly || r.rating !== "No review available"
    );
  }, [showReviewsOnly]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return filteredRestaurants
      .filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.city.toLowerCase().includes(query) ||
          r.country.toLowerCase().includes(query)
      )
      .slice(0, 8); // Top 8 hits
  }, [searchQuery, filteredRestaurants]);

  const groupedRestaurants = useMemo(() => {
    const grouped: Record<string, Restaurant[]> = {};
    filteredRestaurants.forEach((restaurant) => {
      const key = `${restaurant.latitude},${restaurant.longitude}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(restaurant);
    });
    return grouped;
  }, [filteredRestaurants]);

  const handleSelectRestaurant = (slug: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);

    // Scroll after a tiny delay so UI has time to close dropdown
    setTimeout(() => {
      const element = document.getElementById(`restaurant-card-${slug}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        // Add a flashy highlight
        element.classList.add("ring-2", "ring-indigo-500", "ring-offset-2", "ring-offset-black", "scale-[1.02]", "bg-white/10");
        setTimeout(() => {
          element.classList.remove("ring-2", "ring-indigo-500", "ring-offset-2", "ring-offset-black", "scale-[1.02]", "bg-white/10");
        }, 1500);
      }
    }, 100);
  };

  return (
    <div className="space-y-12 pb-24">
      <HeroHeader
        title="gastronomy"
        subtitle="Journeys &bull; Flavors &bull; Tastes"
      />

      {/* Control Bar */}
      <div className="mx-auto max-w-6xl px-4 relative z-40">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
          {/* Review Toggle */}
          <div className="flex items-center gap-3 md:pl-2">
            <button
              onClick={() => setShowReviewsOnly(!showReviewsOnly)}
              className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black ${
                showReviewsOnly ? "bg-indigo-500" : "bg-white/20"
              }`}
              role="switch"
              aria-checked={showReviewsOnly}
            >
              <span className="sr-only">Toggle reviews only</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
                  showReviewsOnly ? "translate-x-2.5" : "-translate-x-2.5"
                }`}
              />
            </button>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-200">
                Reviewed Establishment Only
              </span>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search restaurants, cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="block w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-400 backdrop-blur-md focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner"
              />
            </div>

            {/* Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute mt-2 w-full origin-top transform opacity-100 scale-100 transition-all duration-200 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl">
                <ul className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                  {searchResults.map((r) => (
                    <li key={`search-${r.slug}`}>
                      <button
                        onClick={() => handleSelectRestaurant(r.slug)}
                        className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors flex items-center gap-4 group"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <p className="truncate text-sm font-bold text-slate-200">
                              {r.name}
                            </p>
                            {r.rating !== "No review available" && (
                              <span className="ml-2 rounded-full bg-indigo-500/20 px-2 py-0.5 text-[0.6rem] font-medium text-indigo-300 uppercase tracking-wider">
                                Reviewed
                              </span>
                            )}
                          </div>
                          <p className="truncate text-xs text-slate-400 mt-0.5">
                            {r.city}, {r.country}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {isSearchFocused && searchQuery.trim() && searchResults.length === 0 && (
              <div className="absolute mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-6 text-center">
                <Filter className="h-6 w-6 text-slate-500 mx-auto mb-2 opacity-50" />
                <p className="text-sm text-slate-300">No matching restaurants found.</p>
                <p className="text-xs text-slate-500 mt-1">Try another city or restaurant name.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Global Map"
          title="Culinary Footprint"
          description="Pan around to see each stop."
        />
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-black/80 shadow-xl">
            <MapContainer
              center={[center.lat, center.lng]}
              zoom={4}
              style={{ height: 520, width: "100%", background: "#0a0a0a" }}
              scrollWheelZoom={true}
              worldCopyJump={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
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
                    <Popup className="nocturne-popup">
                      <div className="space-y-4 max-h-[260px] overflow-y-auto pr-3 py-1 custom-scrollbar">
                        {group.map((restaurant, idx) => (
                          <div
                            key={`${restaurant.slug}-${idx}`}
                            className="space-y-1.5 border-b border-slate-200 pb-3 last:border-0 last:pb-0"
                          >
                            <p className="font-bold text-sm text-slate-800 leading-tight">
                              {restaurant.name}
                            </p>
                            <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {restaurant.city}, {restaurant.country}
                            </p>
                            {restaurant.cuisine && (
                              <p className="text-xs text-slate-600 italic">
                                {restaurant.cuisine}
                              </p>
                            )}
                            {restaurant.visitedAt && (
                              <p className="text-[0.7rem] text-slate-400">
                                {formatVisitedDate(restaurant.visitedAt)}
                              </p>
                            )}
                            {restaurant.rating !== "No review available" && (
                              <Link
                                to={`/food/${restaurant.slug}`}
                                className="mt-2 inline-flex items-center gap-1 text-[0.7rem] font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider"
                              >
                                Read Review <ChevronRight className="h-3 w-3" />
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
          title="Culinary Timeline"
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
              {[...filteredRestaurants]
                .sort((a, b) => {
                  const dateA = new Date(a.visitedAt || "1970-01-01").getTime();
                  const dateB = new Date(b.visitedAt || "1970-01-01").getTime();
                  return dateA - dateB;
                })
                .map((restaurant, index) => {
                return (
                  <div
                    id={`restaurant-card-${restaurant.slug}`}
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

      {/* Global styles for Leaflet map inside this page */}
      <style>{`
        .nocturne-popup .leaflet-popup-content-wrapper {
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .nocturne-popup .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}



