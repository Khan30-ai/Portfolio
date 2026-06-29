import React from 'react';
import GridSection from './GridSection';

export default function AboutSection() {
    return (
        <GridSection title="ABOUT" id="about">
            <div className="max-w-2xl space-y-6">
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    A final year Electrical Engineering student at Heritage Institute of Technology, Kolkata, focused on full-stack development using the MERN stack. I build web applications from scratch, handling everything from frontend layout and secure database management to deployment pipelines. I pivoted into software engineering because writing code felt way more electrifying than fixing circuits and currently exploring DevOps practices like Docker and CI/CD workflows to build efficient deployment pipelines.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                    My core focus lies in backend scalability, designing robust REST APIs, secure authentication flows, and clean codebase management. I'm deep into database optimization, mastering system workflows, and actively looking for software development opportunities where I can solve actual engineering problems at scale.
                </p>
                <div className="pt-6 border-t border-zinc-800 mt-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-[13px] uppercase tracking-wider">
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