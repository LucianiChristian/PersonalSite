import React from 'react';
import Article from './Article';

export default function ArticleYear(props) {
    return (
        <div className="articleYear">
            <h2>{props.year}</h2>
            <hr />
            {props.data.map(article => (
                <Article key={article.title} title={article.title} link={article.link} date={article.date}/>
            ))}        
        </div>
    )
}