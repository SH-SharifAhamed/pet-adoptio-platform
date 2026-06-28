import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { DeleteModal } from "@/components/DeleteModal";
import { EditModal } from "@/components/EditModal";
import RequestModal from "@/components/RequestModal";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";

const MyListings = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const { token } = await auth.api.getToken({ headers: await headers() });
  const user = session?.user;

  if (!user || !token) {
    return (
      <div className="min-h-[60vh] p-8 text-center text-white">
        <h1 className="text-3xl font-semibold mb-4">My Listings</h1>
        <p className="text-gray-300">
          You need to sign in to view your added pets.
        </p>
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets/my`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Failed to fetch user pets:", res.status, errorText);

    return (
      <div className="min-h-[60vh] p-8 text-center text-white">
        <h1 className="text-3xl font-semibold mb-4">
          Unable to load your listings
        </h1>
        <p className="text-gray-300">
          The server returned an error. Please try again later.
        </p>
      </div>
    );
  }

  const data = await res.json();
  const totalListings = Array.isArray(data) ? data.length : 0;
  const availableListings = Array.isArray(data)
    ? data.filter((pet) => pet.status !== "Adopted").length
    : 0;
  const adoptedListings = Array.isArray(data)
    ? data.filter((pet) => pet.status === "Adopted").length
    : 0;

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">My Listings</h1>
          <p className="text-gray-400 mt-2">
            All pets you have added for adoption.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-gray-400">Total Listings</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {totalListings}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-gray-400">Available</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-400">
            {availableListings}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-gray-400">Adopted</p>
          <p className="mt-2 text-2xl font-semibold text-amber-400">
            {adoptedListings}
          </p>
        </div>
      </div>

      {Array.isArray(data) && data.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 xl:grid-cols-2">
          {data.map((pet) => (
            <div
              key={pet._id}
              className="group rounded-3xl border border-white/10 bg-[#111827] p-4 shadow-xl shadow-black/20"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
                <Image
                  src={pet.imageUrl || "/image/logo-1.png"}
                  alt={pet.petName}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {pet.petName}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {pet.Breed || pet.category}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${pet.status === "Adopted" ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"}`}
                  >
                    {pet.status || "Available"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Price</span>
                  <span className="font-semibold text-green-400">
                    ${pet.Fee || 0}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <RequestModal petId={pet._id} petName={pet.petName} />
                  <EditModal data={pet} />
                  <Link
                    href={`/pets/${pet._id}`}
                    className="rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-white/10"
                  >
                    View
                  </Link>
                  <DeleteModal data={pet} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-gray-200">
          <p className="text-xl font-medium mb-2">
            No pets found in your listings yet.
          </p>
          <p className="text-gray-400">
            Add a pet from the dashboard to see it here.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyListings;
