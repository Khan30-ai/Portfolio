import React from 'react';

export default function GridSection({ children, title, id }) {
    return (
        <section id={id} className="border-b border-zinc-800 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-3 md:border-r border-b md:border-b-0 border-zinc-800 px-6 lg:px-8 py-8 md:pt-12">
                    <span className="font-mono text-[15px] uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        {title}
                    </span>
                </div>
                <div className="md:col-span-9 px-6 lg:px-8 py-8 md:pt-12 md:pb-16">
                    {children}
                </div>
            </div>
        </section>
    );
}