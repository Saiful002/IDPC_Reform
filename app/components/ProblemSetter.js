"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SaifulImage from "../../public/Images/saiful.jpg";
import samimImage from "../../public/Images/samim.jpg";
import prantoImage from "../../public/Images/pranto.jpg";
import noyonImage from "../../public/Images/noyon.jpg";
import deanImage from "../../public/Images/dean.jpg";
import chairImage from "../../public/Images/chairperson.jpg";
import fahimImage from "../../public/Images/fahim.jpeg";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const ProblemSettersSlider = () => {
  const problemSetters = [
    { name: "Professor Dr. Md. Saiful Azad", image: deanImage, role: "Dean, Faculty of Science & Engineering" },
    { name: "Dr. Muhammad Aminur Rahman", image: chairImage, role: "Chairperson, Department of CSE" },
    { name: "Md. Fahimul Islam Fahim", image: fahimImage, role: "Organizing Head" },
    { name: "Saiful Kabir Chowdhury", image: SaifulImage, role: "Event Website Developer" },
    { name: "Md. Hosain Rohman Noyon", image: noyonImage, role: "Organizer & Problem Setter" },
    { name: "Ismatul Islam Pranto", image: prantoImage, role: "Organizer & Developer of GreenOJ" },
    { name: "Samim Reza", image: samimImage, role: "Organizer & Problem Setter" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center sm:px-16 md:px-16 px-6 py-16 bg-white overflow-hidden mt-24 py-16">
      {/* Floating Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>
   

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Minds Behind This Event
      </h2>

      {/* Swiper Container with max-width */}
      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
          className="flex items-center justify-center"
        >
          {problemSetters.map((setter, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="mx-auto w-64 h-64 rounded-full overflow-hidden shadow-xl mb-4">
                <Image src={setter.image} width={300} height={300} alt={setter.name} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
                {setter.name}
              </h2>
              <h4 className=" font-semibold text-gray-800 text-center">
                {setter.role}
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProblemSettersSlider;
