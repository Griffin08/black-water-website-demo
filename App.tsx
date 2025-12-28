
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-military selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
