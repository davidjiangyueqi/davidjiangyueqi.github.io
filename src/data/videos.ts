export type Video = {
  id: string;
  title: string;
  platform: "youtube" | "vimeo" | "other";
  embedUrl: string;
  description?: string;
};

export const videos: Video[] = [
  {
    id: "sample-performance",
    title: "Sample performance",
    platform: "youtube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Replace this with a real performance video embed.",
  },
];


