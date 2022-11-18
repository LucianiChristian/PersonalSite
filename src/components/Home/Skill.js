import React from 'react';

export default function Skill(props) {
    return (
        <div className="skill">
            <img src={props.src} alt="skill"/>
            <p>{props.title}</p>
        </div>
    )
}