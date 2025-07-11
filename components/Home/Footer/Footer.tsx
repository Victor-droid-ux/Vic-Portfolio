import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715] ">
      <div>
        <img
          src="/images/vicdevlogo2.png"
          alt="logo"
          height={180}
          width={180}
          className="mx-auto rounded-full bg-transparent"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Reviews</div>
        <div>Contact</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        {" "}
        © 2025 Onuh Victor Ali. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
