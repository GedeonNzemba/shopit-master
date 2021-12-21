import React, {useEffect, useState, useContext} from 'react'
import Paper from '@mui/material/Paper';
import { noCase } from 'change-case';
import { Icon } from '@iconify/react';
import { set, sub, formatDistanceToNow } from 'date-fns';
import { Popover } from '@mui/material';

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
import bellFill from '@iconify/icons-eva/bell-fill';
import clockFill from '@iconify/icons-eva/clock-fill';
import doneAllFill from '@iconify/icons-eva/done-all-fill';
import './main/utils/Notification/notify.css'
import { useDispatch, useSelector } from 'react-redux'
import { allOrders } from '../../actions/orderActions'

function Notify() {
    const dispatch = useDispatch();    

    useEffect(() => {
        dispatch(allOrders())
    }, [dispatch])

    const { orders, totalAmount, loading } = useSelector(state => state.allOrders)

    console.log(orders);

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 450,
                    height: 600,
                },
            }}
        >
            <Paper elevation={3} className="notification">
                    <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="subtitle1">Notifications You have {orders ? orders.lenght : 'nothing'} </Typography>
                            <Typography variant="body2" sx={{ color: '#000000' }}>
                                You have {orders && orders.lenght}
                            </Typography>
                        </Box>

                       
                            <Tooltip title=" Mark all as read">
                                <IconButton color="primary" >
                                    <Icon icon={doneAllFill} width={20} height={20} />
                                </IconButton>
                            </Tooltip>
                    </Box>

                <Divider />


            </Paper>
        </Box>
    )
}

export default Notify