import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  className?: string;
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
}

export default function ScrollProgress({ 
  className = "", 
  color = "#dc2626", 
  height = 3,
  position = "top"
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate the maximum scrollable distance
      const maxScroll = documentHeight - windowHeight;
      
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      
      // Calculate progress as percentage
      const progress = (scrollTop / maxScroll) * 100;
      const finalProgress = Math.min(Math.max(progress, 0), 100);
      setScrollProgress(finalProgress);
      
      // Optional: Uncomment for debugging
      // if (finalProgress !== scrollProgress) {
      //   console.log('Scroll Progress:', finalProgress.toFixed(1) + '%');
      // }
    };

    // Initial calculation
    calculateScrollProgress();

    // Add scroll listener with throttling for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  const progressBarStyle = {
    position: 'fixed' as const,
    [position]: 0,
    left: 0,
    right: 0,
    height: `${height}px`,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 9999,
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={progressBarStyle} className={`${className} scroll-progress-container`}>
      <motion.div
        style={{
          height: '100%',
          backgroundColor: color,
          transformOrigin: 'left',
          width: '100%'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{
          duration: 0.1,
          ease: "easeOut"
        }}
      />

    </div>
  );
}

// Hook for getting scroll progress value
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const maxScroll = documentHeight - windowHeight;
      
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      
      const progress = (scrollTop / maxScroll) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    calculateScrollProgress();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return scrollProgress;
}

// Circular progress indicator variant
interface CircularScrollProgressProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
  position?: {
    bottom?: string;
    right?: string;
    top?: string;
    left?: string;
  };
}

export function CircularScrollProgress({
  size = 60,
  strokeWidth = 4,
  color = "#dc2626",
  backgroundColor = "rgba(0, 0, 0, 0.1)",
  className = "",
  position = { bottom: "2rem", right: "2rem" }
}: CircularScrollProgressProps) {
  const scrollProgress = useScrollProgress();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const containerStyle = {
    position: 'fixed' as const,
    ...position,
    zIndex: 1000,
    opacity: scrollProgress > 5 ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div style={containerStyle} className={className}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.1s ease-out',
          }}
        />
      </svg>
      {/* Percentage text */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-xs font-semibold"
        style={{ color }}
      >
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
}