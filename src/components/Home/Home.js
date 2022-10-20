import React from 'react';
import "./Home.scss";
import personalPicture from "./personalPicture.jpg";

export default function Home() {
    return (
        <div className="home">
            <div className="top">
                <h1>Hello, I'm Christian Luciani.</h1>
                <div className="personalPictureContainer">
                    <div className="personalPicture"></div>
                </div>
                <h1>A web developer from the U.S.</h1>
            </div>
            <div className="middle">

            </div>
            <div className="bottom">

            </div>
        </div>
    )
}