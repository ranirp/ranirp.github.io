import React from 'react';
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { skills } from '@/data';

// Color mappings for different skill categories
const categoryColors = {
    Frontend: "from-blue-500/20 to-cyan-500/20",
    Backend: "from-green-500/20 to-emerald-500/20",
    Database: "from-purple-500/20 to-violet-500/20",
    Mobile: "from-pink-500/20 to-rose-500/20",
    Cloud: "from-orange-500/20 to-amber-500/20",
    Architecture: "from-indigo-500/20 to-blue-500/20",
    "Development Practices": "from-gray-500/20 to-slate-500/20",
    "Version Control": "from-teal-500/20 to-cyan-500/20",
    "Tools & UX": "from-yellow-500/20 to-lime-500/20"
};

// Icon colors for different categories
const iconColors = {
    Frontend: "text-blue-500 dark:text-blue-400",
    Backend: "text-green-500 dark:text-green-400",
    Database: "text-purple-500 dark:text-purple-400",
    Mobile: "text-pink-500 dark:text-pink-400",
    Cloud: "text-orange-500 dark:text-orange-400",
    Architecture: "text-indigo-500 dark:text-indigo-400",
    "Development Practices": "text-gray-500 dark:text-gray-400",
    "Version Control": "text-teal-500 dark:text-teal-400",
    "Tools & UX": "text-yellow-500 dark:text-yellow-400"
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
                <div className={`relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-gradient-to-br ${colorClass} backdrop-blur-sm dark:shadow-[0px_0px_27px_0px_#2D2D2D]`}>
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        {/* Icon */}
                        <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white/80 dark:bg-gray-800/80">
                            <Icon className={`h-5 w-5 ${iconColorClass}`} />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {title}
                            </h3>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                {technologies.slice(0, 3).map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 text-xs font-medium bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {technologies.length > 3 && (
                                    <span className="px-3 py-1.5 text-xs font-medium bg-white/70 dark:bg-gray-800/70 text-gray-500 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-600 whitespace-nowrap">
                                        +{technologies.length - 3} more
                                    </span>
                                )}
                            </div>

                            <p className="font-sans text-sm/[1.125rem] text-gray-700 md:text-base/[1.375rem] dark:text-gray-300">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export function SkillsSection() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div id="skills" className="text-center mb-12">
                <h1 className="heading text-center">
                    Technical <span className="text-purple ml-2"> Skills</span>
                </h1>
                <h6 className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
                    Full-stack development expertise with modern technologies and best practices
                </h6>
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