import React, { useEffect, useState } from 'react'
import '../../styles/Locataire.css'
import OwlCarousel from 'react-owl-carousel2';
import './topstyle.css';
// import Slider from "react-slick";

import axios from 'axios';

import Product from './Product';




const Topsell = () => {

    const options = {
        items: 4,
        nav: false,
        rewind: true,
        autoplay: true,
        dots: false
    };

    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        let link = `/api/v1/sales/products`

        async function getRandomProducts() {
            const { data } = await axios.get(link);
            setRandomProducts(data.products)
        }

        getRandomProducts();

        // const loadScript = (url) => {
        //     const script = document.createElement('script');
        //     script.src = url;
        //     script.async = true;
        //     document.body.appendChild(script);
        // }
        // const loadStyles = (css) => {
        //     const styled = document.createElement('link');
        //     styled.href = css;
        //     styled.type = 'text/css';
        //     styled.async = true;
        //     document.body.appendChild(styled);

        // }

        // loadScript('https://npmcdn.com/flickity@2/dist/flickity.pkgd.js');
        // loadStyles('https://npmcdn.com/flickity@2/dist/flickity.css')
    }, [])





    return (
        <div className="our-top-sellers">
            {window.screen.width <= 768 ?
                (
                    <OwlCarousel options={options}  >
                        {
                            randomProducts.map(product => (
                                <div >
                                    <Product key={product._id} product={product} col={4} />
                                </div>
                            ))
                        }
                    </OwlCarousel>
                )

                :
                (
                    <div class="nutrition_product_preview home_sale_products">

                        {
                            randomProducts.map(product => (

                                <Product key={product._id} product={product} col={4} />
                            ))
                        }
                    </div>
                )
            }
        </div>

    )
}

export default Topsell
