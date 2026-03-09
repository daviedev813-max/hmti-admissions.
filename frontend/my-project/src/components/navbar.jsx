import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { MdAttachEmail } from "react-icons/md";
import { Phone, ChevronRight } from "lucide-react";

export default function Navbar() {
  // --- MOBILE TWINKLE LOGIC ---
  const [textIndex, setTextIndex] = useState(0);
  const mobileMessages = [
    "Welcome to Hansenmyles",
    "TVET Accredited Excellence",
    "May 2026 Intake Ongoing",
    "Join Kenya's Best Faculty",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % mobileMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // --- FUNCTION TO CLOSE DROPDOWN ON CLICK ---
  const closeMenu = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  const navLinkClass = ({ isActive }) =>
    `btn btn-ghost btn-sm normal-case font-bold transition-all duration-300 ${
      isActive
        ? "text-secondary border-b-2 border-secondary rounded-none"
        : "text-white hover:text-secondary hover:bg-white/5"
    }`;

  return (
    <div className="sticky top-0 z-50 w-full shadow-2xl">
      {/* --- LAYER 1: MOTION TOP BAR --- */}
      <div className="bg-secondary text-secondary-content py-2 px-4 border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* MOBILE ONLY: Twinkling Text */}
          <div className="flex-1 md:hidden overflow-hidden">
            <div
              key={textIndex}
              className="animate-twinkle text-[9px] font-black uppercase tracking-wider text-left"
              style={{ animation: "bounce-top twinkleFade 4s infinite" }}
            >
              {mobileMessages[textIndex]}
            </div>
          </div>

          {/* DESKTOP ONLY: Seamless Infinite Marquee */}
          <div className="flex-1 overflow-hidden mr-2 hidden md:block">
            <div className="marquee-container animate-marquee">
              <span className="font-black uppercase tracking-[0.2em] text-[10px] pr-10">
                Welcome to Hansenmyles Training Institute • TVET Accredited
                Excellence • Admissions for May 2026 Now Open • Join Kenya's
                Leading Healthcare Faculty •
              </span>
              <span className="font-black uppercase tracking-[0.2em] text-[10px] pr-10">
                Welcome to Hansenmyles Training Institute • TVET Accredited
                Excellence • Admissions for May 2026 Now Open • Join Kenya's
                Leading Healthcare Faculty •
              </span>
            </div>
          </div>

          {/* Socials & Contact */}
          <div className="flex items-center gap-2 md:gap-6 shrink-0">
            <div className="hidden lg:flex items-center gap-4 border-r border-black/10 pr-6">
              <a
                href="tel:+254119497871"
                className="flex items-center gap-1.5 text-[10px] font-bold hover:opacity-70 transition-opacity"
              >
                <Phone size={12} /> +254 119 497 871
              </a>
              <a
                href="mailto:info@hansenmyles.ac.ke"
                className="flex items-center gap-1.5 text-[10px] font-bold hover:opacity-70 transition-opacity"
              >
                <MdAttachEmail size={12} /> info@hansenmylesinstitute.com
              </a>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2">
              <SocialIcon
                url="https://wa.me/message/DYRT5INSCCRMF1"
                style={{ height: 22, width: 22 }}
                target="_blank"
              />
              <SocialIcon
                url="https://www.facebook.com/profile.php?id=61586905881244"
                style={{ height: 22, width: 22 }}
                target="_blank"
              />
              <SocialIcon
                url="https://www.instagram.com/hansenmyles_training_institute?igsh=Z2E2N3pocXB1ajlz"
                style={{ height: 22, width: 22 }}
                target="_blank"
              />
              <SocialIcon
                url="tiktok.com/@hansenmylesinstitu"
                style={{ height: 22, width: 22 }}
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- LAYER 2: MAIN NAVBAR --- */}
      <div className="bg-primary text-primary-content border-b border-white/10">
        <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 py-3">
          {/* Brand/Logo Area */}
          <div className="flex-1">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-4 group"
            >
              <div className="bg-white p-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tighter leading-none uppercase">
                  Hansenmyles
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">
                  Training Institute
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 mr-6">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/courses" className={navLinkClass}>
                Courses
              </NavLink>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
              <NavLink to="/news" className={navLinkClass}>
                Updates
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </div>
            <Link
              to="/apply"
              className="btn btn-secondary btn-md shadow-xl tracking-in-expand hover:shadow-secondary/40 hover:-translate-y-1 active:translate-y-0 transition-all border-none font-black uppercase tracking-widest tracking-in-expand text-xs px-8"
            >
              Apply Now <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 p-4 shadow-2xl bg-base-100 text-base-content rounded-2xl w-72 border border-base-300"
              >
                <li className="menu-title text-primary font-black uppercase tracking-widest text-xs mb-2">
                  Campus Menu
                </li>
                <li>
                  <NavLink to="/" onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={closeMenu}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" onClick={closeMenu}>
                    Our Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" onClick={closeMenu}>
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" onClick={closeMenu}>
                    Updates
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={closeMenu}>
                    Contact
                  </NavLink>
                </li>
                <div className="divider opacity-50"></div>
                <li>
                  <Link
                    to="/apply"
                    onClick={closeMenu}
                    className="btn btn-primary text-white w-full rounded-xl"
                  >
                    Apply for Admission
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
