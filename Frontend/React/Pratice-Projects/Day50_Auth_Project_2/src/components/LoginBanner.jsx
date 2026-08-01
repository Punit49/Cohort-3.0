
const LoginBanner = () => {
  return (
    <div className="hidden lg:block w-[50%] h-screen bg-[#0b0b0b] relative overflow-hidden px-14 py-12">

      <div>
        <h1 className="text-6xl font-black uppercase tracking-tight text-red-500">
          FASHIONMART
        </h1>

        <div className="mt-10">
          <h2 className="text-6xl font-extrabold uppercase text-white leading-none">
            JOIN THE
          </h2>

          <div className="mt-2 inline-block bg-red-500 px-4 py-2">
            <h2 className="text-6xl font-black uppercase text-white leading-none">
              REVOLUTION
            </h2>
          </div>
        </div>

        <p className="mt-8 max-w-lg text-zinc-400 text-lg leading-8">
          Discover premium Layerup designed for modern men. Elevate your
          everyday wardrobe with bold essentials, timeless fits, and exclusive
          collections crafted to stand out.
        </p>
      </div>

      <div className="relative mt-10 w-fit">
        <div className="absolute inset-0 bg-red-500/20 blur-3xl scale-110 rounded-full"></div>

        <h1 className="absolute -bottom-16 -left-4 text-[170px] font-black uppercase text-white/5 leading-none select-none">
          MART
        </h1>
      </div>

      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>
  );
};

export default LoginBanner;