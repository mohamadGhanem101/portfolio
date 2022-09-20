import React from 'react';
import "./footer.css"
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {RiTwitterFill} from "react-icons/ri";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">EGATOR</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook"><BsFacebook/></a>
                <a href="https://instagram"><BsInstagram/></a>
                <a href="https://twitter"><RiTwitterFill/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; EGATOR Tutorials. All right reserved</small>
            </div>
        </footer>
    );
};

export default Footer;