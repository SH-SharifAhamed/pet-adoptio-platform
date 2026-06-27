import PetCard from "@/components/petCard";
import { MdPets } from "react-icons/md";
import SearchFilder from "@/components/SearchFilder";
import Loading from "./loading";

const PetPage = async ({ searchParams }) => {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const searchTerm = resolvedSearchParams?.search || "";
  const speciesFilter = resolvedSearchParams?.species || "";

  const query = new URLSearchParams();
  if (searchTerm) query.set("search", searchTerm);
  if (speciesFilter) query.set("species", speciesFilter);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets${query.toString() ? `?${query.toString()}` : ""}`,
    { cache: "no-store" },
  );
  const data = await res.json();
  const loading = !Array.isArray(data);

  return (
    <div className="max-w-6xl mx-auto my-25">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-linear-to-br from-purple-600/20 to-green-600/20 border border-purple-500/20">
          <MdPets className="text-2xl text-purple-400" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
          All Pets
        </h1>
      </div>

      <div className="mb-4">
        <SearchFilder />
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-400">
        {searchTerm ? (
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">
            Search: {searchTerm}
          </span>
        ) : null}
        {speciesFilter ? (
          <span className="rounded-full bg-purple-500/10 px-3 py-1 text-purple-400">
            Species: {speciesFilter}
          </span>
        ) : null}
      </div>

      {loading ? (
        <div className="text-center">
          <Loading />
        </div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.map((pets) => (
            <PetCard key={pets._id} pets={pets} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-gray-300">
          <p className="text-xl font-semibold text-white">
            No pets match these filters yet.
          </p>
          <p className="mt-2 text-gray-400">
            Try a different search term or species selection.
          </p>
        </div>
      )}
    </div>
  );
};

export default PetPage;
