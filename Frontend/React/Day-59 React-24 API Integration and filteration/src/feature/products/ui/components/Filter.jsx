import React from "react";
import { useGetProductByCategory, useProductCategories } from "../../hooks/useProductsHook";

const Filter = ({search, setSearch, category, setCategory}) => {

    const { data, isPending } = useProductCategories();

    return (
        <div className="flex w-full items-end gap-8 border-y border-zinc-800 px-8 py-6">
        <div className="flex-1">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
            Search Database
            </label>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="SEARCH PRODUCTS"
                className="w-full border border-zinc-700 bg-transparent px-3 py-2.5 text-md font-bold tracking-wide text-black outline-none placeholder:text-zinc-500 focus:border-zinc-400"
            />
        </div>

        <div className="w-56">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
            Category
            </label>

            <select
                className="w-full appearance-none border border-zinc-700  px-3 py-2.5 text-xs font-bold uppercase tracking-wide bg-black text-white outline-none focus:border-zinc-400"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            >
            <option value="">
                All Categories
            </option>

            {
                data?.map((category) => (
                    <option
                        key={category.slug}
                        value={category.slug}
                        className="bg-[#111]"
                    >
                    {category.name}
                    </option>
                ))
            }
            
            </select>
        </div>
        </div>
    );
};

export default Filter;