import React from 'react';
import GridSection from './GridSection';

const STACK = {
    Frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML', 'CSS'],
    'Backend & Architecture': [
        'Node.js',
        'Express.js',
        'REST APIs',
        'Backend Architecture',
    ],
    'Database & Data': ['MongoDB', 'Mongoose', 'SQL Basics', 'Data Modeling'],
    'Tools & Workflow': ['Git', 'GitHub', 'Postman', 'Cloudinary'],
    Fundamentals: ['Java', 'DSA', 'OOPs', 'DBMS', 'CN', 'System Design'],
};

export default function TechStackSection() {
    return (
        <GridSection title="TECH_STACK" id="tech_stack">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {Object.entries(STACK).map(([category, items]) => (
                    <div key={category}>
                        <h4 className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4 pb-2 border-b border-zinc-800">
                            {category}
                        </h4>
                        <ul className="space-y-2.5">
                            {items.map(tech => (
                                <li
                                    key={tech}
                                    className="font-mono text-sm text-zinc-300 hover:text-emerald-500 transition-colors cursor-default flex items-center gap-2"
                                >
                                    <span className="text-zinc-700 text-[10px]">—</span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </GridSection>
    );
}