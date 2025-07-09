import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Publications } from "@/data/index";

export type PublicationItem = {
    id: string;
    title: string;
    description: string;
    Role: string;
    "Patent Office"?: string;
    "Application Number"?: string;
    "Publication Date": string;
    Status: string;
    "Field of Invention"?: string;
    "Publication"?: string;
    "Published In"?: string;
    Link: string;
};

export const HoverEffect = ({
    items,
    className,
}: {
    items: PublicationItem[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-6 w-full",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={`${item?.id}-${idx}`}
                    className="relative group block p-2 w-full min-h-[400px]"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-blue-100 dark:bg-blue-900/[0.3] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <CardMeta item={item} />
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black-200 border border-white/[0.1] group-hover:border-zinc-500/50 relative z-20 backdrop-blur-sm flex flex-col",
                className
            )}
        >
            <div className="relative z-50 flex-1">
                <div className="p-4 h-full flex flex-col">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className={cn("text-white font-bold tracking-wide mt-1 text-center text-lg mb-4", className)}>
            {children}
        </div>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-2 text-white-200 tracking-wide leading-relaxed text-base text-justify flex-1 mb-4",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardMeta = ({ item }: { item: PublicationItem }) => {
    return (
        <div className="mt-auto text-base text-zinc-100 space-y-2">
            <p><span className="font-semibold">Role:</span> {item.Role}</p>
            <p><span className="font-semibold">Status:</span> {item.Status}</p>
            <p><span className="font-semibold">Publication Date:</span> {item["Publication Date"]}</p>

            {item.id === "Patent" && (
                <>
                    <p><span className="font-semibold">Application Number:</span> {item["Application Number"]}</p>
                    <p><span className="font-semibold">Patent Office:</span> {item["Patent Office"]}</p>
                    <p><span className="font-semibold">Field of Invention:</span> {item["Field of Invention"]}</p>
                </>
            )}
            {item.id === "Paper" && (
                <>
                    <p><span className="font-semibold">Publication:</span> {item["Publication"]}</p>
                    <p><span className="font-semibold">Published In:</span> {item["Published In"]}</p>
                </>
            )}
            <div className="mt-6 pt-4 flex justify-center">
                <a href={item.id === "Patent" ? `/assets/${item.Link}` : item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors duration-200 mx-auto"
                >
                    {item.id === "Patent" ? (
                        <>
                            📄 View PDF
                        </>
                    ) : (
                        <>
                            🔗 Read Paper
                        </>
                    )}
                </a>
            </div>
        </div>
    );
};

export const Publication = () => {
    // Filter publications by type
    const patents = Publications.filter(item => item.id === "Patent");
    const papers = Publications.filter(item => item.id === "Paper");

    return (
        <section id="publications" className="py-20 w-full flex flex-col items-center justify-center min-h-screen">
            {/* Section Header */}
            <div className="w-full flex justify-center items-center mb-16">
                <h1 className="heading text-center">
                    Publi<span className="text-purple">cations</span>
                </h1>
            </div>

            {/* Grids */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Patents Section */}
                <div className="space-y-8 flex flex-col">
                    <div className="flex justify-center">
                        <h2 className="text-3xl font-bold text-center text-white">
                            <span> 📄 </span>
                            Patents
                        </h2>
                    </div>
                    <HoverEffect items={patents} />
                </div>

                {/* Papers Section */}
                <div className="space-y-8 flex flex-col">
                    <div className="flex justify-center">
                        <h2 className="text-3xl font-bold text-center text-white">
                            <span> 🔬 </span>
                            Research Papers
                        </h2>
                    </div>
                    <HoverEffect items={papers} />
                </div>
            </div>
        </section>
    );
};

export default Publication;