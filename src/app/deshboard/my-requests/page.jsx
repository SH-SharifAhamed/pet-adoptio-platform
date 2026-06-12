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
    <div className="h-screen">
      <h1>My Requests</h1>
      <div className="mt-4 space-y-4">
        {data?.map((adopters) => (
          <div
            key={adopters._id}
            className="flex items-center gap-4  p-4 border rounded-lg bg-gray-100"
          >
            <div>
              <Image
                src={adopters.imageUrl}
                alt={adopters.petName}
                height={80}
                width={200}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-green-400">
                {adopters.petName}
              </h1>
              <p className="text-sm text-gray-700">{adopters.status}</p>
              <p className="text-sm text-gray-700">
                {adopters.date}
              </p>
              <p className="text-sm text-gray-700">{adopters.location}</p>
            </div>
            <div className="ml-auto space-y-4">
              <Link href={`/pets/${adopters.petId}`}>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md mr-2 cursor-pointer">
                  View Details <ArrowBigRightIcon />
                </button>
              </Link>

              <button
                variant="outline"
                className="flex items-center mt-2 gap-2 px-4 py-2 border-2 border-red-500 text-red-500 rounded-md cursor-pointer"
              >
                Cancel <TrashBin className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRequests;
