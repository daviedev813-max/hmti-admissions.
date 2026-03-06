import React, { useState } from "react";
import { Maximize2, X, Filter, Camera } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Clinical Lab",
    "Classrooms",
    "Student Life",
    "Hostels",
  ];

  const images = [
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "State-of-the-Art Clinical Lab",
      category: "Clinical Lab"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "ICT & Theory Room",
      category: "Classrooms"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Reference Library",
      category: "Classrooms"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hospital Simulation",
      category: "Clinical Lab"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "2025 Graduation",
      category: "Student Life"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Student Lounge",
      category: "Student Life"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Male/Female Hostels",
      category: "Hostels"
    },
    {
      url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Medical Equipment",
      category: "Clinical Lab"
    }
  ];

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="bg-base-100 min-h-screen">
      {/* --- ELITE HEADER --- */}
      <section className="bg-primary text-primary-content py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Visual Tour
          </span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Campus <span className="text-secondary">Gallery</span>
          </h1>
          <p className="text-xl opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">
            Explore our TVET-accredited facilities, clinical simulation labs,
            and vibrant student life at Hansenmyles.
          </p>
        </div>
      </section>

      {/* --- FILTER NAVIGATION --- */}
      <div className="sticky top-16 z-30 bg-base-100/80 backdrop-blur-md border-b border-base-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn btn-sm md:btn-md rounded-full px-6 font-bold uppercase tracking-widest transition-all ${
                filter === cat
                  ? "btn-secondary shadow-lg scale-105"
                  : "btn-ghost text-primary opacity-60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- IMAGE GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-xl h-80 border-4 border-transparent hover:border-secondary transition-all duration-500 animate-fade-in"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer" // Add this to bypass Unsplash blocking
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-[3px]">
                <div className="bg-secondary/20 p-4 rounded-full mb-4 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <Camera size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">
                  {img.title}
                </h3>
                <span className="badge badge-secondary font-bold text-[10px] uppercase tracking-widest">
                  {img.category}
                </span>
                <Maximize2 size={24} className="mt-6 opacity-50" />
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 opacity-40">
            <Filter size={64} className="mx-auto mb-4" />
            <p className="text-2xl font-bold uppercase tracking-widest">
              No photos in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div className="modal modal-open z-50">
          <div className="modal-box max-w-5xl p-0 bg-transparent shadow-none relative overflow-visible">
            <button
              className="btn btn-circle btn-secondary absolute -top-4 -right-4 z-[60] shadow-2xl border-none"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>

            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border-4 border-white/10">
              <img
                src={selectedImg.url}
                alt="Preview"
                className="w-full h-auto rounded-[2rem] object-contain max-h-[80vh]"
                referrerPolicy="no-referrer" 
              />
            </div>

            <div className="text-center mt-6">
              <h4 className="text-white text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                {selectedImg.title}
              </h4>
              <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">
                {selectedImg.category}
              </span>
            </div>
          </div>
          <div
            className="modal-backdrop bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          ></div>
        </div>
      )}
    </div>
  );
}
