import React, { Component } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import img1 from '../images/bank/1.jpeg'
import img2 from '../images/bank/2.png'
import img3 from '../images/bank/3.jpg'
import img4 from '../images/bank/4.jpg'
import img5 from '../images/bank/5.png'
import img6 from '../images/bank/6.jpeg'
import img7 from '../images/bank/7.png'



export default class Bank extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Splide
                    options={{
                        perPage: 3,
                        autoplay: true,
                        rewind: true,
                        width: '100vw',
                        gap: '5rem',
                    }}
                    onArrowMounted={(splide, prev, next) => {
                        console.log(prev, next);
                    }}
                >
                    <SplideSlide>
                        <img src={img1} alt="img 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img2} alt="img 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={this.props.link1} alt="img 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img3} alt="img 3" id="img3_bank" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img4} alt="img 4" id="img4_bank" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={this.props.link2} alt="img 4" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img5} alt="img 5" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img6} alt="img 6" id="img6_bank" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={this.props.link3} alt="img 7" id="img7_bank" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img7} alt="img 8" id="img8_bank" />
                    </SplideSlide>
                </Splide>
            </div>
        )
    }
}
