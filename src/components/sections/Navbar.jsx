import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['About', 'Tech Stack', 'Education', 'Projects', 'Writings', 'Contact'];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleResumeClick = () => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'Md_Arshi_Khan.pdf';
        link.click();
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#09090B]/80 backdrop-blur-md border-b border-zinc-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6 lg:px-8">
                <a href="#" className="font-mono font-bold tracking-tighter text-lg text-zinc-50">
                    ARSHI<span className="text-emerald-500">.</span>SYS
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '_')}`}
                            className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 hover:text-emerald-500 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={handleResumeClick}
                        style={{ cursor: 'pointer' }}
                        className="bg-zinc-50 text-zinc-950 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-zinc-950 transition-colors"
                    >
                        Resume
                    </button>
                </div>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden border-t border-zinc-800 bg-[#09090B]/95 backdrop-blur-md">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {NAV_LINKS.map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '_')}`}
                                onClick={() => setMobileOpen(false)}
                                className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-emerald-500 transition-colors py-2"
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={handleResumeClick}
                            style={{ cursor: 'pointer' }}
                            className="bg-zinc-50 text-zinc-950 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors mt-2 w-fit"
                        >
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}