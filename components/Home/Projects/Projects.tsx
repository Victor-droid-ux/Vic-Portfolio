import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div data-aos="fade-down" className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading> My Projects </SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => (
          <div
            key={project.id}
            data-aos="flip-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}ms`}
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transiton-all duration-300"
          >
            <Link href={project.url} target="blank">
              <img
                src={project.image}
                alt="project"
                width={300}
                height={200}
                className="w-full"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
