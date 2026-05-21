

import PetCard from "@/components/petCard";

const PetPage = async () => {
  const res = await fetch(process.env.NEXT_API_URL);
  const data = await res.json();
  // console.log(data);

  return (
    <div className="max-w-6xl mx-auto my-25">
      <h1 className="text-2xl font-bold">Pets</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {data.map((pets) => (
          <PetCard key={pets._id} pets={pets} />
        ))}
      </div>
    </div>
  );
};

export default PetPage;
