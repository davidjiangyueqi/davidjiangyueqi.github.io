export type SlideElementType = "text" | "image" | "group";

export type SlideElement = {
  type: SlideElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  content?: {
    title?: string;
    description?: string;
  };
  src?: string;
};

export type SlideLayoutType = "title" | "dish-fullscreen" | "dish-split" | "text-focused" | "unknown";

export type Slide = {
  id: string;
  type?: SlideLayoutType;
  elements: SlideElement[];
};

export type RestaurantReview = {
  restaurantSlug: string;
  title?: string;
  subtitle?: string;
  pdfPath?: string; // e.g. /reviews/DS Fine Dining _ Rosetta.pdf
  images?: string[]; // Legacy
  slides?: Slide[]; // Modern structured presentation
  presentationWidth?: number;
  presentationHeight?: number;
  backgroundColor?: string;
};

import pastaBarData from "./review_pasta_bar.json";

// Helper functions to encode image paths with spaces and special characters
const vespertineImagePath = (filename: string) =>
  `/photos/reviews/Vespertine/${encodeURIComponent(filename)}`;

export const restaurantReviews: RestaurantReview[] = [
  pastaBarData as RestaurantReview,
  {
    restaurantSlug: "rosetta-mexico-city",
    backgroundColor: "#000000", // black
    pdfPath: "/reviews/DS Fine Dining _ Rosetta.pdf",
  },
  {
    restaurantSlug: "vespertine-culver-city",
    backgroundColor: "#000000", // black
    images: [
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-0.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-1.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-2.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-3.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-4.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-5.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-6.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-7.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-8.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-9.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-10.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-11.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-12.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-13.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-14.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-15.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-16.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-17.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-18.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-19.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-20.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-21.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-22.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-23.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-24.png"),
    ],
  },
];


