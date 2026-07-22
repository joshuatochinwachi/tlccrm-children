export default function Loading() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4 py-16 text-center animate-pulse">
      <div className="mx-auto max-w-4xl w-full space-y-8">
        
        {/* Skeleton Badge */}
        <div className="flex justify-center">
          <div className="h-8 w-48 rounded-full bg-white/10 border border-accent-gold/20 backdrop-blur-md" />
        </div>

        {/* Skeleton Heading */}
        <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
          <div className="h-12 sm:h-16 w-3/4 rounded-2xl bg-gradient-to-r from-accent-gold/20 via-amber-400/10 to-accent-gold/20" />
          <div className="h-6 w-1/2 rounded-xl bg-white/10" />
        </div>

        {/* Skeleton Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card rounded-2xl p-6 space-y-4 border-accent-gold/15">
              <div className="h-12 w-12 rounded-xl bg-accent-gold/20" />
              <div className="h-6 w-3/4 rounded-lg bg-white/15" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-white/10" />
                <div className="h-4 w-4/5 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Loading status indicator */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-accent-gold/80">
          <div className="h-2 w-2 rounded-full bg-accent-gold animate-ping" />
          <span>Opening page...</span>
        </div>
      </div>
    </div>
  );
}
