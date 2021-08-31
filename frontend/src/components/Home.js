import React, { Fragment, useState, useEffect } from 'react'
import Header from "../components/layout/Header"
import './layout/mCustomscrollbar.css'
import Paginatione from 'react-js-pagination'
import Slider from 'rc-slider'
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
import Styled from 'styled-components'
import '../styles/Locataire.css'

import { StrollableContainer } from "react-stroller";
import ProductList from './product/ProductList';
// import { Alert } from '@material-ui/lab';
import { BiArrowBack } from 'react-icons/bi';






const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = ({ match }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 450])
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)

    const [shopnow, setShopnow] = useState(false)




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


    // MALLE
    const Malle = (match) => {

        useEffect(() => {
            var sheet = document.createElement('style')
            sheet.innerHTML = ".icon_grid-2x2 {color: #02843d;}";
            document.body.appendChild(sheet);
            if (view === false || view === undefined) {
                sheet.innerHTML = ".icon_grid-2x2 {color: #02843d;}";
                sheet.innerHTML = ".icon_ui {color: unset;}";
                document.body.appendChild(sheet);
            } else if (view === true) {
                sheet.innerHTML = ".icon_grid-2x2 {color: unset;}";
                sheet.innerHTML = ".icon_ui {color: #02843d;}";
                document.body.appendChild(sheet);
            }
            else {
                console.log("nothing to color")
            }


            const n = document.querySelector(".icon_ui");

            console.log(n);
            console.log(view)

            if (view === false) {
                const m = document.querySelector(".icon_grid-2x2");
                sheet.innerHTML = ".icon_grid-2x2 {color: #02843d;}";
                sheet.innerHTML = ".icon_ui {color: unset;}";
                m.style.color = "#02843d"
                document.body.appendChild(sheet);
                console.log(view + ' from false')

            } else if (view === undefined) {
                const m = document.querySelector(".icon_grid-2x2");
                sheet.innerHTML = ".icon_grid-2x2 {color: #02843d;}";
                sheet.innerHTML = ".icon_ui {color: unset;}";
                m.style.color = "#02843d"
                document.body.appendChild(sheet);
                console.log(view + ' from undefined')

            } else {
                console.log("i just do not knpw")
            }


        }, [])

        return (
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
                            <div className="top_main-shop-nav">
                                <div className="back_home" onClick={() => setShopnow(undefined)}>
                                    <BiArrowBack />
                                    <span className="home_btn">
                                        back
                                    </span>
                                </div>
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
                                        <span className="icon_grid-2x2" onClick={() => setView(false)}>
                                            <HiViewGrid />
                                        </span>
                                        <span className="icon_ui" onClick={() => setView(true)}>
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
        )
    }




    return (
        <Fragment className="farmStyle">
            <Header />
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
                                {
                                    shopnow ?
                                        (
                                            <>
                                                {loading ? <Loader /> : (<Malle />)}

                                            </>
                                        )

                                        :


                                        (
                                            <>
                                                {loading ? <Loader />
                                                    :
                                                    (
                                                        <main className="farm_wrapper" id="farmhome">
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

                                                            <section className="farm_select">
                                                                <Link to="/farm" >
                                                                    <div className="farm_select_item row _bg">
                                                                        <div className="_select_item-icon no-paddding col">
                                                                            <img src="https://zz.jumia.is/cms/Home-page-content/Quiklinks_DT_NewArrivals_22102020.png" alt="JrpQaneBH" />
                                                                        </div>
                                                                        <div className="_select_item-text col">
                                                                            <span className="select_text">
                                                                                new products
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <Link to="/about">
                                                                    <div className="farm_select_item row _bg">
                                                                        <div className="_select_item-icon col">
                                                                            <img src="https://zz.jumia.is/cms/Home-page-content/Artboard-2.jpg" alt="RrIYoAvdMnOUUQVC" />
                                                                        </div>
                                                                        <div className="_select_item-text col">
                                                                            <span className="select_text">
                                                                                Get to know the farm
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </Link>

                                                                <Link to="/" onClick={() => setShopnow(true)}>
                                                                    <div className="farm_select_item row _bg" >
                                                                        <div className="_select_item-icon col">
                                                                            <img src="https://zz.jumia.is/cms/Home-page-content/Quiklinks_DT_Brands_22102020.png" alt="DSQTLDiG" />
                                                                        </div>
                                                                        <div className="_select_item-text col">
                                                                            <span className="select_text" >
                                                                                shop all products
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <Link to="/riskmanagement">
                                                                    <div className="farm_select_item farm_select_item  _bg full-width row">
                                                                        <div className="_select_item-icon col">
                                                                            <img src="https://zz.jumia.is/cms/Home-page-content/jumia-global.png" alt="LlTNBvqoGCCPaiFxNIdh" />
                                                                        </div>
                                                                        <div className="_select_item-text col">
                                                                            <span className="select_text">
                                                                                locataire global
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </section>

                                                            <section className="farm_topSell-wrap">
                                                                <header><h2>Top sellers</h2></header>
                                                                <div className="container-fluid row">
                                                                    {/* <div className="topSell_item"></div> */}
                                                                    <Topsell />

                                                                </div>
                                                            </section>

                                                            <section className="farm_lBanner">
                                                                <div className="farm_lBanner__leftWrap">
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
                                                                        <Link to="/" className="lBanner__btn shop_now">shop now</Link>
                                                                    </aside>
                                                                </div>
                                                                <aside className="farm_lBanner__rightWrap">
                                                                    <div className="__rightWrap-imgWrap">
                                                                        <img src={chick} alt="chick" className="__rightWrap-img" />
                                                                    </div>
                                                                    <div className="__rightWrap-content">
                                                                        <p>
                                                                            Delivery at the expense of the customer. do not hesitate to contact us
                                                                        </p>
                                                                    </div>
                                                                    <Link to="/" className="lBanner__btn shop_now">contact us</Link>
                                                                </aside>
                                                            </section>

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

                                                            <section className="bBanner">
                                                                <div className="bBanner__left bBanner__img">
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
                                                                        <Link to="/" className="lBanner__btn shop_now">shop now</Link>
                                                                    </div>
                                                                </div>

                                                                <div className="bBanner__right bBanner__img">
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
                                                                        <Link to="/" className="lBanner__btn shop_now">shop now</Link>
                                                                    </div>
                                                                </div>
                                                            </section>

                                                            <section className="nutrition_slider">
                                                                <div className="animal_nutrition-image">
                                                                    <NutritionHero />
                                                                </div>
                                                                <div className="animal_nutrition-content">
                                                                    <h2>animal nutrition</h2>
                                                                    <p>
                                                                        we sell animal feed, protein meals, grain, oilseeds,
                                                                        concentrates and other commodities to local
                                                                        farmers and livestock producers.
                                                                    </p>
                                                                    <Link to="/" className="lBanner__btn shop_now">shop now</Link>
                                                                </div>
                                                            </section>

                                                            <section className="animal_nutrition">

                                                            </section>

                                                        </main>
                                                    )
                                                }
                                            </>
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
