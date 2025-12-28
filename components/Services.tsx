
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-tactical-black border-y border-military/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-military font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
              Precision <span className="text-military">Infrastructure</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-400 text-lg">
            We deliver high-quality telecommunications solutions that stand up to the toughest terrain and weather conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`p-8 rounded-sm border transition-all duration-300 group ${
                service.primary 
                  ? 'bg-military border-military text-black scale-105 shadow-2xl z-10' 
                  : 'bg-tactical-gray border-white/5 text-white hover:border-military/50'
              }`}
            >
              <div className={`mb-6 inline-block p-4 rounded-sm ${service.primary ? 'bg-black text-military' : 'bg-military/10 text-military'}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-black uppercase mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className={`text-lg leading-relaxed ${service.primary ? 'text-black/80' : 'text-gray-400'}`}>
                {service.description}
              </p>
              {service.primary && (
                <div className="mt-6 pt-6 border-t border-black/10 text-sm font-bold uppercase tracking-widest">
                  Primary Specialization
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
