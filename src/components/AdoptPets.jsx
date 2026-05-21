"use client";

import React from "react";
import {
  Heart,
  Users,
  DollarSign,
  Brain,
  GraduationCap,
  Shield,
} from "lucide-react";

const reasons = [
  {
    title: "Save a Life",
    desc: "Adopting a pet gives a homeless animal a second chance at life and a loving home.",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    title: "Reduce Stray Population",
    desc: "Adoption helps control overpopulation and reduces the number of stray animals on the streets.",
    icon: Users,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Cost Effective",
    desc: "Adopted pets are usually vaccinated and health-checked, saving you initial medical costs.",
    icon: DollarSign,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Emotional Support",
    desc: "Pets provide companionship, reduce stress, and improve overall mental well-being.",
    icon: Brain,
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    title: "Already Trained",
    desc: "Many shelter pets are partially trained and socialized, making integration easier.",
    icon: GraduationCap,
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    title: "Unconditional Love",
    desc: "Adopted pets are incredibly loyal and form strong emotional bonds with their owners.",
    icon: Shield,
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

export default function WhyAdoptPets() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
          Make a Difference
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Why Adopt Pets?
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Choosing adoption means giving an animal a better life while gaining a
          loyal companion in return.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl ${item.bg} ${item.color} mb-4`}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
