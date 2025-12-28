
import React from 'react';
import { CONTACT_EMAIL } from '../constants';
import { Mail, Send, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="quote" className="py-24 bg-tactical-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-military font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Get Started</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8">
              Request a <span className="text-military">Quote</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Ready to deploy your next network phase? Contact us today for professional bidding and consultation. Our team is standing by to review your project specs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="bg-military/10 p-4 rounded-sm group-hover:bg-military transition-colors group-hover:text-black">
                  <Mail className="w-6 h-6 text-military group-hover:text-black" />
                </div>
                <div>
                  <span className="block text-sm font-bold uppercase text-gray-500 mb-1">Primary Email</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-display font-bold text-white hover:text-military transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-military/10 p-4 rounded-sm">
                  <Globe className="w-6 h-6 text-military" />
                </div>
                <div>
                  <span className="block text-sm font-bold uppercase text-gray-500 mb-1">Service Region</span>
                  <span className="text-2xl font-display font-bold text-white uppercase">West Virginia Statewide</span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-military/10 p-4 rounded-sm">
                  <Clock className="w-6 h-6 text-military" />
                </div>
                <div>
                  <span className="block text-sm font-bold uppercase text-gray-500 mb-1">Response Time</span>
                  <span className="text-2xl font-display font-bold text-white uppercase">Under 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-tactical-gray border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-military opacity-10 rounded-full blur-3xl" />
            
            <h3 className="text-3xl font-display font-black uppercase mb-8 tracking-tighter">Direct Inquiry</h3>
            <p className="text-gray-400 mb-8 italic">
              Please include project scope, estimated start date, and location in your message.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">Contact Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-military transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">Company Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-military transition-colors" placeholder="General Contracting LLC" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-military transition-colors" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">Project Details</label>
                <textarea rows={4} className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-military transition-colors" placeholder="Tell us about the project..."></textarea>
              </div>
              <button className="w-full bg-military hover:bg-military-dark text-black font-black uppercase tracking-tighter py-5 rounded-sm flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl">
                Send Inquiry
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
