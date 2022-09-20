import React from 'react';
import Resume from "../../components/photos/Resume.pdf"

const Cta = () => {
    return (
        <div className="cta">
            <a href={Resume} className="btn" download>Download Resume</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    );
};

export default Cta;