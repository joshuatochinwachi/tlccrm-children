export default function ContactLoading() {
  return (
    <div className="min-h-[85vh] w-full px-4 py-16 animate-pulse">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <div className="h-4 w-28 bg-accent-gold/20 rounded-full mx-auto" />
          <div className="h-10 w-60 bg-accent-gold/30 rounded-2xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="h-6 w-36 bg-accent-gold/20 rounded" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 rounded-xl bg-white/5" />
              ))}
            </div>
          </div>
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="h-6 w-36 bg-accent-green/20 rounded" />
            <div className="h-12 rounded-xl bg-white/5" />
            <div className="h-12 rounded-xl bg-white/5" />
            <div className="h-24 rounded-xl bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
