import React, { useState, useEffect } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { getProducts } from '../../actions/productActions'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { StrollableContainer } from "react-stroller";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

export default function FilterBar({ match }) {

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

    const { error } = useSelector(state => state.products)


    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(currentPage, price, category, rating, size, color))


    }, [dispatch, alert, error, currentPage, price, category, rating, size, color])




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
                        <div className="category-item" key={category} onClick={() => setCategory(category.title)}>
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
