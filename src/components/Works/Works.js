import React from 'react';
import './Works.scss';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';

export default function Works() {
    return (
        <div className="works animate__animated animate__fadeIn">
            <h1>Projects</h1>
            <div className="projects">
                {projectData.map(project => (
                    <ProjectCard projectData={project}/>
                ))}
            </div>
        </div>
    )
}