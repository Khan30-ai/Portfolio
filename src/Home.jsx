import React from 'react';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/Hero';
import AboutSection from './components/sections/About';
import TechStackSection from './components/sections/TechStack';
import EducationSection from './components/sections/Education';
import ProjectsSection from './components/sections/ProjectSection';
import WritingsSection from './components/sections/Writing';
import ContactFooter from './components/sections/ContactFooter';

export default function Home() {
    return (
        <div className="bg-[#09090B] text-zinc-50 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400">
            <Navbar />
            <main className="pt-16">
                <HeroSection />
                <AboutSection />
                <TechStackSection />
                <EducationSection />
                <ProjectsSection />
                <WritingsSection />
                <ContactFooter />
            </main>
        </div>
    );
}