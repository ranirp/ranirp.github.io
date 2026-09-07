import React from 'react';
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { skills } from '@/data';
import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiExpress, SiPython, SiFlask, SiFastapi,
    SiPostman, SiSwagger, SiJira, SiPostgresql, SiMongodb,
    SiMysql, SiGit, SiGitlab, SiFirebase,
    SiDocker, SiKubernetes, SiGithubactions
} from 'react-icons/si';
import { FaCode, FaMicrosoft, FaInfinity, FaKey, FaMobileAlt } from 'react-icons/fa';
import { FiLayers, FiServer, FiTool, FiRotateCw, FiFileText } from 'react-icons/fi';
import { MdApi } from 'react-icons/md';

// Card background gradients per category
const categoryColors: Record<string, string> = {
    "Technical Delivery & Collaboration": "from-slate-500/20 to-cyan-500/10",
    "Backend & Full-Stack Engineering": "from-blue-500/20 to-emerald-500/10",
    "APIs & System Design": "from-teal-500/20 to-violet-500/10",
    "Databases & Cloud": "from-indigo-500/20 to-fuchsia-500/10",
    "DevOps & Delivery": "from-orange-500/20 to-yellow-500/10",
    "Architecture & Engineering Practices": "from-pink-500/20 to-lime-500/10",
    "AI & Emerging Technologies": "from-violet-500/20 to-sky-500/10",
};

// Category icon colors (used for the header icon only)
const iconColors: Record<string, string> = {
    "Technical Delivery & Collaboration": "text-slate-600 dark:text-slate-400",
    "Backend & Full-Stack Engineering": "text-blue-600 dark:text-blue-400",
    "APIs & System Design": "text-teal-600 dark:text-teal-400",
    "Databases & Cloud": "text-purple-600 dark:text-purple-400",
    "DevOps & Delivery": "text-orange-600 dark:text-orange-400",
    "Architecture & Engineering Practices": "text-pink-600 dark:text-pink-400",
    "AI & Emerging Technologies": "text-amber-600 dark:text-amber-400",
};

// Per-technology icon + badge color
const techIcons: Record<string, { icon: React.ComponentType<any>; color: string; badge: string }> = {
    // Backend & Full-Stack
    "Node.js": { icon: SiNodedotjs, color: "text-green-600", badge: "bg-green-50  dark:bg-green-950  text-green-800  dark:text-green-200  border-green-300  dark:border-green-700" },
    "TypeScript": { icon: SiTypescript, color: "text-blue-600", badge: "bg-blue-50   dark:bg-blue-950   text-blue-800   dark:text-blue-200   border-blue-300   dark:border-blue-700" },
    "JavaScript": { icon: SiJavascript, color: "text-yellow-500", badge: "bg-yellow-50 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700" },
    "Express.js": { icon: SiExpress, color: "text-gray-700 dark:text-gray-300", badge: "bg-gray-50  dark:bg-gray-900   text-gray-700   dark:text-gray-300   border-gray-300   dark:border-gray-600" },
    "React": { icon: SiReact, color: "text-cyan-500", badge: "bg-cyan-50   dark:bg-cyan-950   text-cyan-800   dark:text-cyan-200   border-cyan-300   dark:border-cyan-700" },
    "Next.js": { icon: SiNextdotjs, color: "text-gray-900 dark:text-white", badge: "bg-gray-50  dark:bg-gray-900   text-gray-800   dark:text-gray-200   border-gray-300   dark:border-gray-600" },
    "Python": { icon: SiPython, color: "text-blue-500", badge: "bg-blue-50   dark:bg-blue-950   text-blue-800   dark:text-blue-200   border-blue-300   dark:border-blue-700" },
    "Flask": { icon: SiFlask, color: "text-gray-700 dark:text-gray-300", badge: "bg-gray-50  dark:bg-gray-900   text-gray-700   dark:text-gray-300   border-gray-300   dark:border-gray-600" },

    // APIs & System Design
    "RESTful APIs": { icon: MdApi, color: "text-teal-600", badge: "bg-teal-50   dark:bg-teal-950   text-teal-800   dark:text-teal-200   border-teal-300   dark:border-teal-700" },
    "OpenAPI / Swagger": { icon: SiSwagger, color: "text-green-600", badge: "bg-green-50  dark:bg-green-950  text-green-800  dark:text-green-200  border-green-300  dark:border-green-700" },
    "OAuth 2.0": { icon: FaKey, color: "text-red-600", badge: "bg-red-50    dark:bg-red-950    text-red-800    dark:text-red-200    border-red-300    dark:border-red-700" },
    "JWT Authentication": { icon: FaKey, color: "text-yellow-600", badge: "bg-yellow-50 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700" },
    "FastAPI": { icon: SiFastapi, color: "text-teal-600", badge: "bg-teal-50   dark:bg-teal-950   text-teal-800   dark:text-teal-200   border-teal-300   dark:border-teal-700" },
    "Postman": { icon: SiPostman, color: "text-orange-500", badge: "bg-orange-50 dark:bg-orange-950 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700" },

    // Databases & Cloud
    "PostgreSQL": { icon: SiPostgresql, color: "text-blue-600", badge: "bg-blue-50   dark:bg-blue-950   text-blue-800   dark:text-blue-200   border-blue-300   dark:border-blue-700" },
    "MongoDB": { icon: SiMongodb, color: "text-green-600", badge: "bg-green-50  dark:bg-green-950  text-green-800  dark:text-green-200  border-green-300  dark:border-green-700" },
    "MySQL": { icon: SiMysql, color: "text-orange-600", badge: "bg-orange-50 dark:bg-orange-950 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700" },
    "Microsoft Azure": { icon: FaMicrosoft, color: "text-blue-600", badge: "bg-blue-50   dark:bg-blue-950   text-blue-800   dark:text-blue-200   border-blue-300   dark:border-blue-700" },
    "Docker": { icon: SiDocker, color: "text-blue-600", badge: "bg-blue-50   dark:bg-blue-950   text-blue-800   dark:text-blue-200   border-blue-300   dark:border-blue-700" },
    "Firebase": { icon: SiFirebase, color: "text-orange-500", badge: "bg-orange-50 dark:bg-orange-950 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700" },

    // Delivery & DevOps
    "CI/CD Pipelines": { icon: FaInfinity, color: "text-teal-600", badge: "bg-teal-50   dark:bg-teal-950   text-teal-800   dark:text-teal-200   border-teal-300   dark:border-teal-700" },
    "GitHub Actions": { icon: SiGithubactions, color: "text-gray-900 dark:text-white", badge: "bg-gray-50  dark:bg-gray-900   text-gray-800   dark:text-gray-200   border-gray-300   dark:border-gray-600" },
    "Kubernetes": { icon: SiKubernetes, color: "text-blue-600", badge: "bg-blue-50   dark:bg-blue-950   text-blue-800   dark:text-blue-200   border-blue-300   dark:border-blue-700" },
    "Git": { icon: SiGit, color: "text-orange-600", badge: "bg-orange-50 dark:bg-orange-950 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700" },
    "GitLab": { icon: SiGitlab, color: "text-orange-600", badge: "bg-orange-50 dark:bg-orange-950 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700" },

    // Architecture & Collaboration
    "Modular Architecture": { icon: FiLayers, color: "text-indigo-600", badge: "bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700" },
    "SOLID Principles": { icon: FiLayers, color: "text-emerald-600", badge: "bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700" },
    "Progressive Web Apps (PWA)": { icon: FaMobileAlt, color: "text-teal-500", badge: "bg-teal-50   dark:bg-teal-950   text-teal-800   dark:text-teal-200   border-teal-300   dark:border-teal-700" },
    "Agile / Scrum": { icon: FiRotateCw, color: "text-orange-600", badge: "bg-orange-50 dark:bg-orange-950 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700" },
    "Jira": { icon: SiJira, color: "text-blue-600", badge: "bg-blue-50   dark:bg-blue-950   text-blue-800   dark:text-blue-200   border-blue-300   dark:border-blue-700" },
    "Technical Documentation": { icon: FiFileText, color: "text-gray-600", badge: "bg-gray-50   dark:bg-gray-900   text-gray-700   dark:text-gray-300   border-gray-300   dark:border-gray-600" },

    // Technical Delivery & Collaboration
    "Requirements Analysis": { icon: FiTool, color: "text-slate-600", badge: "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600" },
    "Cross-Functional Collaboration": { icon: FiServer, color: "text-cyan-600", badge: "bg-cyan-50 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-200 border-cyan-300 dark:border-cyan-700" },
    "Software Development Lifecycle": { icon: FiRotateCw, color: "text-indigo-600", badge: "bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700" },

    // AI & Emerging Technologies
    "OpenAI API": { icon: FaCode, color: "text-emerald-600", badge: "bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700" },
    "Google Gemini API": { icon: FaCode, color: "text-blue-600", badge: "bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700" },
    "LangChain": { icon: FiLayers, color: "text-orange-600", badge: "bg-orange-50 dark:bg-orange-950 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700" },
    "AI Integration Workflows": { icon: FiTool, color: "text-rose-600", badge: "bg-rose-50 dark:bg-rose-950 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-700" },
    "LLM Evaluation & Quality Analysis": { icon: FiFileText, color: "text-amber-600", badge: "bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700" },
    "Vector Databases": { icon: MdApi, color: "text-violet-600", badge: "bg-violet-50 dark:bg-violet-950 text-violet-800 dark:text-violet-200 border-violet-300 dark:border-violet-700" },
};

interface SkillGridItemProps {
    span: string;
    icon: React.ComponentType<any>;
    title: string;
    technologies: string[];
    description: string;
    category: string;
}

const SkillGridItem = ({
    span,
    icon: Icon,
    title,
    technologies,
    description,
    category,
}: SkillGridItemProps) => {
    const colorClass = categoryColors[category] ?? "from-gray-500/10 to-gray-500/10";
    const iconColorClass = iconColors[category] ?? "text-gray-600 dark:text-gray-400";

    return (
        <li className={`list-none min-h-[24rem] ${span}`}>
            <div className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-700 p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={2}
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className={`relative flex h-full flex-col gap-3 justify-between overflow-hidden rounded-xl p-6 md:p-6 bg-gradient-to-br ${colorClass} backdrop-blur-sm dark:shadow-[0px_0px_27px_0px_#2D2D2D]`}>
                    <div className="relative flex flex-1 flex-col gap-4">
                        {/* Icon + Title */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white/90 dark:bg-gray-800/90 shadow-sm">
                                <Icon className={`h-5 w-5 ${iconColorClass}`} />
                            </div>
                            <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-gray-900 dark:text-white">
                                {title}
                            </h3>
                        </div>

                        {/* Description + Badges */}
                        <div className="space-y-6">
                            <p className="font-sans text-gray-700 md:text-lg/[1.375rem] dark:text-gray-300">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => {
                                    const techData = techIcons[tech];
                                    const TechIcon = techData?.icon;
                                    const iconColor = techData?.color ?? "text-gray-600 dark:text-gray-400";
                                    const badgeClass = techData?.badge ?? "bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600";

                                    return (
                                        <span
                                            key={index}
                                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border whitespace-nowrap shadow-sm hover:shadow-md transition-shadow duration-200 ${badgeClass}`}
                                        >
                                            {TechIcon && <TechIcon className={`w-4 h-4 ${iconColor}`} />}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export function SkillsSection() {
    return (
        <section id="skills" className="py-16 w-full flex flex-col items-center justify-center min-h-screen">
            {/* Header */}
            <div className="w-full flex flex-col justify-center items-center mb-16">
                <h1 className="heading text-center">
                    Technical <span className="text-purple ml-2">Skills</span>
                </h1>
            </div>

            {/* Grid */}
            <ul className="grid w-full max-w-7xl grid-cols-1 gap-4 px-4 md:grid-cols-12 lg:gap-5">
                {skills.map((skill) => (
                    <SkillGridItem
                        key={skill.id}
                        span={skill.span}
                        icon={skill.icon}
                        title={skill.title}
                        technologies={skill.technologies}
                        description={skill.description}
                        category={skill.category}
                    />
                ))}
            </ul>
        </section>
    );
}

export default SkillsSection;