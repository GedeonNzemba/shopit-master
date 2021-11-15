import React, { Fragment, useState, useEffect } from 'react'
import '../../layout/mCustomscrollbar.css'
import './category_responsive.css'

import Crumb from './breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'
import MetaData from '../../layout/MetaData'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Buttone from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProductsCategory } from '../../../actions/productActions'
import '../../../styles/Locataire.css'

import ProductList from '../../product/ProductList';
import backToFarm from '../../../images/category/forwardslash.svg'
import { HiViewGrid } from 'react-icons/hi'
import { FaListUl } from 'react-icons/fa'
import { createTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

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


export default function Pigsty({ match }) {

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

    const { products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)
    const keyword = match.params.keyword

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProductsCategory(keyword, currentPage, price, name, rating, size, color));


    }, [dispatch, alert, error, keyword, currentPage, price, name, rating, size, color])


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
        'verrat',
        'trout',
    ]

    const names = [
        "Landrace",
        "Large white",
        "Duroc",
        "Pietrain",
        "chester",
        "crus",
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


    // SIDEBAR
    const Sidebar = () => {
        return (
            <aside className={`category_list ${window.innerWidth < 700 ? ' isNull' : ''}`} id="filter_shop">
                <section className="filterByPrice mgt">
                    <h2 style={{ marginBottom: "2.5rem" }}>filter by price</h2>
                    <div className="filterRange">
                        <Range
                            marks={{
                                1: `$1`,
                                450: `$450`,
                            }}
                            min={1}
                            max={450}
                            defaultValue={[1, 450]}
                            tipFormatter={(value) => `$${value}`}
                            tipProps={{
                                placement: "top",
                                visible: true,
                            }}
                            value={price}
                        />
                    </div>
                </section>
                <section className="filterbycategory mgt">
                    <h2 style={{ marginBottom: "1rem" }}>filter by category</h2>
                    <div id="category-list-wrapper">
                        {names.map(name => (
                            <div className="category-item" key={name} onClick={() => setName(name)}>
                                {/* <img
                                    className="category-icon"
                                    src={name.icon}
                                    alt={name.atl}
                                /> */}
                                {name}
                                {/* <p onClick={() => setName(name)} className="ctg-name">{</p> */}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="filterbysize mgt">
                    <h2 style={{ marginBottom: "1rem" }}>filter by size</h2>
                    <div id="category-size-wrapper">
                        {productSize.map((size, key) => (
                            <div className="size-item" key={key}>
                                <p onClick={() => setSize(size)}>{size}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="filterbyrating mgt">
                    <h2 style={{ marginBottom: "1rem" }}>filter by rating</h2>
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
                        <Crumb navigationA="/" nameA="farm" nameB="Pigsty" />
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
                                                    label="filter"
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
                                                Clear filter
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
                            Clear filter
                        </Buttone>
                    </ThemeProvider>
                   )
                   :
                   null
               }
                <Button onClick={handleFilter} className={classes.button} variant="contained" color="success">
                filters
            </Button>
           </div>
        )
    }

    function handleFilter() {
        let filter = document.getElementById('filter_shop');
        let categoryPage = document.getElementById('category-page');

        
        categoryPage.classList.add('category-page');
        filter.classList.add('filter_shop');

        categoryPage.addEventListener('click',  () => {
            categoryPage.classList.remove('category-page');
            filter.classList.remove('filter_shop');
        })
    }






    return (
        <div  id="category-page">
            <MetaData title={'Pigsty'} />
            { window.innerWidth < 700 ? <Sidebar /> : null }
            <div id="poultry_banner" />
            <div  className={` poultry ${window.innerWidth < 700 ? 'cat_fielter' : '' } `}>
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
                                                    <Accordion>
                                                        <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        >
                                                            <StyledBreadcrumb
                                                                component="a"
                                                                label="filter"
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
                            {console.log("NAME:" + name)}

                            {
                                grid ?
                                    (
                                        products.map((eggProduct) => (
                                            // <ProductList key={eggProduct._id} product={eggProduct} col={4} />

                                            <div className="product farmStyle" key={eggProduct._id}>
                                                <div className="img-container">
                                                    <img src={eggProduct.images[0].url} alt={eggProduct.name} />
                                                    <div className="addCart">
                                                        <i className="fas fa-shopping-cart"></i>
                                                    </div>

                                                    <div className="side-icons">
                                                        <span><i className="fas fa-search"></i></span>
                                                        <span><i className="far fa-heart"></i></span>
                                                        <span><i className="fas fa-sliders-h"></i></span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <h6 className="product_title"><Link to={`/product/${eggProduct._id}`}>{eggProduct.name}</Link></h6>
                                                    <div className="price">
                                                        <span>${eggProduct.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )

                                    :

                                    (
                                        products.map((eggProduct) => (
                                            <ProductList key={eggProduct._id} product={eggProduct} col={4} />
                                        ))
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


