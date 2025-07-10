"use client";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/Constants/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type
type NavProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10] w-full transition-all duration-200
        }`}
    >
      <div className="flex items-center h-full justify-between w-[95%] bg-[#0f0715] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/viclogo2.png"
          alt="Logo"
          width={170}
          height={90}
          className="ml-[-1.5rem] sm:ml-0 rounded-full bg-transparent"
        />
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav__link">{navlink.label}</p>
              </Link>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-900 font-semibold sm:text-base text-sm bg-transparent border border-yellow-400 hover:bg-yellow-400 transition-all duration-300 rounded-lg">
              Hire Me
            </button>

            {/* Burger */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
