import React from 'react';
import GridSection from './GridSection';
import { ArrowRight } from 'lucide-react';

const POSTS = [
    {
        title: 'Understanding RBAC: The Thing That Stopped My Users From Destroying My App',
        date: '17.06.2026',
        read: '4 min',
        url: 'https://medium.com/@arshikhan80708/understanding-rbac-the-thing-that-stopped-my-users-from-destroying-my-app-f15bcf30f9a2',
    },
    {
        title: 'Optional Authentication: The Middleware Nobody Talks About',
        date: '26.06.2026',
        read: '4 min',
        url: 'https://medium.com/@arshikhan80708/optional-authentication-the-middleware-nobody-talks-about-1fa42eee7821',
    },

];

export default function WritingsSection() {
    return (
        <GridSection title="WRITINGS" id="writings">
            <div>
                {POSTS.map((post, i) => (
                    <a
                        key={i}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border-b border-zinc-800 py-5 flex justify-between items-center hover:bg-zinc-900/30 transition-colors px-4 -mx-4 first:pt-0"
                    >
                        <div>
                            <h4 className="font-medium text-base md:text-lg text-zinc-300 group-hover:text-emerald-500 transition-colors leading-snug">
                                {post.title}
                            </h4>
                            <p className="font-mono text-[10px] text-zinc-600 uppercase mt-1.5 tracking-wider">
                                {post.date} &mdash; {post.read} read
                            </p>
                        </div>
                        <ArrowRight
                            size={14}
                            className="text-zinc-700 group-hover:text-emerald-500 transition-colors shrink-0 ml-4"
                        />
                    </a>
                ))}
            </div>
        </GridSection>
    );
}