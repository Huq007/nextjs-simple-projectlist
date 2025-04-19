"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };

  const transition = animate
    ? {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    : undefined;

  const bgStyle = {
    backgroundSize: animate ? "100% 100%" : undefined,
  };

  const bgGradient =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]";

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial="initial"
        animate="animate"
        transition={transition}
        style={bgStyle}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          bgGradient
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial="initial"
        animate="animate"
        transition={transition}
        style={bgStyle}
        className={cn(
          "absolute inset-0 rounded-3xl z-[0] will-change-transform",
          bgGradient
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
