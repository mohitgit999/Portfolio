import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate network request
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 flex items-center justify-center relative transition-colors duration-500">
      <div className="max-w-4xl w-full mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Get In Touch</h2>
            <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 mx-auto rounded-full transition-colors duration-500"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg mx-auto transition-colors duration-500">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-500">
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-500">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium transition-colors">your.email@example.com</a>
                </div>
              </GlassCard>
            </Reveal>
            
            <Reveal delay={0.2}>
              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-500">
                  <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors duration-500">Location</h4>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-500">India</span>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={0.3}>
              <GlassCard>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="name" className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1 font-medium transition-colors duration-500">Name</label>
                      <input required type="text" id="name" className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-slate-500 transition-colors shadow-sm" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1 font-medium transition-colors duration-500">Email</label>
                      <input required type="email" id="email" className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-slate-500 transition-colors shadow-sm" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1 font-medium transition-colors duration-500">Message</label>
                    <textarea required id="message" rows="4" className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-slate-500 transition-colors resize-none shadow-sm" placeholder="Your message here..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status !== 'idle'}
                    className="mt-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl px-6 py-3 flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm disabled:bg-gray-500 dark:disabled:bg-gray-400 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {status === 'idle' && <><Send className="w-4 h-4" /> Send Message</>}
                    {status === 'sending' && 'Sending...'}
                    {status === 'success' && 'Message Sent! ✓'}
                  </button>
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
