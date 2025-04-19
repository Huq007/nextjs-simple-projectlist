import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex
    flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-50">
          Explore Our Products
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Discover a curated collection of high-quality products designed to
          meet your every need. Whether you're looking for innovation,
          affordability, or elegance, our selection offers something for
          everyone—crafted with care, backed by quality, and ready to elevate
          your experience.
        </p>
        <div className="mt-4">
          <Link href={"/products"} className="px-4 py-2 rounded-md">
            <Button
              borderRadius="1.45rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              See all Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
