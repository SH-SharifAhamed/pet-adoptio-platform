"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const SlideSection =  ({data}) => {

  return (
    <div className="overflow-hidden rounded-3xl w-full max-w-7xl mx-auto">
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
        {data?.slice(1, 7).map((pets) => (
          <SwiperSlide key={pets._id} className="relative">
            <Image
              src={pets.imageUrl}
              alt={pets.petName}
              width={1000}
              height={500}
              className="object-cover rounded-2xl lg:rounded-3xl h-[20vh] sm:h-[20vh] md:h-[30vh] lg:h-[30vh]"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-40 left-15 sm:left-10 z-10 max-w-xl text-white">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">
                {pets.petName}
              </h2>

              <p className="mt-2 text-sm sm:text-base">
                {pets.description}
              </p>

              <Link
                href={`/pets/${pets._id}`}
                className="inline-flex items-center gap-2 mt-4 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideSection;