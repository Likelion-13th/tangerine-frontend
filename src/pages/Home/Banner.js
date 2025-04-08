import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../styles/CustomBanner.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 50,
        slideToShow: 1,
        slideToScroll: 1,
        autoplau: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const images = [
        `${process.env.PUBLIC_URL}/img/banner_background_1.jpg`,
        `${process.env.PUBLIC_URL}/img/banner_background_2.jpg`,
        `${process.env.PUBLIC_URL}/img/banner_background_3.jpg`,
    ];
    return (
        <div className = "banner-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`slide-${index + 1}`}
                            style={{width:"100%", height: "90vh", objectFit: "cover"}}
                            />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;