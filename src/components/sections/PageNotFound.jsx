import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function PageNotFound({ }) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const glitchStyles = `
        @keyframes glitch-flicker {
            0%, 92%, 100% { opacity: 1; }
            93% { opacity: 0.4; }
            94% { opacity: 1; }
            95% { opacity: 0.2; }
            96% { opacity: 1; transform: translateX(2px); }
            97% { opacity: 1; transform: translateX(-2px); }
            98% { opacity: 0.6; }
        }
        @keyframes glitch-slice-a {
            0%, 100% { clip-path: inset(0 0 85% 0); transform: translate(0); }
            5% { clip-path: inset(8% 0 78% 0); transform: translate(-8px, -3px) skewX(-6deg); }
            10% { clip-path: inset(15% 0 70% 0); transform: translate(-6px, -2px) skewX(-4deg); }
            15% { clip-path: inset(40% 0 40% 0); transform: translate(10px, 0) skewX(3deg); }
            20% { clip-path: inset(0 0 85% 0); transform: translate(0); }
            25% { clip-path: inset(55% 0 30% 0); transform: translate(-12px, 1px) skewX(-5deg); }
            30%, 45% { clip-path: inset(0 0 85% 0); transform: translate(0); }
            46% { clip-path: inset(60% 0 20% 0); transform: translate(-14px, 1px) skewX(7deg); }
            47% { clip-path: inset(20% 0 60% 0); transform: translate(7px, -1px) skewX(-3deg); }
            48% { clip-path: inset(0 0 85% 0); transform: translate(0); }
            55% { clip-path: inset(70% 0 10% 0); transform: translate(-9px, 2px) skewX(4deg); }
            56%, 70% { clip-path: inset(0 0 85% 0); transform: translate(0); }
            71% { clip-path: inset(35% 0 45% 0); transform: translate(-11px, 2px) skewX(-5deg); }
            72% { clip-path: inset(10% 0 75% 0); transform: translate(6px, 0) skewX(3deg); }
            73% { clip-path: inset(0 0 85% 0); transform: translate(0); }
            80% { clip-path: inset(50% 0 35% 0); transform: translate(-7px, -1px) skewX(-4deg); }
            81% { clip-path: inset(0 0 85% 0); transform: translate(0); }
        }
        @keyframes glitch-slice-b {
            0%, 100% { clip-path: inset(85% 0 0 0); transform: translate(0); }
            5% { clip-path: inset(80% 0 5% 0); transform: translate(8px, 3px) skewX(6deg); }
            12% { clip-path: inset(70% 0 10% 0); transform: translate(8px, 2px) skewX(4deg); }
            13% { clip-path: inset(50% 0 30% 0); transform: translate(-10px, -1px) skewX(-3deg); }
            14% { clip-path: inset(85% 0 0 0); transform: translate(0); }
            22% { clip-path: inset(60% 0 25% 0); transform: translate(12px, 1px) skewX(5deg); }
            23%, 35% { clip-path: inset(85% 0 0 0); transform: translate(0); }
            36% { clip-path: inset(30% 0 50% 0); transform: translate(14px, 1px) skewX(-7deg); }
            37% { clip-path: inset(65% 0 15% 0); transform: translate(-7px, 0) skewX(4deg); }
            38% { clip-path: inset(85% 0 0 0); transform: translate(0); }
            50% { clip-path: inset(75% 0 10% 0); transform: translate(9px, -2px) skewX(3deg); }
            51%, 60% { clip-path: inset(85% 0 0 0); transform: translate(0); }
            61% { clip-path: inset(45% 0 35% 0); transform: translate(11px, -2px) skewX(5deg); }
            62% { clip-path: inset(75% 0 5% 0); transform: translate(-8px, 1px) skewX(-4deg); }
            63% { clip-path: inset(85% 0 0 0); transform: translate(0); }
            75% { clip-path: inset(55% 0 30% 0); transform: translate(10px, 2px) skewX(3deg); }
            76%, 85% { clip-path: inset(85% 0 0 0); transform: translate(0); }
            86% { clip-path: inset(55% 0 25% 0); transform: translate(-13px, 0) skewX(-6deg); }
            87% { clip-path: inset(25% 0 55% 0); transform: translate(8px, 2px) skewX(4deg); }
            88% { clip-path: inset(85% 0 0 0); transform: translate(0); }
        }
        
        /* Pseudo-elements generation for runtime */
        .secure-glitch {
            position: relative;
            color: #fafafa;
            animation: glitch-flicker 4s infinite steps(1);
        }
        .secure-glitch::before, .secure-glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .secure-glitch::before {
            color: #10b981;
            animation: glitch-slice-a 2.5s infinite steps(1);
            mix-blend-mode: screen;
        }
        .secure-glitch::after {
            color: #ef4444;
            animation: glitch-slice-b 2s infinite steps(1);
            mix-blend-mode: screen;
        }
    `;

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#09090B] text-zinc-50 font-body selection:bg-emerald-500/30 selection:text-emerald-400">
            <style>{glitchStyles}</style>
            <Navbar />
            <div className="w-full max-w-3xl mx-auto px-6 lg:px-8">
                {/* Main content */}
                <main className="flex flex-col items-center text-center">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-600 mb-8">
                        // segment_fault
                    </span>

                    <h2
                        data-text="ERROR"
                        className="glitch-text font-mono text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.3em] leading-none mb-4"
                    >
                        ERROR
                    </h2>

                    <h1
                        data-text="404"
                        className="glitch-text font-mono text-[8rem] sm:text-[10rem] md:text-[13rem] font-black tracking-tighter leading-none"
                    >
                        404
                    </h1>

                    <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>signal_lost</span>
                        <span className="text-zinc-800">::</span>
                        <span className="text-emerald-500/70">/{pageName || 'unknown'}</span>
                        <span className="inline-block w-2 h-4 bg-emerald-500/80 animate-pulse ml-1" />
                    </div>
                    <div className="mt-10 border border-zinc-800 px-5 py-4 max-w-md">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-500 mb-1.5">
                            // admin_note
                        </p>
                        <p className="font-mono text-[13px] text-zinc-500 leading-relaxed">
                            Looks like you&rsquo;re in the wrong directory.
                        </p>
                    </div>
                    {/* Return home */}
                    <a
                        href="/"
                        className="group mt-12 inline-flex items-center gap-2 border border-zinc-800 hover:border-emerald-500/50 px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-300 hover:text-emerald-500 transition-colors cursor-pointer"
                    >
                        <span className="text-zinc-600 group-hover:text-emerald-500">&gt;</span>
                        cd /home
                    </a>
                </main>

                {/* Bottom status bar */}
                <footer className="mt-20 pt-6 border-t border-zinc-900 font-mono text-[10px] text-zinc-700 flex flex-col sm:flex-row justify-between gap-2 tracking-wider uppercase">
                    <span>v.2.4.9 // 2024 Edition</span>
                    <span className="flex items-center gap-2">
                        System_Status:
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-red-500/60">Error</span>
                    </span>
                </footer>
            </div>
        </div>
    );
}