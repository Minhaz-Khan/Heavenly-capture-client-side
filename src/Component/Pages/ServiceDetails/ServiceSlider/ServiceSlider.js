import React from 'react';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import './ServieSlider.css'


import image1 from '../../../../asset/wedding2.jpg'
import image2 from '../../../../asset/portrait-2.jpg'
import image3 from '../../../../asset/pexels-vinicius-wiesehofer-1130626.jpg'
import image4 from '../../../../asset/pexels-italo-melo-2379004.jpg'
import image5 from '../../../../asset/pexels-flávio-augusto-1832959.jpg'
const ServiceSlider = () => {

    const image = [{ image: image1 }, { image: image2 }, { image: image3 }, { image: image4 }, { image: image5 }]
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    return (
        <div id="main-slider-container">
            <BsChevronLeft className="slider-icon left text-3xl" onClick={slideRight} />
            <div id="slider">
                {
                    image.map((slide, index) => {
                        console.log(slide);
                        return (
                            <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                <p className="slider-card-title">{slide?.title}</p>
                                <p className="slider-card-description">{slide?.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <BsChevronRight className=" text-3xl slider-icon right" onClick={slideLeft} />
        </div >
    );
};

export default ServiceSlider;