"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProduct = products[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update body gradient variable for seamless transition
    document.body.style.setProperty("--background", activeProduct.themeColor);
  }, [currentIndex, activeProduct]);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="min-h-screen selection:bg-orange-500 selection:text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          {/* Hero Scrollytelling Section */}
          <div className="relative w-full">
            <ProductBottleScroll product={activeProduct} />
            <ProductTextOverlays product={activeProduct} />
          </div>

          {/* Details Section */}
          <section className="bg-black text-white py-32 px-6 md:px-12 relative z-30">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: activeProduct.themeColor }}>
                  {activeProduct.detailsSection.title}
                </h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  {activeProduct.detailsSection.description}
                </p>
                
                <div className="space-y-4">
                  {activeProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="p-1 rounded-full bg-white/10">
                        <Check className="w-5 h-5" style={{ color: activeProduct.themeColor }} />
                      </div>
                      <span className="text-lg font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 gap-6"
              >
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-4">{activeProduct.freshnessSection.title}</h4>
                    <p className="text-white/70">{activeProduct.freshnessSection.description}</p>
                 </div>
                 <div className="grid grid-cols-3 gap-4">
                    {activeProduct.stats.map((stat, idx) => (
                      <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center">
                        <span className="text-3xl font-bold mb-2" style={{ color: activeProduct.themeColor }}>{stat.val}</span>
                        <span className="text-sm text-white/60">{stat.label}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>
            </div>
          </section>

          {/* Buy Now Section */}
          <section className="bg-gray-900 py-32 px-6 md:px-12 relative z-30">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-5xl md:text-7xl font-bold mb-8">Ready to taste the future?</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {activeProduct.buyNowSection.processingParams.map((param, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium">
                      {param}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col items-center justify-center mb-12">
                  <span className="text-6xl font-black" style={{ color: activeProduct.themeColor }}>
                    {activeProduct.buyNowSection.price}
                  </span>
                  <span className="text-white/50 mt-2">{activeProduct.buyNowSection.unit}</span>
                </div>

                <button 
                  className="w-full md:w-auto px-12 py-5 rounded-full text-xl font-bold text-black transition-transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: activeProduct.themeColor, boxShadow: `0 0 40px ${activeProduct.themeColor}80` }}
                >
                  Add to Cart
                </button>
                
                <div className="mt-12 text-sm text-white/50 space-y-2">
                  <p>{activeProduct.buyNowSection.deliveryPromise}</p>
                  <p>{activeProduct.buyNowSection.returnPolicy}</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Next Flavor CTA */}
          <section 
            className="py-40 px-6 cursor-pointer group relative overflow-hidden flex items-center justify-center z-30"
            onClick={nextProduct}
          >
            <div className="absolute inset-0 z-0 bg-black transition-colors duration-700 group-hover:bg-gray-900" />
            <motion.div 
              className="relative z-10 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="text-white/50 text-xl mb-4 font-medium uppercase tracking-widest">
                Experience
              </span>
              <h2 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 group-hover:to-white transition-all">
                {products[(currentIndex + 1) % products.length].name}
              </h2>
              <div className="mt-8 p-4 rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
                <ArrowRight className="w-8 h-8" />
              </div>
            </motion.div>
          </section>

        </motion.div>
      </AnimatePresence>

      <Footer />

      {/* Floating Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/50 backdrop-blur-xl p-2 rounded-full border border-white/10">
        <button 
          onClick={prevProduct}
          className="p-3 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Previous Flavor"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2 px-2">
          {products.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8" : "opacity-50 hover:opacity-100"
              }`}
              style={{ backgroundColor: p.themeColor }}
              aria-label={`Go to ${p.name}`}
            />
          ))}
        </div>

        <button 
          onClick={nextProduct}
          className="p-3 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Next Flavor"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </main>
  );
}
