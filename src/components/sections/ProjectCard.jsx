import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ title, description, stack, links }) {
    return (
        <article className="border border-zinc-800 p-6 md:p-8 hover:border-emerald-500/40 transition-colors group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-zinc-50 group-hover:text-emerald-500 transition-colors">
                    {title}
                </h3>
                <div className="flex gap-6 font-mono text-sm md:text-base shrink-0">
                    {links.map(link => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-emerald-400 transition-colors uppercase flex items-center gap-1.5 font-medium"
                        >
                            [{link.label}]
                            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-2xl mb-6">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                {stack.map(tech => (
                    <span
                        key={tech}
                        className="font-mono text-[10px] px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 uppercase tracking-wide"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </article>
    );
}