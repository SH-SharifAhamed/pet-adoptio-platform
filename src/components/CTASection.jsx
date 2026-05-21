"use client";

import { useState } from "react";
import { ArrowRight, PawPrint, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-white/5 animate-float-slow">
          <PawPrint className="w-32 h-32" strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 right-10 text-white/5 animate-float-slow animation-delay-2000">
          <PawPrint className="w-40 h-40" strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-white/5 animate-float">
          <Heart className="w-24 h-24" strokeWidth={1} />
        </div>
        <div className="absolute top-20 right-1/4 text-white/5 animate-float animation-delay-3000">
          <Sparkles className="w-20 h-20" strokeWidth={1} />
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>Join 1,200+ Happy Pet Parents</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
          Ready to Meet Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
            New Best Friend?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
          Every pet deserves a loving home. Start your adoption journey today
          and change a life forever — including your own.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <Link
            href="/adopt"
            onMouseEnter={() => setHoveredBtn("adopt")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Adopt a Pet Now
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredBtn === "adopt" ? "translate-x-1" : ""
                }`}
              />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/pets"
            onMouseEnter={() => setHoveredBtn("browse")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="group px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            Browse All Pets
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 ${
                hoveredBtn === "browse" ? "translate-x-1" : ""
              }`}
            />
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-blue-200/60 text-sm animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>No adoption fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Vaccinated pets</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Verified shelters</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}
