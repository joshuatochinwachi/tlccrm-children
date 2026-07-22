export default function AboutLoading() {
  return (
    <div className="min-h-[85vh] w-full px-4 py-16 animate-pulse">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <div className="h-4 w-32 bg-accent-gold/20 rounded-full mx-auto" />
          <div className="h-10 w-72 bg-accent-gold/30 rounded-2xl mx-auto" />
        </div>

        <div className="glass-card rounded-3xl p-8 space-y-4 border-accent-gold/20">
          <div className="h-6 w-48 bg-white/20 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-5/6 bg-white/10 rounded" />
            <div className="h-4 w-4/6 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
