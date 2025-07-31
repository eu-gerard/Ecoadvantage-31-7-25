import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

// Blog post skeleton loader
export function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-eco-light-gray">
      {/* Header skeleton */}
      <section className="bg-eco-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Skeleton className="h-6 w-24 bg-gray-700" />
            <Skeleton className="h-12 w-full bg-gray-700" />
            <Skeleton className="h-12 w-3/4 bg-gray-700" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-32 bg-gray-700" />
              <Skeleton className="h-4 w-24 bg-gray-700" />
              <Skeleton className="h-4 w-20 bg-gray-700" />
            </div>
            <Skeleton className="h-6 w-full bg-gray-700" />
            <Skeleton className="h-6 w-4/5 bg-gray-700" />
          </motion.div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Article content skeleton */}
            <div className="space-y-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Quote skeleton */}
            <div className="border-l-4 border-eco-red pl-6 py-4">
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-4/5 mb-2" />
              <Skeleton className="h-4 w-32" />
            </div>

            {/* More content skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/5" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related posts skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Skeleton className="h-8 w-48 mb-8 mx-auto" />
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Blog listing skeleton loader
export function BlogListingSkeleton() {
  return (
    <div className="min-h-screen bg-eco-light-gray">
      {/* Header skeleton */}
      <section className="bg-eco-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Skeleton className="h-12 w-64 bg-gray-700 mx-auto blog-shimmer" />
            <Skeleton className="h-6 w-96 bg-gray-700 mx-auto blog-shimmer" />
            <Skeleton className="h-6 w-80 bg-gray-700 mx-auto blog-shimmer" />
          </motion.div>
        </div>
      </section>

      {/* Featured posts skeleton */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Skeleton className="h-8 w-48 mb-8 blog-shimmer" />
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden blog-loading-wave">
                  <Skeleton className="h-48 w-full blog-shimmer" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-full mb-4 blog-shimmer" />
                    <Skeleton className="h-4 w-full mb-2 blog-shimmer" />
                    <Skeleton className="h-4 w-3/4 mb-4 blog-shimmer" />
                    <Skeleton className="h-4 w-24 blog-shimmer" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All posts skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Skeleton className="h-8 w-32 mb-8" />
            <div className="space-y-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="md:flex">
                    <Skeleton className="h-48 md:h-32 md:w-48" />
                    <CardContent className="p-6 flex-1">
                      <Skeleton className="h-6 w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <Skeleton className="h-4 w-24" />
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Shimmer effect for loading states
export function ShimmerEffect() {
  return (
    <div className="animate-pulse">
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-4 rounded mb-4"></div>
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-4 rounded mb-4 w-3/4"></div>
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-4 rounded mb-4 w-1/2"></div>
    </div>
  );
}

// Progressive content loader
export function ProgressiveLoader({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

// Staggered content animation
export function StaggeredContent({ children, staggerDelay = 0.1 }: { children: React.ReactNode[]; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}