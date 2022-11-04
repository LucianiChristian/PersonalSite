import React from 'react';

export default function ProjectCard() {
    return (
        <div className="card">
            <div className="card-top">
                <h3>Tic-Tac-Toe</h3>
                <p>HTML, CSS, JS</p>
            </div>
            <div className="card-middle"></div>
            <div className="card-bottom">
                <p>Implemented MVC design pattern to handle dynamic renders from data updates.</p>
                <div className="links"> 
                    <a href="">REPO</a>
                    <a href="">DEMO</a>
                </div>
            </div>
        </div>
    )
}