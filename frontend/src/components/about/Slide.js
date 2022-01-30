import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render(props) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
            <div>
            {this.props.item_a}
            </div>
            <div>
            {this.props.item_b}
            </div>
        </Slider>
      </div>
    );
  }
}