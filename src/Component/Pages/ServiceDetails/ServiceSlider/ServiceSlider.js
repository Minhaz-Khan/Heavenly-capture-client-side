import React, { useEffect, useState } from 'react';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import './ServieSlider.css'
import { Link } from 'react-router-dom';

const ServiceSlider = ({ sellerEmail }) => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch(`https://heavenlycapture.vercel.app/relativeService?email=${sellerEmail}`, {
            headers: {

                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    })

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
                    services?.map((service, index) => {
                        return (
                            <Link to={`/service/${service._id}`} className="slider-card" key={index} onClick={() => service.clickEvent()}>
                                <div className="slider-card-image" style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover' }}></div>
                                <p className="slider-card-title">{service?.title}</p>
                                <p className="slider-card-description">{service?.description}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <BsChevronRight className=" text-3xl slider-icon right" onClick={slideLeft} />
        </div >
    );
};

export default ServiceSlider;