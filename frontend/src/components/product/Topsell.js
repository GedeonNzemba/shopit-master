import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';
import TopSell from './TopSell.json'



const Topsell = () => {
    return (
        <>
            <Splide
                options={{
                    rewind: true,
                    width: '103%',
                    gap: '4rem',
                    perPage: 3
                }}
                onArrowsMounted={(splide, prev, next) => { console.log(prev, next) }}
            >
                <>
                    {
                        TopSell.map((product, index) => (
                            <SplideSlide className="product farmStyle" key={index}>
                                <div className="img-container">
                                    <Link to={`/product/${product._id}`} >
                                        <img src={product.images[0].url} alt="products" id="topsell" />
                                    </Link>
                                    <div className="addCart">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>

                                    <div className="side-icons">
                                        <span><i className="fas fa-search"></i></span>
                                        <span><i className="far fa-heart"></i></span>
                                        <span><i className="fas fa-sliders-h"></i></span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                                    <div className="price" style={{ overflow: 'hidden' }}>
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))
                    }

                </>
            </Splide>
        </>
    )
}

export default Topsell
