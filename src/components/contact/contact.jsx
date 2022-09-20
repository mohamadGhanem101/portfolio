import React from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md";
import {TbBrandMessenger} from "react-icons/tb";
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">

                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>mohamadwalid101@gmail.com</h5>
                        <a href="mailto:mohamadwalid101@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <TbBrandMessenger className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Mohamad</h5>
                        <a href="https://m.me/mohamad.walid.1447342" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+1778171903</h5>
                        <a href="https://api.whatsapp.com/send?phone+17738171903" target="_blank">Send a message</a>
                    </article>
                </div>

                <form action=" ">
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required/>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;