"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const successStories = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Adopted a Dog",
    story:
      "I adopted a stray dog through this platform. The process was smooth and very professional. Now my life feels complete!",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Cat Adoption",
    story:
      "I found my lovely cat here. The platform made it super easy to connect with the shelter. Highly recommended to all animal lovers!",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    id: 3,
    name: "Karim Uddin",
    role: "Happy Pet Owner",
    story:
      "Very trusted system. I adopted two pets and both are healthy and vaccinated. The follow-up support is amazing too!",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatima Begum",
    role: "Rescue Volunteer",
    story:
      "As a volunteer, I've seen countless happy endings through this platform. It truly bridges the gap between shelters and loving homes.",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
];

export default function SuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const activeStory = successStories[activeIndex];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % successStories.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + successStories.length) % successStories.length,
    );
  }, []);

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="w-full py-20 px-4 md:px-12 bg-linear-to-b from-slate-50 to-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Success Stories
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
            Real experiences from happy pet adopters who found their perfect
            companions
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous story"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next story"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-8 right-8 text-blue-100">
              <svg
                className="w-24 h-24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div
              key={activeStory.id}
              className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${
                direction >= 0 ? "animate-fade-in-up" : "animate-fade-in-down"
              }`}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 animate-spin-slow p-1">
                  <div className="w-full h-full rounded-full bg-white" />
                </div>
                <img
                  src={activeStory.image}
                  alt={activeStory.name}
                  className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(activeStory.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-8 max-w-2xl relative z-10">
                &ldquo;{activeStory.story}&rdquo;
              </blockquote>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {activeStory.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mt-1">
                  {activeStory.role}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100">
              <div
                className={`h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isAutoPlaying ? "animate-progress" : ""
                }`}
                style={{ width: isAutoPlaying ? "100%" : "0%" }}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {successStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => goToSlide(index)}
                className={`group relative p-2 focus:outline-none`}
                aria-label={`Go to ${story.name}'s story`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300 group-hover:bg-slate-400"
                  }`}
                />
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-full bg-blue-100 animate-ping opacity-75" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
          {[
            { label: "Happy Adoptions", value: "1,200+" },
            { label: "Trusted Shelters", value: "45" },
            { label: "Success Rate", value: "98%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
            >
              <div className="text-3xl font-bold text-slate-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 5s linear;
        }
      `}</style>
    </section>
  );
}
