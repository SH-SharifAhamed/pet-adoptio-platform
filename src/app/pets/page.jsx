import PetCard from "@/components/petCard";
import { MdPets } from "react-icons/md";
import SearchFilder from "@/components/SearchFilder";

const PetPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`);

  const data = await res.json();
  // console.log(data);

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {data.map((pets) => (
          <PetCard key={pets._id} pets={pets} />
        ))}
      </div>
    </div>
  );
};

export default PetPage;
