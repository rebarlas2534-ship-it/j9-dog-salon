import Image from "next/image";

const photos: { src: string; alt: string }[] = [
  { src: "/images/gallery-2.jpeg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-4.jpeg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-5.jpeg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-6.jpeg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-7.jpeg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-8.jpg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-9.jpg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-10.jpg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-11.jpg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-12.jpg", alt: "Groomed dog at J-9 Dog Salon" },
  { src: "/images/gallery-13.jpg", alt: "Groomed dog at J-9 Dog Salon" },
];

const placeholders = [
  "bg-amber-100",
  "bg-rose-100",
  "bg-sky-100",
  "bg-violet-100",
  "bg-green-100",
  "bg-orange-100",
];

export default function GalleryPage() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Gallery</h1>
          <p className="text-stone-500 max-w-lg mx-auto">
            A look at some of our favorite grooms. More photos coming soon!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Real photos */}
          {photos.map((photo) => (
            <div key={photo.src} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}

          {/* Remaining placeholders */}
          {placeholders.map((bg, i) => (
            <div
              key={i}
              className={`${bg} rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/60`}
            >
              <span className="text-4xl">📷</span>
              <p className="text-xs text-stone-400">Photo coming soon</p>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-10">
          Follow us on social media for the latest transformations!
        </p>
      </div>
    </div>
  );
}
