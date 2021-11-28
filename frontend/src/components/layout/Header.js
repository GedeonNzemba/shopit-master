import React, { Fragment, useState } from 'react'

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';

import {useTheme } from '@material-ui/core/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

import { Route, Link } from 'react-router-dom'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import SideDrawer from "./Drawer";
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'
import { Col } from 'react-bootstrap'
import Search from './Search'
import Avatar from '@mui/material/Avatar';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import '../../App.css'
import MobileSideBar from './MobileSideBarFarm';
import Divider from '@mui/material/Divider';
import poultry from './categoryImages/poultry.svg'
import egg from './categoryImages/egg.svg'
import pig from './categoryImages/pig.svg'
import sheep from './categoryImages/sheep.svg'
import park from './categoryImages/park.svg'
import artificial from './categoryImages/artificial.svg'
import livestock from './categoryImages/livestock.svg'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: '1.6rem',
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const drawerWidth = 240;

const SearchBox = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
    font: {
        fontSize: '1.6rem!important'
    },
    root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
        '& * span': {
            marginLeft: '0!important',
        }
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
      },
}));


const Header = () => {
    const classes = useStyles();

    const categories = [
        {
            "title": "Poultry",
            "icon": poultry,
            "atl": "LaiWiv",
            "page": "/product-category/poultry"
        },
        {
            "title": "Fresh Eggs",
            "icon": egg,
            "atl": "KTrngrIo",
            "page": "/product-category/fresh-eggs"
        },
        {
            "title": "Pigsty",
            "icon": pig,
            "atl": "EyCVOYElB",
            "page": "/product-category/pigsty"
        },
        {
            "title": "Goats & Mammals",
            "icon": sheep,
            "atl": "EyCVOYElP",
            "page": "/product-category/goat-sheep-mammals"
        },
        {
            "title": "Park Animals",
            "icon": park,
            "atl": "XgcabxkzflU",
            "page": "/product-category/park-animals"
        },
        {
            "title": "Artificial Insemination",
            "icon": artificial,
            "atl": "tkTOAnrTpGM",
            "page": "/product-category/purebred-seed"
        },
        {
            "title": "Food & Livestock",
            "icon": livestock,
            "atl": "nnFiNyv",
            "page": "/product-category/livestock-food"
        }
    ]

    
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
    const [drawer, setDrawer] = useState(true);

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
        handleDrawerToggle()
    }

    const SearchBar = () => {
        return (
            <Box style={{display: 'flex', flex: 'auto', justifyContent: 'center'}} >
                <Route render={({ history }) => <Search history={history} />} />
            </Box>
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

    let cart_amount = <span id="cart_amount">{cartItems.length}</span>;

    const Bar = () => {
        return (
            <Stack direction="row" sx={{ paddingLeft: 2, paddingRight: 2, flex: '1' }}  spacing={2} className="inner__navigation-mb">
                <Box style={{alignSelf: 'center'}}>
                        <div className="navbrand">
                            <Link to="/">
                                <img src="/images/logo.png" alt="logo" />
                            </Link>
                        </div>
                    {/* <Stack direction="row" spacing={2}>
                        <MenuIcon id="menu_icon-farm" edge="start" style={{cursor: 'pointer'}} onClick={handleDrawerToggle} />
                    </Stack> */}
                </Box>

                <Box style={{flex: 'auto'}} id="desktop_searfield_notSigned">
                    <Route render={({ history }) => <SearchField history={history} />} />
                </Box>

                <Box style={{flex: '1', maxWidth: 'fit-content'}}>
                    {window.innerWidth >= 900 ?
                        <Stack direction="row" spacing={2} id="account_cart_stack">
                            <Link to="/login" style={{ textDecoration: 'none', placeSelf: 'center' }} >
                                <IconButton>
                                    <Stack direction="row" spacing={2}>
                                        <AccountCircleOutlinedIcon />
                                        <Typography style={{placeSelf: 'center', marginLeft: '.3rem', fontSize: ''}}>Login</Typography>
                                    </Stack>
                                </IconButton>
                            </Link>

                            <Link to="/cart" style={{ textDecoration: 'none', placeSelf: 'center', marginLeft: '0' }} >
                                <IconButton aria-label="cart" id="icon_btn-badge" style={{marginLeft: '0'}}>
                                    <Badge badgeContent={cart_amount} id="badge_wrapper" color="secondary">
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </Stack>
                    :
                        <MenuIcon id="menu_icon-farm" edge="start" style={{cursor: 'pointer'}} onClick={handleDrawerToggle} />
                    }
                </Box>
            </Stack>
        )
    }

    const SearchField = ({history}) => {
        const [keyword, setKeyword] = useState('');

        const searchHandler = (e) => {
            e.preventDefault()

            if (keyword.trim()) {
                history.push(`/search/${keyword}`)
            } else {
                history.push('/search')
            }

           if(window.innerWidth >= 500 ) {
               return null
           } else {
            handleDrawerToggle()
           }
        }

       

        return (
            <Stack direction={window.innerWidth >= 500 ? 'row' : 'column'} spacing={2} id="search_sidebar">
                <SearchBox id="search__box" onSubmit={searchHandler} autocomplete="off">
                    <SearchIconWrapper id="search__wrapper">
                        <SearchIcon />
                        </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        id="input_base__search"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </SearchBox>

               {window.innerWidth >= 600 ? <Button id="search_btn" onClick={searchHandler} size="small" >search</Button> : null}
            </Stack>
        )
    }

    const BarMobile = () => {
        return (
            <Stack direction="row" sx={{ paddingLeft: 2, paddingRight: 2 }} spacing={2} className="inner__navigation-mb">
                <Box style={{ alignSelf: 'center' }}>                    
                    <div className="navbrand">
                        <Link to="/">
                            <img src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </Box>
                <Box style={{ alignSelf: 'center' }}>
                    <MenuIcon id="menu_icon-farm" edge="start" style={{ cursor: 'pointer' }} onClick={handleDrawerToggle} />
                </Box>
            </Stack>
        )
    }

    const Account = () => {
        return (
            <>
                {user ?
                    (
                        <>
                            <Divider style={{ margin: '.8rem 1.6rem', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                                <Stack direction='row' spacing={2} >
                                    <Avatar
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="avatar_img_sidebar"
                                    />
                                    <ListItemText primary={user && user.name} id="list_item_text" style={{color: '#ffffff!important', textTransform: 'capitalize'}} />
                                </Stack>
                            </Divider>
                            {user && user.role === 'admin' && (
                                <Link to="/dashboard" style={{ textDecoration: 'none', placeSelf: 'center' }} onClick={handleDrawerToggle}>
                                    <Stack direction="row" spacing={2} style={{marginTop: '2rem'}}>
                                        <AdminPanelSettingsIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                                        <ListItemText primary={'Dashboard'} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                    </Stack>
                                </Link>
                            )}
                            <Link to="/orders/me" style={{ textDecoration: 'none', placeSelf: 'center' }} onClick={handleDrawerToggle}>
                                <Box style={{ margin: '1.2rem 0' }}>
                                    <Stack direction="row" spacing={2} style={user.role !== 'admin' ? {marginTop: '2rem'} : {}}>
                                        <LocalOfferIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                                        <ListItemText primary={'Orders'} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                    </Stack>
                                </Box>
                            </Link>
                            <Link to="/me" style={{ textDecoration: 'none', placeSelf: 'center' }} onClick={handleDrawerToggle}>
                               <Box style={{ margin: '1.2rem 0' }}>
                               <Stack direction="row" spacing={2} >
                                    <ManageAccountsIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                                    <ListItemText primary={'Profile'} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                </Stack>
                               </Box>
                            </Link>
                            <Link to="/" style={{ textDecoration: 'none', placeSelf: 'center' }} onClick={logoutHandler}>
                                <Stack direction="row" spacing={2} >
                                    <LogoutIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                                    <ListItemText primary={'Logout'} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                </Stack>
                            </Link>
                        </>
                    )
                    :
                    (
                        <>
                            <Divider style={{ margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)' }} className="divider_sidebar">
                                Account
                            </Divider>
                            <Link to="/login" style={{ textDecoration: 'none', placeSelf: 'center' }} onClick={handleDrawerToggle}>
                                <Stack direction="row" spacing={2} >
                                    <AccountCircleOutlinedIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                                    <ListItemText primary={'Login'} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                </Stack>
                            </Link>
                            <Link to="/cart" style={{ textDecoration: 'none', placeSelf: 'center' }} onClick={handleDrawerToggle}>
                                <Stack direction="row" spacing={2} >
                                    <IconButton aria-label="cart" id="icon_btn-badge" style={{ marginLeft: '0' }}>
                                        <Badge badgeContent={cart_amount} id="badge_wrapper" color="secondary">
                                            <ShoppingCartOutlinedIcon className="icon_svg_sidebar" id="cart_svg_sidebar" />
                                        </Badge>
                                    </IconButton>
                                    <ListItemText primary={'Cart'} id="list_item_text" style={{ color: '#ffffff!important' }} />
                                </Stack>
                            </Link>
                        </>
                    )}

            </>
        )
    }

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
      setMobileOpen(!mobileOpen)
    }
  const sidedrawer = (
      <div>
        <List>
       {window.innerWidth >= 500 ? null : ( <ListItem ><Route render={({ history }) => <SearchField history={history} />} /></ListItem>)}
        
            <ListItem style={{display: 'block'}}>
                <Account />
            </ListItem>
            
    
        <Divider style={{margin: '8px 16px', borderColor: 'rgb(255 255 255 / 12%)'}} className="divider_sidebar">
            Category
        </Divider>
            {categories.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <Link to={item.page} style={{width: '100%'}} onClick={handleDrawerToggle}>
                            <Stack direction='row' spacing={2} >
                                <Avatar
                                    alt={item.atl}
                                    src={item.icon}
                                    className="avatar_img_sidebar"
                                />
                                <ListItemText primary={item.title} id="list_item_text" style={{color: '#ffffff!important'}} />
                            </Stack>
                        </Link>
                    </ListItem>
                )
            })}
           
        </List>
      </div>
    );

    

    const Draw = () => {
        return (
            <div className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            id="drawer__container-wrapper"
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {sidedrawer}

          </Drawer>
        </Hidden>
<Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {sidedrawer}
          </Drawer>  
        </Hidden>
      </div>
        )
    }

    function CustomizedMenus() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        return (
          <div>
            <Button
              id="demo-customized-button"
              aria-controls="demo-customized-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Stack direction="row" spacing={2}>
                    <Avatar
                        src={user.avatar && user.avatar.url}
                        alt={user && user.name}
                        className="avatar_img_sidebar"
                    />
                    <ListItemText primary={user && user.name} id="list_item_text" style={{textTransform: 'capitalize'}} />
                </Stack>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {user && user.role === 'admin' && (
                   <Link to="/dashboard" className="link__dropdown_item">
                       <MenuItem onClick={handleClose} disableRipple className="dropDown_menu_list__item">
                       <AdminPanelSettingsIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                       Dashboard
                    </MenuItem>
                    </Link>
                )}
                <Link to="/me" className="link__dropdown_item">
                <MenuItem onClick={handleClose} disableRipple className="dropDown_menu_list__item">
                    <ManageAccountsIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                    Profile
                </MenuItem>
                </Link>
              <Divider sx={{ my: 0.5 }} />
              <Link to="/" className="link__dropdown_item" onClick={logoutHandler}>
                <MenuItem onClick={handleClose} disableRipple className="dropDown_menu_list__item">
                <LogoutIcon className="icon_svg_sidebar" id="login_svg_sidebar" />
                    Sign Out
                </MenuItem>
             </Link>
            </StyledMenu>
          </div>
        );
      }


    return (
        <Fragment>
            <header className="farm-header" id="homeView">
                <section className={`wrapper ${user ? '' : ' isNot__login'}`}>
                    {
                        user ?
                            (
                                <Stack direction="row" spacing={2}  sx={{ paddingLeft: 2, paddingRight: 2 }} id="stack_header_mobile">

                                    {/* LOGO */}
                                    <Box style={{flex: '1', maxWidth: 'fit-content'}}>
                                        <Link to="/">
                                            <img src="/images/logo.png" id="logo_avatar" alt="logo" />
                                        </Link>
                                    </Box>

                                    {/* SEARCG BAR */}
                                   {window.innerWidth < 500 ? null :  <SearchBar />}
                                    {/* {window.innerWidth === 500 ? <Route render={({ history }) => <SearchField history={history} />} /> : null} */}

                                    {/* RIGHT SIDE TOOLS */}
                                    <Box style={{ alignSelf: 'center', flex: '1' }} id="box_menu_icon">
                                        <Stack direction="row" spacing={2} style={{alignItems: 'center'}}>
                                            <Box>
                                            <CustomizedMenus />
                                            </Box>
                                            {/* <IconButton>
                                                <Stack direction="row" spacing={2}>
                                                    <Avatar
                                                        src={user.avatar && user.avatar.url}
                                                        alt={user && user.name}
                                                        className="avatar_img_sidebar"
                                                    />
                                                    <ListItemText primary={user && user.name} id="list_item_text" style={{textTransform: 'capitalize'}} />
                                                </Stack>
                                            </IconButton> */}
                                            
                                        <Box>
                                        <Link to="/cart" style={{ textDecoration: 'none', placeSelf: 'center', marginLeft: '0' }} >
                                            <IconButton aria-label="cart" id="icon_btn-badge" style={{marginLeft: '0'}}>
                                                <Badge badgeContent={cart_amount} id="badge_wrapper" color="secondary">
                                                    <ShoppingCartOutlinedIcon />
                                                </Badge>
                                            </IconButton>
                                        </Link>
                                        </Box>
                                       
                                        {/* <MenuIcon id="menu_icon-farm" edge="start" style={{ cursor: 'pointer' }} onClick={handleDrawerToggle} /> */}
                                        </Stack>
                                    </Box>
                                </Stack>
                            )
                            :
                            (
                                <>
                                    {window.innerWidth < 500 ? <BarMobile /> : <Bar />}
                                </>
                            )

                    }
                    {mobileOpen ? <Draw /> : null}

                </section>
            </header>
        </Fragment>
    )
}

export default Header


