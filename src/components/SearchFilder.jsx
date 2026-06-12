"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Dog,
  Cat,
  Bird,
  Rabbit,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import { SiPandas } from "react-icons/si";
import { GiHorseshoe } from "react-icons/gi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function PetSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams() || "";

  const categories = [
    {
      value: "dogs",
      label: "Dogs",
      icon: Dog,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      value: "cats",
      label: "Cats",
      icon: Cat,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      value: "birds",
      label: "Birds",
      icon: Bird,
      color: "text-sky-500",
      bg: "bg-sky-50",
    },
    {
      value: "rabbits",
      label: "Rabbits",
      icon: Rabbit,
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
    {
      value: "horses",
      label: "Horses",
      icon: GiHorseshoe,
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
    {
      value: "pandas",
      label: "Panda",
      icon: SiPandas,
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
  ];

  const popularSearches = [
    "Golden Retriever",
    "Persian Cat",
    "Parrot",
    "Husky",
  ];

  const handleSearch = async () => {
    console.log("clicked");
    
    console.log(searchQuery);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/searchpets?search=${searchQuery}`,);
    console.log(res);
    
    const data = await res.json();
    console.log(data);

    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }

    router.push(`/searchpets?${params.toString()}`);
  };

  return (
    <div className="bg-linear-to-br from-slate-800/30 via-gray-500/30 to-zinc-800/30 rounded-3xl p-5 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-5 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Find your perfect companion</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Discover Your New{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-600">
              Best Friend
            </span>
          </h1>
          <p className="text-gray-500 text-lg">
            Search from thousands of pets waiting for a loving home
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

          <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl shadow-gray-200/50 rounded-3xl p-2 md:p-3">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              <div className="flex-1 relative">
                <div
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? "text-emerald-500" : "text-gray-400"}`}
                >
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search pets, breeds, categories..."
                  className="w-full h-14 pl-12 pr-5 rounded-2xl border border-gray-200/80 bg-white/80 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 focus:bg-white transition-all duration-300 text-base font-medium shadow-sm"
                />
                <p>Search: {searchQuery}</p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <span className="sr-only">Clear</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <div className="min-w-50 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-14 pl-12 pr-10 rounded-2xl border border-gray-200/80 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 focus:bg-white transition-all duration-300 appearance-none cursor-pointer font-medium shadow-sm"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="h-14 px-8 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 min-w-35"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4 px-2 pb-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
                Quick:
              </span>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() =>
                      setSelectedCategory(isActive ? "" : cat.value)
                    }
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? `${cat.bg} ${cat.color} ring-1 ring-current`
                        : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-gray-500 font-medium">Trending:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => setSearchQuery(term)}
              className="px-3 py-1 rounded-full bg-white/60 border border-gray-200/80 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-300 text-sm font-medium"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
