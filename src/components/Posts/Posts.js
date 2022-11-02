import React from 'react';
import './Posts.scss';
import ArticleYear from './ArticleYear';

export default function Posts() {
    return (
        <div className="posts">
            <header>
                <h1>Posts</h1>
                <p>A collection of writings generated during my explorations in learning Computer Science.</p>
            </header>
            <main className="articles">
                <ArticleYear />
                <ArticleYear />
            </main>
        </div>
    )
}