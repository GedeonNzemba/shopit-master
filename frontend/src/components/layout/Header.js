import React, { Fragment, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'
import { Button, Col, Dropdown, Row } from 'react-bootstrap'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import Search from './Search'

import '../../App.css'

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }




    return (
        <Fragment>
            <header className="farm-header" style={{ zIndex: '999' }} id="homeView">
                <section className="wrapper">
                    <div className="inner_header  row">

                        {/* LOGO */}
                        <Col className="navbrand">
                            <Link to="/">
                                <img src="/images/logo.png" alt="logo" />
                            </Link>
                        </Col>

                        {/* SEARCG BAR */}
                        <Col className="searchbar">
                            <Route render={({ history }) => <Search history={history} />} />
                        </Col>





                        {/* RIGHT SIDE TOOLS */}
                        <Col className="utilbar">

                            {/* LOGIN */}
                            {/* <div className="login" o style={{ display: 'flex' }} id="loginswitch">
                                <div style={{ float: 'left', marginRight: '1rem' }}>
                                    <i className="farm_header_nav_svg far fa-user"></i>
                                </div>
                                <div>
                                    <p className="farm_header_nav_item" style={{ float: 'left' }}>Login</p>
                                    <RiArrowDropDownLine id="dropdown_svg" />
                                    <RiArrowDropUpLine id="dropup_svg" />
                                </div>
                            </div> */}
                            {user ? (
                                <div className="ml-4 dropdown d-inline">
                                    <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                        <figure className="avatar avatar-nav">
                                            <img
                                                src={user.avatar && user.avatar.url}
                                                alt={user && user.name}
                                                className="rounded-circle"
                                            />
                                        </figure>
                                        <span>{user && user.name}</span>
                                    </Link>

                                    <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                        {user && user.role === 'admin' && (
                                            <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                        )}
                                        <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                        <Link className="dropdown-item" to="/me">Profile</Link>
                                        <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                            Logout
                                </Link>

                                    </div>


                                </div>

                            )
                                : !loading &&
                                <Link to="/login" >
                                    <div className="login" o style={{ display: 'flex' }} id="loginswitch">
                                        <div style={{ float: 'left', marginRight: '1rem' }}>
                                            <i className="farm_header_nav_svg far fa-user"></i>
                                        </div>
                                        <div>
                                            <p className="farm_header_nav_item" style={{ float: 'left' }}>Login</p>
                                            {/* <RiArrowDropDownLine id="dropdown_svg" /> */}
                                            {/* <RiArrowDropUpLine id="dropup_svg" /> */}
                                        </div>
                                    </div>
                                </Link>}
                            {/* LOGIN ENDS */}
                            {/* HELP */}
                            {/* <Col className="help">
                                <span style={{ float: 'left' }}>
                                    <i className="farm_header_nav_svg far fa-question-circle"></i>
                                </span>
                                <span>
                                    <p className="farm_header_nav_item" style={{ float: 'left', marginLeft: '1rem' }}>Help</p>
                                    <RiArrowDropDownLine />
                                </span>
                            </Col> */}
                            {/* CART */}
                            <Link to="/cart" className="user_cart" style={{ textDecoration: 'none' }} >
                                <div className="user_cart-row">
                                    <div className="user_cart-col">
                                        <span style={{ float: 'left', marginRight: '1rem' }}>
                                            <i className=" fas fa-shopping-cart"></i>
                                            <span className="ml-1" id="cart_count">{cartItems.length}</span>
                                        </span>
                                    </div>
                                    <div className="user_cart-col">
                                        <span>
                                            <p className="farm_header_nav_item" >Cart</p>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </div>
                </section>
            </header>









            {/* <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/shopit_logo.png" />
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>


                        </div>

                    ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}


                </div>
            </nav> */}
        </Fragment>
    )
}

export default Header
