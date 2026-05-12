"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const wordsArray = words.split(" ");
    console.log(wordsArray);
    animate(
      "span",
      { opacity: 1 },
      { duration: 2, delay: stagger(0.2) }
    );
  }, [animate, words]);

  const renderWords = () => {
    const wordsArray = words.split(" ");
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const normalized = word.replace(/[^\w']/g, "");
          const isPurple = idx > 2 || normalized === "I'm" || normalized === "Rani";
          return (
            <motion.span
              key={word + idx}
              className={`${isPurple ? "text-purple" : "dark:text-white text-black"} opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
