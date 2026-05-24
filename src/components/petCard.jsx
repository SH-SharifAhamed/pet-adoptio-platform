
"use client";

import Image from "next/image";
import Link from "next/link";

const PetCard = ({ pets }) => {
  const { _id, petName, gender, imageUrl, Fee, Age, healthStatus } = pets;

  // Health status color mapping
  const healthColors = {
    Healthy: "bg-green-500/10 text-green-400 border-green-500/20",
    Sick: "bg-red-500/10 text-red-400 border-red-500/20",
    Recovering: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Treatment: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  const healthClass = healthColors[healthStatus] || healthColors.Healthy;

  return (
    <div className="group relative bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1">
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


      <div className="p-4 space-y-3">

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
          <Link
            href="/signin"
            className="flex-1 text-center py-2.5 rounded-xl bg-linear-to-r from-purple-600 to-green-600 text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-green-500/25 active:scale-95 transition-all duration-300"
          >
            Adopt Now
          </Link>
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
};

export default PetCard;