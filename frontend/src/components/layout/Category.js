import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import CategoriesData from './categories.json'

const Category = () => {

    return (
        <Fragment>
            <ul className="category_render-wrap">
                {CategoriesData.map((item, key) => {
                    return (
                        <Link to={item.page}>
                            <li className="row category_item__icon" key={key}>
                                <span className="catg_icon col">
                                    <img src={item.icon} alt={item.alt} />
                                </span>
                                <span className="category_item__title col">

                                    {item.title}

                                </span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </Fragment>
    )
}

export default Category
