"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow bg-[#191924]/10 backdrop-blur-md border-b border-[#191924]/20">
      <nav className=" flex justify-between items-center px-4 py-3 max-w-6xl mx-auto">
        <div className="flex gap-2 items-center">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/image/logo-1.png"}
              alt="logo"
              loading="eager"
              width={60}
              height={60}
              className="object-cover h-auto w-auto"
            />
            <span className="text-2xl bg-linear-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
              Pet Adoption
            </span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm text-green-500">
          <li className="relative group">
            <Link
              href="/"
              className="px-2 text-2xl font-bold py-1 transition-all duration-300 hover:text-green-600"
            >
              Home
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/pets"
              className="px-2 py-1 text-2xl font-bold transition-all duration-300 hover:text-green-600"
            >
              All Pets
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link
              href="/add-pet"
              className="px-2 py-1 text-2xl font-bold transition-all duration-300 hover:text-green-600"
            >
              Add Pets
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link
              href="/requests"
              className="px-2 py-1 text-2xl font-bold transition-all duration-300 hover:text-green-600"
            >
              My Requests
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <div className="hidden md:flex gap-2.5 items-center text-green-500 font-black">
          <Link
            href={"/signin"}
            className="flex items-center gap-2 border-2 border-blue-600 px-4 py-2 hover:bg-green-500 
        hover:text-white transition-colors duration-300 rounded-full"
          >
            Sign In
          </Link>

          <Link
            href={"/signup"}
            className="flex items-center gap-2 border-2 border-blue-600 px-4 py-2 hover:bg-green-500 
        hover:text-white transition-colors duration-300 rounded-full"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden cursor-pointer text-white">
          {open ? (
            <FaTimes
              onClick={() => setOpen(false)}
              className="text-xl text-red-500"
            />
          ) : (
            <FaBars
              onClick={() => setOpen(true)}
              className="text-xl text-white"
            />
          )}
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4 text-white bg-[#191924]/10 backdrop-blur-md border-b border-[#191924]/20">
          <ul className="flex flex-col gap-4 text-green-500 text-sm font-bold">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/pets" onClick={() => setOpen(false)}>
                All Pets
              </Link>
            </li>
          </ul>

          <Link
            href=""
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full 
            backdrop-blur-md border-2 border-blue-600 text-blue-600
            hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            My Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
