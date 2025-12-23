import React, { useState } from 'react';
import { Mail, User, Building, MessageSquare, Send, CheckCircle, Loader2, X, Phone, MapPin, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    sites: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ 
        name: '', 
        company: '', 
        email: '', 
        phone: '', 
        industry: '', 
        sites: '', 
        message: '' 
      }); // Reset form

      // Hide toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="flex flex-col gap-8 lg:pt-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Ready to transform your indoor spaces? Fill out the form, and our team will get back to you shortly.
              </p>
            </div>

            <div className="space-y-8 mt-4">
              {/* Address */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Our Location</h3>
                  <p className="text-slate-600 font-medium mt-1">Villupuram, Tamil Nadu, India</p>
                  <p className="text-slate-500 text-sm mt-1">Global Development Center</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                  <p className="text-slate-500 text-sm mb-1">For general inquiries and support:</p>
                  <a href="mailto:engage@pixelonics.com" className="text-brand font-semibold hover:underline text-lg">engage@pixelonics.com</a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">Connect with us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white transition-all duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white transition-all duration-300">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white transition-all duration-300">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm relative">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="Pixomap Inc."
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Industry & Sites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium text-slate-700">Industry</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <input 
                      type="text"
                      id="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="e.g. Healthcare, Retail"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="sites" className="text-sm font-medium text-slate-700">Number of Sites</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <select 
                      id="sites" 
                      value={formData.sites}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-slate-900 appearance-none"
                    >
                      <option value="" disabled>Select Number of Sites</option>
                      <option value="1">1 Site</option>
                      <option value="2-5">2-5 Sites</option>
                      <option value="6-20">6-20 Sites</option>
                      <option value="20+">20+ Sites</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message <span className="text-red-500">*</span></label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 text-slate-400" size={18} />
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-base shadow-lg shadow-brand/20 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-white border border-emerald-100 shadow-2xl rounded-2xl p-4 flex items-start gap-3 max-w-sm">
            <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full flex-shrink-0">
              <CheckCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Message Sent!</h4>
              <p className="text-sm text-slate-500 mt-1">Thanks for reaching out. We'll get back to you within 24 hours.</p>
            </div>
            <button 
              onClick={() => setShowToast(false)} 
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};