import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Banner from "../Images/banner.jpg";
export const Slide = () => {
  return (
    <div>
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 5000 }}
          className="swiper-slide"
          data-swiper-autoplay="2000"
          injectStyles={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="overflow-hidden">
            <div className="flex-col image-1 w-full flex align-items-center justify-around">
              
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="origin-bottom"
                  width={370}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden">
            <div className="flex-col image-1 w-full flex align-items-center justify-around">
              
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="origin-bottom"
                  width={370}
                />
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="overflow-hidden">
            <div className="xl-col image-1 flex align-items-center justify-around">
              <div className="flex flex-col gap-4">
                <span className="flex font-Bebas_Neue  font-[600]  flex-col text-8xl sm:text-[400%]">
                  <span className="tracking-widest text-blue-600">
                    Enjoy <span className="text-red-500">Your</span>
                  </span>
                  <span className="tracking-widest  text-red-500">
                    Morning <span className="text-blue-600">Cakes</span>
                  </span>
                </span>
                <span className="block font-Vollkorn text-red-800 flex-col color sm:text-[70%] sm:flex">
                  <p>
                    Boost your productivity and build your mood with a glass of
                    coffee in the morning, 100% natural from garden.
                  </p>
                </span>
                <div className="flex align-items-center justify-around gap-3 ">
                  <div className="flex flex-col gap-2 align-items-center justify-center">
                    <span className="text-4xl flex gap-2 font-Bebas_Neue">
                      <ConunUp
                        start={30}
                        end={100}
                        duration={4}
                        className="color font-extrabold sm:text-[100%]"
                      />
                      <span className="text-orange-600 font-bold">+</span>
                    </span>
                    <span className="flex color text-xl font-bold text-uppercase font-Staatliches tracking-widest gap-1 sm:text-[100%]">
                      <span>Our Cliens</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 align-items-center justify-center">
                    <span className="text-4xl flex gap-2 font-Bebas_Neue">
                      <ConunUp
                        start={500}
                        end={1500}
                        duration={4}
                        className="color font-extrabold sm:text-[100%]"
                      />
                      <span className="text-orange-600 font-bold">+</span>
                    </span>
                    <span className="flex color text-xl font-bold text-uppercase font-Staatliches tracking-widest gap-1 sm:text-[100%]">
                      <span>Our Cliens</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 align-items-center justify-center">
                    <span className="text-4xl flex gap-2 font-Bebas_Neue">
                      <ConunUp
                        start={0}
                        end={30}
                        duration={4}
                        className="color font-extrabold sm:text-[100%]"
                      />
                      <span className="text-orange-600 font-bold">+</span>
                    </span>
                    <span className="flex color text-xl font-bold text-uppercase font-Staatliches tracking-widest gap-1 sm:text-[100%]">
                      <span>Event Space</span>
                    </span>
                  </div>
                </div>
                <div
                  
                  className="flex w-max align-items-center justify-center bg-red-800  gap-3 text-white font-semibold text-uppercase  pl-5 rounded-full "
                >
                  Order Now
                  <span className="bg-white text-black transition duration-150 ease-ou hover:origin-center  hover:rotate-45 p-3 border-none position-relative shadow-lg shadow-zinc-100/100 left-1 rounded-full"></span>
                </div>
              </div>
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="origin-bottom -rotate-12 bg-transparent"
                  width={375}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden">
            <div className="xl-col image-1 flex align-items-center justify-around">
              <div className="flex flex-col gap-7">
                <span className="flex font-Bebas_Neue  font-[600]  flex-col text-8xl sm:text-[390%]">
                  <span className="tracking-widest text-blue-600">
                    Enjoy <span className="text-red-500">Your</span>
                  </span>
                  <span className="tracking-widest  text-red-500">
                    Morning <span className="text-blue-600">Dessert</span>
                  </span>
                </span>
                <span className="block font-Vollkorn text-red-800 flex-col color sm:text-[70%] sm:flex">
                  <p>
                    Boost your productivity and build your mood with a glass of
                    coffee in the morning, 100% natural from garden.
                  </p>
                </span>
                <div className="flex align-items-center justify-around gap-3 ">
                  <div className="flex flex-col gap-2 align-items-center justify-center">
                    <span className="text-4xl flex gap-2 font-Bebas_Neue">
                      <ConunUp
                        start={30}
                        end={100}
                        duration={4}
                        className="color font-extrabold sm:text-[100%]"
                      />
                      <span className="text-orange-600 font-bold">+</span>
                    </span>
                    <span className="flex color text-xl font-bold text-uppercase font-Staatliches tracking-widest gap-1 sm:text-[100%]">
                      <span>Our Cliens</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 align-items-center justify-center">
                    <span className="text-4xl flex gap-2 font-Bebas_Neue">
                      <ConunUp
                        start={500}
                        end={1500}
                        duration={4}
                        className="color font-extrabold sm:text-[100%]"
                      />
                      <span className="text-orange-600 font-bold">+</span>
                    </span>
                    <span className="flex color text-xl font-bold text-uppercase font-Staatliches tracking-widest gap-1 sm:text-[100%]">
                      <span>Our Cliens</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 align-items-center justify-center">
                    <span className="text-4xl flex gap-2 font-Bebas_Neue">
                      <ConunUp
                        start={0}
                        end={30}
                        duration={4}
                        className="color font-extrabold sm:text-[100%]"
                      />
                      <span className="text-orange-600 font-bold">+</span>
                    </span>
                    <span className="flex color text-xl font-bold text-uppercase font-Staatliches tracking-widest gap-1 sm:text-[100%]">
                      <span>Event Space</span>
                    </span>
                  </div>
                </div>
                <div
                 
                  className="flex w-max align-items-center justify-center bg-red-800  gap-3 text-white font-semibold text-uppercase  pl-5 rounded-full "
                >
                  Order Now
                  <span className="bg-white text-black transition duration-150 ease-ou hover:origin-center  hover:rotate-45 p-3 border-none position-relative shadow-lg shadow-zinc-100/100 left-1 rounded-full">
                    
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={Banner}
                  alt=""
                  className="origin-bottom -rotate-12 "
                  width={390}
                />
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};
