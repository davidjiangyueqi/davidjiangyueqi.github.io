export type Award = {
  year: number;
  title: string;
  organization: string;
  location?: string;
};

export const awards: Award[] = [
  {
    year: 2023,
    title: "Example Piano Competition",
    organization: "Placeholder Conservatory",
    location: "City, Country",
  },
];


