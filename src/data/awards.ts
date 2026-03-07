export type Award = {
  year: number;
  title: string;
  organization: string;
  location?: string;
};

export const awards: Award[] = [
  {
    year: 2022,
    title: "Music International Grand Prix (Final Round)",
    organization: "3rd Place",
  },
  {
    year: 2022,
    title: "London Classical Music Competition (Final Round)",
    organization: "2nd Place",
  },
  {
    year: 2022,
    title: "Music International Grand Prix (New York Semifinal)",
    organization: "1st Place",
  },
  {
    year: 2022,
    title: "Best Beethoven Performance Competition (Final Round)",
    organization: "1st Prize",
  },
  {
    year: 2021,
    title: "Bellagrande International Music Competition (Final Round)",
    organization: "3rd Place",
  },
  {
    year: 2021,
    title: "NEC Piano Department Honors Competition",
    organization: "Final Winner",
  },
  {
    year: 2019,
    title: "NEC Piano Department Honors Competition",
    organization: "Final Winner",
  },
];


