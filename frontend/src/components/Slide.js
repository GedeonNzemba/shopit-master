import React, { useEffect, Fragment } from "react";
import Helmet from 'react-helmet'
import Styled from 'styled-components'
import SliderUI from 'infinite-react-carousel';

import './slide.css'
import img1 from '../images/home_header/slide1.png'
import img2 from '../images/home_header/slide2.png'
import img3 from '../images/home_header/slide3.png'
import img4 from '../images/home_header/slide4.png'

const Slider = () => {

    const settings =  {
        autoplay: false,
        wheel: true,
        arrows: false
      };

    return (
        <Fragment>
           <SliderUI {...settings}>
                <div>
                        <img src={img4} alt="orange tree"  style={{height: '45.8rem', width: '100%', borderRadius: '2.5rem'}}/>
                    </div>
                    <div>
                        <img src={img1} alt="One World Trade" style={{height: '45.8rem', width: '100%', borderRadius: '2.5rem'}} />
                    </div>
                    <div>
                        <img src={img3} alt="drizzle" style={{height: '45.8rem', width: '100%', borderRadius: '2.5rem'}} />
                    </div>
                    <div>
                        <img src={img2} alt="cat nose" style={{height: '45.8rem', width: '100%', borderRadius: '2.5rem'}} />
                </div>
            </SliderUI>

            {/* <div class="carousel">
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
            </div> */}
            {/* <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }' id="img_home_wrap">
                <img src="https://res.cloudinary.com/locataire/image/upload/v1642358145/home%20banner%20images/resized-image-Promo_1_zx0t1d.jpg" alt="orange tree"  />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged"  />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" alt="look-out"  />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" alt="One World Trade"  />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" alt="drizzle"  />
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" alt="cat nose"  />
            </div> */}
        </Fragment>
    );

}

export default Slider;