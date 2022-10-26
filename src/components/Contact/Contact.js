import React from 'react';
import './Contact.scss';

export default function Contact() {
    return (
        <div className="contact">
            <p>Contact Page</p>
            <div className="contactForm">
                <form>
                    <ul>
                        <li>
                            <input type="text" name="name" placeholder="Name"/>
                        </li>
                        <li>
                            <input type="email" name="email" placeholder="Email"/>
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject"/>
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message"/>
                        </li>       
                    </ul>
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}