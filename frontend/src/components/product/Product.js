import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Locataire.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTranslation, Trans } from 'react-i18next';
import {
    getProductDetails,
    newReview,
    clearErrors,
} from "../../actions/productActions";
import { addItemToCart } from "../../actions/cartActions";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";


const Product = ({ match, product, col }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const alert = useAlert();

    const [Id, setId] = useState('');
    const [quantity, setQuantity] = useState(1)

    

    // const increaseQty = () => {
    //     const count = document.querySelector('.count')

    //     if (count.valueAsNumber >= product.stock) return;

    //     const qty = count.valueAsNumber + 1;
    //     setQuantity(qty)
    // }


    return (
        <div className="product farmStyle"  >
            <div className="img-container">
                <Link to={`/product/${product._id}`}>
                    <img src={product.images[0].url} alt="products" />
                </Link>
                <div className="addCart" onClick={() => {
                    setId(product._id)
                    Id !== '' ? dispatch(addItemToCart(Id, quantity)) : alert.info(t('alert_info'))
                }} variant="contained" color="success" id="add_to_card">
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>

            <Link to={`/product/${product._id}`}>
                <div className="bottom">
                    <h4 className="product_title">
                        {i18n.resolvedLanguage === 'fr' ? product.french.name : product.name}
                    </h4>
                    <div className="price">
                        <span>
                            {i18n.resolvedLanguage === 'fr' ? product.french.price + ' CFA' : '$' + product.price}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
        // {/* my product ends here */}

    )
}

export default memo(Product)
