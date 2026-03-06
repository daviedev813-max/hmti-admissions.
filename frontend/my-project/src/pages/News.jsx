import React from "react";
import { Calendar, User, ArrowRight, Bell, Newspaper, Megaphone, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Academic Excellence Awards Announced",
      excerpt: "Celebrating outstanding achievements of our students.",
      date: "March 5, 2026",
      author: "Admin",
      tag: "Achievement",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 2,
      title: "New Library Wing Opens",
      excerpt: "State-of-the-art facilities now available to all students.",
      date: "March 1, 2026",
      author: "Admin",
      tag: "Campus",
      image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 3,
      title: "Scholarship Opportunities for 2026",
      excerpt: "Apply now for various merit-based scholarships.",
      date: "February 28, 2026",
      author: "Admin",
      tag: "Scholarship",
      image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    }
  ];

  return (
    <div className="bg-base-100 min-h-screen selection:bg-secondary selection:text-secondary-content">
      
      {/* --- ELITE PAGE HEADER --- */}
      <section className="bg-primary text-primary-content py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com')]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-content px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
              <Bell size={14} className="animate-bounce" /> Campus Bulletin
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              News & <span className="text-secondary">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-80 font-medium leading-relaxed">
              Stay informed with the latest academic announcements, student achievements, and campus developments.
            </p>
          </div>
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md hidden lg:block rotate-3 hover:rotate-0 transition-transform duration-700">
            <Newspaper size={140} className="text-secondary opacity-30" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* --- BENTO STYLE HIGHLIGHTS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
          
          {/* FEATURED STORY */}
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} className="lg:col-span-8 group relative overflow-hidden rounded-[3.5rem] shadow-2xl h-[600px] border-4 border-base-200">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent p-10 md:p-16 flex flex-col justify-end">
                <span className="badge badge-secondary p-4 font-black uppercase tracking-widest mb-6 shadow-lg">{item.tag}</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                  {item.title}
                </h2>
                <div className="flex items-center gap-8 text-white/70 text-xs mb-8 font-black uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full"><Calendar size={14} className="text-secondary" /> {item.date}</span>
                  <span className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full"><User size={14} className="text-secondary" /> {item.author}</span>
                </div>
                <Link to={`/news/${item.id}`} className="btn btn-secondary btn-lg w-fit rounded-full px-10 shadow-2xl hover:scale-105 transition-all border-none font-black uppercase tracking-widest">
                  Read Full Story <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}

          {/* QUICK ALERTS SIDEBAR */}
          <div className="lg:col-span-4 bg-primary text-primary-content p-12 rounded-[3.5rem] shadow-2xl flex flex-col border-b-8 border-secondary relative overflow-hidden">
            <Megaphone size={120} className="absolute -top-10 -right-10 text-secondary opacity-10 rotate-12" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-10 flex items-center gap-3">
                <Megaphone className="text-secondary" /> Quick Alerts
              </h3>
              <ul className="space-y-8">
                <li className="group cursor-pointer">
                  <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-2">March 10, 2026</p>
                  <p className="font-bold text-lg leading-tight group-hover:text-secondary transition-colors">End of Semester Exam Timetable Released.</p>
                </li>
                <li className="group cursor-pointer border-t border-white/10 pt-6">
                  <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-2">March 15, 2026</p>
                  <p className="font-bold text-lg leading-tight group-hover:text-secondary transition-colors">Hostel Booking Deadline for New Students.</p>
                </li>
                <li className="group cursor-pointer border-t border-white/10 pt-6">
                  <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-2">April 02, 2026</p>
                  <p className="font-bold text-lg leading-tight group-hover:text-secondary transition-colors">Graduation Gown Collection Commences.</p>
                </li>
              </ul>
              <Link to="/contact" className="mt-12 btn btn-outline border-white/20 text-white btn-block rounded-2xl hover:bg-white hover:text-primary">
                 Inquire with Registrar
              </Link>
            </div>
          </div>
        </div>

        {/* --- SECONDARY NEWS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsItems.filter(item => !item.featured).map((item) => (
            <div key={item.id} className="card lg:card-side bg-base-100 shadow-xl border-2 border-base-200 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group rounded-[2.5rem]">
              <figure className="lg:w-2/5 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </figure>
              <div className="card-body lg:w-3/5 p-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">{item.tag}</span>
                  <div className="p-2 bg-base-200 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <Share2 size={14} />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4 leading-none group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm opacity-60 mb-8 font-medium leading-relaxed line-clamp-2">{item.excerpt}</p>
                <div className="card-actions mt-auto">
                  <Link to={`/news/${item.id}`} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-5 transition-all">
                    Read Story <ArrowRight size={16} className="text-secondary" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="bg-base-200 py-24 px-6 border-t border-base-300">
        <div className="max-w-5xl mx-auto text-center card bg-white p-12 md:p-20 shadow-2xl rounded-[4rem] border-b-8 border-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-br-full"></div>
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-6 relative z-10">Join the Circle</h2>
          <p className="opacity-60 font-bold uppercase tracking-widest text-sm mb-12 relative z-10">Get the latest campus news directly in your inbox.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input input-bordered bg-base-200 border-none w-full rounded-2xl px-8 h-16 font-bold focus:ring-2 focus:ring-secondary transition-all" 
            />
            <button className="btn btn-primary rounded-2xl px-12 h-16 font-black uppercase tracking-widest border-none text-white shadow-xl hover:scale-105 active:scale-95 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
