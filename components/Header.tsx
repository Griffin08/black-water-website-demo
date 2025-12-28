
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-tactical-black/95 backdrop-blur-sm border-b border-military/30 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder - Representing the Green/Black aesthetic */}
          <div className="w-10 h-10 bg-military rounded flex items-center justify-center text-black font-black text-xl border-2 border-black shadow-lg">
            B
          </div>
          <span className="text-xl font-display font-bold tracking-tighter uppercase text-white">
            Blackwater <span className="text-military">Solutions</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-military transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#quote" 
            className="bg-military hover:bg-military-dark text-black px-6 py-2 rounded-sm font-bold uppercase tracking-tighter transition-all"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-tactical-black border-b border-military/20 absolute top-full left-0 right-0 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-lg font-bold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#quote" 
            className="bg-military text-black px-6 py-3 rounded-sm font-bold uppercase tracking-tighter text-center"
            onClick={() => setIsOpen(false)}
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
