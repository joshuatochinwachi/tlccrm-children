export default function CampLoading() {
  return (
    <div className="min-h-[85vh] w-full px-4 py-16 animate-pulse">
      <div className="mx-auto max-w-5xl space-y-10">
        
        {/* Camp Hero Skeleton */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-accent-gold/20 space-y-6 text-center">
          <div className="h-6 w-32 bg-accent-gold/20 rounded-full mx-auto" />
          <div className="h-12 sm:h-16 w-3/4 bg-gradient-to-r from-accent-gold/30 to-amber-400/20 rounded-2xl mx-auto" />
          <div className="h-4 w-2/3 bg-white/10 rounded mx-auto" />
          <div className="pt-4 flex justify-center gap-4">
            <div className="h-12 w-40 rounded-full bg-accent-gold/30" />
            <div className="h-12 w-40 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Schedule & Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="h-6 w-40 bg-accent-gold/20 rounded" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 rounded-xl bg-white/5 border border-white/5" />
              ))}
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="h-6 w-40 bg-accent-green/20 rounded" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 rounded-xl bg-white/5 border border-white/5" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
