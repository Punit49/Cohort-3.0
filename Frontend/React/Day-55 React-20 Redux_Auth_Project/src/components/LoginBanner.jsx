import { Sparkles, ShoppingBag, Truck, ShieldCheck } from "lucide-react";

const LoginBanner = () => {
  return (
    <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-red-600 via-black to-purple-900 p-12 overflow-hidden">

      <div className="absolute w-80 h-80 bg-red-500/20 blur-[120px] rounded-full -top-20 -left-20" />
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0" />

      <div className="relative z-10">
        <h1 className="text-4xl font-black text-white tracking-widest">
          TRENDZY
        </h1>

        <p className="text-neutral-300 mt-4 leading-relaxed">
          Premium fashion for the next generation.
        </p>
      </div>


      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-white leading-tight">
          Dress Like <br />
          You Mean It.
        </h2>

        <p className="mt-6 text-neutral-300 text-lg">
          Discover premium collections curated for every style.
        </p>
      </div>


      <div className="relative z-10 space-y-5">

        <div className="flex items-center gap-4">
          <ShoppingBag className="text-red-400" />
          <span className="text-neutral-200">
            5000+ Premium Products
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Truck className="text-red-400" />
          <span className="text-neutral-200">
            Free Shipping Nationwide
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ShieldCheck className="text-red-400" />
          <span className="text-neutral-200">
            Secure Checkout
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Sparkles className="text-red-400" />
          <span className="text-neutral-200">
            Exclusive Members Collection
          </span>
        </div>

      </div>

    </div>
  );
};

export default LoginBanner;