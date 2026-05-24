// app/not-found.jsx

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { MdPets } from "react-icons/md";

const NotFoundPage = () => {
     return (
          <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

               {/* Animated Background Blobs */}
               <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
               <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

               {/* Floating Paw Prints Background */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <MdPets className="absolute top-20 left-20 text-4xl rotate-12" />
                    <MdPets className="absolute top-40 right-32 text-3xl -rotate-12" />
                    <MdPets className="absolute bottom-32 left-40 text-5xl rotate-45" />
                    <MdPets className="absolute bottom-20 right-20 text-4xl -rotate-45" />
                    <MdPets className="absolute top-1/2 left-10 text-2xl rotate-6" />
                    <MdPets className="absolute top-1/3 right-10 text-3xl -rotate-6" />
               </div>

               {/* Main Card */}
               <div className="relative mt-15 z-10 max-w-2xl w-full">
                    <div className="backdrop-blur-xl bg-white/3 border border-white/8 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50">

                         {/* Icon with Glow Ring */}
                         <div className="flex justify-center mb-8">
                              <div className="relative">
                                   {/* Animated Ring */}
                                   <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-400 to-emerald-600 blur-md opacity-50 animate-ping" />
                                   <div className="relative p-6 rounded-full bg-linear-to-br from-green-500/20 to-emerald-600/10 border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                                        <MdPets className="text-6xl md:text-7xl text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                                   </div>
                              </div>
                         </div>

                         {/* 404 with Stroke Effect */}
                         <div className="relative">
                              <h1 className="text-8xl md:text-9xl font-black text-center leading-none tracking-tighter">
                                   <span className="bg-linear-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                        404
                                   </span>
                              </h1>
                              {/* Subtle reflection */}
                              <h1 className="text-8xl md:text-9xl font-black text-center leading-none tracking-tighter absolute top-full left-0 right-0 opacity-[0.03] scale-y-[-1] pointer-events-none">
                                   404
                              </h1>
                         </div>

                         {/* Title */}
                         <h2 className="mt-6 text-3xl md:text-4xl font-bold text-center">
                              Oops!{" "}
                              <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                   Pet Not Found
                              </span>
                         </h2>

                         {/* Description */}
                         <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed text-center max-w-lg mx-auto">
                              The page or pet you are looking for might have been adopted already,
                              removed, or never existed in our shelter.
                         </p>

                         {/* Action Buttons */}
                         <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                              {/* Primary Button */}
                              <Link
                                   href="/"
                                   className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-green-500 to-emerald-600 font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                              >
                                   <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                   <FaArrowLeft className="relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
                                   <span className="relative z-10">Back To Home</span>
                              </Link>

                              {/* Secondary Button */}
                              <Link
                                   href="/pets"
                                   className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 font-medium hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] active:scale-95"
                              >
                                   <MdPets className="group-hover:rotate-12 transition-transform duration-300" />
                                   Browse Pets
                              </Link>

                         </div>

                         {/* Bottom Divider + Text */}
                         <div className="mt-10 flex items-center gap-4">
                              <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                              <p className="text-sm text-gray-500 whitespace-nowrap">
                                   Need help? Try searching for another adorable friend 🐾
                              </p>
                              <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default NotFoundPage;