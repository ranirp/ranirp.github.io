import React from 'react';
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { skills } from '@/data';
import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPython, SiFlask, SiFastapi, SiPostman, SiSwagger, SiJira, SiTestinglibrary, SiPostgresql, SiMongodb, SiMysql, SiSqlite, SiGit, SiGithub, SiGitlab, SiFirebase, SiDocker, SiKubernetes, SiGithubactions, SiJenkins, SiFigma
} from 'react-icons/si';
import { FaCode, FaMicrosoft, FaTools, FaInfinity, FaKey, FaMobileAlt } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { GiPill } from 'react-icons/gi';
import { BiCube } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';

// Color mappings for different skill categories
const categoryColors = {
    "Programming & Frameworks": "from-blue-500/20 to-cyan-500/20",
    "APIs & Security": "from-green-500/20 to-emerald-500/20",
    Databases: "from-purple-500/20 to-violet-500/20",
    "Cloud & DevOps": "from-pink-500/20 to-rose-500/20",
    "Architecture & Practices": "from-orange-500/20 to-amber-500/20",
    "Workflow & Tools": "from-gray-500/20 to-slate-500/20",
};

// Enhanced icon colors with more vibrant colors that work on both light and dark backgrounds
const iconColors = {
    "Programming & Frameworks": "text-blue-600 dark:text-blue-400",
    "APIs & Security": "text-green-600 dark:text-green-400",
    Databases: "text-purple-600 dark:text-purple-400",
    "Cloud & DevOps": "text-pink-600 dark:text-pink-400",
    "Architecture & Practices": "text-orange-600 dark:text-orange-400",
    "Workflow & Tools": "text-slate-600 dark:text-slate-400",
};

// Enhanced technology icon mapping with specific colors for each technology
const techIcons = {
    // Programming & Frameworks - with specific colors
    "Java": { icon: FaCode, color: 'text-yellow-600' },
    'Python': { icon: SiPython, color: 'text-blue-500' },
    'JavaScript (ES6+)': { icon: SiJavascript, color: 'text-yellow-500' },
    'TypeScript': { icon: SiTypescript, color: 'text-blue-600' },
    'Node.js': { icon: SiNodedotjs, color: 'text-green-600' },
    'Express': { icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    'React': { icon: SiReact, color: 'text-cyan-500' },
    'Next.js': { icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
    'Flask': { icon: SiFlask, color: 'text-gray-700 dark:text-gray-300' },
    'Tailwind CSS': { icon: SiTailwindcss, color: 'text-cyan-500' },

    // APIs & Security - with specific colors
    'REST APIs': { icon: FaCode, color: 'text-blue-600' },
    'FastAPI': { icon: SiFastapi, color: 'text-green-600' },
    'OAuth 2.0': { icon: FaKey, color: 'text-red-600' },
    'JWT': { icon: FaKey, color: 'text-yellow-600' },
    'Swagger / OpenAPI': { icon: SiSwagger, color: 'text-green-600' },
    'Postman': { icon: SiPostman, color: 'text-orange-500' },

    // Database - with specific colors
    'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-600' },
    'MongoDB': { icon: SiMongodb, color: 'text-green-600' },
    'MySQL': { icon: SiMysql, color: 'text-orange-600' },
    'SQLite': { icon: SiSqlite, color: 'text-blue-500' },

    // Cloud & DevOps - with specific colors
    'Azure': { icon: FaMicrosoft, color: 'text-blue-600' },
    'Firebase': { icon: SiFirebase, color: 'text-orange-500' },
    'Docker': { icon: SiDocker, color: 'text-blue-600' },
    'Kubernetes (basic)': { icon: SiKubernetes, color: 'text-blue-600' },
    'CI/CD': { icon: FaInfinity, color: 'text-teal-600' },
    'GitHub Actions': { icon: SiGithubactions, color: 'text-gray-900 dark:text-white' },
    'Jenkins': { icon: SiJenkins, color: 'text-red-600' },

    // Architecture & Practices - with specific colors
    'Progressive Web Apps (PWAs)': { icon: FaMobileAlt, color: 'text-teal-500' },
    'Modular Architecture': { icon: FiLayers, color: 'text-indigo-600' },
    'SOLID Principles': { icon: FiLayers, color: 'text-emerald-500' },
    'Clean Code (KISS, DRY, YAGNI)': { icon: FiLayers, color: 'text-amber-500' },

    // Workflow & Tools - with specific colors
    'Agile / Scrum': { icon: FaTools, color: 'text-orange-600' },
    'Git': { icon: SiGit, color: 'text-orange-600' },
    'GitHub': { icon: SiGithub, color: 'text-gray-900 dark:text-white' },
    'GitLab': { icon: SiGitlab, color: 'text-orange-600' },
    'Test-Driven Development (TDD)': { icon: SiTestinglibrary, color: 'text-red-600' },
    'Jira': { icon: SiJira, color: 'text-blue-600' },
    'Figma': { icon: SiFigma, color: 'text-purple-600' },
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
    category
}: SkillGridItemProps) => {
    const colorClass = categoryColors[category as keyof typeof categoryColors];
    const iconColorClass = iconColors[category as keyof typeof iconColors];

    return (
        <li className={`min-h-[14rem] list-none ${span}`}>
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
                    <div className="relative flex flex-1 flex-col gap-4 ">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white/90 dark:bg-gray-800/90 shadow-sm">
                                <Icon className={`h-5 w-5 ${iconColorClass}`} />
                            </div>
                            <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-transparent bg-clip-text bg-gradient-to-r from-black via-black-100 to-black-200 dark:from-white dark:via-white-100 dark:to-white-200">
                                {title}
                            </h3>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <p className="font-sans text-gray-700 md:text-lg/[1.375rem] dark:text-gray-300">
                                {description}
                            </p>
                            {/* Technologies - Display all with colorful icons */}
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => {
                                    const techData = techIcons[tech];
                                    const TechIcon = techData?.icon;
                                    const iconColor = techData?.color || 'text-gray-600 dark:text-gray-400';

                                    return (
                                        <span
                                            key={index}
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 whitespace-nowrap shadow-sm hover:shadow-md transition-shadow duration-200"
                                        >
                                            {TechIcon && <TechIcon className={`w-6 h-6 ${iconColor}`} />}
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
            {/* Section Header */}
            <div className="w-full flex flex-col justify-center items-center mb-16">
                <h1 className="heading text-center">
                    Technical <span className="text-purple ml-2"> Skills</span>
                </h1>
            </div>

            {/* Auto Grid */}
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-fr lg:gap-4">
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
        </section >
    );
}

export default SkillsSection;