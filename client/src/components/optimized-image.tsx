import { useState, useRef, useEffect } from "react";
import { createImageLoader } from "@/lib/image-optimization";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className = "",
  sizes,
  quality = 85
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px 0px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const imageProps = createImageLoader(src, { quality, sizes });

  return (
    <div 
      ref={imgRef}
      className={`${className} ${!isLoaded ? 'bg-gray-200 animate-pulse' : ''}`}
      style={{ width, height }}
    >
      {isInView && (
        <img
          src={imageProps.src}
          srcSet={imageProps.srcSet}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : imageProps.loading}
          decoding={imageProps.decoding}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
    </div>
  );
}