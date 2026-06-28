import React from 'react';

const HERO_IMAGE = "https://media.base44.com/images/public/6a40c0f3e2c39600f2c9d034/ef2bb1907_generated_dfdc16a5.png";

export default function HeroSection() {
    return (
        <section className="border-b border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.07]">
                <img
                    src={HERO_IMAGE}
                    alt="Macro shot of mechanical keyboard with emerald backlight"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40">
                <div className="font-mono text-[11px] text-emerald-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    System Online — Available for Work
                </div>

                <h1 className="font-black tracking-tighter leading-[0.9] mb-8">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        MD ARSHI KHAN <span className="text-white">//</span>
                    </div>

                    <div className="mt-1 max-w-[65%]">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-600 leading-none">
                            FULL STACK
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-600 leading-none">
                            DEVELOPER
                        </span>
                    </div>
                </h1>

                <p className="text-zinc-400 text-base md:text-lg max-w-lg font-mono leading-relaxed">
                    I build full-stack web applications with React, Node.js and MongoDB. Most of my learning comes from building products and solving real engineering problems.
                </p>

                <div className="mt-12 flex gap-6 font-mono text-sm">
                    <a
                        href="https://github.com/Khan30-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                        <span className="text-zinc-600">&gt;</span> github.exe
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-arshi-khan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                        <span className="text-zinc-600">&gt;</span> linkedin.sh
                    </a>
                </div>
            </div>
        </section>
    );
}