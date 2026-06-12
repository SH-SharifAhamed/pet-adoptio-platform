"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { MdPets } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const HomeSection = () => {
   const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`);

        const data = await res.json();

        setPets(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Health status color mapping
  const healthColors = {
    Healthy: "bg-green-500/10 text-green-400 border-green-500/20",
    Sick: "bg-red-500/10 text-red-400 border-red-500/20",
    Recovering: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Treatment: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };








  
  
  const user = session?.user;
  
  
  if (isPending) {
    return <h1>Loading...</h1>;
  }
    // const [date, setDate] = useState(new Date());
  
    // const { Fee, _id, petName, imageUrl, petId } = data;
  
  const handleAdoption = async (pet) => {
    
    if (pet.status === "Adopted") {
      toast.error("Pet is already adopted!");
      return;
    }
      
    if (!user) {
      router.push("/signin");
      return;
    }
      const adoptData = {
        userId: user.id,
        userImage: user.image,
        userName: user.name,
        date: new Date(),
        petName: pet.petName,
        imageUrl: pet.imageUrl,
        Fee: pet.Fee,
        status: "Pending",
        petId: pet._id,
      };
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adoptData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success("Adoption Request Sent Successfully!");
        // e.target.reset();
      } else {
        toast.error(data.message || "Failed to add pet!");
      }
    };
  
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-linear-to-br from-purple-600/20 to-green-600/20 border border-purple-500/20">
          <MdPets className="text-2xl text-purple-400" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Recent Pets
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.slice(0, 6).map((pet) => {
          const { _id, petName, gender, imageUrl, Fee, Age, healthStatus } =
            pet;
          const healthClass =
            healthColors[healthStatus] || healthColors.Healthy;

          return (
            <div
              key={_id}
              className="group relative bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  alt={petName || "Pet image"}
                  src={imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60" />

                {/* Health Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${healthClass}`}
                  >
                    {healthStatus}
                  </span>
                </div>

                {/* Pet Name Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h2 className="text-white text-xl font-bold truncate drop-shadow-lg">
                    {petName}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <p className="text-gray-400 text-xs mb-0.5">Gender</p>
                    <p className="text-white text-sm font-semibold capitalize">
                      {gender}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <p className="text-gray-400 text-xs mb-0.5">Age</p>
                    <p className="text-white text-sm font-semibold">{Age}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5 col-span-2">
                    <p className="text-gray-400 text-xs mb-0.5">Adoption Fee</p>
                    <p className="text-green-400 text-lg font-bold">${Fee}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-1">
                  <Button
                    onClick={() => handleAdoption(pet)}
                    className="flex-1 text-center py-2.5 rounded-xl bg-linear-to-r from-purple-600 to-green-600 text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-green-500/25 active:scale-95 transition-all duration-300"
                  >
                    Adopt Now
                  </Button>

                  <Link
                    href={`/pets/${_id}`}
                    className="flex-1 text-center py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/5 hover:text-white hover:border-purple-500/30 active:scale-95 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center mt-10">
        <Link
          href="/pets"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-green-600 text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-green-500/25 active:scale-95 transition-all duration-300"
        >
          View All Pets
          <FaChevronRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );

  // function newFunction() {
  //   return () => {
  //     window.location.href = "/adopt";
  //   };
  // }
};

export default HomeSection;