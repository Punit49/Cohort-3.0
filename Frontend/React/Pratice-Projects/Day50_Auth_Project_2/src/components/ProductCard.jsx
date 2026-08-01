export default function ProductCard({ product }) {
  return (
    <div className="group w-80 overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-100 p-8">
        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          SALE
        </span>

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-pink-500 hover:text-white">
          ❤
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-3"
        />
      </div>

      <div className="space-y-4 p-6">
        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-600">
          {product.category}
        </span>

        <h2 className="line-clamp-2 text-xl font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="font-semibold">{product.rating.rate}</span>

            <span className="text-sm text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400 line-through">
              ${(product.price + 35).toFixed(2)}
            </p>

            <h3 className="text-3xl font-bold text-green-600">
              ${product.price}
            </h3>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-xl border border-gray-300 py-3 font-semibold transition hover:bg-gray-100">
            View
          </button>

          <button className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white transition hover:from-indigo-700 hover:to-purple-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}