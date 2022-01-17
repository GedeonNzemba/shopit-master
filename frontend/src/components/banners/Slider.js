import React, { Component } from "react";
import Slider from "react-slick";
import Helmet from "react-helmet"
import img1 from '../../images/nutrition/a.svg'
import img2 from '../../images/nutrition/b.svg'
import img3 from '../../images/nutrition/c.svg'
import img4 from '../../images/nutrition/d.svg'
import img5 from '../../images/nutrition/e.svg'
import img6 from '../../images/nutrition/f.svg'

export default class NSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
          <Helmet>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Helmet>
        <Slider {...settings}>
          <div>
            <img className="nslide-img" src={img5} alt="slides" />
          </div>
          <div>
          <img className="nslide-img" src={img1} alt="slides" />
          </div>
          <div>
          <img className="nslide-img" src={img3} alt="slides" />
          </div>
          <div>
          <img className="nslide-img" src={img6} alt="slides" />
          </div>
          <div>
          <img className="nslide-img" src={img5} alt="slides" />
          </div>
          <div>
          <img className="nslide-img" src={img4} alt="slides" />
          </div>
        </Slider>
      </div>
    );
  }
}