import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0D0D12] text-[#CDCCCA] overflow-x-hidden selection:bg-[#4F98A3] selection:text-[#0D0D12]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
