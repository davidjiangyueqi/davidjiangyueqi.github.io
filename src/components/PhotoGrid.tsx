type Photo = {
  id: string;
  alt: string;
  src: string;
};

type PhotoGridProps = {
  photos: Photo[];
};

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {photos.map((photo) => (
        <figure
          key={photo.id}
          className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </figure>
      ))}
    </div>
  );
}


