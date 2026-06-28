import React from 'react';
import GridSection from './GridSection';

const EDUCATION = [
    {
        degree: 'B.Tech in Electrical Engineering',
        institution: 'Heritage Institute of Technology',
        timeline: 'Expected Graduation: 2027',
    },
    {
        degree: 'Higher Secondary (WBCHSE)',
        institution: 'Khiddirpur Muslim High School',
        timeline: 'Completed in 2023',
    },
    {
        degree: 'Secondary (WBBSE)',
        institution: 'Khalsa English High School',
        timeline: 'Completed in 2021',
    },
];

export default function EducationSection() {
    return (
        <GridSection title="EDUCATION" id="education">
            <div className="space-y-0">
                {EDUCATION.map((edu, i) => (
                    <article
                        key={i}
                        className="border-b border-zinc-800 last:border-b-0 py-6 first:pt-0 group"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-500 transition-colors">
                                    {edu.degree}
                                </h3>
                                <p className="font-mono text-sm text-zinc-400 mt-1.5">
                                    {edu.institution}
                                </p>
                            </div>
                            <span className="font-mono text-[14px] text-zinc-600 uppercase tracking-wider md:text-right md:whitespace-nowrap md:pt-1">
                                {edu.timeline}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </GridSection>
    );
}