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
  pdfPaths?: string[]; // Multiple PDFs for multiple visits
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
  {
    restaurantSlug: "aska-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Aska.pdf",
  },
  {
    restaurantSlug: "daniel-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Daniel.pdf",
  },
  {
    restaurantSlug: "lameloise-sh",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Lameloise SH.pdf",
  },
  {
    restaurantSlug: "taian-table-shanghai",
    backgroundColor: "#000000",
    pdfPaths: ["/reviews/DS Fine Dining _ Taian Table.pdf", "/reviews/DS Fine Dining _ Taian Table II.pdf"],
  },
  {
    restaurantSlug: "adam-macau",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ ADAM.pdf",
  },
  {
    restaurantSlug: "rad-macau",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ RAD.pdf",
  },
  {
    restaurantSlug: "mizumi-vegas",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Mizumi.pdf",
  },
  {
    restaurantSlug: "davittorio-shanghai",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ DV SH.pdf",
  },
  {
    restaurantSlug: "kajitsu-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Kajitsu.pdf",
  },
  {
    restaurantSlug: "nakazawa-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Sushi Nakazawa.pdf",
  },
  {
    restaurantSlug: "jua-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Jua.pdf",
  },
  {
    restaurantSlug: "tsukimi-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Tsukimi.pdf",
  },
  {
    restaurantSlug: "odo-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Odo.pdf",
  },
  {
    restaurantSlug: "contra-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Contra.pdf",
  },
  {
    restaurantSlug: "the-modern-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ The Modern II.pdf",
  },
  {
    restaurantSlug: "ctbf-nyc",
    backgroundColor: "#000000",
    pdfPaths: ["/reviews/DS Fine Dining _ CTBF II.pdf", "/reviews/DS Fine Dining _ CTBF III.pdf"],
  },
  {
    restaurantSlug: "atomix-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Atomix.pdf",
  },
  {
    restaurantSlug: "labeille-nyc",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ L_Abeille.pdf",
  },
  {
    restaurantSlug: "providence-la",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Providence.pdf",
  },
  {
    restaurantSlug: "gucci-osteria-bh",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Gucci Osteria.pdf",
  },
  {
    restaurantSlug: "oriole-chicago",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Oriole.pdf",
  },
  {
    restaurantSlug: "ever-chicago",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Ever.pdf",
  },
  {
    restaurantSlug: "latelier-jr-miami",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ L_Atelier JR Miami.pdf",
  },
  {
    restaurantSlug: "lung-king-heen-hk",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Lung King Heen.pdf",
  },
  {
    restaurantSlug: "latelier-jr-hk",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ L_Atelier JR HK.pdf",
  },
  {
    restaurantSlug: "caprice-hk",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Caprice HK.pdf",
  },
  {
    restaurantSlug: "amber-hk",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Amber HK.pdf",
  },
  {
    restaurantSlug: "otto-e-mezzo-hk",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ 8 1_2 HK.pdf",
  },
  {
    restaurantSlug: "arbor-hk",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Arbor HK.pdf",
  },
  {
    restaurantSlug: "orsa-winston-la",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Orsa&Winston.pdf",
  },
  {
    restaurantSlug: "manzke-la",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Manzke.pdf",
  },
  {
    restaurantSlug: "nozawa-bar-la",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Nozawa Bar.pdf",
  },
  {
    restaurantSlug: "maude-bh",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Maude.pdf",
  },
  {
    restaurantSlug: "onodera-la",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Ginza Onodera LA.pdf",
  },
  {
    restaurantSlug: "addison-sd",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Addison.pdf",
  },
  {
    restaurantSlug: "gary-danko-sf",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Gary Danko.pdf",
  },
  {
    restaurantSlug: "birdsong-sf",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Birdsong.pdf",
  },
  {
    restaurantSlug: "em-mexico-city",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Em.pdf",
  },
  {
    restaurantSlug: "pujol-mexico-city",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Pujol.pdf",
  },
  {
    restaurantSlug: "rosetta-mexico-city",
    backgroundColor: "#000000",
    pdfPaths: ["/reviews/DS Fine Dining _ Rosetta.pdf", "/reviews/DS Fine Dining _ Rosetta copy.pdf"],
  },
  {
    restaurantSlug: "meteora-la",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Meteora.pdf",
  },
  {
    restaurantSlug: "benu-sf",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ benu.pdf",
  },
  {
    restaurantSlug: "pasta-bar-encino",
    backgroundColor: "#000000",
    pdfPath: "/reviews/DS Fine Dining _ Pasta _ Bar.pdf",
  },
];



