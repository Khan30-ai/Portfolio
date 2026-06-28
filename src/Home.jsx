import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Education from './components/sections/Education';
import ProjectsSection from './components/sections/ProjectSection';
import Writing from './components/sections/Writing';
import ContactFooter from './components/sections/ContactFooter';

export default function Home() {
    return (
        <div className="bg-[#09090B] text-zinc-50 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400">
            <Navbar />
            <main className="pt-16">
                <Hero />
                <About />
                <TechStack />
                <Education />
                <ProjectsSection />
                <Writing />
                <ContactFooter />
            </main>
        </div>
    );
}