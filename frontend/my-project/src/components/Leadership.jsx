import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Globe, Camera } from "lucide-react";

export default function Leadership() {
  const directors = [
    {
      name: "Joyce Mwau",
      role: "Principal & Executive Director",
      expertise: "Professional Nurse",
      bio: "A dedicated healthcare leader with years of clinical experience, ensuring the highest standards of nursing and healthcare training.",
      // Placeholder: Replace with actual image path later
      image: "https://images.unsplash.com", 
    },
    {
      name: "Serah Nyakio",
      role: "Director of Operations",
      expertise: "Human Resource Expert",
      bio: "Strategic lead overseeing institutional growth and staff excellence, bringing over a decade of HR expertise to our operations.",
      // Placeholder: Replace with actual image path later
      image: "https://images.unsplash.com", 
    },
  ];

  const staff = [
    { 
        name: "David Matheka", 
        role: "ICT Support & Systems", 
        image: "David.jpg" 
    },
    { 
        name: "Tutor Name", 
        role: "Housekeeping Faculty", 
        image: "https://images.unsplash.com" 
    },
    { 
        name: "Tutor Name", 
        role: "CNA & HCA Programs", 
        image: "https://images.unsplash.com" 
    },
  ];

  return (
    <div className="bg-base-100 min-h-screen selection:bg-secondary selection:text-secondary-content">
      
      {/* --- ELITE HEADER --- */}
      <section className="bg-primary text-primary-content py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Institutional Governance</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            Our <span className="text-secondary">Leadership</span> Team
          </h1>
          <p className="text-xl opacity-80 font-medium leading-relaxed max-w-2xl mx-auto">
            Hansenmyles is guided by industry experts committed to clinical excellence and operational integrity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* --- TIER 1: EXECUTIVE DIRECTORS --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {directors.map((leader, i) => (
            <div key={i} className="group relative bg-white border-2 border-base-200 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 relative h-80 lg:h-auto overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                
                <div className="lg:w-3/5 p-10 flex flex-col justify-center">
                  <div className="badge badge-secondary font-black uppercase text-[10px] tracking-widest mb-4 py-3 px-4">
                    {leader.expertise}
                  </div>
                  <h2 className="text-3xl font-black text-primary uppercase tracking-tighter leading-none mb-2">
                    {leader.name}
                  </h2>
                  <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-6">
                    {leader.role}
                  </p>
                  <p className="text-base-content/60 leading-relaxed font-medium mb-8">
                    {leader.bio}
                  </p>
                  <div className="flex gap-4 border-t border-base-200 pt-6">
                    <button className="p-2 bg-base-200 rounded-full text-primary hover:bg-primary hover:text-white transition-all"><Mail size={18}/></button>
                    <button className="p-2 bg-base-200 rounded-full text-primary hover:bg-primary hover:text-white transition-all"><Linkedin size={18}/></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- TIER 2: ACADEMIC & SUPPORT STAFF --- */}
        <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">Academic & Support Faculty</h2>
            <div className="w-20 h-2 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {staff.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Profile Image with Golden Ring */}
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-secondary transition-all duration-500 relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative element behind circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border-2 border-dashed border-secondary/30 group-hover:rotate-45 transition-transform duration-1000"></div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-1 leading-none">
                    {member.name}
                </h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                    {member.role}
                </p>
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <button className="p-2 bg-base-200 rounded-full hover:bg-primary hover:text-white transition-colors"><Mail size={14}/></button>
                    <button className="p-2 bg-base-200 rounded-full hover:bg-primary hover:text-white transition-colors"><Globe size={14}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RECRUITMENT CTA --- */}
      <section className="bg-secondary text-secondary-content py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none">Join Kenya's Premier Training Faculty</h2>
            <p className="mb-10 font-bold uppercase tracking-widest text-sm opacity-80 max-w-xl mx-auto">We are always looking for certified healthcare trainers and industry experts.</p>
            <Link to="/contact" className="btn btn-primary btn-lg px-16 shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest font-black border-none text-white">
               Careers @ Hansenmyles
            </Link>
        </div>
      </section>
    </div>
  );
}
