import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
        <section className="rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
        <div className="relative bg-gradient-to-br from-zinc-950 via-black to-red-950/20">
            <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-medium text-white">
            {product.discountPercentage}% OFF
            </span>

            <button className="absolute right-3 top-3 h-9 w-9 rounded-full bg-zinc-900 flex items-center justify-center border border-red-500/20 hover:bg-red-600 duration-300">
            <Heart size={16} />
            </button>

            <img
            src={product.images[0]}
            alt="Product"
            className="h-56 w-full object-contain p-5"
            />
        </div>

        <div className="space-y-4 p-4">
            <div className="flex gap-2 flex-wrap">
            <span className="rounded-full bg-red-600/20 text-red-500 border border-red-500/30 px-3 py-1 text-[11px]">
                {product.stock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
            </span>

            <span className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] capitalize">
                {product.category}
            </span>
            </div>

            <div>
            <h1 className="text-lg font-bold text-white leading-6 line-clamp-2">
                {product.title}
            </h1>
            </div>

            <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                key={i}
                size={14}
                className={
                    i < Math.floor(product.rating)
                    ? "fill-red-500 text-red-500"
                    : "text-zinc-600"
                }
                />
            ))}

            <span className="text-xs text-zinc-400 ml-2">
                {product.rating} - {product.reviews.length}
            </span>
            </div>

            <p className="text-sm text-zinc-400 leading-6 line-clamp-2">
            {product.description}
            </p>

            <div className="flex items-end gap-3">
            <h2 className="text-2xl font-bold text-red-500">
                ${product.price}
            </h2>

            <span className="line-through text-zinc-500 text-sm">
                $11.16
            </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-zinc-900 p-3 border border-zinc-800">
                <p className="text-xs text-zinc-500">Stock</p>
                <h3 className="text-base font-semibold text-red-500">
                {product.stock}
                </h3>
            </div>

            <div className="rounded-xl bg-zinc-900 p-3 border border-zinc-800">
                <p className="text-xs text-zinc-500">Minimum Order</p>
                <h3 className="text-base font-semibold">
                {product.minimumOrderQuantity}
                </h3>
            </div>
            </div>

            <div className="flex gap-3">
            <button className="flex-1 h-10 rounded-lg bg-red-600 hover:bg-red-700 duration-300 font-semibold text-sm flex items-center justify-center gap-2">
                <ShoppingCart size={16} />
                Add To Cart
            </button>
            </div>
        </div>
        </section>
  );
};

export default ProductCard;