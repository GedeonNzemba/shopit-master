import React, { Fragment } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import image_1 from '../../images/veterine_1.jpg'
import image_2 from '../../images/veterine_0.jpg'
import image_3 from '../../images/veterine_2.jpg'
import image_4 from '../../images/nutrition.png'
import { Carousel } from 'react-bootstrap';

const Nutrition_hero = () => {
    return (
        <Fragment>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100  nutrition__img"
                        src={image_4}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 nutrition__img"
                        src={image_1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Fragment>
    )
}

export default Nutrition_hero
