import React, { Component } from 'react'
import Slide from "react-slick";
import Helmet from 'react-helmet';

export default class Slider extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            fade: this.props.fade,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000
        };

        return (
            < div >
                <Helmet>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>
                <Slide {...settings}>
                    <div>
                        {this.props.contentOne}
                    </div>
                    <div>
                        {this.props.contentTwo}
                    </div>
                    <div>
                        {this.props.contentThree}
                    </div>
                    <div>
                        {this.props.contentFour}
                    </div>
                    <div>
                        {this.props.contentFive}
                    </div>
                </Slide>
            </div >
        )
    }
}
