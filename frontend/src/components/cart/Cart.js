import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';
import "./cart.module.css"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import MetaData from '../layout/MetaData'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'
import { Helmet } from 'react-helmet'
import Styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Inpute from '@material-ui/core/Input';
import { ButtonGroup, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
// import { createMuiTheme } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import axios from 'axios'

import { ThemeProvider } from '@material-ui/styles';
import Bank from '../Bank'
import { useTranslation } from 'react-i18next';


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.#4CAF50
            main: '#e91e63',
            fontSize: '1.6rem'
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#4CAF50',
        },
        third: {
            main: '#F50057',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    moot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    font: {
        fontSize: '1.6rem'
    },
    buttonMt: {
        '& span': {
            marginLeft: 'unset!important',
        }
    }
}));



const Cart = ({ history }) => {
    const { t, i18n } = useTranslation();

    const classes = useStyles();

    const Cart = Styled.div`
        font-weight: 300;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);
    border-radius: .375rem;
        border: 0;
        margin-bottom: 1.5rem !important;
            position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    `
    const Md4 = Styled.h5`
        font-weight: 500;
            margin-bottom: 1.5rem !important;
            font-size: 2rem;
    `
    const View = Styled.div`
            box-shadow: 0 2px 5px 0 rgb(0 0 0 / 7%), 0 2px 10px 0 rgb(0 0 0 / 7%) !important;
                border-radius: 0.375rem !important;
                position: relative;
    overflow: hidden;
    cursor: default;
        margin-bottom: 0 !important;
    `
    const ImgFluid = Styled.img`
            transition: all .2s linear;
    `
    const A = Styled.a`
        &:hover {
            color: #0056b3;
    text-decoration: none;
    transition: all .2s ease-in-out;
        };
        color: #007bff;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    `
    const Mask = Styled.div`
        &:hover {
            opacity: 1;
                transition: all .4s ease-in-out;
        }
            opacity: 0;
    transition: all .4s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
        background-attachment: fixed;
    bottom: 0;
        cursor: pointer;
    user-select: none;
        -webkit-tap-highlight-color: transparent;
    `
    const Mask2 = Styled.div`
    &:hover {
        opacity: 1;
    }
        opacity: 0;
    transition: all .4s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
        background-attachment: fixed;
    bottom: 0;
        cursor: pointer;
    user-select: none;
        background-color: rgba(0,0,0,.1);
        -webkit-tap-highlight-color: transparent;
    `
    const Dflex = Styled.div`
        justify-content: space-between !important;
    `


    const Small = Styled.small`
            color: #6c757d !important;
                text-align: center !important;
                    margin-top: 0.25rem;
    font-size: 0.875em;
    `

    const [shopnow, setShopnow] = useState(false);

    console.log('Position: ' + shopnow);

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
    }

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty > stock) return;

        dispatch(addItemToCart(id, newQty))
    }

    const decreaseQty = (id, quantity) => {

        const newQty = quantity - 1;

        if (newQty <= 0) return;

        dispatch(addItemToCart(id, newQty))

    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    function CartScript() {
        const scripta = document.createElement("script");
        scripta.src = "https://mdbootstrap.com/previews/ecommerce-demo/js/jquery-3.4.1.min.js";
        scripta.async = true;
        document.body.appendChild(scripta);

        const scriptb = document.createElement("script");
        scriptb.src = "https://mdbootstrap.com/previews/ecommerce-demo/js/popper.min.js";
        scriptb.async = true;
        document.body.appendChild(scriptb);

        const scriptc = document.createElement("script");
        scriptc.src = "https://mdbootstrap.com/previews/ecommerce-demo/js/bootstrap.js";
        scriptc.async = true;
        document.body.appendChild(scriptc);

        const scriptd = document.createElement("script");
        scriptd.src = "https://mdbootstrap.com/previews/ecommerce-demo/js/mdb.min.js";
        scriptd.async = true;
        document.body.appendChild(scriptd);

        const scripte = document.createElement("script");
        scripte.src = "https://mdbootstrap.com/previews/ecommerce-demo/js/mdb.ecommerce.min.js";
        scripte.async = true;
        document.body.appendChild(scripte);
    }


    useEffect(() => {
        CartScript();

    }, [])

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        app.classList.add('cartPage');


        return () => {
            app.classList.remove('cartPage');
        }
    }, [])

    const [transText, setTransText] = useState('')
    const [transTextB, setTransTextB] = useState('')

        useEffect(() => {
            axios({
                method: 'post',
                url: 'https://translate.mentality.rip/translate',
                headers: { "Content-Type": "application/json" },
                data: {
                    q: cartItems[0].color ? cartItems[0].color : "",
                    source:  "en",
                    target:  "fr",
                    format: "text"
                }
            }).then(function (response) {
                console.log(response.data)
                console.log(response.data.translatedText)
                setTransText(response.data.translatedText);
    
            })
                .catch(function (error) {
                    console.log(error);
                })
        }, [])

        // ########################################### SECOND REQUEST #########################################




    return (
        <Fragment>
            <MetaData title={'Cart'} />
            <Helmet>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

                <link rel="stylesheet" href="./src/scss/bootstrap/bootstrap.css" />

                {/* <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb-pro.min.css" /> */}

                <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb.ecommerce.min.css" />

            </Helmet>
            {cartItems.length === 0 ?
                (

                    <>
                        <div id="cart__main">
                            <main style={{ marginBottom: '8%' }}>
                                <div className="container" id="container_cart-main">

                                    <section className="mt-5 mb-4">
                                        <div className="row">
                                            <div className='col-lg-8 ' style={{ paddingLeft: 'unset' }}>

                                                <Cart className="card wish-list mb-4">
                                                    <div className="card-body">
                                                        <h5 className="mb-4" id="cart__title"><span style={{ marginLeft: 'unset' }} className="yourcarttitle">{t('your_cart')}: </span> <b style={{ fontSize: '2.6rem', paddingLeft: '1rem', lineHeight: '46px' }}>{cartItems.length} {t('items')}</b></h5>

                                                        <div className="row mb-4 cart__product-rendered" >
                                                            <div className="col-md-5 col-lg-3 col-xl-3">
                                                                <View className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                                    {/* <ImgFluid className="img-fluid w-100"
                                                                        src={image}
                                                                        alt="Sample" /> */}
                                                                    <Skeleton variant="rect" className="img-fluid w-100" width={210} height={118} />
                                                                    <A href="#!">
                                                                        <Mask className="mask waves-effect waves-light">
                                                                            {/* <ImgFluid className="img-fluid w-100"
                                                                                src={image} alt="s" /> */}
                                                                            <Skeleton variant="rect" className="img-fluid w-100" width={410} height={218} />
                                                                            <Mask2 className="mask rgba-black-slight waves-effect waves-light"></Mask2>
                                                                        </Mask>
                                                                    </A>
                                                                </View>
                                                            </div>
                                                            <Dflex className="col-md-7 col-lg-9 col-xl-9 product__content-info-wrap" style={{ marginTop: '3rem' }}>
                                                                <div>
                                                                    <Dflex className="d-flex justify-content-between" id="product_cart-descr">
                                                                        <div id="product_cart-desc-main" style={{ width: '100%' }}>
                                                                            <Skeleton variant="text" />
                                                                            <div className="product_cart-descr">
                                                                                <p style={{ fontFamily: 'Ginto regular' }} className={classes.font + ' mb-3 text-muted text-uppercase small row'}><span className="subc">{t('category')}: {" "}</span>  <Skeleton variant="text" width="60%" /></p>
                                                                                <p style={{ fontFamily: 'Ginto regular' }} className={classes.font + ' mb-3 text-muted text-uppercase small row'}><span className="subc">{t('color')}: {" "}</span> <Skeleton variant="text" width="60%" /></p>
                                                                                <p style={{ fontFamily: 'Ginto regular' }} className={classes.font + ' mb-3 text-muted text-uppercase small row'}><span className="subc">{t('size')}: {" "}</span>  <Skeleton variant="text" width="60%" /></p>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            {/* <Dnumber className="def-number-input number-input safari_only mb-0 w-100">
                                                                        <ButtonD
                                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                            className="minus"></ButtonD>
                                                                        <Input className="quantity" min="0" name="quantity" value="1"
                                                                            type="number" />
                                                                        <ButtonB
                                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                            className="plus"></ButtonB>
                                                                    </Dnumber> */}
                                                                            <div className={classes.moot}>
                                                                                <ThemeProvider theme={theme}>
                                                                                    <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                                                                                        <Button className={classes.font}>{t('decrease')}</Button>
                                                                                        <Button>
                                                                                            <Skeleton variant="circle" width={40} height={40} />
                                                                                            {/* <form className={classes.root} noValidate autoComplete="off" id="add_sub">
                                                                                            <Inpute defaultValue={} type="input" readOnly inputProps={{ 'aria-label': 'description' }} />
                                                                                        </form> */}
                                                                                        </Button>
                                                                                        <Button className={classes.font}>{t('add')}</Button>
                                                                                    </ButtonGroup>
                                                                                </ThemeProvider>
                                                                            </div>

                                                                            <Small id="passwordHelpBlock" className="form-text text-muted text-center">
                                                                                ({t('note')}, 0 {t('pieces')})
                                                                            </Small>
                                                                        </div>
                                                                    </Dflex>
                                                                    <Dflex className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <Link to="/shop" onClick={(prevState) => setShopnow(true)}>
                                                                                <Button

                                                                                    variant="contained"
                                                                                    color="primary"
                                                                                    className={classes.button + ' ' + classes.buttonMt}
                                                                                    onClick={() => setShopnow(true)}
                                                                                // startIcon={<DeleteIcon />}
                                                                                >
                                                                                    {t('shop__now')}
                                                                                </Button>
                                                                            </Link>
                                                                            <Button
                                                                                variant="contained"
                                                                                color="primary"
                                                                                className={classes.button}
                                                                                endIcon={<Icon>send</Icon>}
                                                                                style={{ display: 'none' }}
                                                                            >
                                                                                Move to wishlist
                                                                            </Button>
                                                                        </div>
                                                                        <p className={classes.font + ' mb-0'}><span style={{ fontWeight: '500', fontSize: '2rem' }}><strong>$0</strong></span></p>
                                                                    </Dflex>
                                                                </div>
                                                            </Dflex>
                                                        </div>
                                                    </div>
                                                </Cart>
                                                {/* ... */}
                                            </div>




                                        </div>
                                    </section>
                                </div>

                            </main>
                        </div>


                    </>
                )



                : (
                    <>
                        <div id="cart__main">
                            <main>

                                <Box sx={{ p: 4, mt: 2 }} id="container_cart-main">

                                    <section>
                                        <Stack direction="column" spacing={2} >
                                            <Box>

                                                <Cart className="card wish-list mb-4">
                                                    <Box sx={{ m: 2 }} id="coupon_cart__page">
                                                        <div className="card-body">
                                                            <ThemeProvider theme={theme}>
                                                                <form className={classes.root} id="discount_form" noValidate autoComplete="off">
                                                                    <TextField id="standard-basic" color="primary" type="input" className="standard_discount" label={t('discount_text')} />
                                                                </form>
                                                            </ThemeProvider>
                                                        </div>
                                                    </Box>

                                                    <div className="card-body">
                                                        <h5 className="mb-4" id="cart__title"><span style={{ marginLeft: 'unset' }} className="yourcarttitle">{t('your_cart')}: </span> <b style={{ fontSize: '2.6rem', paddingLeft: '1rem', lineHeight: '46px' }}>{cartItems.length} {t('items')}</b></h5>
                                                        {cartItems.map(item => (
                                                            <>


                                                                <div className="row mb-4 cart__product-rendered" key={item._id}>
                                                                    <div className="col-md-5 col-lg-3 col-xl-3 product__image-container">
                                                                        <View className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0 product__image-outer">
                                                                            <ImgFluid className="img-fluid w-100"
                                                                                src={item.image}
                                                                                alt="Sample" />
                                                                            <A href="#!">
                                                                                <Mask className="mask waves-effect waves-light">
                                                                                    <ImgFluid className="img-fluid w-100"
                                                                                        src={item.image} alt="s" />
                                                                                    <Mask2 className="mask rgba-black-slight waves-effect waves-light"></Mask2>
                                                                                </Mask>
                                                                            </A>
                                                                        </View>
                                                                    </div>
                                                                    <Dflex className="col-md-7 col-lg-9 col-xl-9 product__content-info-wrap">
                                                                        <div id="product__inner-info-wrapper">
                                                                            <Dflex className="d-flex justify-content-between inner__product-item-wrap">
                                                                                <div className="product-item-info__inner-wrap">
                                                                                    <Md4>{i18n.resolvedLanguage === 'fr' ? item.nom : item.name}</Md4>
                                                                                    <p className="mb-3 text-muted text-uppercase small"><span className="subc">{t('category')}: {" "}</span>  {i18n.resolvedLanguage === 'fr' ? item.categorie : item.category}</p>
                                                                                    <p className="mb-2 text-muted text-uppercase small"><span className="subc">{t('color')}: {" "}</span> {i18n.resolvedLanguage === 'fr' ? (item.color ? transText && transText : t('unavalaible')) : (item.color ? item.color : t('unavalaible'))}</p>
                                                                                    <p className="mb-3 text-muted text-uppercase small"><span className="subc">{t('size')}: {" "}</span>  {item.size ? item.size : t('unavalaible')}</p>
                                                                                </div>
                                                                                <div className="product-item-nav__inner-wrap">
                                                                                    {/* <Dnumber className="def-number-input number-input safari_only mb-0 w-100">
                                                                        <ButtonD
                                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                            className="minus"></ButtonD>
                                                                        <Input className="quantity" min="0" name="quantity" value="1"
                                                                            type="number" />
                                                                        <ButtonB
                                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                            className="plus"></ButtonB>
                                                                    </Dnumber> */}
                                                                                    <div className={classes.moot}>
                                                                                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                                                                            <Button className={classes.font} onClick={() => decreaseQty(item.product, item.quantity)}>{t('decrease')}</Button>
                                                                                            <Button id="button__qty">
                                                                                                <form className={classes.root} noValidate autoComplete="off" id="add_sub">
                                                                                                    <Inpute defaultValue="Select" type="input" value={item.quantity} readOnly inputProps={{ 'aria-label': 'description' }} />
                                                                                                </form>
                                                                                            </Button>
                                                                                            <Button className={classes.font} onClick={() => increaseQty(item.product, item.quantity, item.stock)}>{t('add')}</Button>
                                                                                        </ButtonGroup>
                                                                                    </div>

                                                                                    <Small id="passwordHelpBlock" className="form-text text-muted text-center" style={{ fontSize: '1.6rem' }}>
                                                                                        ({t('note')}, {item.quantity} {t('piece')})
                                                                                    </Small>
                                                                                </div>
                                                                            </Dflex>
                                                                            <Dflex className="d-flex justify-content-between align-items-center button__remove_product">
                                                                                <div>
                                                                                    <Button
                                                                                        onClick={() => removeCartItemHandler(item.product)}
                                                                                        variant="contained"
                                                                                        color="secondary"
                                                                                        className={classes.button}
                                                                                        startIcon={<DeleteIcon />}
                                                                                    >
                                                                                        {t('remove_item')}
                                                                                    </Button>
                                                                                   
                                                                                </div>
                                                                                <p className="mb-0 cart_page__price"><span style={{ fontWeight: '500', fontFamily: 'Ginto bold', fontSize: '2.5rem' }}><strong>${item.price}</strong></span></p>
                                                                            </Dflex>
                                                                        </div>
                                                                    </Dflex>
                                                                </div>
                                                            </>
                                                        ))}
                                                        <hr className="mb-4" />


                                                        <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i>{t('no_delay')}</p>

                                                    </div>
                                                </Cart>


                                            </Box>

                                            <Box>


                                                <div className="card mb-4">
                                                    <div className="card-body" id="card-body">

                                                        <Md4 className="mb-3" id="totalamountof" style={{ fontSize: '2.6rem', fontFamily: 'GT Super Ds Trial Bd' }}>{t('total_amount_of')}</Md4>

                                                        <ul className="list-group list-group-flush" style={{ marginBottom: '2rem' }}>
                                                            <li style={{ fontSize: '2rem', fontFamily: 'Ginto regular' }}
                                                                className="list_group_card list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                                {t('subtotal')}
                                                                <span>{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} ({t('units')})</span>
                                                            </li>
                                                            <li style={{ fontSize: '2rem', fontFamily: 'Ginto regular' }} className="list_group_card list-group-item d-flex justify-content-between align-items-center px-0">
                                                                {t('tax_text')}
                                                                <span>{t('free')}</span>
                                                            </li>
                                                            <li
                                                                style={{ fontSize: '2rem', fontFamily: 'Ginto bold' }}
                                                                className="list_group_card list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                                <div>
                                                                    <strong>{t('total_amount_of')}</strong>
                                                                    <strong>
                                                                        <p className="mb-0">({t('vat')})</p>
                                                                    </strong>
                                                                </div>
                                                                <span><strong>${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</strong></span>
                                                            </li>
                                                        </ul>

                                                        <Button id="checkout_button-cart" variant="contained" color="secondary" onClick={checkoutHandler}>{t('check_out')}</Button>

                                                    </div>
                                                </div>




                                            </Box>
                                        </Stack>
                                    </section>
                                </Box>
                                <div className="card mb-4" style={{ backgroundColor: 'unset' }} id="cart_bankLogo_slides">
                                    <div className="card-body">

                                        {/* <Md4 className="mb-4">We accept</Md4> */}
                                        <Bank
                                            link1="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                            link2="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                            link3="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        />


                                    </div>
                                </div>
                            </main>

                        </div>

                    </>

                )






            }
        </Fragment>
    )
}

export default Cart
