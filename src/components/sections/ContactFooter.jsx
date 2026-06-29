import React from 'react';
import GridSection from './GridSection';

export default function ContactFooter() {
    return (
        <>
            <GridSection title="CONTACT" id="contact">
                <h2 className="text-2xl md:text-3xl font-mono font-bold tracking-tight text-zinc-50 mb-8 break-all flex flex-wrap">
                    contact_arshikhan<span className="text-zinc-600">.</span><span className="text-purple-400">details</span><span className="text-zinc-600">()</span>;
                </h2>

                <div className="relative border border-zinc-800 p-5 md:p-8 font-mono text-[12px] md:text-lg leading-[1.9] overflow-x-auto">

                    <div>
                        <span className="text-sky-400">const</span>{' '}
                        <span className="text-purple-400">contact_arshikhan</span>{' '}
                        <span className="text-zinc-500">=</span>{' '}
                        <span className="text-zinc-500">{'{'}</span>
                    </div>

                    <div className="pl-4 md:pl-6">
                        <span className="text-zinc-100">phone</span>
                        <span className="text-zinc-500">:</span>{' '}
                        <a href="tel:+918336892188" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            '+91-8336892188'
                        </a>
                        <span className="text-zinc-500">,</span>{' '}

                    </div>

                    <div className="pl-4 md:pl-6 whitespace-nowrap">
                        <span className="text-zinc-100">email</span>
                        <span className="text-zinc-500">: </span>
                        <a href="mailto:arshikhan80708@gmail.com" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            'arshikhan80708@gmail.com'
                        </a>
                        <span className="text-zinc-500">,</span>
                    </div>

                    <div className="pl-4 md:pl-6">
                        <span className="text-zinc-100">socials</span>
                        <span className="text-zinc-500">:</span>{' '}
                        <span className="text-zinc-500">[</span>
                    </div>

                    <div className="pl-8 md:pl-12">
                        <a href="https://github.com/Khan30-ai" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            'github.exe'
                        </a>
                        <span className="text-zinc-500">,</span>
                    </div>

                    <div className="pl-8 md:pl-12">
                        <a href="https://www.linkedin.com/in/md-arshi-khan/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            'linkedin.sh'
                        </a>
                        <span className="text-zinc-500">,</span>
                    </div>

                    <div className="pl-8 md:pl-12">
                        <a href="https://medium.com/@arshikhan80708" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            'medium.sh'
                        </a>
                        <span className="text-zinc-500">,</span>{' '}
                    </div>

                    <div className="pl-8 md:pl-12">
                        <a href="https://www.instagram.com/arshi_khn30/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            'instagram.sh'
                        </a>
                    </div>

                    <div className="pl-4 md:pl-6">
                        <span className="text-zinc-500">]</span>
                    </div>

                    <div>
                        <span className="text-zinc-500">{'}'}</span>
                    </div>
                </div>
            </GridSection>

            <div className="border-t border-zinc-800 bg-[#09090B]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 font-mono text-[10px] text-zinc-700 flex flex-col sm:flex-row justify-between gap-2 tracking-wider uppercase">
                    <span>v.2.4.9 // 2023 Edition</span>
                    <span className="flex items-center gap-2">
                        System_Status:
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-500/60">Functional</span>
                    </span>
                </div>
            </div>
        </>
    );
}