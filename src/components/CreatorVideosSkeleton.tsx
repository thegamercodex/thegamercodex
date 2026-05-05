export function CreatorVideosSkeleton() {
  return (
    <section aria-busy="true" aria-live="polite">
      <header className="mb-3">
        <div className="h-5 w-48 animate-pulse rounded bg-muted" />
        <div className="mt-2 h-3 w-72 animate-pulse rounded bg-muted/60" />
      </header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-lg border border-border bg-muted/40 p-2.5"
          >
            <div className="aspect-video animate-pulse rounded-md bg-muted" />
            <div className="h-3 w-full animate-pulse rounded bg-muted" />
            <div className="h-3 w-3/4 animate-pulse rounded bg-muted/60" />
          </div>
        ))}
      </div>
    </section>
  );
}
