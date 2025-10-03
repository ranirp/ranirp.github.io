"use client";
import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import { FaGithub } from 'react-icons/fa6';

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  githubLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  githubLink?: string;
}) => {
  console.log('BentoGridItem rendered with githubLink:', githubLink);
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col space-y-4 rounded-xl border border-neutral-200 bg-white py-6 px-6 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-slate-950/50 dark:shadow-none h-[36rem]",
        className,
      )}
    >
      {/* Title */}
      <div className="flex items-center justify-center mb-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            {icon}
            <div className="font-sans font-bold text-xl text-neutral-600 dark:text-neutral-200 text-center">
              {title}
            </div>
          </div>
        </div>
      </div>

      {/* Image display */}
      {header}

      {/* Description */}
      <div className="flex-1 flex flex-col justify-between">
        {description}
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const ProjectImage = ({ img, title }: { img: string; title: string }) => (
    <div className="relative w-full rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '2950/1774' }}>
      <Image
        src={img}
        alt={`${title} cover`}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 70vw"
        quality={100}
        priority={true}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );

  const ProjectContent = ({ item }: { item: typeof projects[0] }) => (
    <div className="flex flex-col h-full">
      {/* Description */}
      <div className="flex-1 mb-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {item.des}
        </p>
      </div>

      {/* Icons , Live Site & GitHub */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        {/* Tech stack icons */}
        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap max-w-full">
          {item.iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-neutral-200 dark:border-white/[0.2] rounded-full bg-neutral-50 dark:bg-gray-50/50 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center flex-shrink-0 transition-transform hover:scale-110"
            >
              <Image
                src={icon}
                alt={`Tech ${index + 1}`}
                width={16}
                height={16}
                className="object-contain sm:w-5 sm:h-5"
              />
            </div>
          ))}
        </div>

        {/* Live Site & GitHub buttons */}
        <div className="flex items-center justify-center sm:justify-end space-x-4 flex-shrink-0">
          {/* Live Site button */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer group"
            >
              <p className="text-sm text-purple font-medium group-hover:text-purple/80 transition-colors">
                Live Site
              </p>
              <FaLocationArrow className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" color="#CBACF9" />
            </a>
          )}

          {/* GitHub button */}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group/github"
            >
              <FaGithub className="w-4 h-4 text-neutral-600 dark:text-neutral-300 group-hover/github:text-neutral-800 dark:group-hover/github:text-neutral-100 transition-colors" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const bentoItems = projects.slice(0, 2).map((item) => ({
    title: item.title,
    description: <ProjectContent item={item} />,
    header: <ProjectImage img={item.img} title={item.title} />,
    className: "cursor-pointer group",
    icon: null,
    githubLink: item.github,
  }));

  return (
    <>
      <div id="projects" className="py-12 relative z-10">
        <h1 className="heading text-center">
          Recent <span className="text-purple ml-2">Projects</span>
        </h1>
      </div>

      <div className="flex items-center justify-center p-6 mt-0 mb-20 relative z-10">
        <BentoGrid>
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
              githubLink={item.githubLink}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
};

export default RecentProjects;