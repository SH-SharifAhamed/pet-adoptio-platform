import { CancelRequest } from "@/components/CancelRequest";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { ArrowBigRightIcon } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const MyRequests = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/adopters/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-white">My Requests</h1>
        <p className="mt-2 text-gray-400">
          Track all your pet adoption requests.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-gray-400">Total Requests</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {data?.length || 0}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-gray-400">Pending</p>
          <p className="mt-2 text-2xl font-semibold text-amber-400">
            {data?.filter((item) => item.status === "Pending").length}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-gray-400">Approved</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-400">
            {data?.filter((item) => item.status === "Approved").length}
          </p>
        </div>
      </div>

      {Array.isArray(data) && data.length > 0 ? (
        <div className="grid gap-6 xl:grid-cols-2">
          {data.map((request) => (
            <div
              key={request._id}
              className="group rounded-3xl border border-white/10 bg-[#111827] p-4 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
                <Image
                  src={request.imageUrl}
                  alt={request.petName}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {request.petName}
                    </h2>

                    <p className="text-sm text-gray-400">{request.location}</p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold
                ${
                  request.status === "Approved"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : request.status === "Rejected"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-amber-500/10 text-amber-400"
                }`}
                  >
                    {request.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Requested On</span>
                    <span>{request.date}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Location</span>
                    <span>{request.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Link
                    href={`/pets/${request.petId}`}
                    className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    View Details
                  </Link>

                  <CancelRequest id={request._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            No Requests Found
          </h2>

          <p className="mt-2 text-gray-400">
            You have not submitted any adoption requests yet.
          </p>

          <Link
            href="/pets"
            className="mt-6 inline-flex rounded-xl bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
          >
            Browse Pets
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyRequests;
