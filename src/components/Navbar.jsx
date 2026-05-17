import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="static flex justify-between items-center p-4 bg-white transition-all duration-300"
    >
      <ul className="flex gap-4">
        <li>
          <Link
            href={"/"}
            className="flex items-center font-bold text-xl text-green-500"
          >
            <Image
              src="/image/logo.png"
              alt="Vercel Logo"
              width={80}
              height={80}
            />
            Pet Adoption
          </Link>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/pets"}>All Pets</Link>
        </li>
      </ul>
           </nav>
       
  );
};

export default Navbar;
