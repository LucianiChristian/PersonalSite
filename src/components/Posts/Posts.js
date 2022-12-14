import React from 'react';
import './Posts.scss';
import ArticleYear from './ArticleYear';
import postsData from './postsData';

export default function Posts() {
    return (
        <div className="posts animate__animated animate__fadeIn">
            <header>
                <h1>Posts</h1>
                <p>A collection of writings generated during my explorations in learning Computer Science.</p>
            </header>
            <main className="articles">
                <ArticleYear year="2022" data={postsData[2022]}/>
                <ArticleYear year="2021" data={postsData[2021]}/>
            </main>
        </div>
    )
}