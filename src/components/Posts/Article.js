import React from 'react';

export default function Article(props) {
    return (
        <a target="_blank" rel="noreferrer" href={props.link}>
            <div className="article">
                <p className="title">{props.title}</p>
                <p className="date">{props.date}</p>
            </div>
        </a>
    )
}
