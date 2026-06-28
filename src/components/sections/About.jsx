import React from 'react';
import GridSection from './GridSection';

export default function AboutSection() {
    return (
        <GridSection title="ABOUT" id="about">
            <div className="max-w-2xl space-y-6">
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    I'm a final-year Electrical Engineering student at Heritage Institute of Technology with a strong interest in software engineering. Most of my experience comes from building projects from scratch, where I've learned how frontend, backend, databases, and deployment come together to create real applications.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                    I enjoy working on backend development, REST APIs, authentication, and writing maintainable code. I'm always looking for opportunities to improve my engineering skills by building practical software and learning from every project.
                </p>
                <div className="pt-6 border-t border-zinc-800 mt-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-[11px] uppercase tracking-wider">
                        <div>
                            <span className="text-zinc-700 block mb-1.5">Location</span>
                            <span className="text-zinc-300">Kolkata</span>
                        </div>
                        <div>
                            <span className="text-zinc-700 block mb-1.5">Focus</span>
                            <span className="text-zinc-300">Systems &amp; Web</span>
                        </div>
                        <div>
                            <span className="text-zinc-700 block mb-1.5">Status</span>
                            <span className="text-emerald-500">Open to Work</span>
                        </div>
                    </div>
                </div>
            </div>
        </GridSection>
    );
}