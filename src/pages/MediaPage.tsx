import { HeroHeader } from "../components/HeroHeader";
import { PhotoGrid } from "../components/PhotoGrid";

export function MediaPage() {
  const photos = [
    {
      id: "media-1",
      alt: "Media placeholder",
      src: "/photos/music/media-1.jpg",
    },
    {
      id: "media-2",
      alt: "Media placeholder 2",
      src: "/photos/music/media-2.jpg",
    },
  ];

  return (
    <div className="space-y-8">
      <HeroHeader
        title="Media & images"
        subtitle="A simple gallery for portraits, studio sessions, and press stills."
      />
      <PhotoGrid photos={photos} />
    </div>
  );
}


