import React from 'react';
import "./testimonials.css"
import c1 from "../../components/photos/c1.jpg"
import c2 from "../../components/photos/c2.jpg"
import c3 from "../../components/photos/c3.jpg"
import c4 from "../../components/photos/c4.jpg"
// import Swiper core and required modules
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: c1,
        name: "Abdullah Sh",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate deleniti facilis\n" +
            "                        hic necessitatibus, omnis perspiciatis quae quam quis repudiandae velit voluptates. Ad\n" +
            "                        consequatur, quam."
    },
    {
        avatar: c2,
        name: "Moe Alazzeh",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate deleniti facilis\n" +
            "                        hic necessitatibus, omnis perspiciatis quae quam quis repudiandae velit voluptates. Ad\n" +
            "                        consequatur, quam."
    }, {
        avatar: c3,
        name: "Anas Obaid",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate deleniti facilis\n" +
            "                        hic necessitatibus, omnis perspiciatis quae quam quis repudiandae velit voluptates. Ad\n" +
            "                        consequatur, quam."
    }, {
        avatar: c4,
        name: "Rebal kh",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate deleniti facilis\n" +
            "                        hic necessitatibus, omnis perspiciatis quae quam quis repudiandae velit voluptates. Ad\n" +
            "                        consequatur, quam."
    },
]


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar"/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;