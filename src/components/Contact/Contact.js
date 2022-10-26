import React from 'react';
import './Contact.scss';

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>I am interested in professional or freelance opportunities. If you have any questions of requests, feel free to use the form below.</p>
            <div className="contactForm">
                <form>
                    <ul>
                        <li>
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li>
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject" required/>
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message" required/>
                        </li>       
                    </ul>
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}