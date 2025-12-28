
import React from 'react';
import { REGION } from '../constants';
import { ArrowRight, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-tactical-black">
      {/* Background Image / Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,1)), url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-military/30 border border-military/60 px-3 py-1 rounded-full text-military-light text-xs font-bold uppercase tracking-widest mb-6 shadow-glow">
            <Shield className="w-3 h-3" />
            Reliability Defined. Est. 2024
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-white leading-none mb-6 drop-shadow-2xl">
            Connecting the <span className="text-military italic">Mountain State</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-lg">
            High-performance aerial fiber optics and telecommunications infrastructure across <span className="text-white font-black underline decoration-military underline-offset-4">{REGION}</span>. Rugged, disciplined, and built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="group bg-military hover:bg-military-dark text-black px-8 py-4 rounded-sm font-black uppercase tracking-tighter flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm font-black uppercase tracking-tighter flex items-center justify-center transition-all"
            >
              The Blackwater Mission
            </a>
          </div>
        </div>
      </div>

      {/* Stats / Credentials Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-military py-4 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-black font-display font-bold uppercase tracking-widest text-sm">
          <span className="flex items-center gap-2">
            <span className="text-lg font-black tracking-normal">500,000'+ FT</span> CABLE INSTALLED YTD
          </span>
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
          <span>Aerial Fiber Specialists</span>
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
          <span>OSHA 10 Certified</span>
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
          <span>24/7 Emergency Response</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
