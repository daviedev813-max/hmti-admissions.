import React, { useState } from "react";
import { Phone, Mail, MessageSquare, MapPin, Send, Clock, Globe, ShieldCheck } from "lucide-react";
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert(`Thank you ${formData.name}, your message has been received!`);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="bg-base-100 selection:bg-secondary selection:text-secondary-content">
      
      {/* --- ELITE HERO HEADER --- */}
      <section className="relative bg-primary text-primary-content py-28 px-6 text-center overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-content px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-xl">
             <ShieldCheck size={14} /> Official Admissions Center
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">
            Have questions about enrollment or our TVET programs? Our administrative team is ready to guide your professional journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- LEFT: INTERACTIVE OFFICE INFO --- */}
          <div className="lg:col-span-5 space-y-10">
            <div>
                <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-10 flex items-center gap-3">
                   Campus Hub
                </h2>
                <div className="grid gap-6">
                    {/* Click-to-Call */}
                    <a href="tel:+254119497871" className="group flex items-start gap-5 p-7 bg-base-200 rounded-[2rem] border-l-8 border-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg">
                        <div className="bg-primary text-white p-4 rounded-2xl group-hover:bg-white group-hover:text-primary transition-colors shadow-md">
                            <Phone size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 mb-1">Direct Admission Line</p>
                            <p className="text-xl font-black">+254 119 497 871</p>
                        </div>
                    </a>

                    {/* Click-to-WhatsApp */}
                    <a href="https://wa.me" target="_blank" rel="noreferrer" className="group flex items-start gap-5 p-7 bg-base-200 rounded-[2rem] border-l-8 border-secondary hover:bg-secondary hover:text-secondary-content transition-all duration-500 shadow-lg">
                        <div className="bg-[#25D366] text-white p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                            <FaWhatsapp size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 mb-1">WhatsApp Admissions</p>
                            <p className="text-xl font-black">+254 119 497 870</p>
                        </div>
                    </a>

                    {/* Click-to-Email */}
                    <a href="mailto:info@hansenmylesinstitute.com" className="group flex items-start gap-5 p-7 bg-base-200 rounded-[2rem] border-l-8 border-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg">
                        <div className="bg-primary text-white p-4 rounded-2xl group-hover:bg-white group-hover:text-primary transition-colors shadow-md">
                            <MdAttachEmail size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 mb-1">Official Inquiry</p>
                            <p className="text-lg font-black break-all">info@hansenmylesinstitute.com</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Academic Hours Card */}
            <div className="p-10 bg-primary text-primary-content rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <Clock className="absolute -bottom-6 -right-6 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Academic Hours</h3>
                <ul className="space-y-4 font-bold text-lg">
                    <li className="flex justify-between items-center opacity-90"><span>Mon — Friday:</span> <span className="badge badge-secondary py-3 px-4 font-black">8:00 — 17:00</span></li>
                    <li className="flex justify-between items-center opacity-90"><span>Saturday:</span> <span className="badge badge-outline border-white/30 text-white py-3 px-4 font-black">9:00 — 13:00</span></li>
                    <li className="flex justify-between items-center text-secondary"><span>Sunday:</span> <span className="font-black uppercase tracking-widest">Campus Closed</span></li>
                </ul>
            </div>
          </div>

          {/* --- RIGHT: THE PREMIUM INQUIRY FORM --- */}
          <div className="lg:col-span-7">
            <div className="card bg-base-100 border-2 border-base-200 shadow-2xl p-8 md:p-14 rounded-[3rem] sticky top-24">
              <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-4 text-center">Inquiry Portal</h2>
              <p className="text-center text-base-content/60 mb-12 font-bold uppercase tracking-widest text-xs">Reach out to our campus registrars</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="form-control">
                        <label className="label font-black text-[10px] uppercase tracking-widest opacity-50 ml-2">Applicant Full Name</label>
                        <input type="text" name="name" className="input input-bordered bg-base-200 border-none focus:ring-4 focus:ring-secondary/20 w-full h-16 rounded-2xl font-bold transition-all" value={formData.name} onChange={handleChange} placeholder="e.g. David Matheka" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-black text-[10px] uppercase tracking-widest opacity-50 ml-2">Email Address</label>
                        <input type="email" name="email" className="input input-bordered bg-base-200 border-none focus:ring-4 focus:ring-secondary/20 w-full h-16 rounded-2xl font-bold transition-all" value={formData.email} onChange={handleChange} placeholder="david@example.com" required />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label font-black text-[10px] uppercase tracking-widest opacity-50 ml-2">Message Details</label>
                    <textarea name="message" rows="5" className="textarea textarea-bordered bg-base-200 border-none focus:ring-4 focus:ring-secondary/20 w-full rounded-2xl font-bold p-6 transition-all" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help your career today..." required />
                </div>

                <button type="submit" disabled={isSubmitted} className={`btn btn-primary btn-lg w-full h-20 rounded-2xl shadow-2xl transition-all text-white border-none font-black uppercase tracking-[0.3em] ${isSubmitted ? 'loading' : 'hover:scale-[1.02] active:scale-95'}`}>
                    {isSubmitted ? 'Submitting...' : 'Send Message'} <Send size={20} className="ml-3" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- FULL WIDTH INTERACTIVE MAP --- */}
        <div className="mt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none mb-4">
                      Find Our <span className="text-secondary">Campus</span>
                    </h2>
                    <div className="w-24 h-2 bg-secondary rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm">
                    <MapPin size={24} className="text-secondary" />
                    <span>Dandora, Councillor Opundo Road</span>
                </div>
            </div>
            
            {/* THE UPDATED IFRAME CONTAINER */}
            <div className="w-full h-[600px] rounded-[4rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-base-200 relative group">
                <iframe 
                    title="Hansenmyles Official Location" 
                    className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8606287890098!2d36.89902897414933!3d-1.255401335591431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x645c719270550023%3A0xfa9f515711552dbb!2sHansenmyles%20Training%20institute!5e0!3m2!1sen!2ske!4v1772785983845!5m2!1sen!2ske" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                {/* Floating "Open in Maps" Badge */}
                <a 
                  href="https://maps.app.goo.gl" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute bottom-10 right-10 btn btn-secondary btn-md rounded-full shadow-2xl font-black uppercase tracking-widest border-none hover:scale-110 transition-transform"
                >
                  Get Directions
                </a>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10 text-base-content/40 font-black uppercase tracking-[0.4em] text-xs">
                <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"><MapPin size={16}/> Near Daisy House</div>
                <div className="hidden md:block opacity-20">|</div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"><Globe size={16}/> Nairobi, Kenya</div>
            </div>
        </div>
      </div>
    </div>
  );
}
    