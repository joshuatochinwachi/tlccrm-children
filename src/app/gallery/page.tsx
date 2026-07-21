"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Maximize2, Sparkles, Film, Image as ImageIcon } from "lucide-react";

interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  title: string;
  description: string;
  category: string;
}

const mediaItems: MediaItem[] = [
  // Videos (No writeup needed)
  {
    id: "v1",
    type: "video",
    url: "/videos/video_2026-07-21_15-43-28.mp4",
    title: "Camp Praise & Worship Session",
    description: "",
    category: "Worship",
  },
  {
    id: "v2",
    type: "video",
    url: "/videos/video_2026-07-21_15-43-38.mp4",
    title: "Scripture Teaching & Lecture Highlights",
    description: "",
    category: "Teaching",
  },
  {
    id: "v3",
    type: "video",
    url: "/videos/video_2026-07-21_15-43-44.mp4",
    title: "Youth & Children Camp Activities",
    description: "",
    category: "Camp Life",
  },
  {
    id: "v4",
    type: "video",
    url: "/videos/video_2026-07-21_15-43-50.mp4",
    title: "Camp Devotion & Assemblies",
    description: "",
    category: "Assembly",
  },
  {
    id: "v5",
    type: "video",
    url: "/videos/video_2026-07-21_15-43-55.mp4",
    title: "Children Special Choir Presentation",
    description: "",
    category: "Choir",
  },
  {
    id: "v6",
    type: "video",
    url: "/videos/video_2026-07-21_15-43-59.mp4",
    title: "Camp Highlights & Closing Fellowship",
    description: "",
    category: "Fellowship",
  },
  // Photos (with descriptions)
  {
    id: "i1",
    type: "image",
    url: "/pictures/IMG-20260720-WA0014.jpg",
    title: "Children & Camp Officers Group Photo",
    description: "All the campers dressed in their bright yellow and green uniforms alongside camp officers and leaders.",
    category: "Group Photo",
  },
  {
    id: "i2",
    type: "image",
    url: "/pictures/IMG-20260720-WA0016.jpg",
    title: "Joyful Campers & Youth Fellowship",
    description: "Campers, students, and youth officers celebrating with joyful enthusiasm after a blessed camp session.",
    category: "Fellowship",
  },
  {
    id: "i3",
    type: "image",
    url: "/images/camp_hall_group.png",
    title: "Large Assembly Worship",
    description: "Children and camp officers singing praise in the main auditorium during morning assembly.",
    category: "Worship",
  },
  {
    id: "i4",
    type: "image",
    url: "/images/camp_children_studying.png",
    title: "Interactive Bible Sessions",
    description: "Children studying scriptures, reading, and taking notes in interactive classes.",
    category: "Teaching",
  },
  {
    id: "i5",
    type: "image",
    url: "/images/camp_outdoor_activities.png",
    title: "Outdoor Fellowship Games",
    description: "Fun, outdoor team-building games designed to build fellowship and cooperation.",
    category: "Recreation",
  },
  {
    id: "i6",
    type: "image",
    url: "/images/camp_choir_singing.png",
    title: "Children Choir Ministration",
    description: "Our children's choir performing on stage in their custom green and yellow uniforms.",
    category: "Choir",
  },
];

// Interactive Video Preview Card Component
function VideoCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      className="glass-card glass-card-hover group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col h-[320px] sm:h-[350px]"
    >
      <div className="relative h-full w-full overflow-hidden bg-black flex items-center justify-center">
        {/* HTML5 video element for live muted hover preview */}
        <video
          ref={videoRef}
          src={item.url}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
        />

        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Center glowing Play icon */}
        <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}>
          <div className="h-16 w-16 rounded-full bg-accent-gold/25 border border-accent-gold/50 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(242,183,5,0.4)]">
            <Play size={28} className="ml-1 fill-current" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = mediaItems.filter(
    (item) => filter === "all" || item.type === filter
  );

  const openLightbox = (id: string) => {
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setActiveMediaIndex(index);
    }
  };

  const closeLightbox = () => {
    setActiveMediaIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeMediaIndex === null) return;
    setActiveMediaIndex((activeMediaIndex + 1) % filteredItems.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeMediaIndex === null) return;
    setActiveMediaIndex((activeMediaIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeMediaIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setActiveMediaIndex((activeMediaIndex + 1) % filteredItems.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveMediaIndex((activeMediaIndex - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMediaIndex, filteredItems]);

  const activeMedia = activeMediaIndex !== null ? filteredItems[activeMediaIndex] : null;

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
            <Sparkles size={14} className="animate-pulse" />
            <span>CAMP MULTIMEDIA</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
            Camp Photos & <span className="gold-gradient-text">Videos</span>
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full shadow-[0_0_10px_#F2B705]" />
          <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed">
            Re-live beautiful memories of scripture sessions, active recreation, praise ministrations, and fellowship from our previous Bible Camps.
          </p>

          {/* Filter Controls */}
          <div className="flex items-center justify-center gap-3 pt-6">
            {(["all", "image", "video"] as const).map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilter(type);
                  setActiveMediaIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border ${
                  filter === type
                    ? "bg-accent-gold text-primary border-accent-gold shadow-[0_0_15px_rgba(242,183,5,0.4)]"
                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
                } flex items-center space-x-2`}
              >
                {type === "all" && <span>Show All</span>}
                {type === "image" && (
                  <>
                    <ImageIcon size={14} />
                    <span>Photos</span>
                  </>
                )}
                {type === "video" && (
                  <>
                    <Film size={14} />
                    <span>Videos</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            item.type === "video" ? (
              <VideoCard key={item.id} item={item} onClick={() => openLightbox(item.id)} />
            ) : (
              <div
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="glass-card glass-card-hover group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col h-full"
              >
                {/* Image Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-dark">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent z-10 opacity-70" />
                  <div className="relative h-full w-full z-0 transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-primary/50 backdrop-blur-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-accent-gold/90 p-4 text-primary shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>

                {/* Title & Description Card for Photos */}
                <div className="p-6 bg-primary-light/60 backdrop-blur-xl border-t border-white/10 flex-grow space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-green">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-mono text-white/40">
                      PHOTO
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-accent-gold transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Lightbox / Fullscreen Media Player Modal */}
        {activeMedia && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-dark/95 p-4 sm:p-6 backdrop-blur-lg animate-[fadeIn_0.2s_ease-out]"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-accent-gold hover:text-primary transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Nav */}
            <button
              onClick={showPrev}
              className="absolute left-4 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-accent-gold hover:text-primary transition-colors focus:outline-none hidden sm:block"
              aria-label="Previous Item"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Nav */}
            <button
              onClick={showNext}
              className="absolute right-4 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-accent-gold hover:text-primary transition-colors focus:outline-none hidden sm:block"
              aria-label="Next Item"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col justify-center items-center"
            >
              {activeMedia.type === "image" ? (
                <>
                  <div className="relative w-full h-[60vh] sm:h-[65vh]">
                    <Image
                      src={activeMedia.url}
                      alt={activeMedia.title}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-6 text-center text-white max-w-2xl px-6 space-y-1.5">
                    <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30 uppercase">
                      <ImageIcon size={10} />
                      <span>{activeMedia.category} · PHOTO</span>
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold gold-gradient-text">
                      {activeMedia.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                      {activeMedia.description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="relative w-full max-h-[80vh] flex justify-center items-center">
                  <video
                    src={activeMedia.url}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="rounded-2xl max-w-full max-h-[78vh] border border-white/10 bg-black shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
