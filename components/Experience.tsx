import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from 'next/image';

const Experience = () => {
  return (
    <div id="experience" className="py-16 w-full flex flex-col items-center justify-center min-h-screen">
      <div className="w-full flex justify-center items-center mb-12">
        <h1 className="heading text-center">
          Professional <span className="text-purple ml-2"> Experience </span>
        </h1>
      </div>

      <div className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-8">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.4rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.4rem* 0.96)`,
          }}
          className="w-full max-w-7xl text-black dark:text-white border-neutral-200 dark:border-slate-800 mx-auto"
        >
          <div className="flex flex-col">
            {workExperience.map((card, index) => (
              <React.Fragment key={card.id}>
                <div className="flex lg:flex-row flex-col p-6 md:p-8 lg:p-10 gap-6 lg:gap-8 items-center lg:items-center">
                  {/* Company Info */}
                  <div className="lg:w-1/4 flex flex-col items-center justify-center text-center">
                    {card.logo && (
                      <Image
                        src={card.logo}
                        alt={card.company}
                        className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-lg mb-3 mx-auto object-contain bg-white/5 p-1"
                        width={100}
                        height={100}
                      />
                    )}
                    <div className="w-full">
                      <h2 className="text-base md:text-lg lg:text-xl font-bold text-white mb-1">
                        {card.company}
                      </h2>
                      <h3 className="text-xs md:text-sm lg:text-base font-semibold text-purple mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs md:text-sm text-white-100 mb-1 font-medium">
                        {card.timeline}
                      </p>
                      <p className="text-xs md:text-sm text-white-100 font-medium">
                        {card.location.includes('(') ? (
                          <>
                            {card.location.split('(')[0].trim()}
                            <br />
                            ({card.location.split('(')[1]}
                          </>
                        ) : (
                          card.location
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Role Description */}
                  <div className="lg:w-3/4 lg:border-l lg:border-slate-700 lg:pl-6 flex flex-col justify-center">
                    <div className="mb-4">
                      <h4 className="text-white font-semibold text-sm md:text-base mb-2 text-left">About the Role:</h4>
                      {Array.isArray(card["About the Role:"]) ? (
                        <ul className="list-disc pl-5 space-y-2 text-left text-white-100 text-xs md:text-sm lg:text-base leading-relaxed">
                          {card["About the Role:"].map((item: string, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-justify text-white-100 text-xs md:text-sm lg:text-base leading-relaxed">
                          {card["About the Role:"]}
                        </p>
                      )}
                    </div>

                    {/* Skills & Technologies */}
                    <div className="mb-0">
                      <h4 className="text-white font-semibold text-sm md:text-base mb-2 text-left">Key Areas:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {card["Key Areas"].map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1.5 bg-gradient-to-r from-purple/20 to-blue-500/20 
                                    border border-purple/30 rounded-full text-xs md:text-sm text-white-100 
                                    hover:from-purple/30 hover:to-blue-500/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < workExperience.length - 1 && (
                  <div className="px-6 md:px-8 lg:px-10">
                    <div className="w-full border-t border-slate-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Experience;