import React, { Fragment, useState, useEffect } from 'react'
import '../../layout/mCustomscrollbar.css'
import './category_responsive.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { addItemToCart } from "../../../actions/cartActions";
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import SideBarFielter from './sidebar/Sidebar'

import Crumb from './breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'
import MetaData from '../../layout/MetaData'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Buttone from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@mui/material/Button';

import FilterCt from './breadcrumb/Filter';
import Paper from '@mui/material/Paper';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Paginatione from 'react-js-pagination'
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProductsCategory_Livestock, getProductsCategory_LivestockFR} from '../../../actions/productActions'
import '../../../styles/Locataire.css'

import ProductList from '../../product/ProductList';
import backToFarm from '../../../images/category/forwardslash.svg'
import { HiViewGrid } from 'react-icons/hi'
import { FaListUl } from 'react-icons/fa'
import { createTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import { useTranslation, Trans } from 'react-i18next';
import Slider from 'rc-slider'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Grid from 'react-loader-spinner/dist/loader/Grid.js'
import { fCurrencyFR, fCurrency} from '../../admin/main/utils/number/number';

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


export default function Purebred({ match }) {
    const { t, i18n } = useTranslation();
    const [Id, setId] = useState('');
    const [quantity, setQuantity] = useState(1)
    
    const rangeState = i18n.resolvedLanguage === 'fr' ? [1, 550000] : [1, 962]
    const [rangeChaged, setRangeChanged] = useState(false)


    const classes = useStyles();

    const [categoryFilter, setCategoryFilter] = useState();
    let app = document.getElementById('root');
    useEffect(() => {
        app.clientWidth < 700 ? setCategoryFilter(true) : setCategoryFilter(false);
    }, [categoryFilter, setCategoryFilter, app.clientWidth])

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 450])
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)

    console.log('THE FILTER IS: ' + name)

    const alert = useAlert();
    const dispatch = useDispatch();

    const {loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.livestock)
    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(i18n.resolvedLanguage === 'fr' ? getProductsCategory_LivestockFR(keyword, currentPage, price, name,  rating, size, color) : getProductsCategory_Livestock(keyword, currentPage, price, name,  rating, size, color));


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

    const resetPriceRange = () => {
        setPrice(prevState => prevState = rangeState)
        setRangeChanged(prevState => prevState = false)
    }

    useEffect(() => {
        resetPriceRange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.resolvedLanguage]);


    const productSize = [
        '1 T'
    ]

    const noms = [
        "tourteau de soja",
        "concentre chair",
        "concentre ponte ", 
        "premix ponte", 
        "premix chair", 
        "mais jaune", 
        "alveole pour 12 oeufs", 
        "alveole pour 24 oeufs", 
        "alveole pour 30 oeufs", 
        "abreuvoir volailles", 
        "mangeoires", 
        "batteries de ponte", 
        "cage de pontes", 
        "fumiers", 
    ]

    const names = [
        "Soybean meal",
        "Concentrate flesh",
        "Concentrate laying hens",
        "Premix laying hens",
        "Premix flesh",
        "Yellow corn",
        "Alveole for 12 eggs",
        "Alveole for 30 eggs",
        "Alveole for 24 eggs",
        "Poultry drinkers",
        "Feeders",
        "Laying hens batteries",
        "Bridge cage",
        "Manure",
    ]

    // const productColor = [
    //     'Grey',
    //     'White',
    //     'Bronze',
    //     'Maroon',
    //     'Blue',
    //     'Black',
    //     'Yellow'
    // ]


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
                            marks={i18n.resolvedLanguage === 'fr' ? {1: `1 CFA`,550000: `550000 CFA`} : {1: `$1`,962: `$962`}}
                            min={1}
                            max={i18n.resolvedLanguage === 'fr' ? 550000 : 962}
                            defaultValue={i18n.resolvedLanguage === 'fr' ? [1, 550000] : [1, 962]}
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
                    <Box component="div" sx={{ overflowY: 'scroll', height: 200}}>
                    {i18n.resolvedLanguage === 'fr' ? 

(
    noms.map((name, index) => {
        return (
            <ListItem key={index} style={{padding: '0', cursor: 'pointer'}} className="shop_sidebar__item" onClick={() => {setName(name); handleDrawerToggle()}}>
                <ListItemText primary={name} id="list_item_text" style={{ color: '#ffffff!important' }} />
            </ListItem>
        )
    })
)

:

(
names.map((name, index) => {
    return (
        <ListItem key={index} style={{padding: '0', cursor: 'pointer'}} className="shop_sidebar__item" onClick={() => {setName(name); handleDrawerToggle()}}>
            <ListItemText primary={name} id="list_item_text" style={{ color: '#ffffff!important' }} />
        </ListItem>
    )
})
)}
                    </Box>
                </ListItem>
                <Divider style={{ margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                   {t('filter_size')}
                </Divider>
                <ListItem style={{ display: 'block' }}>
                    <Box component="div" sx={{ overflow: 'auto', my: 2 }}>
                        {productSize.map((size, index) => {
                            return (
                                <ListItem key={index} onClick={() => {setSize(size); handleDrawerToggle()}} style={{cursor: 'pointer'}}>
                                    <ListItemText primary={size} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                </ListItem>
                            )
                        })}
                    </Box>
                </ListItem>
                <Divider style={{ margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                   {t('filter_rating')}
                </Divider>
                <ListItem style={{ display: 'block' }}>
                    <Box component="div" sx={{ overflow: 'auto', my: 2 }}>
                        <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <li style={{ cursor: "pointer", listStyleType: "none", }} key={star} >
                                    <div className="rating-outer" onClick={() => {setRating(star); handleDrawerToggle()}}>
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
                            marks={i18n.resolvedLanguage === 'fr' ? {1: `1 CFA`,550000: `550000 CFA`} : {1: `$1`,962: `$962`}}
                            min={1}
                            max={i18n.resolvedLanguage === 'fr' ? 550000 : 962}
                            defaultValue={i18n.resolvedLanguage === 'fr' ? [1, 550000] : [1, 962]}
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
                    {i18n.resolvedLanguage === 'fr' ? noms.map((name, index) => (
                            <div className="category-item" key={index} onClick={() => setName(name)}>
                                {name}
                            </div>
                        ))
                        
                        :
                        
                        (
                            names.map((name, index) => (
                                <div className="category-item" key={index} onClick={() => setName(name)}>
                                    {name}
                                </div>
                            ))
                        )}
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
            <div className="breadcrumb">
                <div className="crumb">
                    <div className="back-to-farm">
                        <Link to="/">
                            <img src={backToFarm} alt="back to farm icon" />
                        </Link>
                    </div>
                    <div className="crumb-wrap">
                        <Crumb navigationA="/" nameA={t('crumb__farm')} nameB={t('crumb__food')} />
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
                                        <span><i> {rating ? `${t('rating')}: ${rating}` : ''}</i></span>

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
           <div id="category__filter" style={{margin: '2rem 2rem'}}>
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
            <MetaData title={'Food | Livestock'} />
            {mobileOpen && <SideBarFielter drawerContent={sidedrawer} mobileView={mobileOpen} drawerToggle={handleDrawerToggle} />}
            <div id="poultry_banner" />
            <div className={` poultry ${window.innerWidth < 700 ? 'cat_fielter' : '' } `}>
            { window.innerWidth < 700 ?
                        null
                    :
                    <div className='filter_category' id="filter_shop_desktop">
                        <Sidebar />
                    </div>
                }
                <div className="main_products">
                    <Breadcrumb />
                    {window.innerWidth < 700 ? <Filter /> :  null}
                    { window.innerWidth < 700 ? 
                        (
                            name || size || rating ?
                            (
                                <>
                                    <div className="userFilter" id="remove_filter">
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
                                            <Paper elevation={3} style={{paddingLeft: '1.5rem'}}>
                                                <FilterCt  
                                                    nameA={t('filter')} 
                                                    nameB={name}
                                                    nameC={size}
                                                    nameD={rating ? `${t('rating')}: ${rating}` : ''} 
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
                                        loading ? <Grid arialLabel="loading-indicator" /> : (

                                            products.map((poultryItem) => (
                                                // <ProductList key={poultryItem._id} product={poultryItem} col={4} />
                                                <div className="product farmStyle" key={poultryItem._id}>
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
                                        loading ? <Grid arialLabel="loading-indicator" /> : (

                                            products.map((poultryItem) => (
                                                <ProductList key={poultryItem._id} product={poultryItem} col={4} />
                                            ))
                                        )
                                    )

                            }

                        </div>
                        <br />

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

        </div>
    )
}


