import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Locataire.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// style for product

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Product = ({ product, col }) => {

    return (
        <div className="product farmStyle"  >
                <div className="img-container">
                    <Link to={`/product/${product._id}`}>
                        <img src={product.images[0].url} alt="products" />
                    </Link>
                    <div className="addCart">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>

                <Link to={`/product/${product._id}`}>
                    <div className="bottom">
                        <h4 className="product_title">{product.name}</h4>
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
{/* <div className="img-container">
                <Link to={`/product/${product._id}`}>
                    <img src={product.images[0].url} alt="products" />
                </Link>
                <div className="addCart">
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>

            <Link to={`/product/${product._id}`}>
                <div className="bottom">
                    <h6 className="product_title">{product.name}</h6>
                    <div className="price">
                        <span>${product.price}</span>
                    </div>
                </div>
            </Link> */}