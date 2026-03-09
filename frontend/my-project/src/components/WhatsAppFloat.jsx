import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  // FIXED: Added the full functional link
  const whatsappUrl = "https://wa.me/message/DYRT5INSCCRMF1";

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] group select-none">
      {/* 1. REFINED PULSE: Matches WhatsApp green for a cleaner look */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden"></span>

      {/* 2. THE BUTTON: Reduced padding (p-3) and refined shadow */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1.5 transition-all duration-500 ease-out"
      >
        {/* FIXED: Using Lucide MessageCircle for exact size control */}
        <MessageCircle
          size={22}
          className="md:w-6 md:h-6"
          fill="white"
          fillOpacity={0.2}
        />

        {/* 3. SLIM EXPANSION: Only expands on desktop */}
        <div className="max-w-0 overflow-hidden md:group-hover:max-w-xs transition-all duration-500 ease-in-out">
          <div className="flex flex-col border-l border-white/30 ml-3 pl-3">
            <span className="text-[9px] font-black uppercase tracking-widest opacity-80 leading-none mb-0.5">
              Online
            </span>
            <span className="text-xs font-black whitespace-nowrap uppercase tracking-widest">
              Chat with Us
            </span>
          </div>
        </div>

        {/* 4. REFINED STATUS DOT: Smaller and cleaner */}
        <span className="absolute top-0.5 right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white border border-[#25D366]"></span>
        </span>
      </a>
    </div>
  );
}
