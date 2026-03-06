import React from "react";
import { Link } from "react-router-dom";
import { 
  Target, Eye, Cpu, Zap, BookOpen, Stethoscope, Utensils, 
  ShieldCheck, BedDouble, ArrowRight, Users, GraduationCap, 
  Building2, HeartHandshake, Star, Shield, Rocket, Handshake, Sparkles 
} from "lucide-react";
import Leadership from "../components/Leadership";

export default function About() {
  // Populated stats array to make the code functional
  const stats = [
    { icon: <Users size={32} />, value: "5,000+", label: "Graduates" },
    { icon: <GraduationCap size={32} />, value: "15+", label: "Expert Programs" },
    { icon: <Building2 size={32} />, value: "100%", label: "TVET Compliant" },
    { icon: <HeartHandshake size={32} />, value: "95%", label: "Job Placement" },
  ];

  const coreValues = [
    { icon: <Shield size={32} />, title: "Integrity", desc: "Unwavering commitment to ethical standards and transparency." },
    { icon: <Star size={32} />, title: "Excellence", desc: "Pushing boundaries to deliver world-class vocational training." },
    { icon: <Rocket size={32} />, title: "Innovation", desc: "Adapting our curriculum to meet evolving global market demands." },
    { icon: <Handshake size={32} />, title: "Empathy", desc: "Fostering a supportive environment for every learner's journey." },
  ];

  return (
    <div className="bg-base-100 selection:bg-secondary selection:text-secondary-content overflow-x-hidden">
      {/* --- ELITE HEADER --- */}
    
      <section className="relative bg-primary text-primary-content py-32 px-6 overflow-hidden">
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
            <HeartHandshake size={16} className="text-secondary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Founded on Excellence</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            Our <span className="text-secondary">Heritage</span> <br/> & Future
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed max-w-3xl mx-auto">
            Hansenmyles Training Institute bridges the gap between classroom theory and global workforce integration.
          </p>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-2xl border border-base-200 text-center group hover:border-secondary transition-all">
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform text-primary">{stat.icon}</div>
              <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">
        
        {/* --- MISSION & VISION --- */}
        <section className="grid lg:grid-cols-2 gap-12">
          <div className="group relative p-12 bg-primary text-primary-content rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-primary/20">
            <Target className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="bg-secondary text-secondary-content p-4 rounded-2xl w-fit mb-8 shadow-xl"><Target size={40} /></div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Our Mission</h2>
              <p className="text-xl opacity-80 leading-relaxed font-medium">To equip learners with practical, relevant and market-ready skills that enhance employability and professional excellence across healthcare sectors.</p>
            </div>
          </div>
          <div className="group relative p-12 bg-base-100 border-[6px] border-primary rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:border-secondary">
            <Eye className="absolute -bottom-10 -right-10 w-64 h-64 text-primary opacity-5 group-hover:-rotate-12 transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="bg-primary text-primary-content p-4 rounded-2xl w-fit mb-8 shadow-xl"><Eye size={40} /></div>
              <h2 className="text-5xl font-black text-primary uppercase tracking-tighter mb-8 leading-none">Our Vision</h2>
              <p className="text-xl text-base-content/70 leading-relaxed font-medium">To be a leading vocational training institution recognized for academic excellence, professional integrity and industry-relevant education.</p>
            </div>
          </div>
        </section>

        {/* --- CORE VALUES (New Section) --- */}
        <section className="relative">
          <div className="text-center mb-16">
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">The Hansenmyles DNA</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mt-4">Core <span className="text-secondary">Values</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="p-10 bg-base-200 rounded-[2.5rem] border-b-4 border-transparent hover:border-secondary transition-all group">
                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-black text-primary uppercase mb-4 tracking-tighter">{value.title}</h3>
                <p className="text-sm font-medium opacity-70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- LEADERSHIP & FACULTY --- */}
        <section>
          <div className="text-center mb-20">
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">The Minds Behind Hansenmyles</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mt-4">Meet Our <span className="text-secondary">Faculty</span></h2>
            <div className="w-24 h-2 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>
          <Leadership />
        </section>

        {/* --- AREAS OF TRAINING --- */}
        <section className="bg-base-200 p-12 md:p-20 rounded-[4rem] border border-base-300">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-black text-primary uppercase tracking-tighter leading-[0.9] mb-8">World Class <br/>Faculties</h2>
              <p className="text-xl opacity-70 mb-10 leading-relaxed font-medium">Focused specialized training in the two most stable sectors of the global economy.</p>
              <div className="badge badge-primary badge-lg p-6 font-black uppercase tracking-widest text-xs">TVET COMPLIANT</div>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
              <div className="card bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 border-primary hover:-translate-y-2 transition-transform">
                <Stethoscope className="text-primary mb-6" size={48} />
                <h3 className="text-2xl font-black text-primary uppercase mb-6 tracking-tighter">Healthcare</h3>
                <ul className="space-y-4">
                  {["Nursing Assistant", "Health Records", "Hospital Billing"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-sm opacity-70">
                      <ArrowRight size={16} className="text-secondary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 border-secondary hover:-translate-y-2 transition-transform">
                <Utensils className="text-secondary mb-6" size={48} />
                <h3 className="text-2xl font-black text-primary uppercase mb-6 tracking-tighter">Services</h3>
                <ul className="space-y-4">
                  {["Customer Service", "Pastry & Baking", "Barista Training"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-sm opacity-70">
                      <ArrowRight size={16} className="text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACCREDITATION TRUST BAR --- */}
        <section className="bg-primary text-primary-content rounded-[4rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-12 opacity-10"><ShieldCheck size={200} /></div>
          <div className="grid md:grid-cols-2 relative z-10">
            <div className="p-16 border-b md:border-b-0 md:border-r border-white/10 flex gap-8 items-start group">
              <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-colors"><ShieldCheck size={40} /></div>
              <div>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Accreditation</h3>
                <p className="text-lg opacity-80 leading-relaxed font-medium">Nationally recognized TVET standards ensuring global quality assurance.</p>
              </div>
            </div>
            <div className="p-16 flex gap-8 items-start group">
              <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-colors"><BedDouble size={40} /></div>
              <div>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Campus Life</h3>
                <p className="text-lg opacity-80 leading-relaxed font-medium">Safe, student-friendly hostels for learners relocating from across Kenya.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <section className="text-center bg-secondary text-secondary-content p-20 rounded-[4rem] shadow-2xl">
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">Your Future <br/> Starts Here</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-bold uppercase tracking-widest opacity-80">
            Join Kenya's Premier Training Faculty today.
          </p>
          <Link to="/apply" className="btn btn-primary btn-lg px-20 shadow-2xl hover:scale-110 active:scale-95 transition-all text-white border-none rounded-2xl py-6 h-auto text-2xl uppercase tracking-[0.3em] font-black">
            Apply Now
          </Link>
        </section>
      </div>
    </div>
  );
}
