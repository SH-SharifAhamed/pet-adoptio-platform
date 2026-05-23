"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
// import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Dropdwon from "@/components/Dropdwon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pets", label: "All Pets" },
  { href: "/add-pet", label: "Add Pets" },
  { href: "/requests", label: "My Requests" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0f0f1a]/80 backdrop-blur-xl border-b border-white/10">
      <nav className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/image/logo-1.png"
            alt="Pet Adoption Logo"
            width={45}
            height={45}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Pet Adoption
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-green-400 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-linear-to-r from-purple-500 to-green-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <ul className="flex items-center gap-3">
                <li>
                  <Link href="/deshboard">
                    <Dropdwon />
                  </Link>
                </li>
                <li>
                  <Button onClick={handleLogOut}>LogOut</Button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="px-5 py-2 text-sm font-semibold text-green-400 border border-green-500/30 rounded-full hover:bg-green-500/10 transition-all duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-green-600 rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1a]/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-green-400 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              {user ? (
                <>
                  <ul className="flex items-center gap-3">
                    <li>
                      <Link href="/deshboard">
                        <Dropdwon />
                      </Link>
                    </li>
                    <li>
                      <Button onClick={handleLogOut}>LogOut</Button>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="px-5 py-2 text-sm font-semibold text-green-400 border border-green-500/30 rounded-full hover:bg-green-500/10 transition-all duration-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="px-5 py-2 text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-green-600 rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
