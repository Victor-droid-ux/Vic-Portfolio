import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/Data/data";
import React from "react";
import Blogcard from "./BlogCard";

const Blog = () => {
  return (
    <div data-aos="fade-up" className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>My Blog</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {blogs.map((blog, i) => {
          return (
            <div
              key={blog.id}
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
            >
              <Blogcard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
