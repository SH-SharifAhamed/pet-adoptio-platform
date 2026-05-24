import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import {
  MdLocationPin,
  MdEmail,
  MdPets,
  MdHealthAndSafety,
} from "react-icons/md";
import { FaVenusMars, FaSyringe, FaBirthdayCake } from "react-icons/fa";
import BookingPet from "@/components/BookingPet";
import { DeleteModal } from "@/components/DeleteModal";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pet details");
  }

  const data = await res.json();

  const {
    petName,
    description,
    Breed,
    gender,
    vaccinationStatus,
    imageUrl,
    Age,
    healthStatus,
    location,
    ownerEmail,
  } = data;

  const details = [
    { label: "Breed", value: Breed, icon: <MdPets size={20} /> },
    { label: "Gender", value: gender, icon: <FaVenusMars size={18} /> },
    { label: "Age", value: Age, icon: <FaBirthdayCake size={18} /> },
    { label: "Location", value: location, icon: <MdLocationPin size={20} /> },
    { label: "Owner Email", value: ownerEmail, icon: <MdEmail size={20} /> },
  ];

  const isVaccinated = vaccinationStatus?.toLowerCase() === "vaccinated";
  const isHealthy = healthStatus?.toLowerCase() === "healthy";

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950 py-12 px-4 sm:px-6 mt-10 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Actions Header */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-linear-to-br from-purple-600/20 to-green-600/20 border border-purple-500/20">
              <MdPets className="text-2xl text-purple-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Pets Details
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <EditModal data={data} />
            <DeleteModal data={data} />
          </div>
        </div>

        <div className="bg-zinc-800/40 backdrop-blur-2xl border border-zinc-700/30 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50">
          <div className="relative w-full h-72 sm:h-96 lg:h-112 group">
            <Image
              alt={petName || "Pet"}
              src={imageUrl || "/placeholder-pet.jpg"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

            <div className="absolute bottom-10 right-6 flex flex-wrap items-center gap-4 pt-6">
              <div
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold border shadow-sm ${
                  isVaccinated
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                }`}
              >
                <FaSyringe size={16} />
                <span className="uppercase tracking-wide">
                  {vaccinationStatus || "Unknown"}
                </span>
              </div>

              <div
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold border shadow-sm ${
                  isHealthy
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                }`}
              >
                <MdHealthAndSafety size={18} />
                <span className="uppercase tracking-wide">
                  {healthStatus || "Unknown"}
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg">
                {petName}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 space-y-10">
            {description && (
              <div className="max-w-3xl">
                <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-light">
                  {description}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                  {details.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 p-5 rounded-2xl bg-zinc-700/20 border border-zinc-600/20 hover:bg-zinc-700/40 hover:border-zinc-500/40 hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-600/30 border border-zinc-500/20 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-500/30 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">
                          {item.label}
                        </p>
                        <p className="text-zinc-100 font-semibold text-lg truncate">
                          {item.value || "N/A"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {data && <BookingPet data={data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
