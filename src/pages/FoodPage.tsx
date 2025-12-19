import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { HeroHeader } from "../components/HeroHeader";
import { SectionHeader } from "../components/SectionHeader";
import { restaurants } from "../data/restaurants";

export function FoodPage() {
  const center = {
    lat: restaurants[0]?.latitude ?? 48.8566,
    lng: restaurants[0]?.longitude ?? 2.3522,
  };

  return (
    <div className="space-y-10">
      <HeroHeader
        title="Food & restaurant writing"
        subtitle="Reviews that care about pacing, texture, and silence as much as a recital program would."
      />

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Map"
            title="Restaurants reviewed"
            description="Each pin corresponds to a restaurant with a full, print‑styled review."
          />
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80">
            <MapContainer
              center={[center.lat, center.lng]}
              zoom={6}
              style={{ height: 360, width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {restaurants.map((restaurant) => (
                <Marker
                  key={restaurant.slug}
                  position={[restaurant.latitude, restaurant.longitude]}
                >
                  <Popup>
                    <div className="space-y-1 text-xs">
                      <p className="font-semibold">{restaurant.name}</p>
                      <p className="text-slate-600">
                        {restaurant.city}, {restaurant.country}
                      </p>
                      {restaurant.cuisine && (
                        <p className="text-slate-600">{restaurant.cuisine}</p>
                      )}
                      <Link
                        to={`/food/${restaurant.slug}`}
                        className="mt-1 inline-block text-[0.7rem] font-medium text-indigo-600 underline"
                      >
                        View full review
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="space-y-4">
          <SectionHeader
            eyebrow="Index"
            title="All restaurant reviews"
            description="Browse by city and cuisine. This list will grow as more reviews are added."
          />
          <div className="space-y-3 text-sm">
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.slug}
                to={`/food/${restaurant.slug}`}
                className="block rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 transition hover:border-slate-400/80"
              >
                <p className="font-medium text-slate-50">{restaurant.name}</p>
                <p className="text-xs text-slate-300">
                  {restaurant.city}, {restaurant.country}
                  {restaurant.cuisine ? ` • ${restaurant.cuisine}` : null}
                </p>
                {restaurant.shortSummary && (
                  <p className="mt-1 text-xs text-slate-300">
                    {restaurant.shortSummary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


