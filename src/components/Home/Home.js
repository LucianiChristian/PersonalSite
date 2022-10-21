import React from 'react';
import "./Home.scss";

export default function Home() {
    return (
        <div className="home">
            <div className="top">
                <h2>Hello, I'm Christian Luciani.</h2>
                <div className="personalPictureContainer">
                    <div className="personalPicture"></div>
                </div>
                <h2>A web developer from the U.S.</h2>
            </div>
            <div className="middle">
                <p className="bio-A">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quisquam dicta error laboriosam laborum voluptatibus tempora, minima ullam unde accusamus inventore voluptatem blanditiis esse adipisci? Aliquam, tenetur vitae. Provident, sapiente.</p>
                <p className="bio-B">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat in ipsam illum eveniet quod? Nesciunt architecto doloribus magnam deleniti ullam iste reiciendis inventore dolorem praesentium officia, ut necessitatibus, doloremque blanditiis.</p>
            </div>
            <div className="bottom">

            </div>
        </div>
    )
}