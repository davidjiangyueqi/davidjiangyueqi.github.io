export type Performance = {
  date: string;
  venue: string;
  city: string;
  program?: string;
  note?: string;
  link?: string;
};

export const upcomingPerformances: Performance[] = [
  {
    date: "2025-03-15",
    venue: "Example Hall",
    city: "City, Country",
    program: "Sample recital program",
  },
];

export const selectedPastPerformances: Performance[] = [
  {
    date: "2024-11-02",
    venue: "Another Hall",
    city: "City, Country",
    program: "Sample concerto program",
  },
];


