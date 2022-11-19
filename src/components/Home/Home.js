import React from 'react';
import './Home.scss';
import Skill from './Skill.js';

export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <div className="top">
                <h2>Hello, I'm Christian Luciani.</h2>
                <div className="personalPictureContainer">
                    <div className="personalPicture"></div>
                </div>
                <h2>A web developer from the U.S.</h2>
            </div>
            <div className="middle">
                <p className="bio-A">
                    As a fresh graduate in Computer Science, I am thrilled to continue my journey into software development. 
                    Although I have gained a wide range of knowledge from my courses, achieving a 3.9 GPA in my major, the true
                    reward has been cultivating a deep interest in the art of learning and all the valuable things I discover about 
                    myself in the process.
                </p>
                <p className="bio-B">
                    Outside of coding, I like to spend my time on
                    guitar, which I have been playing for 14 years, exploring new books and concepts, and meditation, which has informed how I
                    approach everything in day-to-day life. 
                </p>
            </div>
            <div className="bottom">
                <div className="skillsContainer">
                    <h4>Languages / Frameworks</h4>
                    <div className="skills">
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="HTML5"/>
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" title="CSS3"/>
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="JavaScript"/>
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React"/>
                    </div>
                </div>
                <div className="skillsContainer">
                    <h4>Development Tools</h4>
                    <div className="skills">
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git"/>
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="Figma"/>
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" title="NPM"/>
                        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="VS Code"/>
                    </div>
                </div>
            </div>
        </div>
    )
}