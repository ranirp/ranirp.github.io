"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed z-[5000] top-0 left-0 right-0 mx-auto px-8 py-4 rounded-b-xl border-b border-l border-r border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          borderRadius: "0px 0px 12px 12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/logo.png"
                alt="Ranik Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold text-white">
              Ranik
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-12">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-neutral-300 items-center flex space-x-8 hover:text-neutral-300 transition-colors duration-200"
                )}
              >
                <span className="hidden sm:block">{navItem.icon}</span>
                <span className="text-sm font-medium !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};