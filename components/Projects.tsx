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
  demonstrate: string;
  img: string;
  technologies: { name: string; icon: string }[];
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
                      className="flex h-full flex-col rounded-xl border border-neutral-200 dark:border-white/[0.2] bg-white dark:bg-slate-950/50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-fadeIn"
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

                      {/* Demonstrates */}
                      <div className="mb-6 rounded-lg border border-neutral-200 bg-neutral-50/70 px-4 py-3 dark:border-white/[0.12] dark:bg-white/[0.04]">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-500 dark:text-purple-300">
                          Demonstrates
                        </p>
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                          {project.demonstrate}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-1 flex-col gap-4 pt-4">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                            Technologies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <div
                                key={technology.name}
                                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-purple-300 dark:border-white/[0.2] dark:bg-gray-200 dark:text-neutral-700"
                              >
                                <img
                                  src={technology.icon}
                                  alt=""
                                  aria-hidden="true"
                                  className="h-4 w-4 object-contain"
                                />
                                <span>{technology.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Project links */}
                        <div className="mt-auto flex items-center justify-end gap-3 pt-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-neutral-900/20 transition-all hover:-translate-y-0.5 hover:bg-neutral-700 hover:shadow-lg dark:bg-slate-200 dark:text-neutral-900 dark:hover:bg-neutral-200"
                            >
                              <span>Live Site</span>
                              <FaLocationArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-neutral-900/20 transition-all hover:-translate-y-0.5 hover:bg-neutral-700 hover:shadow-lg dark:bg-slate-200 dark:text-neutral-900 dark:hover:bg-neutral-200"
                            >
                              <FaGithub className="h-4 w-4" />
                              <span>GitHub</span>
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
          Recent <span className="text-purple ml-2">Projects</span>
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