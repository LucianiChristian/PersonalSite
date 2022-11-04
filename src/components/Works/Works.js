import React from 'react';
import './Works.scss';
import ProjectCard from './ProjectCard';

export default function Works() {
    return (
        <div className="works animate__animated animate__fadeIn">
            <h1>Projects</h1>
            <div className="projects">
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}