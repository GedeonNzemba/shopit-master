import React, { useEffect, useState, Fragment } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import '../../styles/Locataire.css'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import './topstyle.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


import axios from 'axios';

import Product from './Product';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Topsell = () => {

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
