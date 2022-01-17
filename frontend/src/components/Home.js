import React, { Fragment, useState, useEffect, memo } from 'react'
import HomeSlider from './Slide'
import { useTranslation, Trans } from 'react-i18next';
import Helmet from 'react-helmet'
import ProductSlider from '../components/product/ProductSlider'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
// import Header from "../components/layout/Header"
import './layout/mCustomscrollbar.css'
import Paginatione from 'react-js-pagination'
import axios from 'axios';
import Slider from 'rc-slider'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import Linke from 'react-scroll/modules/components/Link'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
import VaccHatch from '../components/vacchatch/Vacchatch'
import { StrollableContainer } from "react-stroller";
import ProductList from './product/ProductList';
// import { Alert } from '@material-ui/lab';
// import estate from '../images/estate.svg';
// import risk from '../images/risk.svg';
// import shopnow from '../images/shopnow.ico';
// import aboutFarm from '../images/farm.svg';
import poultrybanner from '../images/POULTRY MEAT BANNER.png';
import poule from '../images/poul.svg';
import poultrybannerVideo from '../images/NUTRITION SLIDE.mp4';

import { ArtifficialSVG, FresheggsSVG, Shop, LivestockSVG, ParkSVG, PigstySVG, SheepSVG, Health, About, Realty, AuditRisk, Mammals, Career } from '../SVG/Svg';
import purebred from '../images/featured/purebred.gif';

import DayOld from '../images/featured/Day Old Chick.png'
import HatchingEgg from '../images/featured/hatching.png'
import NSlider from './banners/Slider'



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




const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Frech' }
  };

const Home = ({ match }) => {
    const { t, i18n  } = useTranslation();

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


    const [lang, setLang] = useState();
    const [isFrench, setFrench] = useState(false);
    console.log(lang)
    console.log('isFrench: ' + isFrench)
    
   

    const ChangeLng = () => (
        Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
                i18n.changeLanguage(lng);
                setLang(lng);
                lng === 'fr' ? setFrench(true) : setFrench(previousState => previousState = false)

              
                console.log(lang)
                console.log('isFrench: ' + isFrench)
            }}>
            {lngs[lng].nativeName}
            </button>
        ))
    )

  

    useEffect(() => {
        const french =  i18n.changeLanguage('fr');
        french === 'fr' ? setFrench(true) : setFrench(previousState => previousState = false)
        
       
    }, [ i18n])
    
    





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

       
    }, [dispatch, alert, error, keyword, currentPage, price, category, rating, size, color]);


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
                <section className="farm_topSell-wrap" style={{marginTop: 0}}>
                    <div className="nutrition_product_preview">
                        {window.innerWidth >= 1300 ? (
                            <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            style={{ flexWrap: 'nowrap' }}
                        >
                            {
                                poultry.map((livestock) => (
                                    <ProductSlider key={livestock._id} product={livestock} col={5} />
                                ))
                            }

                        </Grid>
                        ) : (
                            <SimpleBar style={{ width: '90vw' }}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                style={{ flexWrap: 'nowrap' }}
                            >
                                {
                                    poultry.map((livestock) => (
                                        <ProductSlider key={livestock._id} product={livestock} col={5} />
                                    ))
                                }

                            </Grid>
                        </SimpleBar>
                        )}
                        

                    </div>
                </section>
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
                <section className="farm_topSell-wrap poultry-sec">
                    <div className="nutrition_product_preview">
                        {window.innerWidth >= 1300 ? (
                            <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            style={{ flexWrap: 'nowrap' }}
                        >

                            {
                                livestock.map((livestock) => (
                                    <ProductSlider key={livestock._id} product={livestock} col={5} />
                                ))
                            }
                        </Grid>
                        )
                        : (
                            <SimpleBar style={{ width: '90vw' }}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                style={{ flexWrap: 'nowrap' }}
                            >

                                {
                                    livestock.map((livestock) => (
                                        <ProductSlider key={livestock._id} product={livestock} col={5} />
                                    ))
                                }
                            </Grid>
                        </SimpleBar>
                        )}
                    </div>
                </section>
            </div>
        )
    }

    const FeateredCategorySX = () => (
        <div className="col featured_category">
            <h3 className="fc_title">Featured Categories</h3>
            <div className="ft_cat_select">
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
                            <Link to='/product-category/livestock'>

                                <LivestockSVG />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Livestock</span>
                        </div>
                    </div>
            </div>
        </div>
    )


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

    const MainPlaceSX = () => {
        return (
            <div className="col featured_category">
                {/* <h3 className="fc_title">Featured Categories</h3> */}
                <div className="ft_cat_select" style={{ marginTop: 'unset' }}>
                    {/* <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/health'>
                                <Health />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Health Care</span>
                        </div>
                    </div> */}
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/about'>
                                <About />

                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.navigation_buttons.title1')}</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/real-estate'>

                                <Realty />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.nav_bottom.title3')}</span>
                        </div>
                    </div>
                    {/* <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/rikmanagement'>

                                <AuditRisk />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Audit and Risk Management</span>
                        </div>
                    </div> */}
                    {/* <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/goat-sheep-mammals'>

                                <Mammals />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Goats, Sheep and Others</span>
                        </div>
                    </div> */}
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/career'>

                                <Career />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.nav_bottom.title6')}</span>
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
                    {/* <div className="col ft_cat_item" aria-disabled>
                        <div className="ft_cat-img">
                            <Link to='/health'>
                                <Health />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>Health Care</span>
                        </div>
                    </div> */}
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/about'>
                                <About />

                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.nav_bottom.title2')}</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/real-estate'>

                                <Realty />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.nav_bottom.title3')}</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/rikmanagement'>

                                <AuditRisk />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.nav_bottom.title4')}</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/product-category/goat-sheep-mammals'>

                                <Mammals />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.nav_bottom.title5')}</span>
                        </div>
                    </div>
                    <div className="col ft_cat_item">
                        <div className="ft_cat-img">
                            <Link to='/career'>

                                <Career />
                            </Link>
                        </div>
                        <div className="ft_cat-title">
                            <span>{t('farm.header.nav_bottom.title6')}</span>
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
                    <h1>{t('farm.header.purebred.heading')}</h1>
                    <p>
                       {t('farm.header.purebred.text')}
                    </p>
                </div>
                <br />
                <Link to="/product-category/purebred-seed" className="lBanner__btn shop_now">
                    <Button variant="contained" color="secondary" className="btn-shop">
                        {t('farm.header.poultry_fresh_eggs_shop.fresh_eggs.button_text')}
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
                        <span style={{ color: "#7fad39" }}>{t('farm.header.vegetables_delivery_banner.vegetables.subtitle')}</span>
                        <div className="bBanner_title sub_-text">
                            <h2 style={{ color: "#ffffff" }}>{t('farm.header.poultry_fresh_eggs_shop.poultry.text')}</h2>
                        </div>
                        {window.innerWidth < 800 ? null :
                            <div className="bBanner_text">
                                <p style={{ color: "#ffffff" }}>
                                    {t('farm.header.poultry_fresh_eggs_shop.fresh_eggs.text')}
                                </p>
                            </div>
                        }
                        <Link to="/product-category/poultry" className="lBanner__btn shop_now">
                            <Button variant="contained" color="secondary" className="btn-shop" >
                                {t('farm.header.poultry_fresh_eggs_shop.poultry.button_text')}
                            </Button>
                        </Link>
                        {/* <Link to="/" className="lBanner__btn shop_now">{t('farm.header.poultry_fresh_eggs_shop.poultry.button_text')}</Link> */}
                    </div>
                </div>

                <div className="bBanner__right bBanner__img onHoverBanner">
                    <div className="bBanner__content sub_-text">
                        <span>{t('farm.header.vegetables_delivery_banner.vegetables.subtitle')}</span>
                        <div className="bBanner_title">
                            <h2>fresh eggs</h2>
                        </div>
                        {window.innerWidth <= 800 ? null :
                            <div className="bBanner_text">
                                <p>
                                {t('farm.header.poultry_fresh_eggs_shop.fresh_eggs.text')}
                                </p>
                            </div>
                        }
                        <Link to="/product-category/fresh-eggs" className="lBanner__btn shop_now">
                            <Button variant="contained" color="secondary" className="btn-shop" >
                                {t('farm.header.poultry_fresh_eggs_shop.poultry.button_text')}
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

                                            <div className="farm_inner-wrap row">



                                                <div className="top_container">
                                                    {window.innerWidth <= 599 ? null : (
                                                        <div className="home_category">
                                                            <div className="home-inner_category _bg">
                                                                <Category />
                                                            </div>
                                                        </div>
                                                    )}


                                                    <div className="home__banner">

                                                        <HomeSlider />
                                                    </div>
                                                    <div className="conv_farm">
                                                        <Dash />
                                                    </div>
                                                </div>
                                            </div>



                                            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                                {window.innerWidth <= 899 && (
                                                    <Grid container className="home__grid-wrapper" spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }} style={{ placeSelf: 'center' }}>
                                                        <Grid item sm={4} xs={4} md={4} className="home__grid-item">
                                                            <List component="div" aria-label="main mailbox folders" sx={{ padding: 0 }}>
                                                                <Link to="/about">
                                                                    <ListItemButton sx={{ bgcolor: 'background.paper' }} className="homebox__list_btn">
                                                                        <ListItemIcon className="home__list_icon">
                                                                            <About />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={window.innerWidth < 430 ? t('farm.header.navigation_buttons.titlea') : t('farm.header.navigation_buttons.title1')} className="homebox__list_text" />
                                                                    </ListItemButton>
                                                                </Link>
                                                            </List>

                                                        </Grid>
                                                        <Grid item sm={4} xs={4} md={4} className="home__grid-item">
                                                            <List component="div" aria-label="main mailbox folders" sx={{ padding: 0 }}>
                                                                <Link to="/shop">
                                                                    <ListItemButton sx={{ bgcolor: 'background.paper' }} className="homebox__list_btn">
                                                                        <ListItemIcon className="home__list_icon">
                                                                            <Shop />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={window.innerWidth < 430 ? t('farm.header.navigation_buttons.titled') : `${t('farm.header.poultry_fresh_eggs_shop.poultry.button_text')}`} className="homebox__list_text" />
                                                                    </ListItemButton>
                                                                </Link>
                                                            </List>

                                                        </Grid>
                                                        <Grid item sm={4} xs={4} md={4} className="home__grid-item">
                                                            <List component="div" aria-label="main mailbox folders" sx={{ padding: 0 }}>
                                                                <Link to="/real-estate">
                                                                    <ListItemButton sx={{ bgcolor: 'background.paper' }} className="homebox__list_btn">
                                                                        <ListItemIcon className="home__list_icon">
                                                                            <Realty />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={window.innerWidth < 430 ? t('farm.header.navigation_buttons.titleb') : t('farm.header.nav_bottom.title3')} className="homebox__list_text" />
                                                                    </ListItemButton>
                                                                </Link>
                                                            </List>

                                                        </Grid>
                                                        <Grid item sm={4} xs={4} md={4} className="home__grid-item">
                                                            <List component="div" aria-label="main mailbox folders" sx={{ padding: 0 }}>
                                                                <Link to="/riskmanagement">
                                                                    <ListItemButton sx={{ bgcolor: 'background.paper' }} className="homebox__list_btn">
                                                                        <ListItemIcon className="home__list_icon">
                                                                            <AuditRisk />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={window.innerWidth < 430 ? t('farm.header.navigation_buttons.titlec') : t('farm.header.navigation_buttons.title4')} className="homebox__list_text" />
                                                                    </ListItemButton>
                                                                </Link>
                                                            </List>
                                                        </Grid>
                                                    </Grid>
                                                )}
                                            </Box>

                                            <section className={window.innerWidth <= 768 ? "farm_select__mobile" : "farm_select"}>
                                                {window.innerWidth >= 900 && (
                                                    <>
                                                        <Link to="/about" >
                                                            <div className="farm_select_item row _bg">
                                                                <div className="_select_item-icon no-paddding col">
                                                                    <About />
                                                                </div>
                                                                <div className="_select_item-text col">
                                                                    <span className="select_text">
                                                                       {t('farm.header.navigation_buttons.title1')}
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
                                                                        {t('farm.header.navigation_buttons.title2')}
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
                                                                        {t('farm.header.navigation_buttons.title3')}
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
                                                                        {t('farm.header.navigation_buttons.title4')}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                )}
                                            </section>

                                            <EggSection />

                                            {/* TOP SELLERS */}
                                            
                                            <section className="farm_topSell-wrap">
                                                <header>
                                                <h2>
                                               {t('farm.header.top_sellers.heading')}
                                                    </h2>
                                                </header>
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
                                                            <span>{t('farm.header.vegetables_delivery_banner.vegetables.subtitle')}</span>
                                                        </div>
                                                        <div className="lBanner__title">
                                                            <h2>
                                                                {t('farm.header.vegetables_delivery_banner.vegetables.title')}
                                                            </h2>
                                                        </div>
                                                        <div className="lBanner__text">
                                                            <p>
                                                                {t('farm.header.vegetables_delivery_banner.vegetables.text')}
                                                            </p>
                                                        </div>
                                                        <Link to="/shop" className="lBanner__btn shop_now">
                                                            <Button variant="contained" color="secondary" className="btn-shop">
                                                                {t('farm.header.poultry_fresh_eggs_shop.poultry.button_text')}
                                                            </Button>
                                                        </Link>
                                                        {/* <Link to="/" className="lBanner__btn shop_now">{t('farm.header.poultry_fresh_eggs_shop.poultry.button_text')}</Link> */}
                                                    </aside>
                                                </div>
                                                <aside className="farm_lBanner__rightWrap onHoverBanner">
                                                    <div className="__rightWrap-imgWrap">
                                                        <img src={chick} alt="chick" className="__rightWrap-img" />
                                                    </div>
                                                    <div className="__rightWrap-content">
                                                        <p>
                                                           {t('farm.header.vegetables_delivery_banner.delivery.text')}
                                                        </p>
                                                    </div>
                                                    <Linke to="contactFormWrapper" className="lBanner__btn shop_now">
                                                        {window.innerWidth <= 499 ? (
                                                            <Button variant="contained" color="secondary" className="btn-shop">
                                                                {t('farm.header.vegetables_delivery_banner.delivery.contact_us')}
                                                            </Button>
                                                        )
                                                            :
                                                            (
                                                                <Button variant="outlined" color="primary" className="btn-contact">
                                                                    {t('farm.header.vegetables_delivery_banner.delivery.contact_us')}
                                                                </Button>
                                                            )}
                                                    </Linke>
                                                    {/* <Link to="/" className="lBanner__btn shop_now">{t('farm.header.vegetables_delivery_banner.delivery.contact_us')}</Link> */}
                                                </aside>
                                            </section>

                                            {/* PRODUCTS */}
                                            <section className="fProduct">
                                                <div className="fProduct-wrap">
                                                    <h2>{t('farm.header.featured_product.heading')}</h2>
                                                    {/* <span id="fProduct_subtext">
                                                            select our from superior quality products
                                                        </span> */}
                                                    <section class="section products">
                                                        <div className="home__product-grid-sect"  >
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
                                                    {i18n.resolvedLanguage === 'fr' ? <NSlider /> : (
                                                            <NutritionHero video={poultrybannerVideo} />
                                                    )}
                                                    </Link>
                                                </div>
                                            </section>
                                            <NutritionProduct styleName="category_preview" title={t('nutrition')} subtitle={t('nt_subtitle')} shopTitlte={t('nt_all')} />

                                            {window.innerWidth <= 575 ? <FeateredCategorySX /> : <FeaturedCategory />}
                                            <br />

                                            <div className="col poultry_banner_wrapper" style={{ padding: 'unset!important' }}>
                                                <div className="inner_poultry_wrap">
                                                    <Link to="/product-category/poultry" className="onHoverBanner">
                                                        <img className="poultrybanner" src={i18n.resolvedLanguage === 'fr' ? poule : poultrybanner} alt="poultry banner" />
                                                    </Link>
                                                </div>

                                                <CategoryPreview styleName="category_preview" title={t('pl_poule')} subtitle={t('nt_subtitle')} shopTitlte={t('nt_all')} />

                                            </div>






                                            {/* <CategoryPreview styleName="category_preview" title="nutrition" subtitle="shop the look" shopTitlte="Sell all" />

                                            <br /> */}



                                            <Purebred />
                                            <br />

                                            <VaccHatch />

                                            {/* <Hatching /> */}

                                           
                                            {window.innerWidth <= 575 ?  <MainPlaceSX /> :  <MainPlace />}
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

export default memo(Home)
