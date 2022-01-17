import React, { Fragment, useState, useEffect, memo } from 'react'
import SideBarFielter from './sidebar/Sidebar'
import '../../layout/mCustomscrollbar.css'
import './category_responsive.css'
import Crumb from './breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'
import MetaData from '../../layout/MetaData'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import FilterCt from './breadcrumb/Filter';
import Paper from '@mui/material/Paper';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { addItemToCart } from "../../../actions/cartActions";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";


import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Buttone from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Paginatione from 'react-js-pagination'
import 'rc-slider/assets/index.css';
import { getProductsCategory_Poultry, getProductsCategory_PoultryFR } from '../../../actions/productActions'
import '../../../styles/Locataire.css'

import ProductList from '../../product/ProductList';
import backToFarm from '../../../images/category/forwardslash.svg'
import { HiViewGrid } from 'react-icons/hi'
import { FaListUl } from 'react-icons/fa'
import { createTheme } from '@material-ui/core/styles';
import Categories from './Category.json';
import { Typography } from '@material-ui/core'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Grid from 'react-loader-spinner/dist/loader/Grid.js'
import laying_hens from '../../layout/categoryImages/sidebar/laying_hens.svg'
import broiler from '../../layout/categoryImages/sidebar/broiler.svg'
import chick_flesh from '../../layout/categoryImages/sidebar/chick_flesh.svg'
import fowl from '../../layout/categoryImages/sidebar/fowl.svg'
import grey_goose from '../../layout/categoryImages/sidebar/grey_goose.svg'
import laying_chick from '../../layout/categoryImages/sidebar/laying_chick.svg'
import mallard_duck from '../../layout/categoryImages/sidebar/mallard-duck_dribbble_4x.png'
import ornamental_duck from '../../layout/categoryImages/sidebar/ornamental_duck.jpg'
import pigeons from '../../layout/categoryImages/sidebar/pigeon.svg'
import quail from '../../layout/categoryImages/sidebar/quail.svg'
import rooster from '../../layout/categoryImages/sidebar/rooster.svg'
import runner_duck from '../../layout/categoryImages/sidebar/runner_duck.jpg'
import turkey from '../../layout/categoryImages/sidebar/turkey.svg'
import white_goose from '../../layout/categoryImages/sidebar/white_goose.svg'
import { useTranslation, Trans } from 'react-i18next';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { fCurrency, fCurrencyFR } from '../../admin/main/utils/number/number'
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)


const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: '1.6rem!important',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.#4CAF50
            main: '#e91e63',
            fontSize: '1.6rem'
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#dc004e',
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
    button: {
        fontSize: '1.6rem!important',
        float: 'right',
        '&:hover ': {
            backgroundColor: '#424242'
        }
    },
    paper: {
        fontSize: '1.6rem!important',
    }
}));


const Poultry = ({ match }) => {

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const alert = useAlert();

    const [Id, setId] = useState('');
    const [quantity, setQuantity] = useState(1)

    const rangeState = i18n.resolvedLanguage === 'fr' ? [1, 25000] : [1, 46]


    const poultryCategories = [
        {
            title: 'laying chick',
            title_en: "poussin de ponte",
            icon: laying_chick,
            alt: 'laying chick'
        },
        {
            title: 'chick flesh',
            title_en: "poulets de chair",
            icon: chick_flesh,
            alt: 'chick flesh'
        },
        {
            title: 'laying hens',
            title_en: "Poules Pondeuses",
            icon: laying_hens,
            alt: 'laying hens'
        },
        {
            "title": "broiler chickens",
            title_en: "poulets de chair",
            "icon": broiler,
            "atl": "broiler chickens"
        },
        {
            "title": "rooster",
            title_en: "coq",
            "icon": rooster,
            "atl": "rooster"
        },
        {
            "title": "mullard duck - barbarian",
            title_en: "canard mulard - barbarie",
            "icon": mallard_duck,
            "atl": "mullard duck - barbarian"
        },
        {
            "title": "runner duck",
            title_en: "canard coureur",
            "icon": runner_duck,
            "atl": "runner duck"
        },
        {
            "title": "ornamental duck",
            title_en: "canard d'ornement",
            "icon": ornamental_duck,
            "atl": "ornamental duck"
        },
        {
            "title": "white goose",
            title_en: "oie blanche",
            "icon": white_goose,
            "atl": "white goose"
        },
        {
            "title": "grey goose",
            title_en: "oie grise",
            "icon": grey_goose,
            "atl": "grey goose"
        },
        {
            "title": "quail",
            title_en: "cailles",
            "icon": quail,
            "atl": "quail"
        },
        {
            "title": "chapon",
            title_en: "chapon",
            "icon": broiler,
            "atl": "chapon"
        },
        {
            "title": "bronze turkey",
            title_en: "dinde bronze",
            "icon": turkey,
            "atl": "bronze turkey"
        },
        {
            "title": "pigeons",
            title_en: "pigeons",
            "icon": pigeons,
            "atl": "pigeons"
        },
        {
            "title": "guinea fowl",
            title_en: "pintade",
            "icon": fowl,
            "atl": "guinea fowl"
        }
    ]

    const classes = useStyles();

    const [categoryFilter, setCategoryFilter] = useState();
    let app = document.getElementById('root');
    useEffect(() => {
        app.clientWidth < 700 ? setCategoryFilter(true) : setCategoryFilter(false);
    }, [categoryFilter, setCategoryFilter, app.clientWidth])

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState(rangeState)
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)
    const [rangeChaged, setRangeChanged] = useState(false)


    const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.poultry)
    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        i18n.resolvedLanguage === 'fr' ? 
        dispatch(getProductsCategory_PoultryFR(keyword, currentPage, price, name, rating, size, color))
        :  
        dispatch(getProductsCategory_Poultry(keyword, currentPage, price, name, rating, size, color))
           
       

    }, [dispatch, alert, error, keyword, currentPage, price, name, rating, size, color, i18n.resolvedLanguage])


    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    let count = productsCount;
    if (keyword) {
        count = filteredProductsCount
    }



    const [grid, setGrid] = useState(true);
    const [list, setList] = useState();

    const handleGrid = () => {
        setGrid(prevState => prevState = true)
        setList(prevState => prevState = false)
    }
    const handleList = () => {
        setGrid(prevState => prevState = false)
        setList(prevState => prevState = true)
    }





    // const reducedArray = array.reduce((acc, curr) => `${acc}${curr.lat},${curr.lon}|`, '')
    
    const productSize = [
        '2 KG',
        '0 KG',
    ]

    // const names = [
    //     "laying chick",
    //     "chick flesh",
    //     "Laying Hens",
    //     "broiler chickens",
    //     "rooster",
    //     "mullard duck - barbarian",
    //     "runner duck",
    //     "ornamental duck",
    //     "white goose",
    //     "grey goose",
    //     "quail",
    //     "chapon",
    //     "bronze turkey",
    //     "pigeons",
    //     "guinea fowl",
    // ]

    // const productColor = [
    //     'Grey',
    //     'White',
    //     'Bronze',
    //     'Maroon',
    //     'Blue',
    //     'Black',
    //     'Yellow'
    // ]

    const resetPriceRange = () => {
        setPrice(prevState => prevState = rangeState)
        setRangeChanged(prevState => prevState = false)
    }

    useEffect(() => {
        resetPriceRange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.resolvedLanguage]);


    const handleClearFilter = () => {
        setName('');
        setSize('');
        setRating(0);

    }

    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const sidedrawer = (
        <div>
            <List>
                <Divider style={{ margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                    {t('filter_price')}
                </Divider>
                <ListItem style={{ display: 'block' }}>
                    <Box>
                    <Range
                            marks={i18n.resolvedLanguage === 'fr' ? {1: `1 CFA`,25000: `25000 CFA`} : {1: `$1`,46: `$46`}}
                            min={1}
                            max={i18n.resolvedLanguage === 'fr' ? 25000 : 46}
                            defaultValue={i18n.resolvedLanguage === 'fr' ? [1, 25000] : [1, 46]}
                            tipFormatter={value => `$${value}`}
                            tipProps={{
                                placement: "top",
                                visible: true
                            }}
                            value={price}
                            onChange={price => {
                                setPrice(price)
                                setRangeChanged(prevState => prevState = true)
                            }}
                        />
                        {rangeChaged && <Button style={{fontSize: '1.6rem', marginTop: '3rem'}} variant="outlined" onClick={resetPriceRange}>{t('reset_price_range')}</Button>}
                       
                    </Box>
                </ListItem>
                <br />
                <Divider style={{ margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                    {t('filter_category')}
                </Divider>
                <ListItem style={{ display: 'block' }}>
                    <Box component="div" sx={{ overflowY: 'scroll', height: 200 }}>
                        {poultryCategories.map((item, index) => {
                            return (
                                <ListItem key={index} style={{ padding: '0', cursor: 'pointer' }} className="shop_sidebar__item">
                                    <Stack direction='row' spacing={2} onClick={() => { setName(i18n.resolvedLanguage === 'fr' ? item.title_en : item.title); handleDrawerToggle() }}>
                                        <Avatar
                                            alt={item.alt}
                                            src={item.icon}
                                            className="avatar_img_sidebar"
                                        />
                                        <ListItemText primary={i18n.resolvedLanguage === 'fr' ? item.title_en : item.title} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                    </Stack>
                                </ListItem>
                            )
                        })}
                    </Box>
                </ListItem>
                <Divider style={{ margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                    {t('filter_size')}
                </Divider>
                <ListItem style={{ display: 'block' }}>
                    <Box component="div" sx={{ overflow: 'auto', my: 2 }}>
                        {productSize.map((size, index) => {
                            return (
                                <ListItem key={index} onClick={() => { setSize(size); handleDrawerToggle() }} style={{ cursor: 'pointer' }}>
                                    <ListItemText primary={size} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                </ListItem>
                            )
                        })}
                    </Box>
                </ListItem>
                <Divider style={{ margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                    {t('filter_rating')}
                </Divider>
                <ListItem style={{ display: 'block' }} >
                    <Box component="div" sx={{ overflow: 'auto', my: 2 }}>
                        <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <li style={{ cursor: "pointer", listStyleType: "none", }} key={star}>
                                    <div className="rating-outer" onClick={() => { setRating(star); handleDrawerToggle() }}>
                                        <div className="rating-inner" style={{ width: `${star * 20}%` }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </ListItem>

            </List>
        </div>
    );


    // SIDEBAR
    const Sidebar = () => {
        return (
            <aside className={`category_list ${window.innerWidth < 700 ? ' isNull' : ''}`} id="filter_shop">
                <section className="filterByPrice mgt">
                    <h2 style={{ marginBottom: "2.5rem" }}>{t('filter_price')}</h2>
                    <div className="filterRange">
                        <Range
                            marks={i18n.resolvedLanguage === 'fr' ? {1: `1 CFA`,25000: `25000 CFA`} : {1: `$1`,46: `$46`}}
                            min={1}
                            max={i18n.resolvedLanguage === 'fr' ? 25000 : 46}
                            defaultValue={i18n.resolvedLanguage === 'fr' ? [1, 25000] : [1, 46]}
                            tipFormatter={value => `$${value}`}
                            tipProps={{
                                placement: "top",
                                visible: true
                            }}
                            value={price}
                            onChange={price => {
                                setPrice(price)
                                setRangeChanged(prevState => prevState = true)
                            }}
                        />
                        {rangeChaged && <Button style={{fontSize: '1.6rem', marginTop: '3rem'}} variant="outlined" onClick={resetPriceRange}>{t('reset_price_range')}</Button>}
                       
                    </div>
                </section>
                <section className="filterbycategory mgt">
                    <h2 style={{ marginBottom: "1rem" }}>{t('filter_category')}</h2>
                    <div id="category-list-wrapper">
                        {Categories.map((category, index) => (
                            <div className="category-item" key={index} onClick={() => setName(i18n.resolvedLanguage === 'fr' ? category.title_en : category.title)}>
                                <img
                                    className="category-icon"
                                    src={category.icon}
                                    alt={category.atl}
                                />

                                <p className="ctg-name">
                                    {i18n.resolvedLanguage === 'fr' ? category.title_en : category.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="filterbysize mgt">
                    <h2 style={{ marginBottom: "1rem" }}>{t('filter_size')}</h2>
                    <div id="category-size-wrapper">
                        {productSize.map((size, key) => (
                            <div className="size-item" key={key}>
                                <p onClick={() => setSize(size)}>{size}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="filterbyrating mgt">
                    <h2 style={{ marginBottom: "1rem" }}>{t('filter_rating')}</h2>
                    <div id="category-rating-wrapper">
                        <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <li style={{ cursor: "pointer", listStyleType: "none", }} key={star} >
                                    <div className="rating-outer" onClick={() => setRating(star)}>
                                        <div className="rating-inner" style={{ width: `${star * 20}%` }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </aside>
        );
    }

    const Breadcrumb = () => {
        return (
            <div className="breadcrumb" >
                <div className="crumb">
                    <div className="back-to-farm">
                        <Link to="/">
                            <img src={backToFarm} alt="back to farm icon" />
                        </Link>
                    </div>
                    <div className="crumb-wrap">
                        <Crumb navigationA="/" nameA={t('crumb__farm')} nameB={t('crumb__poultry')} />
                    </div>
                    {
                        window.innerWidth < 700 ?
                            null

                            :

                            (
                                name || size || rating ?
                                    (
                                        <>
                                            <div className="userFilter" id="remove_filter">
                                                <StyledBreadcrumb
                                                    component="a"
                                                    label={t('filter')}
                                                    icon={<FilterAltIcon />}
                                                    onClick={handleClick}
                                                />
                                                <div className="remove_filter" >
                                                    <span><i>{name}</i></span>
                                                    <span><i>{size}</i></span>
                                                    <span><i> {rating ? `rating: ${rating}` : ''}</i></span>

                                                    <ThemeProvider theme={theme}>
                                                        <Buttone
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.button + ' clear_filter'}
                                                            startIcon={<DeleteIcon />}
                                                            onClick={handleClearFilter}
                                                        >
                                                            {t('clear_filter')}
                                                        </Buttone>
                                                    </ThemeProvider>
                                                </div>
                                            </div>
                                        </>
                                    )
                                    :
                                    (
                                        <>

                                        </>
                                    )
                            )
                    }
                </div>

                <div className="products-view">
                    <div id="gridView" >
                        <HiViewGrid className={grid ? 'active_grid' : 'not-active'} onClick={handleGrid} />
                    </div>
                    <div id="listView" >
                        <FaListUl className={list ? 'active_list' : 'not-active'} onClick={handleList} />
                    </div>
                </div>
            </div>
        );
    }

    const Filter = () => {
        return (
            <div id="category__filter" style={{ margin: '2rem 2rem' }}>
                {
                    name || size || rating ?
                        (
                            <ThemeProvider theme={theme}>
                                <Buttone
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button + ' clear_filter'}
                                    startIcon={<DeleteIcon />}
                                    onClick={handleClearFilter}
                                >
                                    {t('clear_filter')}
                                </Buttone>
                            </ThemeProvider>
                        )
                        :
                        null
                }
                <Button onClick={handleDrawerToggle} className={classes.button} variant="contained" color="success">
                    {t('filter')}
                </Button>
            </div>
        )
    }



    return (
        <div id="category-page">
            <MetaData title='Poultry' />
            {mobileOpen && <SideBarFielter drawerContent={sidedrawer} mobileView={mobileOpen} drawerToggle={handleDrawerToggle} />}
            <div id="poultry_banner" />
            <div className={` poultry ${window.innerWidth < 700 ? 'cat_fielter' : ''} `}>
                {window.innerWidth < 700 ?
                    null
                    :
                    <div className='filter_category' id="filter_shop_desktop">
                        <Sidebar />
                    </div>
                }

                <div className="main_products">
                    <Breadcrumb />
                    {window.innerWidth < 700 ? <Filter /> : null}
                    {window.innerWidth < 700 ?
                        (
                            name || size || rating ?
                                (
                                    <>
                                        <div className="userFilter" id="remove_filter" >
                                            {
                                                window.innerWidth <= 420 ?
                                                    (
                                                        <>
                                                            <Accordion elevation={4}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls="panel1a-content"
                                                                    id="panel1a-header"
                                                                >
                                                                    <StyledBreadcrumb
                                                                        component="a"
                                                                        label={t('filter')}
                                                                        icon={<FilterAltIcon />}
                                                                        onClick={handleClick}
                                                                    />
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    {name ? <Typography>{name}</Typography> : null}
                                                                    {size ? <Typography>{size}</Typography> : null}
                                                                    {rating ? <Typography>{`rating: ${rating}`}</Typography> : null}
                                                                </AccordionDetails>
                                                            </Accordion>
                                                        </>
                                                    )
                                                    :
                                                    <Paper elevation={3} style={{ paddingLeft: '1.5rem' }}>
                                                        <FilterCt
                                                            nameA="filter"
                                                            nameB={name}
                                                            nameC={size}
                                                            nameD={rating ? `rating: ${rating}` : ''}
                                                        />
                                                    </Paper>
                                            }
                                        </div>
                                    </>
                                )
                                :
                                (
                                    <>

                                    </>
                                )
                        )
                        :
                        null
                    }


                    <div className="poultry_products">
                        <div className={grid ? "row producstWrapper" : "col listMode"}>
                            {
                                grid ?
                                    (
                                        loading ? <Grid style={{width: 'fit-content'}} arialLabel="loading-indicator" /> : (
                                            products.map((poultryItem, index) => (
                                                // <ProductList key={poultryItem._id} product={poultryItem} col={4} />
    
                                                <div className="product farmStyle" key={index}>
                                                    <div className="img-container">
                                                        <img src={poultryItem.images[0].url} alt={poultryItem.name} />
                                                        <div className="addCart" onClick={() => {
                                                            setId(poultryItem._id)
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
    
                                                    <div className="bottom">
                                                        <h6 className="product_title">
                                                            <Link to={`/product/${poultryItem._id}`}>
                                                                {i18n.resolvedLanguage === 'fr' ? poultryItem.french.name : poultryItem.name}
                                                            </Link>
                                                        </h6>
                                                        <div className="price">
                                                            <span>
                                                                {i18n.resolvedLanguage === 'fr' ? fCurrencyFR(poultryItem.french.price) + ' CFA' :  fCurrency(poultryItem.price)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                       
                                    )

                                    :

                                    (
                                        loading ? <Grid style={{width: 'fit-content'}} arialLabel="loading-indicator" /> : (

                                            products.map((poultryItem) => (
                                                <ProductList key={poultryItem._id} product={poultryItem} col={4} />
                                            ))
                                        )
                                    )

                            }

                        </div>
                    </div>

                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5 paginationWrapper">
                            <Paginatione
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={products.length}
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




            </div>

        </div>
    )
}

export default memo(Poultry)
