import React, { Fragment, useState, useEffect } from 'react'
import './layout/mCustomscrollbar.css'
import Paginatione from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'

import Category from './layout/Category'
import Dash from './layout/Dash'
import { Link, Route } from 'react-router-dom'
// import TopSell from './components/product/TopSell.json'
import Topsell from './product/Topsell'
import { Accordion, Button, Card } from 'react-bootstrap'
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
import { BiArrowBack } from "react-icons/bi";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Shop = ({ match }) => {



    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 450])
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)

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

    const { products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)

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



    return (
        <Fragment>
            <MetaData title={'Shop'} />
            <div className="category-container farmStyle">
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
                                <Link to="/">
                                    <div className="back_home">
                                        <BiArrowBack />
                                    </div>
                                </Link>
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
        </Fragment>

    )
}

export default Shop
