import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeInVariants, slideInFromLeft, slideInFromRight, scaleInVariants } from "@/lib/animations";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.6
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px" 
  });

  const getVariants = () => {
    switch (animation) {
      case "slideLeft":
        return slideInFromLeft;
      case "slideRight":
        return slideInFromRight;
      case "scaleIn":
        return scaleInVariants;
      default:
        return fadeInVariants;
    }
  };

  const variants = getVariants();
  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        delay,
        duration
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger animation component for lists
interface StaggerAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerAnimation({ 
  children, 
  className = "",
  staggerDelay = 0.1
}: StaggerAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px" 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
}

// Parallax component
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function Parallax({ children, className = "", offset = 50 }: ParallaxProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });

  return (
    <motion.div
      ref={ref}
      style={{
        y: isInView ? -offset : 0
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}