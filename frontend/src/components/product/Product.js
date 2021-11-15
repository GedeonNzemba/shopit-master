import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Locataire.css'
import Styled from 'styled-components'

// style for product
const ProductLayout = Styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3rem;
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 1.6rem;
`
const ProductItem = Styled.div`
   overflow: hidden;
`
const ImgContainer = Styled.div`
      position: relative;
    cursor: pointer;
`
const IMG = Styled.img`
    
        object-fit: cover;
    height: 100%;
    width: 100%;
    cursor: pointer;
`

const AddCart = Styled.div`
    
      position: absolute;
    right: 0;
    bottom: 0.6rem;
    background-color: var(--white);
    border-radius: 50%;
    padding: 1.3rem 1.6rem;
    box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 10%);
    transition: all 300ms ease-in-out;
    cursor: pointer;
`
const SideIcons = Styled.ul`
        position: absolute;
    right: 0;
    top: 30%;
    transform: translate(80%, -50%);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    transition: all 500ms ease-in-out;
`

const Span = Styled.span`
        font-size: 1.4rem;
    background-color: var(--white);
    margin: 0.3rem;
    padding: 1rem 1.3rem;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
`
const Bottom = Styled.div`
     padding: 1rem;
    text-align: center;
`
const ProductPrice = Styled.div`
    display: block;
`
const PriceSpan = Styled.div`
    color: var(--primary);
    font-size: 1.8rem;
`

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
