import React from 'react';


export default function ProjectCard(props) {
    // utilize props to dynamically display values
    const {title, stack, image, description, repoLink, demoLink} = props.projectData;

    return (
        <div className="card">
            <div className="card-top">
                <h3>{title}</h3>
                <p>{stack}</p>
            </div>
            <div className="card-middle" style={{
                backgroundImage: `url(${image})`,
            }}>
            </div>
            <div className="card-bottom">
                <p>{description}</p>
                <div className="links"> 
                    <a href={repoLink}>REPO</a>
                    <a href={demoLink}>DEMO</a>
                </div>
            </div>
        </div>
    )
}