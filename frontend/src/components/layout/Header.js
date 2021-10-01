import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';


import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'
import { Col } from 'react-bootstrap'
import Search from './Search'

import '../../App.css'
import MobileSideBar from './MobileSideBarFarm';

const Header = () => {

    // const [mobile, setMobile] = useState({ defaultMode: false, tableMode: false, mobileMode: false })

    // if (window.screen.width <= 1199) {
    //     setMobile({ defaultMode: true })
    //     // console.log('WIDTH: ' + mobile)
    // } else if (window.screen.width <= 768) {
    //     setMobile({ tabletMode: true })
    //     console.log("TABLE: " + mobile.tableMode)
    // } else {
    //     setMobile({ defaultMode: false })
    //}


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    const SearchBar = () => {
        return (
            <Col className="searchbar">
                <Route render={({ history }) => <Search history={history} />} />
            </Col>
        )
    }
    const CardInfo = () => {
        return (
            <Link to="/cart" className="user_cart" style={{ textDecoration: 'none' }} >
                <div className="user_cart-row pd">
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
        )
    }
    const Login = () => {
        return (
            <Link to="/login" >
                <div className="login pd" o style={{ display: 'flex' }} id="loginswitch">
                    <div style={{ float: 'left', marginRight: '1rem' }}>
                        <i className="farm_header_nav_svg far fa-user"></i>
                    </div>
                    <div>
                        <p className="farm_header_nav_item" style={{ float: 'left' }}>Login</p>

                    </div>
                </div>
            </Link>
        )
    }




    return (
        <Fragment>
            <header className="farm-header" id="homeView">
                <section className="wrapper">
                    <div className="inner_header  row">

                        {/* LOGO */}
                        <Col className="navbrand">
                            <Link to="/">
                                <img src="/images/logo.png" alt="logo" />
                            </Link>
                        </Col>

                        {/* SEARCG BAR */}
                        <SearchBar />





                        {/* RIGHT SIDE TOOLS */}
                        <Col className="utilbar">
                            {user ? (
                                <>
                                    {window.screen.width <= 1199 ?
                                        (
                                            <div className="utilbar__mobile">
                                                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                                                    My Account
                                                </Button>
                                                <Popover
                                                    id='popup'
                                                    open={open}
                                                    anchorEl={anchorEl}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }}
                                                >
                                                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                </Popover>
                                            </div>
                                        )

                                        :

                                        (
                                            <>
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
                                            </>
                                        )

                                    }
                                </>


                            )
                                : !loading &&

                                <>

                                    {window.screen.width <= 1199 ?
                                        (
                                            <div className="utilbar__mobile">
                                                {window.screen.width <= 768 ?
                                                    <MenuIcon aria-describedby={id} onClick={handleClick} />
                                                    :
                                                    <Button style={{ fontSize: '1.4rem' }} aria-describedby={id} variant="contained" startIcon={<ArrowDropDownIcon />} onClick={handleClick}>
                                                        My Account
                                                    </Button>

                                                }

                                                {window.screen.width <= 500 ?
                                                    <Popover
                                                        id={'popup'}
                                                        open={open}
                                                        anchorEl={anchorEl}
                                                        onClose={handleClose}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        style={{
                                                            borderRadius: '10px'
                                                        }}
                                                    >
                                                        <MobileSideBar searchBar={<SearchBar />} cardInfo={<CardInfo />} login={<Login />} />
                                                    </Popover>
                                                    :
                                                    <Popover
                                                        id={'popup'}
                                                        open={open}
                                                        anchorEl={anchorEl}
                                                        onClose={handleClose}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        style={{
                                                            borderRadius: '10px'
                                                        }}
                                                    >
                                                        <Link to="/login" >
                                                            <div className="login pd" o style={{ display: 'flex' }} id="loginswitch">
                                                                <div style={{ float: 'left', marginRight: '1rem' }}>
                                                                    <i className="farm_header_nav_svg far fa-user"></i>
                                                                </div>
                                                                <div>
                                                                    <p className="farm_header_nav_item" style={{ float: 'left' }}>Login</p>

                                                                </div>
                                                            </div>
                                                        </Link>

                                                        <Link to="/cart" className="user_cart" style={{ textDecoration: 'none' }} >
                                                            <div className="user_cart-row pd">
                                                                <div className="user_cart-col">
                                                                    <span style={{ float: 'left', marginRight: '1rem' }}>
                                                                        <i className=" fas fa-shopping-cart"></i>
                                                                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                                                                    </span>
                                                                </div>
                                                                <div className="user_cart-col">
                                                                    <span style={{ marginLeft: 'unset!important' }}>
                                                                        <p className="farm_header_nav_item" >Cart</p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </Popover>
                                                }
                                            </div>
                                        )

                                        :

                                        (
                                            <>
                                                <Login />

                                                <CardInfo />
                                            </>
                                        )

                                    }
                                </>




                            }


                        </Col>
                    </div>
                </section>
            </header>
        </Fragment>
    )
}

export default Header
