import React, { useState } from 'react'
import Crumb from '../../components/farm/Category/breadcrumb/Breadcrumb'
import 'rc-slider/assets/index.css';
import backToFarm from '../../images/category/forwardslash.svg'
import { HiViewGrid } from 'react-icons/hi'
import { FaListUl } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Select from '../layout/Select'


export default function BreadCrumb({ props }) {



    // let count = productsCount;
    // if (props.keyword) {
    //     count = filteredProductsCount
    // }

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
                {/* {
                    props.name || props.size || props.rating ?
                        (
                            <>
                                <div className="userFilter" id="remove_filter">
                                    <h4>/ Filter:</h4>
                                    <div className="remove_filter" >
                                        <span><i>{props.name}</i></span>
                                        <span><i>{props.size}</i></span>
                                        <span><i> {props.rating ? `rating: ${props.rating}` : ''}</i></span>

                                        <ThemeProvider theme={theme}>
                                            <Buttone
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button + ' clear_filter'}
                                                startIcon={<DeleteIcon />}
                                                onClick={props.handleClearFilter}
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
                } */}
            </div>

            <div className="search-product-wrap" >
                <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                        <Select />
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                        <h6>
                            <span>71</span>
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
    );

}
