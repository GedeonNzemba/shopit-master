import React, { useEffect, Fragment } from "react";
import Helmet from 'react-helmet'
import Styled from 'styled-components'
import './slide.css'
import img1 from '../images/home_header/slide1.png'
import img2 from '../images/home_header/slide2.png'
import img3 from '../images/home_header/slide3.png'
import img4 from '../images/home_header/slide4.png'

const Slider = () => {

    const loadWowScript = (url) => {
        var script = document.createElement('script');
        script.src = url
        script.type = 'text/javascript'
        script.async = true
        document.body.appendChild(script);
    }
    useEffect(() => {
        loadWowScript('https://npmcdn.com/flickity@2/dist/flickity.pkgd.js');

    }, [])

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://res.cloudinary.com/locataire/raw/upload/v1640298065/flickity/flickityPArallax_futij8.js";
        script.async = true;
        script.type = 'text/javascript';

        document.body.appendChild(script);

    }, [])

    return (
        <Fragment>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://npmcdn.com/flickity@2/dist/flickity.css"
                />
                <link rel="stylesheet" href="https://res.cloudinary.com/locataire/raw/upload/v1621704633/wow%20slider/style_zzarng.css" />
            </Helmet>

            <div class="carousel" data-flickity='{ "imagesLoaded": true  }'>
                <div class="carousel-cell">
                    <img src={img4} alt="orange tree" />
                </div>
                <div class="carousel-cell">
                    <img src={img1} alt="One World Trade" />
                </div>
                <div class="carousel-cell">
                    <img src={img3} alt="drizzle" />
                </div>
                <div class="carousel-cell">
                    <img src={img2} alt="cat nose" />
                </div>
            </div>
        </Fragment>
    );

}

export default Slider;

const MobileBannerItem = Styled.div`
        height: 30rem;
    `
const IMG = Styled.img`
         width: 100% !important;
            height: 100% !important;
            object-fit: fill;
    `