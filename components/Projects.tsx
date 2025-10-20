"use client";
import React, { useState, useEffect } from 'react';
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa6';
import { projects } from "@/data";

// Define the Project type
type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link?: string;
  github?: string;
};

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(2);
  const totalSlides = Math.ceil(projects.length / projectsPerView);

  useEffect(() => {
    const updateProjectsPerView = () => {
      const newProjectsPerView = window.innerWidth < 768 ? 1 : 2;
      setProjectsPerView(newProjectsPerView);
      setCurrentIndex(0); // Reset to first slide when switching view
    };

    updateProjectsPerView();
    window.addEventListener('resize', updateProjectsPerView);
    return () => window.removeEventListener('resize', updateProjectsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Projects Grid - Carousel View */}
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const slideProjects = projects.slice(
              slideIndex * projectsPerView,
              (slideIndex + 1) * projectsPerView
            );
            return (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {slideProjects.map((project, idx) => (
                    <div
                      key={project.id}
                      className="rounded-xl border border-neutral-200 dark:border-white/[0.2] bg-white dark:bg-slate-950/50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-fadeIn"
                      style={{
                        animation: `fadeIn 0.5s ease-in-out ${idx * 0.1}s both`
                      }}
                    >
                      {/* Title */}
                      <div className="flex items-center justify-center mb-4">
                        <h3 className="font-sans font-bold text-xl text-neutral-600 dark:text-neutral-200 text-center">
                          {project.title}
                        </h3>
                      </div>

                      {/* Image */}
                      <div className="relative w-full rounded-lg overflow-hidden mb-6" style={{ aspectRatio: '2950/1774' }}>
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {project.des}
                        </p>
                      </div>

                      {/* Icons and Links */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                          {project.iconLists.map((icon, index) => (
                            <div
                              key={index}
                              className="border border-neutral-200 dark:border-white/[0.2] rounded-full bg-neutral-50 dark:bg-gray-200 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center transition-transform hover:scale-110"
                            >
                              <img
                                src={icon}
                                alt={`Tech ${index + 1}`}
                                className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-center sm:justify-end space-x-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center cursor-pointer group"
                            >
                              <p className="text-sm text-purple-500 font-medium group-hover:text-purple-400 transition-colors">
                                Live Site
                              </p>
                              <FaLocationArrow className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-400" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            >
                              <FaGithub className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      {totalSlides > 1 && (
        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous projects"
          >
            <FaChevronLeft className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-10 bg-purple-500"
                    : "w-2.5 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all hover:scale-110 active:scale-95"
            aria-label="Next projects"
          >
            <FaChevronRight className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out both;
        }
      `}</style>
    </div>
  );
};

const RecentProjects = () => {
  return (
    <>
      <div id="projects" className="py-12 relative z-10">
        <h1 className="heading text-center text-4xl font-bold">
          Recent <span className="text-purple-500 ml-2">Projects</span>
        </h1>
      </div>

      {/* Carousel Section */}
      <div className="px-6 mb-20 relative z-10">
        <ProjectCarousel projects={projects} />
      </div>
    </>
  );
};

export default RecentProjects;