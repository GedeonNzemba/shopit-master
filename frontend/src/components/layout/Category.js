import React, { Fragment, useState } from 'react'
import { GiRoastChicken, GiGoat, GiSyringe } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import CategoriesData from './categories.json'

const Category = () => {


    const [category, setCategory] = useState('');



    const icon = [
        <GiRoastChicken />,
        <img src={require('./eggs.svg')} alt="eggs" />,
        <img src={require('./pig.svg')} alt="pig" />,
        <GiGoat />,
        <img src={require('./paw-solid.svg')} alt="paw" />,
        <GiSyringe />,
        < img src={require('./paw-solid.svg')} alt="paw" />
    ]






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
