import React, { useState } from "react";
import { courses } from "../data/courses";
import { submitApplication } from "../services/applicationService";

import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  FileText, 
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null); // Clear error when user types
  };

  const validate = () => {
    if (!formData.fullName.trim()) return "Full name is required";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!formData.course) return "Please select a course of study";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

     try {
      setLoading(true);
      await submitApplication(formData);
      setSuccess("Application submitted successfully.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-base-200 min-h-screen selection:bg-secondary selection:text-secondary-content">
      
      {/* --- HEADER --- */}
      <section className="bg-primary text-primary-content py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-content px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
            <ShieldCheck size={14} /> TVET Accredited Enrollment
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Admission <span className="text-secondary">Portal</span>
          </h1>
          <p className="text-xl opacity-80 font-medium max-w-2xl mx-auto">
            Take the first step toward a global career in healthcare and professional services.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: TRUST SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="card bg-primary text-primary-content p-8 rounded-3xl shadow-xl border-b-8 border-secondary">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Why Hansenmyles?</h3>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-2 rounded-lg shrink-0"><CheckCircle2 className="text-secondary" /></div>
                        <p className="text-sm font-medium opacity-90">Nationally recognized TVET certification upon completion.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-2 rounded-lg shrink-0"><Clock className="text-secondary" /></div>
                        <p className="text-sm font-medium opacity-90">Flexible intake periods for all short and long courses.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-2 rounded-lg shrink-0"><FileText className="text-secondary" /></div>
                        <p className="text-sm font-medium opacity-90">Comprehensive career placement and internship support.</p>
                    </div>
                </div>
                <div className="mt-12 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2 font-bold">Need Help?</p>
                    <p className="text-sm font-bold">Call: +254 119 497 871</p>
                </div>
            </div>
          </div>

          {/* --- RIGHT: THE APPLICATION FORM --- */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="card bg-base-100 shadow-2xl rounded-[2.5rem] overflow-hidden border border-base-300">
              <div className="p-8 md:p-12">
                <div className="mb-10">
                    <h2 className="text-3xl font-black text-primary uppercase tracking-tighter">Personal Details</h2>
                    <p className="text-base-content/50 font-bold text-xs uppercase tracking-widest mt-1">Step 1 of 1: Basic Information</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div className="form-control">
                    <label className="label font-bold text-xs uppercase tracking-widest opacity-60 ml-2">Full Name</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-4 flex items-center text-primary/40"><User size={20}/></span>
                        <input type="text" name="fullName" className="input input-bordered bg-base-200 border-none w-full pl-12 h-14 rounded-2xl focus:ring-2 focus:ring-secondary transition-all font-medium" value={formData.fullName} onChange={handleChange} placeholder="As it appears on your ID" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Email */}
                    <div className="form-control">
                        <label className="label font-bold text-xs uppercase tracking-widest opacity-60 ml-2">Email Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-4 flex items-center text-primary/40"><Mail size={20}/></span>
                            <input type="email" name="email" className="input input-bordered bg-base-200 border-none w-full pl-12 h-14 rounded-2xl focus:ring-2 focus:ring-secondary transition-all font-medium" value={formData.email} onChange={handleChange} placeholder="example@email.com" />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="form-control">
                        <label className="label font-bold text-xs uppercase tracking-widest opacity-60 ml-2">Phone Number</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-4 flex items-center text-primary/40"><Phone size={20}/></span>
                            <input type="text" name="phone" className="input input-bordered bg-base-200 border-none w-full pl-12 h-14 rounded-2xl focus:ring-2 focus:ring-secondary transition-all font-medium" value={formData.phone} onChange={handleChange} placeholder="+254 119 497 871
" />
                        </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="form-control">
                    <label className="label font-bold text-xs uppercase tracking-widest opacity-60 ml-2">Intended Course of Study</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-4 flex items-center text-primary/40 pointer-events-none"><BookOpen size={20}/></span>
                        <select name="course" className="select select-bordered bg-base-200 border-none w-full pl-12 h-14 rounded-2xl focus:ring-2 focus:ring-secondary transition-all font-bold text-primary" value={formData.course} onChange={handleChange}>
                            <option value="" disabled>-- Select Your Program --</option>
                            {courses.map((course, index) => (
                                <option key={index} value={course}>{course}</option>
                            ))}
                        </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-control">
                    <label className="label font-bold text-xs uppercase tracking-widest opacity-60 ml-2">Additional Information (Optional)</label>
                    <div className="relative">
                        <span className="absolute top-4 left-4 text-primary/40"><MessageSquare size={20}/></span>
                        <textarea name="message" className="textarea textarea-bordered bg-base-200 border-none w-full pl-12 pt-4 rounded-2xl focus:ring-2 focus:ring-secondary transition-all font-medium" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your educational background or any questions you have." />
                    </div>
                  </div>

                  {/* Status Messages */}
                  {error && (
                    <div className="alert alert-error bg-error/10 border-error/20 text-error rounded-2xl animate-shake">
                        <AlertCircle size={20}/>
                        <span className="font-bold text-sm uppercase tracking-tight">{error}</span>
                    </div>
                  )}

                  {success && (
                    <div className="alert alert-success bg-success/10 border-success/20 text-success rounded-2xl py-6">
                        <div className="flex flex-col items-center w-full text-center">
                            <CheckCircle2 size={40} className="mb-2" />
                            <span className="font-bold text-lg leading-tight">{success}</span>
                        </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button type="submit" className={`btn btn-primary btn-lg w-full rounded-2xl shadow-2xl h-16 text-lg font-black uppercase tracking-[0.2em] border-none hover:scale-[1.02] active:scale-95 transition-all text-white ${loading ? "loading" : ""}`} disabled={loading}>
                    {loading ? "Processing Enrollment..." : "Submit Application"} <Send size={20} className="ml-2" />
                  </button>

                  <p className="text-center text-[10px] uppercase font-bold tracking-widest opacity-40">
                    By submitting, you agree to our admission policy and TVET guidelines.
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
