import React from 'react';
import { Interactive3DBackground } from '@/components/ui/interactive-3d-bg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0D0D12] text-[#CDCCCA] overflow-x-hidden selection:bg-[#4F98A3] selection:text-[#0D0D12]">
      {/* Procedural WebGL 3D Interactive Background */}
      <Interactive3DBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
