import React from 'react';

export default function HeroSection() {
    return (
        <section className="border-b border-zinc-800 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Ambient Emerald Glow */}
                <div
                    className="absolute -left-56 top-16 h-96 w-96 rounded-full blur-[140px]"
                    style={{ background: "rgba(16,185,129,0.05)" }}
                />

                <div
                    className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-[120px]"
                    style={{ background: "rgba(16,185,129,0.05)" }}
                />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.20]"
                    style={{
                        backgroundImage: `
        linear-gradient(to right, rgba(113,113,122,0.65) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(113,113,122,0.65) 1px, transparent 1px)
      `,
                        backgroundSize: "44px 44px",
                    }}
                />

                {/* Glowing Nodes */}
                <div className="absolute right-[15%] top-[22%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.9)] animate-pulse" />

                <div className="absolute right-[22%] top-[38%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.8)] animate-pulse" />

                <div className="absolute left-[72%] bottom-[26%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.8)] animate-pulse" />

                <div className="absolute left-[42%] bottom-[18%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.8)] animate-pulse" />

                {/* Fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#09090b_92%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40">
                <div className="font-mono text-[11px] text-emerald-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    System Online — Available for Work
                </div>

                <h1 className="font-black tracking-tighter leading-[0.9] mb-8 select-none">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-wrap gap-x-3 row-gap-1">
                        <span className="text-white">MD ARSHI</span>
                        <span className="inline-block text-white whitespace-nowrap">
                            KHAN <span className="text-white">//</span>
                        </span>
                    </div>
                    <div className="mt-4 max-w-full sm:max-w-[65%]">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-600 leading-none">
                            FULL STACK
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-600 leading-none mt-1">
                            DEVELOPER
                        </span>
                    </div>
                </h1>

                <p className="text-zinc-400 text-base md:text-lg max-w-lg font-mono leading-relaxed">
                    I turn caffeine and complex logic into full-stack applications across the MERN ecosystem. Most of my learning comes from breaking and building hands-on projects, optimizing backend queries and wondering why a console.log statement just saved my entire build from crashing.
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