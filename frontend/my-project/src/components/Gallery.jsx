import React, { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: "https://picsum.photos", title: "Clinical Nursing Lab" },
    { url: "https://picsum.photos", title: "ICT & Computer Training" },
    { url: "https://picsum.photos", title: "Student Resource Library" },
    { url: "https://picsum.photos", title: "Practical Simulation Ward" },
    { url: "https://picsum.photos", title: "2025 Graduation Ceremony" },
    { url: "https://picsum.photos", title: "Campus Recreational Area" },
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-24 px-6 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4">
              Life at <span className="text-secondary">Hansenmyles</span>
            </h2>
            <div className="w-24 h-2 bg-secondary rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <button onClick={prevSlide} className="btn btn-circle btn-primary border-none shadow-lg hover:scale-110">
              <ChevronLeft />
            </button>
            <button onClick={nextSlide} className="btn btn-circle btn-primary border-none shadow-lg hover:scale-110">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* --- THE SLIDER --- */}
        <div className="relative h-[400px] md:h-[600px] w-full group">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out cursor-pointer ${
                index === currentIndex 
                ? "opacity-100 translate-x-0 z-10 scale-100" 
                : "opacity-0 translate-x-20 z-0 scale-95"
              }`}
              onClick={() => setSelectedImg(img)}
            >
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-base-100">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/90 to-transparent p-10 pt-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Featured Campus View</span>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{img.title}</h3>
                    </div>
                    <div className="bg-secondary text-secondary-content p-4 rounded-full shadow-xl">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="absolute bottom-[-40px] inset-x-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 transition-all duration-500 rounded-full ${i === currentIndex ? "w-12 bg-primary" : "w-2 bg-base-300"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div className="modal modal-open flex items-center justify-center z-[100]">
          <div className="modal-box max-w-5xl p-0 bg-transparent shadow-none relative">
            <button 
              className="btn btn-circle btn-secondary absolute -top-4 -right-4 z-[110] border-none shadow-2xl"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24}/>
            </button>
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border-4 border-white/10">
                <img 
                  src={selectedImg.url} 
                  alt="Preview" 
                  className="w-full h-auto rounded-[2rem] max-h-[80vh] object-contain" 
                />
            </div>
          </div>
          <div className="modal-backdrop bg-black/95 backdrop-blur-md" onClick={() => setSelectedImg(null)}></div>
        </div>
      )}
    </section>
  );
}
