import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  // 1. FIXED: Added full Unsplash IDs for Healthcare, Lab, and Office training
  const images = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png", "/hero5.png", "/hero6.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
      {/* 1. THE SLIDER (Base Layer) */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Background"
              className="w-full h-full object-cover"
              // FIXED: Added referrerPolicy to prevent "Hotlink" blocks
              referrerPolicy="no-referrer"
              onLoad={() => console.log(`Image ${index} loaded`)}
              onError={() => console.error(`Failed to load image ${index}`)}
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-primary/65"></div>
          </div>
        ))}
      </div>

      {/* 2. DECORATIVE GLOWS (Middle Layer) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
      </div>

      {/* 3. THE TEXT CONTENT (Top Layer) */}
      <div className="relative z-20 hero-content text-center text-primary-content px-4">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-8 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Admissions Open 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter drop-shadow-2xl">
            Excellence in <br />
            Professional <span className="text-secondary">Training</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 drop-shadow-lg leading-relaxed">
            Hansenmyles Training Institute equips you with practical skills for
            Healthcare and Professional industries.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/apply"
              className="btn btn-secondary btn-lg px-12 font-bold uppercase tracking-widest border-none hover:scale-105 transition-transform"
            >
              Enroll Now
            </Link>
            <Link
              to="/courses"
              className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary px-12 uppercase tracking-widest transition-colors"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
