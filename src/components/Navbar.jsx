import React from "react";
import Link from "next/link";
import { TbBrandTumblr } from "react-icons/tb";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-slate-100 hidden">
      <Container>
        <div className="fixed left-auto z-50 bg-slate-500 flex items-center justify-between py-4">
          <Link href="#top" className="flex items-center gap-2">
            <TbBrandTumblr className="border-2 border-gray-500 text-yellow-600 rounded-full h-[35px] w-[35px] p-[6px]" />
            <span className="font-medium">Portfolio</span>
          </Link>
          <nav className="flex gap-4 font-medium text-[14px]">
            <Link
              href="#about"
              className="hover:text-yellow-500 transition-all duration-500 ease-out"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-yellow-500 transition-all duration-500 ease-out"
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="hover:text-yellow-500 transition-all duration-500 ease-out"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-yellow-500 transition-all duration-500 ease-out"
            >
              Testimonials
            </Link>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
