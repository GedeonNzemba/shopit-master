import React, { Fragment, useState, useEffect } from 'react'
import Header from "../layout/Header"
import { Link } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';
import "./cart.module.css"

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


import { ThemeProvider } from '@material-ui/styles';
import Bank from '../Bank'



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
    const Dnumber = Styled.div`
        border: 1px solid #ced4da;
    border-radius: .25rem;
        margin-bottom: 0 !important;
    `
    const ButtonD = Styled.button`
        padding-left: 10px;
        width: 2.5rem;
    height: .7rem;
        -webkit-appearance: none;
    background-color: transparent;
    border: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    position: relative;
    text-transform: none;
        overflow: visible;
        &:before {
                width: .7rem;
    background-color: #495057;
        }
        &:after {
    width: .7rem;
    background-color: #495057;
        display: inline-block;
    position: absolute;
    content: '';
    height: 2px;
    transform: translate(-50%, -50%);
        }
    `
    const Input = Styled.input`
        max-width: 3rem;
    padding: .5rem;
    border: 1px solid #ced4da;
    border-width: 0 1px;
    font-size: 1rem;
    height: 2rem;
    color: #495057;
    text-align: center;
        appearance: textfield;
        line-height: inherit;
    `
    const ButtonB = Styled.button`
        text-transform: none;
            overflow: visible;
            font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    &:before {
        width: .7rem;
    background-color: #495057;
    }
    &:after {
        width: .7rem;
    background-color: #495057;
            display: inline-block;
    position: absolute;
    content: '';
    height: 2px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
        transform: translate(-50%, -50%) rotate(
90deg
);
display: inline-block;
    position: absolute;
    content: '';
    height: 2px;
    }
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


    return (
        <Fragment>
            <MetaData title={'Cart'} />
            {cartItems.length === 0 ?
                (

                    <>
                        <div id="cart__main">
                            <main style={{marginBottom: '8%'}}>
                                <div className="container" id="container_cart-main">

                                    <section className="mt-5 mb-4">
                                        <div className="row">
                                            <div className='col-lg-8 ' style={{ paddingLeft: 'unset' }}>

                                                <Cart className="card wish-list mb-4">
                                                    <div className="card-body">
                                                        <h5 className="mb-4" id="cart__title"><span className="yourcarttitle">Your Cart: </span> <b style={{ fontSize: '2.6rem', paddingLeft: '1rem', lineHeight: '46px' }}>{cartItems.length} items</b></h5>

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
                                                            <Dflex className="col-md-7 col-lg-9 col-xl-9">
                                                                <div>
                                                                    <Dflex className="d-flex justify-content-between">
                                                                        <div id="product_cart-desc-main" style={{ width: '100%' }}>
                                                                            <Skeleton variant="text" />
                                                                            <div className="product_cart-descr">
                                                                                <p className={classes.font + ' mb-3 text-muted text-uppercase small row'}><span className="subc">Category: {" "}</span>  <Skeleton variant="text" width="60%" /></p>
                                                                                <p className={classes.font + ' mb-3 text-muted text-uppercase small row'}><span className="subc">Color: {" "}</span> <Skeleton variant="text" width="60%" /></p>
                                                                                <p className={classes.font + ' mb-3 text-muted text-uppercase small row'}><span className="subc">Size: {" "}</span>  <Skeleton variant="text" width="60%" /></p>
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
                                                                                        <Button className={classes.font}>decrease</Button>
                                                                                        <Button>
                                                                                            <Skeleton variant="circle" width={40} height={40} />
                                                                                            {/* <form className={classes.root} noValidate autoComplete="off" id="add_sub">
                                                                                            <Inpute defaultValue={} type="input" readOnly inputProps={{ 'aria-label': 'description' }} />
                                                                                        </form> */}
                                                                                        </Button>
                                                                                        <Button className={classes.font}>add</Button>
                                                                                    </ButtonGroup>
                                                                                </ThemeProvider>
                                                                            </div>

                                                                            <Small id="passwordHelpBlock" className="form-text text-muted text-center">
                                                                                (Note, 0 piece)
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
                                                                                    Shop Now
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
                                                                        <p className={classes.font + ' mb-0'}><span style={{ fontWeight: '500' }}><strong>$0</strong></span></p>
                                                                    </Dflex>
                                                                </div>
                                                            </Dflex>
                                                        </div>
                                                    </div>
                                                </Cart>
                                                {/* ... */}
                                            </div>


                                            <div className={`col-lg-4 ${window.innerWidth < 769 ? " col-lg-8-no-padding" : ''}`} style={{ paddingRight: 'unset' }}>

                                                <div className="card mb-4">
                                                    <div className="card-body">

                                                        <Md4 className="mb-3" id="totalamountof">The total amount of</Md4>

                                                        <ul className="list-group list-group-flush" style={{ marginBottom: '2rem' }}>
                                                            <li
                                                                className="list_group_card list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                                Subtotal
                                                                <span>      <Skeleton variant="text" width="80px" /></span>
                                                            </li>
                                                            <li className="list_group_card list-group-item d-flex justify-content-between align-items-center px-0">
                                                                Estimated Delivery Tax
                                                                <span><Skeleton variant="text" width="80px" /></span>
                                                            </li>
                                                            <li
                                                                className="list_group_card list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                                <div>
                                                                    <strong>The total amount of</strong>
                                                                    <strong>
                                                                        <p className="mb-0">(including VAT)</p>
                                                                    </strong>
                                                                </div>
                                                                <span><strong><Skeleton variant="text" width="80px" /></strong></span>
                                                            </li>
                                                        </ul>

                                                        {/* <Button variant="contained" color="secondary" >Check Out</Button> */}
                                                        <Skeleton variant="rect" width={110} height={40} color="secondary" />

                                                    </div>
                                                </div>

                                                <div className="card mb-4">
                                                    <div className="card-body">
                                                        <Skeleton variant="circle" width={40} height={40} />
                                                        <Skeleton variant="text" width={300} />

                                                        {/* <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse"
                                                    href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                    Add a discount code (optional)
                                                                            <span><i className="fas fa-chevron-down pt-1"></i></span>
                                                </a> */}

                                                        {/* <div className="collapse" id="collapseExample">
                                                    <div className="mt-3">
                                                        <div className="md-form md-outline mb-0">
                                                            <input type="text" id="discount-code" className="form-control font-weight-light"
                                                                placeholder="Enter discount code" />
                                                        </div>
                                                    </div>
                                                </div> */}
                                                    </div>
                                                </div>


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
                                <Helmet>

                                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

                                    <link rel="stylesheet" href="./src/scss/bootstrap/bootstrap.css" />

                                    {/* <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb-pro.min.css" /> */}

                                    <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb.ecommerce.min.css" />

                                </Helmet>
                                <div className="container" id="container_cart-main">

                                    <section className="mt-5 mb-4">

                                        <div className="row">

                                            <div className="col-lg-8" style={{ paddingLeft: 'unset' }}>

                                                <Cart className="card wish-list mb-4">
                                                    <div className="card-body">
                                                        <h5 className="mb-4" id="cart__title"><span className="yourcarttitle">Your Cart: </span> <b style={{ fontSize: '2.6rem', paddingLeft: '1rem', lineHeight: '46px' }}>{cartItems.length} items</b></h5>
                                                        {cartItems.map(item => (
                                                            <>


                                                                <div className="row mb-4 cart__product-rendered" key={item._id}>
                                                                    <div className="col-md-5 col-lg-3 col-xl-3">
                                                                        <View className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
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
                                                                    <Dflex className="col-md-7 col-lg-9 col-xl-9">
                                                                        <div>
                                                                            <Dflex className="d-flex justify-content-between">
                                                                                <div>
                                                                                    <Md4>{item.name}</Md4>
                                                                                    <p className="mb-3 text-muted text-uppercase small"><span className="subc">Category: {" "}</span>  {item.category}</p>
                                                                                    <p className="mb-2 text-muted text-uppercase small"><span className="subc">Color: {" "}</span> {item.color}</p>
                                                                                    <p className="mb-3 text-muted text-uppercase small"><span className="subc">Size: {" "}</span>  {item.size}</p>
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
                                                                                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                                                                            <Button onClick={() => decreaseQty(item.product, item.quantity)}>decrease</Button>
                                                                                            <Button>
                                                                                                <form className={classes.root} noValidate autoComplete="off" id="add_sub">
                                                                                                    <Inpute defaultValue="Select" type="input" value={item.quantity} readOnly inputProps={{ 'aria-label': 'description' }} />
                                                                                                </form>
                                                                                            </Button>
                                                                                            <Button onClick={() => increaseQty(item.product, item.quantity, item.stock)}>add</Button>
                                                                                        </ButtonGroup>
                                                                                    </div>

                                                                                    <Small id="passwordHelpBlock" className="form-text text-muted text-center">
                                                                                        (Note, {item.quantity} piece)
                                                                                    </Small>
                                                                                </div>
                                                                            </Dflex>
                                                                            <Dflex className="d-flex justify-content-between align-items-center">
                                                                                <div>
                                                                                    <Button
                                                                                        onClick={() => removeCartItemHandler(item.product)}
                                                                                        variant="contained"
                                                                                        color="secondary"
                                                                                        className={classes.button}
                                                                                        startIcon={<DeleteIcon />}
                                                                                    >
                                                                                        Remove Item
                                                                                    </Button>
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
                                                                                <p className="mb-0"><span style={{ fontWeight: '500' }}><strong>${item.price}</strong></span></p>
                                                                            </Dflex>
                                                                        </div>
                                                                    </Dflex>
                                                                </div>
                                                            </>
                                                        ))}
                                                        <hr className="mb-4" />


                                                        <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i> Do not delay the
                                                            purchase, adding
                                                            items to your cart does not mean booking them.</p>

                                                    </div>
                                                </Cart>

                                                <div className="card mb-4">
                                                    <div className="card-body">

                                                        <Md4 className="mb-4">Expected shipping delivery</Md4>

                                                        <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                                                    </div>
                                                </div>


                                            </div>




                                            <div className="col-lg-4" style={{ paddingRight: 'unset' }}>

                                                <div className="card mb-4">
                                                    <div className="card-body">

                                                        <Md4 className="mb-3" id="totalamountof">The total amount of</Md4>

                                                        <ul className="list-group list-group-flush" style={{ marginBottom: '2rem' }}>
                                                            <li
                                                                className="list_group_card list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                                Subtotal
                                                                <span>{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} (Units)</span>
                                                            </li>
                                                            <li className="list_group_card list-group-item d-flex justify-content-between align-items-center px-0">
                                                                Estimated Delivery Tax
                                                                <span>Free</span>
                                                            </li>
                                                            <li
                                                                className="list_group_card list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                                <div>
                                                                    <strong>The total amount of</strong>
                                                                    <strong>
                                                                        <p className="mb-0">(including VAT)</p>
                                                                    </strong>
                                                                </div>
                                                                <span><strong>${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</strong></span>
                                                            </li>
                                                        </ul>

                                                        <Button variant="contained" color="secondary" onClick={checkoutHandler}>Check Out</Button>

                                                    </div>
                                                </div>

                                                <div className="card mb-4">
                                                    <div className="card-body">
                                                        <ThemeProvider theme={theme}>
                                                            <form className={classes.root} id="discount_form" noValidate autoComplete="off">
                                                                <TextField id="standard-basic" color="primary" type="input" className="standard_discount" label="Have a discount? Add it here" />
                                                            </form>
                                                        </ThemeProvider>
                                                        {/* <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse"
                                                    href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                    Add a discount code (optional)
                                                                            <span><i className="fas fa-chevron-down pt-1"></i></span>
                                                </a> */}

                                                        {/* <div className="collapse" id="collapseExample">
                                                    <div className="mt-3">
                                                        <div className="md-form md-outline mb-0">
                                                            <input type="text" id="discount-code" className="form-control font-weight-light"
                                                                placeholder="Enter discount code" />
                                                        </div>
                                                    </div>
                                                </div> */}
                                                    </div>
                                                </div>


                                            </div>


                                        </div>



                                    </section>

                                </div>
                                <div className="card mb-4">
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
