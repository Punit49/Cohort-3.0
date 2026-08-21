const ProductCard = ({ product }) => {
  const {
    title,
    brand,
    category,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    availabilityStatus,
    shippingInformation,
  } = product;

  const discountedPrice = (
    price -
    (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      <div className="relative flex h-64 items-center justify-center bg-zinc-100">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain p-6"
        />

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          -{discountPercentage}%
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          {availabilityStatus}
        </span>
      </div>

      <div className="p-5">

        <div className="mb-2 flex items-center gap-2 text-xs text-zinc-500">
          <span className="capitalize">{category}</span>
          <span>•</span>
          <span>{brand}</span>
        </div>

        <h2 className="mb-2 text-lg font-bold text-zinc-900">
          {title}
        </h2>

        <p className="mb-4 line-clamp-2 text-sm leading-6 text-zinc-500">
          {description}
        </p>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.round(rating))}
          </div>

          <span className="text-sm font-medium text-zinc-600">
            {rating}
          </span>
        </div>

        <div className="mb-4 flex items-end gap-2">
          <span className="text-2xl font-bold text-zinc-900">
            ${discountedPrice}
          </span>

          <span className="text-sm text-zinc-400 line-through">
            ${price}
          </span>
        </div>

        <p className="mb-4 text-xs text-zinc-500">
          🚚 {shippingInformation}
        </p>

        <p className="mb-4 text-xs text-zinc-500">
          {stock} items available
        </p>

        <button
          disabled={stock === 0}
          className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;