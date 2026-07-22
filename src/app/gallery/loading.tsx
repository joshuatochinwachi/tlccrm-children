export default function GalleryLoading() {
  return (
    <div className="min-h-[85vh] w-full px-4 py-16 animate-pulse">
      <div className="mx-auto max-w-6xl space-y-8">
        
        <div className="text-center space-y-3">
          <div className="h-4 w-28 bg-accent-gold/20 rounded-full mx-auto" />
          <div className="h-10 w-64 bg-accent-gold/30 rounded-2xl mx-auto" />
        </div>

        {/* Filter Pills Skeleton */}
        <div className="flex justify-center gap-2 pt-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-24 rounded-full bg-white/10" />
          ))}
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 rounded-2xl bg-white/10 border border-white/10 glass-card" />
          ))}
        </div>
      </div>
    </div>
  );
}
