import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function PageNotFound({ }) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#09090B] text-zinc-50 font-body selection:bg-emerald-500/30 selection:text-emerald-400">
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