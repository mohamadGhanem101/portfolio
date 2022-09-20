import React from 'react';
import "./portfolio.css"
import m1 from "../../components/photos/m1.webp"
import m2 from "../../components/photos/m2.webp"
import m3 from "../../components/photos/m3.webp"
import m4 from "../../components/photos/m4.webp"
import m5 from "../../components/photos/m5.webp"
import m6 from "../../components/photos/m6.webp"

const data = [
    {
        id: 1,
        image: m1,
        title: "Crypto Currency Dashboard & Financial Visualization",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/19103895-Eclipse-UI-kit-for-Figma-80-components-1100-variants-70-dash"
    }, {
        id: 2,
        image: m2,
        title: "Charts templates & infographics in Figma",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/19103928-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
    }, {
        id: 3,
        image: m3,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/19103837-Orion-UI-kit-Charts-templates-infographics-in-Figma"
    }, {
        id: 4,
        image: m4,
        title: "Maintaining tasks and tracking progress",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/19103922-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
    }, {
        id: 5,
        image: m5,
        title: "Charts templates & infographics in Figma",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/19103695-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
    }, {
        id: 6,
        image: m6,
        title: "Charts templates & infographics in Figma",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/19103678-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
    },
]

const Portfolio = () => {

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta"><a
                                    href={github} className="btn"
                                    target="_blank"
                                    rel='noopener noreferrer'>Github</a>
                                    <a href={demo} className="btn btn-primary"
                                       target="_blank" rel='noopener noreferrer'>Live Demo</a></div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;