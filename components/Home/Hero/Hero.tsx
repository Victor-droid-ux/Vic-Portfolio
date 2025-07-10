import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-gradient-to-b from-[#0f0715] to-[#050709] overflow-hidden relative">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="ml-4 md:ml-8 lg:ml-12">
            <h1
              data-aos="fade-left"
              data-aos-delay="0"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]"
            >
              {BaseInfo.position}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {BaseInfo.description}
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className="md:px-8 md:py-3 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 flex items-center gap-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>

          {/* Image content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto rounded-3xl md:rounded-[2rem] border-[3.5px] border-blue-900 overflow-hidden"
          >
            <img
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
