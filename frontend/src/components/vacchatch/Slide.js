import React, { Component } from "react";
import Slider from "react-slick";
import Helmet from 'react-helmet'
import img1 from '../../images/chicks_vaccine/mh-blog-chick-vaccine-banner.jpg'
import img2 from '../../images/chicks_vaccine/slide2.png'
import img3 from '../../images/chicks_vaccine/slide3.jpg'
import './vacchatch.css'

export default class VaccineSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            draggable: true,
            fade: true,
        };

        return (
            <div id="vacc_wrapper">
                <Helmet>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>

                <Slider {...settings}>
                    <div>
                        <img src={img1 } alt="vaccine chicks" />
                    </div>
                    <div>
                        <img src={ img2} alt="vaccine chicks" />
                    </div>
                    <div>
                        <img src={ img3} alt="vaccine chicks" />
                    </div>
                </Slider>
            </div>
        );
    }
}