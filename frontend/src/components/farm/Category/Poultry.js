import React, { Fragment, useState, useEffect } from 'react'
import '../../layout/mCustomscrollbar.css'
import Crumb from './breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'
import MetaData from '../../layout/MetaData'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Buttone from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
import Categories from './Category.json';


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


export default function Poultry({ match }) {

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


    const handleClearFilter = () => {
        setName('');
        setSize('');
        setRating(0);
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
                <section className="filterbycategory mgt">
                    <h2 style={{ marginBottom: "1rem" }}>filter by category</h2>
                    <div id="category-list-wrapper">
                        {Categories.map(category => (
                            <div className="category-item" key={category.atl} onClick={() => setName(category.title)}>
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
                        <Crumb navigationA="/" nameA="farm" nameB="Poultry" />
                    </div>
                    {
                        name || size || rating ?
                            (
                                <>
                                    <div className="userFilter" id="remove_filter">
                                        <h4>/ Filter:</h4>
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




    return (
        <>
            <MetaData title='Poultry' />
            <div id="poultry_banner" />
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
                                        products.map((poultryItem) => (
                                            // <ProductList key={poultryItem._id} product={poultryItem} col={4} />

                                            <div className="product farmStyle" key={poultryItem._id}>
                                                <div className="img-container">
                                                    <img src={poultryItem.images[0].url} alt={poultryItem.name} />
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
                                                    <h6 className="product_title"><Link to={`/product/${poultryItem._id}`}>{poultryItem.name}</Link></h6>
                                                    <div className="price">
                                                        <span>${poultryItem.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )

                                    :

                                    (
                                        products.map((poultryItem) => (
                                            <ProductList key={poultryItem._id} product={poultryItem} col={4} />
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

        </>
    )
}


