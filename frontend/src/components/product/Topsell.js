import React, { useEffect, useState, Fragment } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import '../../styles/Locataire.css'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import './topstyle.css';
import { addItemToCart } from "../../actions/cartActions";
import Grid from '@mui/material/Grid';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useTranslation, Trans } from 'react-i18next';
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";


import axios from 'axios';

import Product from './Product';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Topsell = () => {
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();
    const alert = useAlert();

    const [Id, setId] = useState('');
    const [quantity, setQuantity] = useState(1)
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        let link = `/api/v1/sales/products`

        async function getRandomProducts() {
            const { data } = await axios.get(link);
            setRandomProducts(data.products)
        }

        getRandomProducts();
    }, [])




    const Most = () => (
        <>
            {
                randomProducts.map((product, index) => (
                    <Grid item key={index}>
                        <Item>
                            <div className="product farmStyle">

                                <div className="img-container">
                                    <Link to={`/product/${product._id}`}>
                                        <img src={product.images[0].url} alt="products" />
                                    </Link>
                                    <div className="addCart" onClick={() => {
                    setId(product._id)
                    if (Id !== '') {
                        dispatch(addItemToCart(Id, quantity))
                        alert.success(t('add_to_cart'))
                    } else {
                        alert.info(t('alert_info'))  
                    } 
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
                        </Item>
                    </Grid>
                ))
            }
        </>
    )




    return (
        <SimpleBar style={{ width: '90vw' }}>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            style={{flexWrap: 'nowrap'}}
        >
            
                <Most />
        </Grid>
            </SimpleBar>
    )
}

export default Topsell
