"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "/images/camp_hall_group.png",
    title: "Large Assembly Worship",
    description: "Children and camp officers singing praise in the main auditorium during morning assembly.",
  },
  {
    id: 2,
    url: "/images/camp_children_studying.png",
    title: "Bible Study Sessions",
    description: "Children studying scriptures, reading, and taking notes in interactive classes.",
  },
  {
    id: 3,
    url: "/images/camp_outdoor_activities.png",
    title: "Outdoor Fellowship Games",
    description: "Fun, outdoor team-building games designed to build fellowship and cooperation.",
  },
  {
    id: 4,
    url: "/images/camp_choir_singing.png",
    title: "Children Choir Ministration",
    description: "Our children's choir performing on stage in their custom green and yellow uniforms.",
  },
];

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
            <Sparkles size={14} className="animate-pulse" />
            <span>PHOTO MEMORIES</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
            Past Camp <span className="gold-gradient-text">Gallery</span>
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full shadow-[0_0_10px_#F2B705]" />
          <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed">
            Take a look at the beautiful moments of learning, fellowship, and joy from our previous Holiday Bible Camps.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="glass-card glass-card-hover group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-80 w-full overflow-hidden bg-neutral-dark">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent z-10 opacity-70" />
                <div className="relative h-full w-full z-0 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                
                {/* Hover zoom trigger */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-primary/50 backdrop-blur-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex">
                  <div className="rounded-full bg-accent-gold/90 p-4 text-primary shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={22} />
                  </div>
                </div>
              </div>

              {/* Title Card */}
              <div className="p-6 bg-primary-light/60 backdrop-blur-xl border-t border-white/10 flex-grow space-y-1">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-accent-gold transition-colors">
                  {image.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/65 leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-dark/95 p-4 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-accent-gold hover:text-primary transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-accent-gold hover:text-primary transition-colors focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-4 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-accent-gold hover:text-primary transition-colors focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col justify-center items-center"
            >
              <div className="relative w-full h-[65vh]">
                <Image
                  src={galleryImages[activeImageIndex].url}
                  alt={galleryImages[activeImageIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              
              <div className="mt-4 text-center text-white max-w-2xl px-6 space-y-1">
                <h4 className="font-display text-xl font-bold gold-gradient-text">
                  {galleryImages[activeImageIndex].title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                  {galleryImages[activeImageIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
