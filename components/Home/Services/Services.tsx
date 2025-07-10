import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div data-aos="fade-up" className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[80%] mx-auto mt-20">
        {servicesData.map((service, i) => (
          <div
            key={service.id}
            data-aos="flip-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}ms`}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
