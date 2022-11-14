import React from 'react';
import "./Home.scss";

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
                    As a fresh graduate in Computer Science I am thrilled to continue my journey into software development. 
                    Although I have gained 
                    a wide range of knowledge from my courses, achieving a 3.9 GPA in my major, the true
                    reward has been cultivating a deep interest in the art of learning and all the valuable things I discover about 
                    myself in the process.
                </p>
                <p className="bio-B">
                    Outside of coding, I like to spend my time on
                    guitar, which I have been playing for 14 years, exploring new books and concepts, and meditation, which has informed how I
                    approach everything in day to day life. 
                </p>
            </div>
            <div className="bottom">

            </div>
        </div>
    )
}