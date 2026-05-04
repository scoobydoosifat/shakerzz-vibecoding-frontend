"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductBottleScroll({ product }: { product: Product }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total frames
  const totalFrames = product.frameEnd - product.frameStart + 1;

  useEffect(() => {
    // Preload images
    let loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNumber = product.frameStart + i;
      const paddedNumber = String(frameNumber).padStart(product.padLength, '0');
      img.src = `${product.folderPath}/${product.framePrefix}${paddedNumber}${product.frameExtension}`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, [product]);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (progress: number) => {
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(progress * (totalFrames - 1)))
      );

      const img = images[frameIndex];
      if (!img) return;

      // Handle responsive canvas size to fill but maintain aspect ratio (like object-fit: contain)
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Initial render
    render(0);

    // Render on scroll progress change
    const unsubscribe = scrollYProgress.onChange((v) => {
      requestAnimationFrame(() => render(v));
    });

    // Handle resize
    const handleResize = () => render(scrollYProgress.get());
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, scrollYProgress, totalFrames]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover z-10 relative pointer-events-none mix-blend-screen"
        />
        {/* Background gradient block behind the canvas */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ background: product.gradient }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}
