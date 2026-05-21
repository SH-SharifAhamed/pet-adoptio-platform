// "use client";

import { ArrowChevronDown, ArrowChevronRight } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { MdPets } from "react-icons/md";

const HomeSection = async () => {
  const res = await fetch(process.env.NEXT_API_URL, {
    cache: "no-cache",
  });
  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-6xl mx-auto my-15">
      <h1 className="flex items-center gap-2 mb-2 text-2xl font-bold">
        <MdPets /> Recent Pets
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.slice(0, 6).map((pets) => {
          const { _id, petName, gender, imageUrl, Fee, Age, healthStatus } =
            pets;
          return (
            <div key={_id} className="flex flex-col items-center">
              <Card>
                <Image
                  alt="petName"
                  src={imageUrl}
                  width={200}
                  height={200}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <h2 className="text-slate-700 text-left text-lg font-semibold w-full">
                  {petName}
                </h2>

                <div className="grid grid-cols-2 p-2 text-slate-700">
                  <p>Gender: {gender}</p>
                  <p>Fee: {Fee}</p>
                  <p>Age: {Age}</p>
                  <p>Health Status: {healthStatus}</p>
                </div>

                <div className="flex w-full gap-1 justify-between p-2">
                  <Link href={"/signin"}>
                    <button className="cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300">
                      Adopt
                    </button>
                  </Link>

                  <button className="cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300">
                    <Link href={`/pets/${_id}`}>view Details</Link>
                  </button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-4">
        <Link
          href="/pets"
          className="flex justify-center items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
        >
          View All Pets <ArrowChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default HomeSection;
