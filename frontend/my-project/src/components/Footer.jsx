import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { BsWhatsapp} from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import {
  Phone,
  MapPin,
  ChevronRight,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const FooterLink = ({ to, children }) => (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-2 text-primary-content/70 hover:text-secondary transition-all duration-300"
      >
        <ChevronRight
          size={14}
          className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary"
        />
        <span className="group-hover:translate-x-1 transition-transform">
          {children}
        </span>
      </Link>
    </li>
  );

  return (
    <footer className="bg-primary text-primary-content pt-20 border-t-8 border-secondary relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* 1. BRAND & SOCIALS */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            {/* FIXED: White container to make Maroon logo visible */}
            <div className="bg-white p-2 rounded-lg shadow-xl">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter uppercase leading-none">
                Hansenmyles
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-secondary font-bold">
                Training Institute
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed opacity-80 font-medium">
            A premier TVET accredited institution dedicated to excellence in
            healthcare and professional skill development. Equipping the next
            generation of industry leaders.
          </p>

          {/* SOCIAL MEDIA WITH ORIGINAL BRAND COLORS */}
          <div className="flex gap-4">
            <SocialIcon
              url="https://whatsapp.com"
              style={{ height: 25, width: 25 }}
              target="_blank"
            />
            <SocialIcon
              url="https://facebook.com"
              style={{ height: 25, width: 25 }}
              target="_blank"
            />
            <SocialIcon
              url="https://instagram.com"
              style={{ height: 25, width: 25 }}
              target="_blank"
            />
            <SocialIcon
              url="https://tiktok.com"
              style={{ height: 25, width: 25 }}
              target="_blank"
            />
          </div>
        </div>

        {/* 2. ACADEMIC LINKS */}
        <div>
          <h3 className="text-secondary font-black uppercase tracking-[0.2em] text-xs mb-8 border-b border-white/10 pb-3 flex items-center gap-2">
            <Globe size={14} /> Academic Links
          </h3>
          <ul className="space-y-4 font-bold text-sm">
            <FooterLink to="/">Campus Home</FooterLink>
            <FooterLink to="/about">Our Philosophy</FooterLink>
            <FooterLink to="/courses">Available Courses</FooterLink>
            <FooterLink to="/gallery">Campus Gallery</FooterLink>
            <FooterLink to="/apply">Enrollment Portal</FooterLink>
          </ul>
        </div>

        {/* 3. CONTACT CHANNELS (Clickable) */}
        <div>
          <h3 className="text-secondary font-black uppercase tracking-[0.2em] text-xs mb-8 border-b border-white/10 pb-3 flex items-center gap-2">
            <ShieldCheck size={14} /> Connect With Us
          </h3>
          <ul className="space-y-6">
            <li className="group">
              <a href="tel:+254119497871" className="flex items-start gap-4">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-bold">
                    Call Admissions
                  </p>
                  <p className="text-sm font-black group-hover:text-secondary transition-colors">
                    +254 119 497 871
                  </p>
                </div>
              </a>
            </li>
            <li className="group">
              <a
                href="https://wa.me"
                target="_blank"
                className="flex items-start gap-4"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <BsWhatsapp  size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-bold">
                    WhatsApp Office
                  </p>
                  <p className="text-sm font-black group-hover:text-secondary transition-colors">
                    +254 119 497 870
                  </p>
                </div>
              </a>
            </li>
            <li className="group">
              <a
                href="mailto:info@hansenmyles.ac.ke"
                className="flex items-start gap-4"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <MdAttachEmail size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-bold">
                    Official Email
                  </p>
                  <p className="text-sm font-black group-hover:text-secondary transition-colors text-wrap truncate">
                    info@hansenmyles.ac.ke
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* 4. OUR CAMPUS */}
        <div>
          <h3 className="text-secondary font-black uppercase tracking-[0.2em] text-xs mb-8 border-b border-white/10 pb-3 flex items-center gap-2">
            <MapPin size={14} /> Location
          </h3>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 bg-white/5 rounded-lg">
              <MapPin size={18} className="text-secondary" />
            </div>
            <p className="text-sm leading-relaxed opacity-80 font-bold">
              Eastlands, Along Councillor Opundo Road, Dandora, Nairobi, Kenya
            </p>
          </div>
          {/* Stylized Map View */}
          <Link
            to="/contact"
            className="mt-4 block w-full h-32 bg-white/5 rounded-2xl border border-white/10 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.google.com')] bg-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 shadow-2xl group-hover:bg-secondary group-hover:text-primary transition-colors">
                Open Navigation
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-black/30 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-center md:text-left">
            © {currentYear} Hansenmyles Training Institute.{" "}
            <br className="md:hidden" /> All Rights Reserved.
          </p>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
            <Link
              to="/privacy"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-secondary transition-colors"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
