import React, { useEffect, useState, memo } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import {  useDispatch, useSelector } from 'react-redux'
import { allOrders } from '../../../../actions/orderActions'
import Notification from './Notification/Notification';
import './bar.css'
import Search from '../../../layout/Search'

    

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


function Bar({ drawerWidth, match }) {

    
    const dispatch = useDispatch();    
    const { user } = useSelector(state => state.auth)
    const { orders } = useSelector(state => state.allOrders)

    
    useEffect(() => {
        dispatch(allOrders())
    }, [dispatch])

    const toggleClass = () => {
        let notification = document.getElementById('notification__wrapper');
        notification.classList.toggle('is_open');

        // remove class by clicking around
        let farm = document.getElementById('farmSHOP');

        farm.addEventListener('click', () => { notification.classList.remove('is_open') });
    }

    const handleSideBar = () => {
        const mainDash = document.getElementsByClassName('main_dash')[0]
        const sidebar = document.getElementById('admin__dashboard')
        sidebar.classList.add('dashboard__sidebar_open');
        mainDash.classList.add('main_dash_lay');
    }


    return (
        <AppBar
            position="fixed"
            sx={ window.innerWidth <= 899 ? {
                width: '100%'
            } :
            {
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
            className="admin__appBar"
        >
            <Toolbar>
                <Stack direction="row" className="admin__toolbar_innerWrap">
                    {window.innerWidth <= 899 && 
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleSideBar}
                        color="inherit"
                        
                      >
                        <MenuIcon className="admin__dashboard_menu" />
                      </IconButton>
                    }
                    {/* <Search className="admin__search">
                        <SearchIconWrapper className="admin__searchWrap">
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search products"
                            inputProps={{ 'aria-label': 'search' }}
                            className="admin__searchInput"
                        />
                    </Search> */}
                   {window.innerWidth <= 499 ? null :  <Search />}

                    <Notification />

                    <Stack direction="row" spacing={2} className="admin__container-toolbarRight">
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={toggleClass}
                        >
                            <Badge badgeContent={orders && orders.length} color="error" className="admin__badgeNotify">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <Avatar
                            src={user.avatar && user.avatar.url}
                            alt={user && user.name}
                            className="admin__user_avatar"
                        />
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default memo(Bar);