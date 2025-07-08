"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { Carousel } from "./ui/carousel";

const RecentProjects = () => {
  const carouselSlides = projects.map((item) => ({
    title: item.title,
    button: "Check Live Site",
    backgroundColor: "#13162D",
    content: (
      <div className="w-full">
        <h1 className="font-bold lg:text-3xl md:text-xl text-base line-clamp-1 mb-20 text-center">
          {item.title}
        </h1>

        <div
          className="relative flex items-center justify-center w-full max-w-xs sm:max-w-md md:max-w-lg h-40 sm:h-56 md:h-72 lg:h-[30vh] mb-1 px-2 sm:px-8 mx-auto"
          style={{ top: '-24px' }}
        >
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl border border-white/[0.1] flex items-center justify-center"
            style={{ background: 'url(/bg.png) center/cover no-repeat', backgroundColor: '#13162D' }}
          >
            <img
              src={item.img}
              alt="cover"
              className="z-10 object-contain rounded-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 shadow-none"
              style={{
                width: '80%',
                height: '85%',
                objectFit: 'contain',
                boxShadow: 'none',
                position: 'relative',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20 lg:rounded-3xl pointer-events-none" />
          </div>
        </div>

        <p
          className="lg:text-lg lg:font-normal font-light text-sm"
          style={{
            color: "#BEC1DD",
            margin: "0.5vh 0",
          }}
        >
          {item.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Live Site
            </p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </div>
    )
  }));

  return (
    <>
      <div id="projects" className="py-14">
        <h1 className="heading text-center">
          Recent <span className="text-purple ml-2"> Projects </span>
        </h1>
      </div>
      <div className="flex items-center justify-center p-2 mt-0">
        <Carousel slides={carouselSlides} />
      </div>
    </>
  );
};

export default RecentProjects;