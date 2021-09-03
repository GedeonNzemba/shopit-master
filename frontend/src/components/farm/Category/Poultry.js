import React, { Fragment, useState, useEffect } from 'react'
import '../../layout/mCustomscrollbar.css'

import { Link, Route } from 'react-router-dom'
import MetaData from '../../layout/MetaData'
import Product from '../../product/Product'
import Loader from '../../layout/Loader'
import { Accordion, Button, Card } from 'react-bootstrap'
import Paginatione from 'react-js-pagination'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import Select from '../../layout/Select'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getProducts } from '../../../actions/productActions'
import '../../../styles/Locataire.css'

import { StrollableContainer } from "react-stroller";
import ProductList from '../../product/ProductList';
import Category from './Category.json';
import lc from '../../../images/category/poultry/layingchick.svg'


export default function Poultry({ match }) {

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 450])
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)

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


    const productSize = [
        '2 KG',
        '0 KG',
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
                        {Category.map((category, key) => (
                            <div className="category-item" key={key}>
                                <img
                                    className="category-icon"
                                    src={category.icon}
                                    alt={category.atl}
                                />
                                <div className="category-name">
                                    <p>{category.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="filterbysize mgt">
                    <h2 style={{ marginBottom: "1rem" }}>filter by size</h2>
                    <div id="category-size-wrapper">
                        {productSize.map((size, key) => (
                            <div className="size-item" key={key}>
                                <p>{size}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="filterbyrating mgt">
                    <h2 style={{ marginBottom: "1rem" }}>filter by rating</h2>
                    <div id="category-rating-wrapper">
                        <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <li style={{ cursor: "pointer", listStyleType: "none", }} key={star}>
                                    <div className="rating-outer">
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


    return (
        <>
            <MetaData title={'Poultry Category'} />
            <div id="poultry_banner" />
            <div className="poultry">
                <div className="filter_category">
                    <Sidebar />
                </div>
                <div className="main_products">
                    MAIN CONTENT


                </div>
            </div>
        </>
    )
}


