import React from "react";
import { Link } from "react-router-dom";
import { 
  Stethoscope, ClipboardList, CreditCard, Clock, Briefcase, 
  Coffee, Users, Sparkles, ArrowRight, HeartPulse, GraduationCap, 
  ShieldCheck, Globe, Zap 
} from "lucide-react";

export default function Courses() {
  const CourseCard = ({ title, duration, lessons, cert, careers, icon: Icon, highlight = false }) => (
    <div className={`group relative card bg-base-100 border-2 transition-all duration-500 hover:-translate-y-2 ${highlight ? 'border-secondary shadow-xl shadow-secondary/10' : 'border-base-200 hover:border-primary/30 hover:shadow-2xl'}`}>
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-content text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full z-20 shadow-lg">
          Most Popular
        </div>
      )}
      <div className="card-body p-8">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-4 rounded-2xl transition-all duration-500 ${highlight ? 'bg-secondary text-secondary-content rotate-3 group-hover:rotate-0' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
            <Icon size={32} />
          </div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40">
            <Clock size={14} className="text-secondary" /> {duration}
          </div>
        </div>

        <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4 leading-[0.9]">
          {title}
        </h3>

        <div className="space-y-6 mb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-3">Module Overview</p>
            <ul className="space-y-2">
              {lessons.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-base-content/70">
                  <ArrowRight size={12} className="text-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-dashed border-base-300">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-50 text-base-content">Certification</span>
            </div>
            <p className="text-sm font-bold text-primary">{cert}</p>
            
            <p className="mt-4 text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Career Paths</p>
            <p className="text-xs font-medium leading-relaxed opacity-70 italic">{careers}</p>
          </div>
        </div>

        <div className="card-actions mt-auto">
          <Link to="/apply" className={`btn btn-block h-auto py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${highlight ? 'btn-secondary shadow-lg shadow-secondary/20' : 'btn-primary btn-outline hover:btn-primary'}`}>
            Secure My Spot
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-base-100 selection:bg-secondary selection:text-secondary-content overflow-x-hidden">
      {/* --- ELITE HERO SECTION --- */}
      <section className="relative bg-primary text-primary-content py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/30 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
            <ShieldCheck size={16} className="text-secondary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-secondary">TVET Accredited Institution</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            Elite <span className="text-secondary">Career</span> <br/>Faculties
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-80 max-w-3xl mx-auto leading-relaxed italic">
            "Transforming ambitious learners into globally competitive professionals."
          </p>
        </div>
      </section>

      {/* --- FACULTY 01: HEALTHCARE --- */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Faculty 01</span>
            <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mt-4 leading-none">
              Clinical <br/><span className="text-secondary">Medicine</span>
            </h2>
          </div>
          <div className="lg:col-span-5 border-l-4 border-secondary pl-8">
            <p className="text-lg text-base-content/60 font-medium leading-relaxed">
              Our clinical programs are built on rigorous international standards, focusing on patient-centered care and high-fidelity medical simulations.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <CourseCard 
            title="Nursing Assistant (CNA)" 
            duration="6–12 Months" 
            highlight={true} 
            icon={Stethoscope} 
            lessons={["Vital signs monitoring", "Basic nursing procedures", "Infection control", "Patient hygiene support"]} 
            cert="Accredited CNA Certificate" 
            careers="Hospitals, Maternity Clinics, Nursing Homes" 
          />
          <CourseCard 
            title="Healthcare Assistant" 
            duration="3–6 Months" 
            icon={HeartPulse} 
            lessons={["Clinical support skills", "Patient reporting", "Emergency response", "Medical terminology"]} 
            cert="Accredited HCA Certificate" 
            careers="Private Clinics, Community Health Centers" 
          />
          <CourseCard 
            title="Patient Attendant" 
            duration="3 Months" 
            icon={Users} 
            lessons={["Bedside patient care", "Rehabilitation support", "Patient mobility", "Communication skills"]} 
            cert="Patient Care Certificate" 
            careers="Home-based care, Specialized Nursing Homes" 
          />
        </div>
      </section>

      {/* --- FACULTY 02: ADMINISTRATION --- */}
      <section className="bg-base-200 py-32 px-6 border-y-8 border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <div className="inline-block bg-primary text-primary-content px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px] mb-6">
               Business Operations
             </div>
            <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-tighter">Health <span className="text-secondary">Systems</span> Management</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard title="Health Records" duration="3–6 Months" icon={ClipboardList} lessons={["Data Management Systems", "File Confidentiality", "Digital Health Records", "Patient Registration"]} cert="Health Records Mgmt Cert" careers="Hospital Admin, Insurance Companies" />
            <CourseCard title="Billing & Claims" duration="3–6 Months" icon={CreditCard} lessons={["Medical Billing Systems", "Insurance Processing", "Financial Compliance", "Claims Auditing"]} cert="Medical Billing Certificate" careers="Finance Depts, HMO Agencies" />
            <CourseCard title="Credit Control" duration="3–6 Months" icon={Briefcase} lessons={["Account Reconciliation", "Debt Recovery", "Financial Controls", "Patient Accounts"]} cert="Hospital Finance Cert" careers="Private Hospitals, Health Auditors" />
          </div>
        </div>
      </section>

      {/* --- FACULTY 03: HOSPITALITY --- */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <h2 className="text-5xl font-black text-primary uppercase tracking-tighter leading-none shrink-0">Professional <br/> Services</h2>
          <div className="grid grid-cols-2 gap-8 w-full max-w-md">
            <div className="bg-base-200 p-6 rounded-2xl text-center">
              <Globe size={24} className="mx-auto mb-2 text-secondary" />
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Global Standards</p>
            </div>
            <div className="bg-base-200 p-6 rounded-2xl text-center">
              <Zap size={24} className="mx-auto mb-2 text-secondary" />
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Practical Focus</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <CourseCard title="Housekeeping" duration="Variable" icon={Sparkles} lessons={["Sanitation Standards", "Institutional Cleaning", "Safety Compliance", "Hygiene Management"]} cert="Hospitality Management Cert" careers="Hotels, Hospitals, Boarding Schools" />
          <CourseCard title="Customer Service" duration="Variable" icon={Users} lessons={["Conflict Resolution", "Professional Etiquette", "Front Office Ops", "Advanced Communication"]} cert="Professional Etiquette Cert" careers="Corporate Front Desk, Reception" />
          <CourseCard title="Pastry & Barista" duration="Variable" icon={Coffee} lessons={["Food Tech & Baking", "Beverage Science", "Hygiene Standards", "Business Fundamentals"]} cert="Culinary Arts Certificate" careers="Cafes, Bakeries, Catering Events" />
        </div>
      </section>

      {/* --- ELITE CALL TO ACTION --- */}
      <section className="bg-primary text-primary-content py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-32"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
            Ready to <br/>Lead the Industry?
          </h2>
          <p className="text-xl mb-12 opacity-70 font-medium max-w-2xl mx-auto">
            Our admissions office is currently processing applications for the upcoming intake. Speak with an advisor today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/apply" className="btn btn-secondary btn-lg px-12 h-auto py-6 text-xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform">
              Start Application
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg border-white/20 text-white hover:bg-white hover:text-primary px-12 h-auto py-6 text-xl font-black uppercase tracking-widest">
              Consult Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
