import Image from "next/image";
import Link from "next/link";

const petCard = ({ pets }) => {
  const { _id, petName, gender, imageUrl, Fee, Age, healthStatus } = pets;

  return (
    <div className="bg-white rounded-lg shadow-md items-center border">
      <div className="flex flex-col items-center p-2">
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
      </div>
    </div>
  );
};

export default petCard;
