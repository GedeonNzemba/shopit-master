import React, { Fragment, useEffect, useState } from 'react'
import { allOrders } from '../../actions/orderActions'
import { useDispatch, useSelector } from 'react-redux'
import { Translator } from 'react-auto-translate';
import {
    Box,
    List,
    Badge,
    Button,
    Avatar,
    Tooltip,
    Divider,
    IconButton,
    Typography,
    ListItemText,
    ListSubheader,
    ListItemAvatar,
    ListItemButton
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Bar from './main/utils/Bar';
import SideDrawer from './main/utils/Drawer'
import Grid from '@mui/material/Grid';
import Main from './main/utils/Main'
import './main/utils/drawer/drawer.css'
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import doneAllFill from '@iconify/icons-eva/done-all-fill';
import MetaData from '../layout/MetaData'
import Stack from '@mui/material/Stack';
import axios from 'axios'


const drawerWidth = 300;

const Dashboard = () => {
    const dispatch = useDispatch();
    const [isDashboard, setIsDashboard] = useState();

    function removeHeader() {
        const header = document.querySelector('.farm-header');
        const footer = document.querySelector('#contactFormWrapper');
        header && (header.style.display = 'none');
        footer && (footer.style.display = 'none');
    }

    function mountHeader() {
        const header = document.querySelector('.farm-header');
        const footer = document.querySelector('#contactFormWrapper');
        header && (header.style.display = 'block');
        footer && (footer.style.display = 'block');
    }

    function checkDashboard() {
        const dashboard = '/dashboard';

        let pathName = window.location.pathname;

        if (pathName === dashboard) {
            removeHeader();
        }



        // (pathName === dashboard) && setIsDashboard(previousState => { return { ...previousState, isDashboard: true } });
        // (pathName !== dashboard) && setIsDashboard(previousState => { return { ...previousState, isDashboard: false } })
    }


    useEffect(() => {
        checkDashboard()




        return () => {
            mountHeader();
        }

    }, [])

    useEffect(() => {
        const upProfil = document.getElementById('UpdateProfile');
        upProfil.style.display = 'none';


        const app = document.getElementsByClassName('App')[0];
        app.classList.add('dashboard_main');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';


        return () => {
            app.classList.remove('dashboard_main');
            upProfil.style.display = 'block';
            newPass.style.display = 'block';
        }
    }, [])

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { orders } = useSelector(state => state.allOrders)


    useEffect(() => {
        // dispatch(getAdminProducts())
        dispatch(allOrders())
        // dispatch(allUsers())
      
    }, [dispatch])

    let screenWidth = window.innerWidth;
   
    
    

    return (
        <Fragment>
            <MetaData title={'Admin Dashboard'} />
            <Grid container spacing={2} id="dashboard__top-container">
                <CssBaseline />
                {screenWidth <= 899 &&
                    <Grid item xs={12} className="admin__main-viewer">
                        <Stack direction="column" spacing={2} className="main_dash">
                            <Bar handleToggle='' drawerWidth={drawerWidth} />
                            <SideDrawer drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleToggle='' />
                            <Main drawerWidth={drawerWidth} nmo={orders} />
                        </Stack>
                    </Grid>
                }
                {screenWidth >= 900 &&
                    <>
                        <Grid item xs={2.8} className="admin__sidedrawer-list">
                            <SideDrawer drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleToggle='' />
                        </Grid>
                        <Grid item xs={9} className="admin__main-viewer">
                            <Stack direction="column" spacing={2} className="main_dash">
                                <Bar handleToggle='' drawerWidth={drawerWidth} />
                                
                                    <Main drawerWidth={drawerWidth} nmo={orders} />
                              
                            </Stack>
                        </Grid>
                    </>
                }
            </Grid>
        </Fragment>
    )
}

export default Dashboard
