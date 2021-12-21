import React, { useEffect, useState, useContext, memo } from 'react'
import Paper from '@mui/material/Paper';
import { noCase } from 'change-case';
import { Icon } from '@iconify/react';
import { set, sub, formatDistanceToNow } from 'date-fns';
import { Popover } from '@mui/material';
import { Chip } from '@mui/material';
import { OrderContext } from '../../Context/OrderContext'
import { Link } from 'react-router-dom'
import { ListItem, ListItemIcon } from '@mui/material'
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
    Stack,
    ListItemText,
    ListSubheader,
    ListItemAvatar,
    ListItemButton
} from '@mui/material';
import bellFill from '@iconify/icons-eva/bell-fill';
import clockFill from '@iconify/icons-eva/clock-fill';
import doneAllFill from '@iconify/icons-eva/done-all-fill';
import './notify.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts } from '../../../../../actions/productActions'
import { allOrders } from '../../../../../actions/orderActions'
import { allUsers } from '../../../../../actions/userActions'
import { Time } from './icons/Notice'

function Notification() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(allOrders())
        dispatch(allUsers())
    }, [dispatch])

    const { products } = useSelector(state => state.products)
    const { users } = useSelector(state => state.allUsers)
    const { orders, totalAmount, loading } = useSelector(state => state.allOrders)


    // ADD COLORS TO IDENTIFY EACH ORDER TYPE $$
    //  REMOVE BOTTOM AND TOP MARGIN. $$
    // REMOVE FIXED HEIGHT AND WIDTH  $$
    // MAKE IT POP UP

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    mt: 8,
                    width: '40em',
                    height: 'auto',
                },
            }}
            id="notification__wrapper"
        >
            <Paper elevation={3} className="notification">
                {/* NOTIFIC HEADER */}
                <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }} id="notification__header">
                    <Box sx={{ flexGrow: 1 }} >
                        <Typography variant="h6" className="__heading">Notifications</Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }} className="__msgText">
                            You have {orders && orders.length} new orders
                        </Typography>
                    </Box>


                    <Tooltip title=" Mark all as read">
                        <IconButton color="primary" className="__iconNotice">
                            <Icon icon={doneAllFill} width={20} height={20} />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Divider />

                <Box sx={{ flexGrow: 1 }} id="notification__newNotice">
                    <Typography variant="h6" className="__heading">
                        new
                    </Typography>

                    <Box className="__newNotice">
                        <List >
                            {orders && orders.map((order, index) => (
                                <>
                                    {order.orderStatus === 'Processing' && 
                                    <Link to={`/admin/order/${order._id}`} key={index}>
                                        <ListItem button className="__listItem __processing">
                                            <ListItemIcon>
                                                <IconButton>
                                                    <Avatar
                                                        src='https://minimal-kit-react.vercel.app/static/icons/ic_notification_package.svg'
                                                        alt='new order'
                                                        className="__avatar_img"
                                                    />                                                   
                                                </IconButton>
                                            </ListItemIcon>
                                            <div className="__content">
                                                <>
                                                    <Stack direction='row' spacing={2} sx={{mb: 1.5}} className="__content_stack" >
                                                        <Chip label={order.shippingInfo.name && order.shippingInfo.name} className="__orderName" />
                                                        <Chip  color="primary" label={order.shippingInfo.city && order.shippingInfo.city} className="__orderCity" />                                                       
                                                    </Stack>
                                                    
                                                    <Typography variant="h5" className="__noticeTitle">
                                                        New order placed !! <span>waiting to be process</span>
                                                    </Typography>
                                                    <span className="__noticeTime"><Time />{order.createdAt && order.createdAt}</span>
                                                </>
                                            </div>
                                        </ListItem>
                                    </Link>
                                }
                                </>
                            ))}
                        </List>
                    </Box>
                    
                    <Typography variant="h6" className="__heading">
                        before that
                    </Typography>

                    <Box className="__oldNotice">
                        <List>
                        {orders && orders.map((order, index) => {
                                return (
                                    <Link to={`/admin/order/${order._id}`} key={index}>
                                        <ListItem button className="__listItem __processing">
                                            <ListItemIcon>
                                                <IconButton>
                                                    {order.orderStatus === 'Delivered' && 
                                                        <Avatar
                                                            src='https://minimal-kit-react.vercel.app/static/icons/ic_notification_shipping.svg'
                                                            alt='new order'
                                                            className="__avatar_img"
                                                        />
                                                    }
                                                </IconButton>
                                            </ListItemIcon>
                                            <div className="__content">
                                                {order.orderStatus === 'Delivered' && 
                                                    <>
                                                        <Stack direction='row' spacing={2} sx={{mb: 1.5}} className="__content_stack" >
                                                            <Chip label={order.shippingInfo.name && order.shippingInfo.name} className="__orderName" />
                                                            <Chip  color="secondary" label={order.shippingInfo.city && order.shippingInfo.city} className="__orderCity" />                                                       
                                                        </Stack>
                                                        
                                                        <Typography variant="h5" className="__noticeTitle">
                                                            Order was Delivered. <span>no action required</span>
                                                        </Typography>
                                                        <span className="__noticeTime"><Time />{order.createdAt && order.createdAt}</span>
                                                    </>
                                                }
                                            </div>
                                        </ListItem>
                                    </Link>
                                )
                            })}
                        </List>
                    </Box>
                </Box>


            </Paper>
        </Box>
    )
}

export default memo(Notification)