const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 h-150">

      <div className="relative h-44 bg-zinc-900">
        <div className="absolute top-3 left-3 h-5 w-14 rounded-full bg-zinc-800" />
        <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-zinc-800" />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-zinc-800" />
          <div className="h-5 w-14 rounded-full bg-zinc-800" />
        </div>

        <div className="h-5 w-3/4 rounded bg-zinc-800" />

        <div className="h-6 w-20 rounded bg-zinc-800" />

        <div className="h-10 rounded-lg bg-zinc-800" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;