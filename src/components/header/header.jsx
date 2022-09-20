import React from 'react';
import "./header.css"
import Cta from "./cta";
import ME from "../../components/photos/me.jpg"
import HeaderSocials from "./headerSocials";


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mohamad Ghanem</h1>
                <h5 className="text-light">Software Engineer</h5>
                <Cta/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;