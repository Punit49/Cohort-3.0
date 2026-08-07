export default function About() {
  return (
    <div className="bg-[#131313] min-h-screen flex flex-col font-['Anybody']">
      <div className="h-1 w-full bg-[#c00100]" />

      <main className="grow px-4 md:px-12 py-16 max-w-6xl mx-auto w-full">

        <p className="text-xs font-bold uppercase tracking-widest text-[#e5e2e1]/50 mb-6">
          TRENDZY / ABOUT
        </p>

        <div className="relative mb-20">
          <span className="absolute -top-4 left-0 bg-[#c00100] text-[#131313] text-[10px] font-black uppercase px-3 py-1 rotate-[-3deg]">
            EST. UNDERGROUND
          </span>

          <h1 className="text-[52px] md:text-[96px] font-black text-[#e5e2e1] uppercase leading-[0.9] tracking-[-0.03em] mt-6">
            NOT MADE
            <br />
            <span className="text-[#c00100]">FOR EVERYONE</span>
          </h1>

          <p className="text-sm md:text-base text-[#e5e2e1]/60 max-w-xl mt-6 leading-relaxed">
            TRENDZY drops in small batches, on no fixed schedule, for people who'd
            rather wear something the algorithm hasn't seen yet. No restocks. No
            apologies. If it sells out, it sells out.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-[#e5e2e1]/20 mb-20">
          {[
            { value: "48", label: "Drops Shipped" },
            { value: "112", label: "One-Offs Sold Out" },
            { value: "0", label: "Restocks. Ever." },
            { value: "∞", label: "Regret, If You Sleep" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 text-center ${i !== 0 ? "border-l-2 border-[#e5e2e1]/20" : ""}`}
            >
              <p className="text-3xl md:text-4xl font-black text-[#c00100] mb-1">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#e5e2e1]/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className="text-2xl font-black text-[#e5e2e1] uppercase mb-6 tracking-tight">
              How We Drop
            </h2>

            <div className="space-y-0">
              {[
                {
                  n: "01",
                  title: "Small Batches, Always",
                  body: "Every piece is cut in limited runs. When it's gone, the pattern gets retired — not reprinted.",
                },
                {
                  n: "02",
                  title: "No Warehouse Filler",
                  body: "We don't design around what's easy to restock. We design around what we'd actually wear once and remember.",
                },
                {
                  n: "03",
                  title: "Collabs, Not Cash Grabs",
                  body: "Every collaboration is picked because we'd cop it ourselves — not because it trends.",
                },
              ].map((item, i, arr) => (
                <div
                  key={item.n}
                  className={`flex gap-4 py-5 ${i !== arr.length - 1 ? "border-b-2 border-[#e5e2e1]/10" : ""}`}
                >
                  <span className="text-[#c00100] font-black text-lg shrink-0 w-8">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase text-[#e5e2e1] mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#e5e2e1]/50 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-dashed border-[#e5e2e1]/20 p-6 h-fit self-start">
            <p className="text-xs font-black uppercase text-[#c00100] mb-3 tracking-widest">
              📦 From the Bench
            </p>
            <p className="text-sm text-[#e5e2e1]/70 leading-relaxed mb-4">
              "We started TRENDZY because we were tired of finding a piece we
              loved, only to see it on ten other people a week later. So we made the
              opposite kind of store — one where sold out actually means sold out."
            </p>
            <div className="flex items-center gap-3 pt-4 border-t-2 border-[#e5e2e1]/10">
              <div className="w-9 h-9 rounded-full bg-[#c00100]/20 border-2 border-[#c00100] flex items-center justify-center text-[#c00100] font-black text-xs">
                FM
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#e5e2e1]">
                  The Founders
                </p>
                <p className="text-[10px] text-[#e5e2e1]/40 uppercase tracking-wide">
                  Design Team, Not a Committee
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-y-2 border-[#e5e2e1]/20 py-4 mb-20 relative">
          <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite]">
            {Array(2).fill(0).map((_, i) => (
              <span key={i} className="flex items-center gap-8 pr-8">
                {["LIMITED RUNS", "NO RESTOCKS", "COLLAB READY", "DROP OR DON'T", "MADE TO SELL OUT"].map((t) => (
                  <span key={t} className="text-lg md:text-2xl font-black uppercase text-[#e5e2e1]/20 tracking-wide">
                    {t} <span className="text-[#c00100]">/</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="border-2 border-[#e5e2e1]/20 p-8 text-center">
          <p className="text-xs font-black uppercase text-[#c00100] mb-2 tracking-widest">
            Next Drop Incoming
          </p>
          <p className="text-sm text-[#e5e2e1]/60 max-w-md mx-auto">
            No countdown. No hype calendar. Follow along or check back —
            you'll know when it's here.
          </p>
        </div>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}