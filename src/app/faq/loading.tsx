export default function FAQLoading() {
  return (
    <div className="min-h-[85vh] w-full px-4 py-16 animate-pulse">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="text-center space-y-3 mb-8">
          <div className="h-4 w-24 bg-accent-gold/20 rounded-full mx-auto" />
          <div className="h-10 w-64 bg-accent-gold/30 rounded-2xl mx-auto" />
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 rounded-2xl bg-white/5 border border-white/10 glass-card" />
          ))}
        </div>
      </div>
    </div>
  );
}
