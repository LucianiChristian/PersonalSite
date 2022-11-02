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
                <p className="bio-A">As an undergraduate I have been exploring the field of Computer Science with an ever-growing interest. Although I
                    have gained a wide-range of knowledge from my courses, the true value and joy has come through self-directed
                    study and 'learning how to learn'. In the last year of my degree I have spent just as much time on my own projects
                    as I have handling classes with great results.
                </p>
                <p className="bio-B">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat in ipsam illum eveniet quod? Nesciunt architecto doloribus magnam deleniti ullam iste reiciendis inventore dolorem praesentium officia, ut necessitatibus, doloremque blanditiis.</p>
            </div>
            <div className="bottom">

            </div>
        </div>
    )
}