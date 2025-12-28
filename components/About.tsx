
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-tactical-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-military/10 border-2 border-military rounded-sm overflow-hidden p-2 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1000" 
                 alt="Day on the job" 
                 className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black p-8 border border-military shadow-2xl hidden md:block">
              <span className="block text-4xl font-display font-black text-military mb-1">2024</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-200">Founded in West Virginia</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="text-military font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6 text-white">
                Built on <span className="text-military">Quality</span> & Grit
              </h2>
              <p className="text-xl text-gray-100 font-medium leading-relaxed mb-6">
                Established in 2024, Blackwater Solutions was founded with a clear directive: To leverage expert knowledge in aerial fiber optics to provide high-quality infrastructure while bettering the lives of our employees and their families.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                We believe that world-class infrastructure is only possible through a world-class workforce. By prioritizing worker well-being and maintaining a disciplined approach to every project, we ensure that General Contractors receive high-quality delivery, on time, every time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
              <div className="border-l-4 border-military pl-6 py-2 bg-tactical-gray/40">
                <h4 className="font-display font-black uppercase text-xl mb-2 text-white">Efficiency</h4>
                <p className="text-xs text-gray-200 font-medium">Streamlined workflows that minimize downtime and maximize rollout speed.</p>
              </div>
              <div className="border-l-4 border-military pl-6 py-2 bg-tactical-gray/40">
                <h4 className="font-display font-black uppercase text-xl mb-2 text-white">Rugged</h4>
                <p className="text-xs text-gray-200 font-medium">Trained to handle the harshest environments and steep terrain of WV.</p>
              </div>
              <div className="border-l-4 border-white pl-6 py-2 bg-military/20 sm:col-span-2 xl:col-span-1">
                <h4 className="font-display font-black uppercase text-xl mb-1 text-white">500,000'+</h4>
                <p className="text-xs text-white font-black uppercase tracking-tighter leading-none underline decoration-military">Feet of cable ran in 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
