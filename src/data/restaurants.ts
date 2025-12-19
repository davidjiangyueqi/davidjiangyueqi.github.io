export type Restaurant = {
  slug: string;
  name: string;
  city: string;
  country: string;
  cuisine?: string;
  latitude: number;
  longitude: number;
  thumbnail?: string;
  shortSummary?: string;
  rating?: string;
};

export const restaurants: Restaurant[] = [
  {
    slug: "placeholder-bistro",
    name: "Placeholder Bistro",
    city: "City",
    country: "Country",
    cuisine: "Modern European",
    latitude: 48.8566,
    longitude: 2.3522,
    thumbnail: "/photos/restaurants/placeholder-bistro.jpg",
    shortSummary: "A stand‑in restaurant entry; replace with real locations and notes.",
    rating: "To be added",
  },
];


