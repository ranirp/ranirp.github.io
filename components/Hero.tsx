import { FaDownload } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { FloatingNav } from "./ui/FloatingNavbar";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
} from "@tabler/icons-react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { dockLinks } from "@/data/index";
import { navItems } from "@/data/index";
import Image from "next/image";

const Hero = () => {
  const iconMap = {
    IconMail: IconMail,
    IconBrandLinkedin: IconBrandLinkedin,
    IconBrandGithub: IconBrandGithub,
    IconBrandTwitter: IconBrandTwitter,
  };

  // Transform data to include actual icon components
  const transformedDockLinks = dockLinks.map(link => ({
    ...link,
    icon: (() => {
      const IconComponent = iconMap[link.icon as keyof typeof iconMap];
      return <IconComponent className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
    })(),
  }));

  return (
    <div className="pb-20 pt-36 relative">
      <FloatingNav navItems={navItems} />

      {/* Spotlights - Fixed positioning and z-index */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight
        className="left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Background Grid - Simplified */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black-100 bg-grid-black-100/[0.2] dark:bg-grid-white/[0.03]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 my-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-center">

            {/* Left side - Text Content */}
            <div className="flex flex-col items-center lg:items-start justify-start order-1 lg:order-1 lg:col-span-2 lg:pr-8 min-h-[500px]">
              <div className="mb-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 dark:bg-gray-700/50 text-white border border-white/20 dark:border-gray-700 backdrop-blur-sm">
                  <span className="w-3 h-3 bg-emerald-600 rounded-full mr-3 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
                  Available for work
                </span>
              </div>

              <TextGenerateEffect
                words="Hi, I&apos;m Rani"
                className="text-center lg:text-left text-[32px] md:text-4xl lg:text-5xl text-black dark:text-white"
              />

              <TextGenerateEffect
                words="From concept to cloud: scalable full-stack systems with architectural integrity"
                className="text-center lg:text-left text-[32px] md:text-3xl lg:text-3xl text-black dark:text-white"
              />

              <p className="text-center lg:text-justify md:tracking-wider mb-4 text-sm md:text-base lg:text-base text-neutral-600 dark:text-white-100 lg:max-w-2xl">
                Fresh MSc graduate in Advanced Computer Science with expertise in full-stack development and cloud infrastructure. I&apos;m passionate about creating robust, user-centric applications that solve real-world problems and deliver tangible value.
              </p>
              <p className="text-center lg:text-justify md:tracking-wider mb-4 text-sm md:text-base lg:text-base text-neutral-600 dark:text-white-100 lg:max-w-2xl">
                Currently diving deeper into AI automation and intelligent agents to stay at the forefront of modern computing.
              </p>
              <p className="text-center lg:text-justify md:tracking-wider mb-2 text-sm md:text-base lg:text-base text-neutral-600 dark:text-white-100 lg:max-w-2xl">
                Fueled by coffee ☕, powered by code 💻 and always debugging life&apos;s mysteries.
              </p>

              <div className="-mt-1" onClick={() => {
                try {
                  const link = document.createElement('a');
                  link.href = '/assets/CV.pdf';
                  link.download = 'RaniKumari.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                } catch (error) {
                  console.error('Download failed:', error);
                  window.open('/assets/CV.pdf', '_blank');
                }
              }}>
                <MagicButton
                  title="Download CV"
                  icon={<FaDownload />}
                  position="right"
                />
              </div>
            </div>

            {/* Right side - 3D Image with Floating Dock */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-2 lg:col-span-1 lg:ml-8">
              <div className="relative">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 dark:bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple/[0.3] dark:border-white-300 border-black-200/[0.3] w-auto sm:w-[25rem] h-auto rounded-xl p-2 border">
                    <CardItem translateZ="100" className="w-full">
                      <Image
                        src="/Photo.jpg"
                        height="400"
                        width="400"
                        className="h-[28rem] w-full object-cover object-top rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
                        alt="Rani Kumari - Full Stack Developer"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>

                {/* Floating Dock positioned over the image */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                  <FloatingDock
                    items={transformedDockLinks}
                    desktopClassName="bg-white/90 dark:bg-gray-900 backdrop-blur-sm border border-black-200/50 dark:border-white-300/50 shadow-lg"
                    mobileClassName="bg-white/90 dark:bg-gray-900 backdrop-blur-sm border border-black-200/50 dark:border-white-300/50 shadow-lg"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;