
import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-24 bg-military/5 border-y border-military/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-tactical-black border-2 border-military p-10 md:p-16 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-military opacity-5 blur-2xl -z-10" />
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-black rounded-full border-8 border-military flex flex-col items-center justify-center text-center shadow-2xl transform hover:scale-110 transition-transform">
                <ShieldCheck className="w-16 h-16 text-military mb-2" />
                <span className="text-2xl font-display font-black text-white leading-none">OSHA 10</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-military mt-1">Certified</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-military w-6 h-6" />
                <span className="text-military font-bold uppercase tracking-[0.3em] text-sm">Industry Standard Credentials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-6 text-white">
                Trust Built on <span className="text-military">Safety</span>
              </h2>
              <p className="text-xl text-gray-100 font-medium leading-relaxed mb-8">
                For General Contractors, reliability starts with safety. Our entire workforce is OSHA 10 Certified, ensuring that we maintain a safe, disciplined, and efficient job site on every single deployment.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Full OSHA 10 Compliance',
                  'Strict Quality Control Protocols',
                  'Licensed & Insured for WV',
                  'Drug-Free Workplace',
                  'Emergency Action Prepared',
                  'Professional Gear & Equipment'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-black uppercase tracking-tight text-sm">
                    <CheckCircle2 className="w-5 h-5 text-military" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
