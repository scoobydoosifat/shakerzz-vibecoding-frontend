"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { Product } from "@/data/products";

export default function ProductTextOverlays({ product }: { product: Product }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mappings for different scroll sections (progress from 0 to 1 over 500vh)
  // Section 1: 0 to 0.2
  // Section 2: 0.25 to 0.45
  // Section 3: 0.5 to 0.7
  // Section 4: 0.75 to 0.95

  const s1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const s2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [50, 0, -50]);

  const s3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.45, 0.55, 0.7], [50, 0, -50]);

  const s4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const s4Y = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [50, 0, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-20">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div style={{ opacity: s1Opacity, y: s1Y }} className="absolute text-center max-w-4xl px-4">
          <h1 
            className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white"
            style={{ textShadow: `0 0 10px ${product.themeColor}, 0 0 20px ${product.themeColor}, 0 0 40px ${product.themeColor}` }}
          >
            {product.section1.title}
          </h1>
          <p 
            className="text-2xl md:text-4xl text-white font-medium"
            style={{ textShadow: `0 0 10px black, 0 0 20px ${product.themeColor}` }}
          >
            {product.section1.subtitle}
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: s2Opacity, y: s2Y }} className="absolute text-center max-w-4xl px-4 left-4 md:left-24 items-start flex flex-col">
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-left text-white"
            style={{ textShadow: `0 0 10px ${product.themeColor}, 0 0 20px ${product.themeColor}, 0 0 40px ${product.themeColor}` }}
          >
            {product.section2.title}
          </h2>
          <p 
            className="text-xl md:text-3xl text-white text-left max-w-xl"
            style={{ textShadow: `0 0 10px black, 0 0 20px ${product.themeColor}` }}
          >
            {product.section2.subtitle}
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: s3Opacity, y: s3Y }} className="absolute text-center max-w-4xl px-4 right-4 md:right-24 items-end flex flex-col">
          <h2 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-right text-white"
            style={{ textShadow: `0 0 10px ${product.themeColor}, 0 0 20px ${product.themeColor}, 0 0 40px ${product.themeColor}` }}
          >
            {product.section3.title}
          </h2>
          <p 
            className="text-xl md:text-3xl text-white text-right max-w-xl"
            style={{ textShadow: `0 0 10px black, 0 0 20px ${product.themeColor}` }}
          >
            {product.section3.subtitle}
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div style={{ opacity: s4Opacity, y: s4Y }} className="absolute text-center max-w-4xl px-4">
          <h2 
            className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white"
            style={{ textShadow: `0 0 10px ${product.themeColor}, 0 0 20px ${product.themeColor}, 0 0 40px ${product.themeColor}` }}
          >
            {product.section4.title}
          </h2>
          <p 
            className="text-2xl md:text-4xl text-white"
            style={{ textShadow: `0 0 10px black, 0 0 20px ${product.themeColor}` }}
          >
            {product.section4.subtitle}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
