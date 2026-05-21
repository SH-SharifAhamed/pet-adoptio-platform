// "use client";


import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`process.env.NEXT_API_URL/${_id}`, {});

  const data = await res.json();

  const {
    petName,
    description,
    Breed,
    gender,
    vaccinationStatus,
    imageUrl,
    Fee,
    Age,
    healthStatus,
    location,
    ownerEmail,
  } = data;

  return (
    <div className=" justify-center items-center p-10 my-25">
      <div className="flex gap-2 justify-end mb-5">
        <EditModal data={data} />
        <Button variant="outline">Delete</Button>
      </div>

      <Image
        alt={petName}
        src={imageUrl}
        width={600}
        height={200}
        className="h-100 lg:h-142 w-full rounded-xl object-cover"
      />

      <div className="p-2 text-white space-y-2">
        <p className="text-white text-2xl">Name: {petName}</p>
        <p className="text-white">{description}</p>
        <div className="grid grid-cols-2">
          <p className="text-xl">Breed: {Breed}</p>
          <p className="text-xl">Gender: {gender}</p>
          <p className="text-xl">Vaccination Status: {vaccinationStatus}</p>
          <p className="text-xl gap-2 flex items-center">
            <TbCoinTaka /> Price: {Fee}
          </p>
          <p className="text-xl">Age: {Age}</p>
          <p className="text-xl">Health Status: {healthStatus}</p>
          <p className="text-xl gap-2 flex items-center">
            <MdLocationPin /> Location: {location}
          </p>
          <p className="text-xl">Owner Email: {ownerEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
