import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import { 
  CheckCircle, 
  Users, 
  Clock, 
  Award, 
  Home as HomeIcon, 
  GraduationCap, 
  ArrowRight,
  BookOpen,
  HeartPulse
} from "lucide-react";

export default function Home() {
  const whyChooseUs = [
    { title: "TVET Accredited", desc: "Recognized and compliant with national training standards.", icon: <Award className="w-8 h-8" /> },
    { title: "Practical Learning", desc: "Skill-based training aligned with real industry demands.", icon: <CheckCircle className="w-8 h-8" /> },
    { title: "Fast-Track", desc: "Short programs designed for rapid employability.", icon: <Clock className="w-8 h-8" /> },
    { title: "Affordable Fees", desc: "Accessible training without compromising quality.", icon: <Users className="w-8 h-8" /> },
    { title: "Student Hostels", desc: "Convenient accommodation options available.", icon: <HomeIcon className="w-8 h-8" /> },
    { title: "Career Focused", desc: "Structured to enhance employability and growth.", icon: <GraduationCap className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-base-100 text-base-content selection:bg-secondary selection:text-secondary-content">
      <Hero />
      
      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 uppercase tracking-tighter">Why Study With Us?</h2>
            <div className="w-20 h-2 bg-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="group relative p-10 bg-base-100 border border-base-300 rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Subtle background number */}
                <span className="absolute -bottom-6 -right-4 text-9xl font-black text-base-200 opacity-50 group-hover:text-secondary/10 transition-colors">0{i+1}</span>
                
                <div className="relative z-10">
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-secondary-content transition-all duration-500 shadow-sm">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-base-content/60 leading-relaxed text-lg">{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </section>
      <Gallery />

      {/* --- FEATURED COURSES SECTION --- */}
      <section className="bg-base-200 py-24 px-6 border-y border-base-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
                <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-3">
                    <HeartPulse size={20}/>
                    <span>Specialized Faculty</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter leading-none">Healthcare Programs</h2>
            </div>
            <Link to="/courses" className="group flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors uppercase tracking-widest border-b-2 border-primary hover:border-secondary pb-1">
                Explore All Courses <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, index) => (
              <div key={index} className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="h-3 bg-primary group-hover:bg-secondary transition-colors"></div>
                <div className="card-body p-10">
                  <div className="badge badge-outline border-base-300 text-base-content/50 mb-4 font-bold">CERTIFICATE PROGRAM</div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{course}</h3>
                  <p className="text-base-content/70 mb-8 leading-relaxed">
                    Designed by industry experts to provide hands-on clinical experience and theoretical foundations.
                  </p>
                  <div className="card-actions">
                    <Link to="/apply" className="btn btn-primary btn-block text-white group-hover:shadow-lg transition-all border-none">
                      Application Portal
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-24 px-6 bg-primary text-primary-content relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
                <div className="group border-l-[6px] border-secondary pl-8 py-2">
                    <h3 className="text-4xl font-black uppercase tracking-widest mb-6 group-hover:translate-x-2 transition-transform">Our Mission</h3>
                    <p className="text-xl leading-relaxed opacity-80 font-medium">
                        To equip learners with practical, relevant, and market-ready skills that enhance employability and professional growth.
                    </p>
                </div>
                <div className="group border-l-[6px] border-secondary pl-8 py-2">
                    <h3 className="text-4xl font-black uppercase tracking-widest mb-6 group-hover:translate-x-2 transition-transform">Our Vision</h3>
                    <p className="text-xl leading-relaxed opacity-80 font-medium">
                        To be a leading training institution recognized for excellence, competence, and industry-relevant education.
                    </p>
                </div>
            </div>
            
            {/* Visual Branding Element */}
            <div className="relative hidden lg:block">
                <div className="aspect-square bg-white/5 rounded-full border border-white/10 flex items-center justify-center p-20 backdrop-blur-sm">
                    <div className="text-center">
                        <BookOpen size={100} className="mx-auto text-secondary mb-6 opacity-40" />
                        <p className="text-3xl font-black opacity-10 uppercase tracking-[0.3em] rotate-12">Knowledge is Power</p>
                    </div>
                </div>
                {/* Floating academic cap icon */}
                <div className="absolute top-10 right-10 bg-secondary p-6 rounded-2xl rotate-12 shadow-2xl">
                    <GraduationCap size={40} className="text-secondary-content" />
                </div>
            </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-24 text-center bg-secondary text-secondary-content">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Your Career Starts Here</h2>
            <p className="text-xl mb-12 opacity-90 font-bold max-w-xl mx-auto leading-relaxed uppercase tracking-widest">
                Join a community of healthcare leaders and professional experts.
            </p>
            <Link to="/apply" className="btn btn-primary btn-lg px-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all text-white border-none rounded-full py-4 h-auto text-xl">
                Begin Enrollment
            </Link>
        </div>
      </section>

    </div>
  );
}
