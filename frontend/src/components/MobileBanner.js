import React from "react";
import Slider from "react-slick";
import img1 from '../images/banner.png'
import img2 from '../images/bannertop.png'
import img3 from '../images/livestock.png'
import Styled from 'styled-components'

export default function MobileBAnner() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div>
            <Slider {...settings}>
                <MobileBannerItem >
                    <IMG src={img1} alt="banner " className="mobile__banner_image" />
                </MobileBannerItem>
                <MobileBannerItem a="mobile__bannerItem" >
                    <IMG src={img2} alt="banner " className="mobile__banner_image" />
                </MobileBannerItem>
                <MobileBannerItem >
                    <IMG src={img3} alt="banner " className="mobile__banner_image" />
                </MobileBannerItem>
            </Slider>
        </div>
    );

}

const MobileBannerItem = Styled.div`
        height: 30rem;
    `
const IMG = Styled.img`
         width: 100% !important;
            height: 100% !important;
            object-fit: fill;
    `