import React, { useState, useEffect } from 'react'
import './layout/mCustomscrollbar.css'
import Crumb from '../components/farm/Category/breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'
import MetaData from './layout/MetaData'

import { Accordion, Card } from 'react-bootstrap'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Buttone from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Paginatione from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions'
import Select from './layout/Select'
import '../styles/Locataire.css'

import ProductList from './product/ProductList';
import backToFarm from '../images/category/forwardslash.svg'
import { HiViewGrid } from 'react-icons/hi'
import { FaListUl } from 'react-icons/fa'
import { createTheme } from '@material-ui/core/styles';
import { StrollableContainer } from "react-stroller";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

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
    }
}));


const Shop = ({ match }) => {

    const classes = useStyles();

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

        dispatch(getProducts(keyword, currentPage, price, name, rating, size, color));


    }, [dispatch, alert, keyword, error, currentPage, price, name, rating, size, color])


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

    const categories = [
        {
            "title": "Poultry",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616223744/category/animal_tezmcb.svg",
            "atl": "LaiWiv"

        },
        {
            "title": "Eggs",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616220708/category/eggs_ca7brk.svg",
            "atl": "KTrngrIo"
        },
        {
            "title": "Pigsty",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616220708/category/pig_nmfagj.svg",
            "atl": "EyCVOYElB"
        },
        {
            "title": "Mammals",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616223741/category/goat_bwpnmu.svg",
            "atl": "EyCVOYElP"

        },
        {
            "title": "Park",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616220708/category/paw-solid_nllgp5.svg",
            "atl": "XgcabxkzflU"
        },
        {
            "title": "Purebred",
            "icon": "https://res.cloudinary.com/locataire/image/upload/v1616223739/category/dna_pycfwt.svg",
            "atl": "tkTOAnrTpGM"

        },
        {
            "title": "Livestock",
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


    const handleClearFilter = () => {
        setName('');
        setSize('');
        setRating(0);
        setColor('');
    }




    // SIDEBAR
    const Sidebar = () => {
        return (
            <aside className="category_list">
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
                <section className="filterbycategory mgt">
                    <h2 style={{ marginBottom: "1rem" }}>filter by category</h2>
                    <div id="category-list-wrapper">
                        {categories.map(category => (
                            <div className="category-item" key={category} onClick={() => setName(category.title)}>
                                <img
                                    className="category-icon"
                                    src={category.icon}
                                    alt={category.atl}
                                />
                                <p className="ctg-name">{category.title}</p>
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

    // BREADCRUMB
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
                        <Crumb navigationA="/" nameA="farm" nameB="Shop" />
                    </div>
                    {
                        name || size || rating || color ?
                            (
                                <>
                                    <div className="userFilter" id="remove_filter">
                                        <h4>/ Filter:</h4>
                                        <div className="remove_filter" >
                                            <span><i>{name}</i></span>
                                            <span><i>{size}</i></span>
                                            <span><i>{color}</i></span>
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
                    }
                </div>

                <div style={{ display: 'inline-flex' }}>
                    <div className="row search-product-wrap" >
                        <div className="col-lg-4 col-md-5" style={{ placeSelf: 'center' }}>
                            <div className="filter__sort">
                                <Select />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4" style={{ placeSelf: 'center', marginRight: ' 1.3rem' }}>
                            <div className="filter__found">
                                <h6>
                                    <span>{count}</span>
                                    Products found
                                </h6>
                            </div>
                        </div>
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
            </div>
        );
    }

    // MAIN PRODUCTS GRID
    const ProductsGrid = () => {
        return (
            <>
                <div className="poultry">
                    <div className="filter_category">
                        <Sidebar />
                    </div>
                    <div className="main_products">
                        <Breadcrumb />

                        <div className="poultry_products">
                            <div className={grid ? "row producstWrapper" : "col listMode"}>

                                {
                                    grid ?
                                        (
                                            products.map((product) => (
                                                // <ProductList key={product._id} product={product} col={4} />

                                                <div className="product farmStyle" key={product._id}>
                                                    <div className="img-container">
                                                        <img src={product.images[0].url} alt={product.name} />
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
                                                        <h6 className="product_title"><Link to={`/product/${product._id}`}>{product.name}</Link></h6>
                                                        <div className="price">
                                                            <span>${product.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )

                                        :

                                        (
                                            products.map((product) => (
                                                <ProductList key={product._id} product={product} col={4} />
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




                </div>


            </>
        )
    }


    return (
        <>
            <MetaData title={'Shop'} />
            <div id="poultry_banner" />
            <ProductsGrid />

        </>
    )
}

export default Shop
