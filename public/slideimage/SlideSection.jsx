"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div className="pt-12 sm:pt-5 overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide className="relative">
          <Image
            src="/bunny.jpg"
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
              >
                View All Books
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide className="relative">
          <Image
            src=""
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
              >
                View All Books
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide className="relative">
          <Image
            src="/slide-image/Hourse 1.jpg"
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
              >
                View All Books
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide className="relative">
          <Image
            src="/slide-image/pandas.jpg"
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
              >
                View All Books
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide className="relative">
          <Image
            src="/slide-image/parakeet female.jpg"
            alt="logo"
            width={735}
            height={225}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
              >
                View All Books
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 6 */}
        <SwiperSlide className="relative">
          <Image
            src="/slide-image/pets-1.jpg"
            alt="logo"
            width={735}
            height={225}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
              >
                View All Books
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
