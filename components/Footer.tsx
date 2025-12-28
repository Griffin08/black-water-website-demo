
import React from 'react';
import { COMPANY_NAME, REGION } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-military/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-military rounded flex items-center justify-center text-black font-black text-sm border border-black">
                B
              </div>
              <span className="text-xl font-display font-bold tracking-tighter uppercase text-white">
                Blackwater <span className="text-military">Solutions</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              Professional aerial fiber optics and telecommunications infrastructure specialists serving the {REGION} region.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase mb-6 tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'About Us', 'Credentials', 'Request a Quote'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-military transition-colors uppercase text-xs font-bold tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase mb-6 tracking-widest text-sm">Headquarters</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Operating throughout West Virginia.<br />
              Rugged deployments, expert results.
            </p>
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs font-bold uppercase text-military">Available 24/7 for Emergency Repair</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            &copy; {currentYear} {COMPANY_NAME}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Privacy Policy</span>
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
