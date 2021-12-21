import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Locataire.css'

// style for product


const Product = ({ product, col }) => {

    return (

        <div className="product farmStyle">

            <div className="img-container">
                <Link to={`/product/${product._id}`}>
                    <img src={product.images[0].url} alt="products" />
                </Link>
                <div className="addCart">
                    <i className="fas fa-shopping-cart"></i>
                </div>

                <div className="side-icons">
                    <span><i className="fas fa-search"></i></span>
                    <span id="add_favourite"><i className="far fa-heart"></i></span>
                    <span><i className="fas fa-sliders-h"></i></span>
                </div>
            </div>

            <Link to={`/product/${product._id}`}>
                <div className="bottom">
                    <h6 className="product_title">{product.name}</h6>
                    <div className="price">
                        <span>${product.price}</span>
                    </div>
                </div>
            </Link>

        </div>


        // {/* my product ends here */}

    )
}

export default Product
