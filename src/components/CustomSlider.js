"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {sliderImages} from "@/data/SliderImages";
import Image from "next/image";

export default function CustomSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {
                sliderImages.map((image, index) => (
                    <Image key={index} src={image} alt="img" width={500} height={500} style={{objectFit : "cover"}} ></Image>
                ))
            }
        </Slider>
    );



}