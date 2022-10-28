import React from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const refForm = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(refForm.current);

        emailjs.sendForm(
            'default_service',
            'contact_form',
            refForm.current,
            'rFUFpdGG4sJyiKsHQ'
        )
        .then(() => {
            alert("Message successfully sent!");
            window.location.reload(false);
        },
        () => {
            alert("Failed to send the message, please try again.");
        });
    }

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>I am interested in professional or freelance opportunities. If you have any questions of requests, feel free to use the form below.</p>
            <div className="contactForm">
                <form ref={refForm} onSubmit={sendEmail}>
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
                    <button type="submit">send</button>
                </form>
            </div>
        </div>
    )
}