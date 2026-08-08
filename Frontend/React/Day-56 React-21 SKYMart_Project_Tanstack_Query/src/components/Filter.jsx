import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const Filter = ({filterProducts}) => {

    return (
        <div className="mb-8 rounded-2xl border border-red-900/20 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 p-5 shadow-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

                <div className="relative flex-1">
                    <Search
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
                    />

                    <input
                        onChange={(e) => {filterProducts(e.target.value)}}
                        type="text"
                        placeholder="Search for products..."
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    />
                </div>

                <select className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 lg:w-60">
                    <option>All Categories</option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Shoes</option>
                    <option>Accessories</option>
                </select>

                <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30">
                    <Search size={18} />
                    Search
                </button>
            </div>
        </div>
    );
};

export default Filter;