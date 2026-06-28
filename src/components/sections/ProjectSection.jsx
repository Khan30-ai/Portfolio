import React from 'react';
import GridSection from './GridSection';
import ProjectCard from './ProjectCard';

const PROJECTS = [
    {
        title: 'Bodease',
        description:
            'A static business website developed for a diet consultancy based on client requirements. Designed and built with React, Vite, and Tailwind CSS, focusing on responsive layouts, reusable UI components, and fast page performance.',
        stack: ['React.js', 'Tailwind CSS'],
        links: [
            { label: 'Code', url: 'https://github.com/Khan30-ai/BodEase' },
            { label: 'Live', url: 'https://bodease.vercel.app/' },
        ],
    },
    {
        title: 'GearBazar',
        description:
            'Marketplace for auto spare parts where buyers can search products and verified sellers can manage inventory. Includes authentication, seller onboarding, admin approval, image uploads and role-based dashboards.',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT',],
        links: [
            { label: 'Live', url: 'https://gearbazar.com' },
        ],
    },
];

export default function ProjectsSection() {
    return (
        <GridSection title="PROJECTS" id="projects">
            <div className="space-y-8">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </GridSection>
    );
}