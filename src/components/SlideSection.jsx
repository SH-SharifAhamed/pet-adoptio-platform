"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function App({ data }) {
 

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
            src="/slideimage/bunny.jpg"
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute bottom-15 left-10 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Rabbit
              </h2>
              <p>
                This adorable bunny is friendly, calm, and easy to care for. It
                enjoys quiet environments, gentle handling, and makes a perfect
                pet for families or first-time pet owners.
              </p>

              <Link
                href="/pets/6a0c60844cd1555f3dbd6342"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide className="relative">
          <Image
            src="/slideimage/Cat-1.jpg"
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute bottom-15 left-10 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Tome
              </h2>
              <p>
                A healthy cat is active, playful, and has bright eyes with a
                shiny, soft coat. Regular meals, clean water, vaccinations, and
                proper care help keep cats happy and disease-free.
              </p>

              <Link
                href="/pets/6a0bcfb9cab004f3b291fdf1"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide className="relative">
          <Image
            src="/slideimage/Hourse 1.jpg"
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute bottom-15 left-10 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Spirit
              </h2>
              <p>
                A healthy horse is active, playful, and has bright eyes with a
                shiny, soft coat. Regular meals, clean water, vaccinations, and
                proper care help keep cats happy and disease-free.
              </p>

              <Link
                href="/pets/6a0bda3ccab004f3b291fdf4"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide className="relative">
          <Image
            src="/slideimage/pandas.jpg"
            alt="logo"
            width={735}
            height={425}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute bottom-15 left-10 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Pandus
              </h2>
              <p>
                The giant panda is a calm and adorable animal that spends most
                of its time eating bamboo and resting. It is friendly in nature
                and symbolizes peace and conservation efforts around the world.
              </p>

              <Link
                href="/pets/6a0c61984cd1555f3dbd6343"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide className="relative">
          <Image
            src="/slideimage/parakeet female.jpg"
            alt="logo"
            width={735}
            height={225}
            className="object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
          />
          <div className="absolute bottom-15 left-10 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Luna
              </h2>
              <p>
                A small, colorful, and intelligent bird known for its playful
                nature and ability to mimic sounds.
              </p>

              <Link
                href="/pets/6a0c62b54cd1555f3dbd6344"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 6 */}
        <SwiperSlide className="relative">
          <Image
            src="/slideimage/pets-1.jpg"
            alt="logo"
            width={735}
            height={225}
            className="object-cover w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[20vh]"
          />
          <div className="absolute bottom-15 left-10 flex items-end justify-start px-4">
            <div>
              <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Spirit
              </h2>
              <p>
                A healthy horse is active, playful, and has bright eyes with a
                shiny, soft coat. Regular meals, clean water, vaccinations, and
                proper care help keep cats happy and disease-free.
              </p>

              <Link
                href="/pets/6a0bd160cab004f3b291fdf3"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
              >
                Adopt Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
