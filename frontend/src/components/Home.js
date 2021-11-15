import React, { Fragment, useState, useEffect } from 'react'
import MobileBanner from './MobileBanner'
import Helmet from 'react-helmet'
// import Header from "../components/layout/Header"
import './layout/mCustomscrollbar.css'
import Paginatione from 'react-js-pagination'
import axios from 'axios';
import Slider from 'rc-slider'
import Button from '@material-ui/core/Button';
import Linke from 'react-scroll/modules/components/Link'

import 'rc-slider/assets/index.css';

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'

import Category from './layout/Category'
import Dash from './layout/Dash'
import { Link } from 'react-router-dom'
// import TopSell from './components/product/TopSell.json'
import Topsell from './product/Topsell'
import { Accordion, Card } from 'react-bootstrap'
import chick from '../images/delivery.png'
import NutritionHero from './layout/Nutrition_hero'
import { HiViewGrid } from 'react-icons/hi'
import { FaListUl } from "react-icons/fa";
// import FaThList from 'react-icons/fa'

import Select from './layout/Select'


import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions'
import '../styles/Locataire.css'

import { StrollableContainer } from "react-stroller";
import ProductList from './product/ProductList';
// import { Alert } from '@material-ui/lab';
// import estate from '../images/estate.svg';
// import risk from '../images/risk.svg';
// import shopnow from '../images/shopnow.ico';
// import aboutFarm from '../images/farm.svg';
import poultrybanner from '../images/POULTRY MEAT BANNER.png';
import poultrybannerVideo from '../images/NUTRITION SLIDE.mp4';

import { ArtifficialSVG, FresheggsSVG, Shop, LivestockSVG, ParkSVG, PigstySVG, SheepSVG, Health, About, Realty, AuditRisk, Mammals, Career } from '../SVG/Svg';
import purebred from '../images/featured/purebred.gif';

import DayOld from '../images/featured/Day Old Chick.png'
import HatchingEgg from '../images/featured/hatching.png'








const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = ({ match }) => {


    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 450])
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)
    const [livestock, setLivestock] = useState([])
    const [poultry, setPoultry] = useState([])


    // const backHome = document.getElementById('back_home');
    // backHome.addEventListener('click', () => {
    //     setShopnow(value);
    // })





    const categories = [
        {
            "title": "Poultry",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616223744/category/animal_tezmcb.svg",
            "atl": "LaiWiv"

        },
        {
            "title": "Fresh Eggs",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616220708/category/eggs_ca7brk.svg",
            "atl": "KTrngrIo"
        },
        {
            "title": "Pigsty",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616220708/category/pig_nmfagj.svg",
            "atl": "EyCVOYElB"
        },
        {
            "title": "Goats, Sheep & Mammals",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616223741/category/goat_bwpnmu.svg",
            "atl": "EyCVOYElP"

        },
        {
            "title": "Park Animals",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616220708/category/paw-solid_nllgp5.svg",
            "atl": "XgcabxkzflU"
        },
        {
            "title": "Purebred Seed - ARTIFICIAL INSEMINATION",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616223739/category/dna_pycfwt.svg",
            "atl": "tkTOAnrTpGM"

        },
        {
            "title": "Food & Livestock Products",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616220708/category/food_xmnbgo.webp",
            "atl": "nnFiNyv"
        }
    ]

    const productSize = [
        '0 KG',
        '2 KG',
        '50 KG',
        '3 L',
        '5 L',
        '10 L',
        'Medium',
        'Large',
        'Verrat',
        'Trout',
        '1 Dose',
        '1 T'
    ]

    const productColor = [
        'Grey',
        'White',
        'Bronze',
        'Maroon',
        'Blue',
        'Black',
        'Yellow'
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    // const { value } = useSelector((state) => state.counter);

    const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)

    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(keyword, currentPage, price, category, rating, size, color));


    }, [dispatch, alert, error, keyword, currentPage, price, category, rating, size, color])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    let count = productsCount;
    if (keyword) {
        count = filteredProductsCount
    }


    const Block = ({ children }) => (
        <div style={{ height: "100vh", position: "relative" }}>{children}</div>
    );

    const [view, setView] = useState();
    console.log(view)

    useEffect(() => {
        let livestock_link = `/api/v1/home/livestock`
        let poultry_link = `/api/v1/home/poultry`

        async function getLivestockProduct() {
            const { data } = await axios.get(livestock_link);
            setLivestock(data.products)
        }
        async function getPoultryProduct() {
            const { data } = await axios.get(poultry_link);
            setPoultry(data.products)
        }

        getPoultryProduct();
        getLivestockProduct();
    }, [])



    //CATEGORY PREVIEW
    const CategoryPreview = (props) => {
        return (
            <div className={props.styleName}>
                <section className="header_category_preview">
                    <div className="preview_title">
                        <h3>{props.title}</h3>
                        <span>&#124;</span>
                        <h3>{props.subtitle}</h3>
                    </div>
                    <div className="preview_shop">
                        {props.shopTitlte} <span>&#62;</span>
                    </div>
                </section>
                <div className="nutrition_product_preview">

                    {
                        poultry.map((livestock) => (
                            <Product key={livestock._id} product={livestock} col={5} />
                        ))
                    }
                </div>
            </div>
        )
    }
    const NutritionProduct = (props) => {
        return (
            <div className={props.styleName}>
                <section className="header_category_preview">
                    <div className="preview_title">
                        <h3>{props.title}</h3>
                        <span>&#124;</span>
                        <h3>{props.subtitle}</h3>
                    </div>
                    <div className="preview_shop">
                        {props.shopTitlte} <span>&#62;</span>
                    </div>
                </section>
                <div className="nutrition_product_preview">

                    {
                        livestock.map((livestock) => (
                            <Product key={livestock._id} product={livestock} col={5} />
                        ))
                    }
                </div>
            </div>
        )
    }



    // FEATURED CATEGORY
    const FeaturedCategory = () => {
        return (
            <div className="col featured_category">
                <h3 className="fc_title">Featured Categories</h3>
                <div className="ft_cat_select">
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/purebred-seed'>
                                <ArtifficialSVG />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Artificial Insemination</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/fresh-eggs'>
                                <FresheggsSVG />

                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Fresh Eggs</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/livestock'>

                                <LivestockSVG />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Livestock</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='//product-category/park-animals'>

                                <ParkSVG />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Park Animals</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/pigsty'>

                                <PigstySVG />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Pigsty</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/goat-sheep-mammals'>

                                <SheepSVG />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Goats, Sheep and Others</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const MainPlace = () => {
        return (
            <div className="col featured_category">
                {/* <h3 className="fc_title">Featured Categories</h3> */}
                <div className="ft_cat_select" style={{ marginTop: 'unset' }}>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/health'>
                                <Health />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Health Care</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/about'>
                                <About />

                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>About Farm</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/real-estate'>

                                <Realty />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Real Estate</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/rikmanagement'>

                                <AuditRisk />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Audit and Risk Management</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/goat-sheep-mammals'>

                                <Mammals />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Goats, Sheep and Others</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/career'>

                                <Career />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Locataire Career</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Purebred = () => {
        return (
            <div className="purebred_container" style={{ marginTop: '6rem' }}>
                <div className="purebred_banner">
                    <img src={purebred} alt="purebred pig seed" />
                </div>
                <div className="purebred_content">
                    <h1>purebred seed - artificial insemination</h1>
                    <p>
                        We sell fresh (pure blood) pig seeds or refrigerated high
                        qualities for artificial reproduction of pure bred and
                        crossbred. The boars Duroc, Landrace, Berkshire, offered
                        are intended to produce hybrid soars. These are elite
                        genetic strains from recognized and accredited
                        insemination centers in the United States.
                    </p>
                </div>
                <br />
                <Link to="/product-category/purebred-seed" className="lBanner__btn shop_now">
                    <Button variant="contained" color="secondary" className="btn-shop">
                        Discover More
                    </Button>
                </Link>
            </div>
        )
    }

    const Hatching = () => {
        return (
            <div className="row hatching_wrap">
                <div className="col hatching_banner_left" >
                    <img src={DayOld} alt="hatching eggs banner" />
                </div>
                <div className="col hatching_banner_right" >
                    <img src={HatchingEgg} alt="hatching eggs banner" />
                </div>
            </div>
        )
    }

    const EggSection = () => {
        return (
            <section className="bBanner">
                <div className="bBanner__left bBanner__img onHoverBanner">
                    <div className="bBanner__content sub_-text">
                        <span style={{ color: "#7fad39" }}>profit more</span>
                        <div className="bBanner_title sub_-text">
                            <h2 style={{ color: "#ffffff" }}>poultry meat</h2>
                        </div>
                        <div className="bBanner_text">
                            <p style={{ color: "#ffffff" }}>
                                we sell domestic and commercial chickens, turkeys, ducks, guinea fowl, and geese.
                                Various crossbred chickens are also available
                            </p>
                        </div>
                        <Link to="/product-category/poultry" className="lBanner__btn shop_now">
                            <Button variant="contained" color="secondary" className="btn-shop">
                                shop now
                            </Button>
                        </Link>
                        {/* <Link to="/" className="lBanner__btn shop_now">shop now</Link> */}
                    </div>
                </div>

                <div className="bBanner__right bBanner__img onHoverBanner">
                    <div className="bBanner__content sub_-text">
                        <span>profit more</span>
                        <div className="bBanner_title">
                            <h2>fresh eggs</h2>
                        </div>
                        <div className="bBanner_text">
                            <p>
                                we sell clean, sound and odor-free fresh eggs. The eggs are brown, white
                                and weigh an average of 62.9 grams (or 2.21 ounces).
                            </p>
                        </div>
                        <Link to="/product-category/fresh-eggs" className="lBanner__btn shop_now">
                            <Button variant="contained" color="secondary" className="btn-shop">
                                shop now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }





    return (
        <Fragment>
            {/* <Header /> */}
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Buy Best Products Online'} />
                    {keyword ? (
                        <>
                            <div className="category-container">
                                <Block>
                                    <StrollableContainer draggable>
                                        <aside className="category_list">
                                            {/* <Catego /> */}
                                            <section className="filterByPrice">
                                                <h2 style={{ marginBottom: '3.5rem' }}>filter by price</h2>
                                                <div className="filterRange">

                                                    <Range
                                                        marks={{
                                                            1: `$1`,
                                                            450: `$450`
                                                        }}
                                                        min={1}
                                                        max={450}
                                                        defaultValue={[1, 450]}
                                                        tipFormatter={value => `$${value}`}
                                                        tipProps={{
                                                            placement: "top",
                                                            visible: true
                                                        }}
                                                        value={price}
                                                    // onChange={price => setPrice(price)}
                                                    />
                                                </div>
                                                {/* <div className="totalfilter">
                                    <p className="total-price_range-title">price:{" "}  ${min} — $450</p>
                                </div> */}
                                            </section>
                                            <hr id="filter_divider" />

                                            <section className="filterBySize" >
                                                <Accordion defaultActiveKey="0">
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <h2 id="sizefilter">filter by size</h2>
                                                    </Accordion.Toggle>

                                                    <Accordion.Collapse eventKey="0">

                                                        <div className="filterSize">
                                                            <StrollableContainer draggable>
                                                                <ul className="filtersize-wrap">
                                                                    {productSize.map((size) => (
                                                                        <li className="size-item" key={size} onClick={() => setSize(size)} >{size}</li>
                                                                    ))}
                                                                </ul>
                                                            </StrollableContainer>
                                                        </div>
                                                    </Accordion.Collapse>

                                                </Accordion>
                                            </section>

                                            <hr id="filter_divider" />
                                            <section className="filterByRating">
                                                <Accordion defaultActiveKey="0">
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <h2 className="ratefilter">
                                                            Ratings
                                                        </h2>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <div className="filterRating" >
                                                            <div className="filterrating-wrap">



                                                                <ul className="pl-0">
                                                                    {[5, 4, 3, 2, 1].map(star => (
                                                                        <li
                                                                            style={{
                                                                                cursor: 'pointer',
                                                                                listStyleType: 'none'
                                                                            }}
                                                                            key={star}
                                                                            onClick={() => setRating(star)}
                                                                        >
                                                                            <div className="rating-outer">
                                                                                <div className="rating-inner"
                                                                                    style={{
                                                                                        width: `${star * 20}%`
                                                                                    }}
                                                                                >
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    ))}
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </Accordion.Collapse>
                                                </Accordion>
                                            </section>
                                            <hr id="filter_divider" />
                                            <section className="filterByName">
                                                <Accordion defaultActiveKey="0">
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <h2>filter by name</h2>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <div className="filterName">
                                                            <ul className="filtername-wrap">

                                                                {
                                                                    categories.map((category) => (
                                                                        <li className="name-item" key={category}
                                                                            onClick={() => setCategory(category.title)}
                                                                        >
                                                                            <div>{category.title}</div>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    </Accordion.Collapse>
                                                </Accordion>
                                            </section>
                                            {/* </section> */}

                                            <hr id="filter_divider" />

                                            <section className="filterByColor">
                                                <Accordion defaultActiveKey="0">
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <h2>filter by color</h2>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <div className="filterColor">
                                                            <StrollableContainer draggable>
                                                                <ul className="filtercolor-wrap">
                                                                    {productColor.map((color) => (
                                                                        <li className="color-item" key={color} onClick={() => setColor(color)}>
                                                                            <div className={"item-inner-color " + color} />
                                                                            <div className="item-inner-text">{color}</div>
                                                                        </li>
                                                                    ))}

                                                                </ul>
                                                            </StrollableContainer>
                                                        </div>
                                                    </Accordion.Collapse>
                                                </Accordion>
                                            </section>
                                        </aside>
                                    </StrollableContainer>
                                </Block>

                                <main className="category_product_main" style={{ position: 'relative' }}>

                                    <div className="search-product-wrap" >
                                        {/* filter item */}
                                        <div className="filter__item">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-5">
                                                    <div className="filter__sort">
                                                        <Select />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="filter__found">
                                                        <h6>
                                                            <span>{count}</span>
                                                            Products found
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-3">
                                                    <div className="filter__option">
                                                        <span className="icon_grid-2x2" id="gride" onClick={() => setView(false)}>
                                                            <HiViewGrid />
                                                        </span>
                                                        <span className="icon_ui" id="listed" onClick={() => setView(true)}>
                                                            <FaListUl />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* products */}
                                        <div className={view ? "col active-list-view" : (view === false) ? "row" : "row not-active"}>
                                            {
                                                view ?
                                                    (
                                                        products.map(product => (
                                                            <ProductList key={product._id} product={product} col={4} />
                                                        ))
                                                    )

                                                    :

                                                    (
                                                        products.map(product => (
                                                            <Product key={product._id} product={product} col={4} />
                                                        ))
                                                    )

                                            }

                                        </div>

                                        {/* Pagination */}
                                        {resPerPage <= count && (
                                            <div className="d-flex justify-content-center mt-5">
                                                <Paginatione
                                                    activePage={currentPage}
                                                    itemsCountPerPage={resPerPage}
                                                    totalItemsCount={productsCount}
                                                    onChange={setCurrentPageNo}
                                                    nextPageText={'Next'}
                                                    prevPageText={'Prev'}
                                                    firstPageText={'First'}
                                                    lastPageText={'Last'}
                                                    itemClass="page-item"
                                                    linkClass="page-link"
                                                />

                                            </div>
                                        )}

                                    </div>


                                </main>

                            </div>
                        </>
                    ) :


                        (
                            // start
                            <>

                                {loading ? <Loader />
                                    :
                                    (
                                        <main className="farm_wrapper" id="farmhome">
                                            {window.screen.width <= 500 ?
                                                (
                                                    <div className="mobile__banner">
                                                        <Helmet>
                                                            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                                                            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                                                        </Helmet>
                                                        <MobileBanner />
                                                    </div>
                                                )

                                                : window.screen.width <= 768 ?
                                                    (
                                                        <>
                                                        </>
                                                    )

                                                    :
                                                    (
                                                        <div className="farm_inner-wrap row">
                                                            <div className="top_container">
                                                                <div className="home_category">
                                                                    <div className="inner_category _bg">
                                                                        <Category />
                                                                    </div>
                                                                </div>
                                                                <div className="hero_news">
                                                                    {/* <Wow /> */}
                                                                </div>
                                                                <div className="conv_farm">
                                                                    <Dash />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )

                                            }

                                            <section className={window.screen.width <= 768 ? "farm_select__mobile" : "farm_select"}>
                                                <Link to="/about" >
                                                    <div className="farm_select_item row _bg">
                                                        <div className="_select_item-icon no-paddding col">
                                                            <About />
                                                        </div>
                                                        <div className="_select_item-text col">
                                                            <span className="select_text">
                                                                About Farm
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/shop">
                                                    <div className="farm_select_item row _bg">
                                                        <div className="_select_item-icon col">
                                                            <Shop />
                                                        </div>
                                                        <div className="_select_item-text col">
                                                            <span className="select_text">
                                                                Shop Now
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <Link to="/real-estate">
                                                    <div className="farm_select_item row _bg" >
                                                        <div className="_select_item-icon col">
                                                            <Realty />
                                                        </div>
                                                        <div className="_select_item-text col">
                                                            <span className="select_text" >
                                                                Real Estate
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/riskmanagement">
                                                    <div className="farm_select_item farm_select_item  _bg full-width row">
                                                        <div className="_select_item-icon col">
                                                            <AuditRisk />
                                                        </div>
                                                        <div className="_select_item-text col">
                                                            <span className="select_text">
                                                                Audit &#38; Risk Management
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </section>

                                            <EggSection />

                                            {/* TOP SELLERS */}
                                            <section className="farm_topSell-wrap">
                                                <header><h2>Our Top sellers</h2></header>
                                                <div className="container-fluid row" style={{ padding: '0', margin: '0' }}>
                                                    {/* <div className="topSell_item"></div> */}
                                                    <Topsell />

                                                </div>
                                            </section>

                                            {/* VEGETABLES */}
                                            <section className="farm_lBanner">
                                                <div className="farm_lBanner__leftWrap onHoverBanner">
                                                    <aside className="__leftWrap_content">
                                                        <div className="lBanner__top-subTitle">
                                                            <span>fresh products</span>
                                                        </div>
                                                        <div className="lBanner__title">
                                                            <h2>
                                                                vegetables 100% organic
                                                            </h2>
                                                        </div>
                                                        <div className="lBanner__text">
                                                            <p>
                                                                We produce organic products of superior quality in accordance with
                                                                food safety management standards such as the International Standard ISO 22000.
                                                            </p>
                                                        </div>
                                                        <Link to="/shop" className="lBanner__btn shop_now">
                                                            <Button variant="contained" color="secondary" className="btn-shop">
                                                                shop now
                                                            </Button>
                                                        </Link>
                                                        {/* <Link to="/" className="lBanner__btn shop_now">shop now</Link> */}
                                                    </aside>
                                                </div>
                                                <aside className="farm_lBanner__rightWrap onHoverBanner">
                                                    <div className="__rightWrap-imgWrap">
                                                        <img src={chick} alt="chick" className="__rightWrap-img" />
                                                    </div>
                                                    <div className="__rightWrap-content">
                                                        <p>
                                                            Delivery at the expense of the customer. do not hesitate to contact us
                                                        </p>
                                                    </div>
                                                    <Linke to="contactFormWrapper" className="lBanner__btn shop_now">
                                                        <Button variant="outlined" color="primary" className="btn-contact">
                                                            contact us
                                                        </Button>
                                                    </Linke>
                                                    {/* <Link to="/" className="lBanner__btn shop_now">contact us</Link> */}
                                                </aside>
                                            </section>

                                            {/* PRODUCTS */}
                                            <section className="fProduct">
                                                <div className="fProduct-wrap">
                                                    <h2>featured product</h2>
                                                    {/* <span id="fProduct_subtext">
                                                            select our from superior quality products
                                                        </span> */}
                                                    <section class="section products">
                                                        <div className="product-layout">
                                                            {
                                                                products.map(product => (
                                                                    <Product key={product._id} product={product} col={3} />
                                                                ))

                                                            }
                                                        </div>
                                                    </section>
                                                </div>
                                            </section>


                                            {/* NUTRITION */}
                                            <section className="nutrition_slider">
                                                <div className="animal_nutrition-image">
                                                    <Link to="/product-category/livestock-food">
                                                        <NutritionHero video={poultrybannerVideo} />
                                                    </Link>
                                                </div>
                                            </section>
                                            <NutritionProduct styleName="category_preview" title="nutrition" subtitle="shop the look" shopTitlte="Sell all" />


                                            <FeaturedCategory />
                                            <br />

                                            <div className="col poultry_banner_wrapper" style={{ padding: 'unset!important' }}>
                                                <div className="inner_poultry_wrap">
                                                    <Link to="/product-category/poultry" className="onHoverBanner">
                                                        <img className="poultrybanner" src={poultrybanner} alt="poultry banner" />
                                                    </Link>
                                                </div>

                                                <CategoryPreview styleName="category_preview" title="Poultry Meat" subtitle="shop the look" shopTitlte="Sell all" />

                                            </div>






                                            {/* <CategoryPreview styleName="category_preview" title="nutrition" subtitle="shop the look" shopTitlte="Sell all" />

                                            <br /> */}



                                            <Purebred />
                                            <br />

                                            <Hatching />

                                            <MainPlace />
                                            <br />
                                        </main>
                                    )
                                }





                            </>
                            // finish
                        )}


                    {/*   PAGE PAGINATION...    */}
                </Fragment>
            )}

        </Fragment>
    )
}

export default Home
