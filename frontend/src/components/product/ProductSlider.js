import React, {useState} from 'react'
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
import { useTranslation, Trans } from 'react-i18next';
import { addItemToCart } from "../../actions/cartActions";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const ProductSlider = ({key, product }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const alert = useAlert();

    const [Id, setId] = useState('');
    const [quantity, setQuantity] = useState(1)

    const Slides = () => (
        <Grid item>
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
    )

    return (
       
                <Slides />

           
    )
}

export default ProductSlider