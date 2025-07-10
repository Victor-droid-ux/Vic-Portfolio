"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced] text-white h-[250px] flex flex-col justify-between">
      <div>
        <img
          src={service.icon}
          alt={service.title}
          className="w-[50px] h-[50px]"
        />
        <h1 className="mt-4 text-lg font-bold text-white">{service.title}</h1>
        <p className="mt-3 text-sm text-white text-opacity-80 line-clamp-4">
          {service.description}
        </p>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
