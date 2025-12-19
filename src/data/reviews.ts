export type ReviewPageBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; alt: string; src: string };

export type ReviewPage = {
  title?: string;
  subtitle?: string;
  blocks: ReviewPageBlock[];
};

export type RestaurantReview = {
  restaurantSlug: string;
  pages: ReviewPage[];
};

export const restaurantReviews: RestaurantReview[] = [
  {
    restaurantSlug: "placeholder-bistro",
    pages: [
      {
        title: "Placeholder Bistro",
        subtitle: "A sample layout for future restaurant reviews",
        blocks: [
          {
            type: "paragraph",
            text: "This is where the first page of your formatted PDF review will be re‑created in HTML. Replace this placeholder with the restaurant's story, the arc of the meal, and the key impressions you want to preserve.",
          },
          {
            type: "quote",
            text: "Use pull quotes to highlight the phrases that best capture the experience.",
          },
        ],
      },
      {
        blocks: [
          {
            type: "paragraph",
            text: "Additional pages can follow, each rendered as its own card with print‑inspired margins and typography.",
          },
        ],
      },
    ],
  },
];


