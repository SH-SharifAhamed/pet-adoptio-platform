import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyListings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);

  // console.log(session);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/adopters/${user?.id}`,
  );

  const data = await res.json();
  console.log(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>My Listings</h1>
      <div>
        {data?.map((adopters) => (
          <div key={adopters._id}>
            <Image
              src={adopters.imageUrl}
              alt={adopters.petName}
              height={80}
              width={200}
            />
            <h1>{adopters.petName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListings;
