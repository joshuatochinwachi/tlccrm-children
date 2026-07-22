export default function RegisterLoading() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-20 animate-pulse">
      <div className="mx-auto max-w-xl w-full space-y-6">
        
        {/* Step Progress Bar Skeleton */}
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-full bg-accent-gold/20 border border-accent-gold/40" />
              <div className="h-3 w-16 rounded bg-white/10 hidden sm:block" />
            </div>
          ))}
        </div>

        {/* Main Form Glass Card Skeleton */}
        <div className="glass-card border-accent-gold/25 rounded-3xl p-6 sm:p-10 space-y-6 backdrop-blur-2xl">
          <div className="text-center space-y-3">
            <div className="h-4 w-24 bg-accent-gold/20 rounded mx-auto" />
            <div className="h-8 w-64 bg-gradient-to-r from-accent-gold/30 to-amber-300/20 rounded-xl mx-auto" />
            <div className="h-4 w-48 bg-white/10 rounded mx-auto" />
          </div>

          <div className="space-y-4 pt-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-5 rounded-2xl border border-white/10 bg-white/5 flex items-start space-x-4">
                <div className="h-11 w-11 rounded-xl bg-white/10 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-36 bg-white/20 rounded" />
                  <div className="h-3 w-full bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
