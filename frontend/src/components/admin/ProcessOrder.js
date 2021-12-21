import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import MenuItem from '@mui/material/MenuItem';
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import InputLabel from '@mui/material/InputLabel';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@mui/material/Chip';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import { getOrderDetails, updateOrder, clearErrors } from '../../actions/orderActions'
import { UPDATE_ORDER_RESET } from '../../constants/orderConstants'
import { ListItemIcon } from '@material-ui/core';
import delivered from '../../images/delivered.png';
import process from '../../images/processing.jpg'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProcessOrder = ({ match }) => {

       // -------------------------------REMOVE HEADER AND FOOTER -------------------------------
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
        removeHeader();
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

    // -----------------------------------------------------------------------------------------------


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

    const [status, setStatus] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, order = {} } = useSelector(state => state.orderDetails)
    const { shippingInfo, orderItems, paymentInfo, user, totalPrice, orderStatus } = order
    const { error, isUpdated } = useSelector(state => state.order)

    const orderId = match.params.id;

    useEffect(() => {

        dispatch(getOrderDetails(orderId))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }


        if (isUpdated) {
            alert.success('Order updated successfully');
            dispatch({ type: UPDATE_ORDER_RESET })
        }

    }, [dispatch, alert, error, isUpdated, orderId])


    const updateOrderHandler = (id) => {

        const formData = new FormData();
        formData.set('status', status);

        dispatch(updateOrder(id, formData))
    }

    const shippingDetails = shippingInfo && `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`
    const isPaid = paymentInfo && paymentInfo.status === 'succeeded' ? true : false



    return (
        <Fragment>
            <MetaData title={`Process Order # ${order && order._id}`} />
            <Container style={{ paddingTop: '5%', paddingBottom: '2%', maxWidth: '100%', paddingLeft: '0', paddingRight: '0' }} id="update_product__container">
                <Box sx={{ flexGrow: 1 }} id="process_order-wrapper">
                    <Grid container className="processOrder__container_grid" justifyContent="center" alignItems="center" columns={16} spacing={3}>
                        <Grid item xs={8} className="processOrder__grid_item">
                            <Box style={{ padding: '2rem' }} className="processOrder__inner">
                                <Typography variant="h3" sx={{mb: 1}}>Order # {order._id}</Typography>
                                <List component="div" aria-label="mailbox folders">
                                    <Divider textAlign="left"><Chip sx={{fontSize: '1.4rem!important'}} label="Shipping Info" /></Divider>
                                    <ListItem button sx={{mt: 2}}>
                                        <Stack direction="row" spacing={2}>
                                            <b><ListItemText className="po_item_title" primary="Name: " /></b>
                                            <ListItemText primary={user && user.name}  sx={{alignSelf: 'center'}} />
                                        </Stack>
                                    </ListItem>

                                    <ListItem button>
                                        <Stack direction="row" spacing={2}>
                                            <b><ListItemText className="po_item_title" primary="Phone: " /></b>
                                            <ListItemText primary={shippingInfo && shippingInfo.phoneNo}  sx={{alignSelf: 'center'}} />
                                        </Stack>
                                    </ListItem>

                                    <ListItem button>
                                        <Stack direction="row" spacing={2}>
                                            <b><ListItemText className="po_item_title" primary="Address: " /></b>
                                            <ListItemText primary={shippingDetails}  sx={{alignSelf: 'center'}} />
                                        </Stack>
                                    </ListItem>

                                    <ListItem button sx={{mb: 2}}>
                                        <Stack direction="row" spacing={2}>
                                            <b><ListItemText className="po_item_title" primary="Amount: " /></b>
                                            <ListItemText primary={`$${totalPrice}`} sx={{alignSelf: 'center'}}  />
                                        </Stack>
                                    </ListItem>

                                    <Divider textAlign="left"><Chip sx={{fontSize: '1.4rem!important'}} label="Payment" /></Divider>
                                    <ListItem button sx={{mt: 2, mb: 2}}>
                                        <ListItemText
                                            className={isPaid ? "greenColor" : "redColor"}
                                            primary={isPaid ? "PAID" : "NOT PAID"}
                                        />
                                        {isPaid ?
                                         <ListItemIcon>
                                            <DoneAllIcon />
                                        </ListItemIcon>
                                        :
                                        <ListItemIcon>
                                            <RemoveDoneIcon />
                                        </ListItemIcon>
                                        } 
                                        
                                    </ListItem>

                                    <Divider textAlign="left"><Chip sx={{fontSize: '1.4rem!important'}} label="Stripe ID" /></Divider>
                                    <ListItem button sx={{mt: 2, mb: 2}}>
                                        <ListItemText
                                            primary={paymentInfo && paymentInfo.id}
                                        />
                                    </ListItem>

                                    <Divider textAlign="left"><Chip sx={{fontSize: '1.4rem!important'}} label="Order Status" /></Divider>
                                    <ListItem button sx={{mt: 2, mb: 2}}>
                                        <ListItemText
                                            className={order.orderStatus && String(order.orderStatus).includes('Delivered') ? "greenColor" : "redColor"}
                                            primary={orderStatus}
                                        />
                                        {order.orderStatus && String(order.orderStatus).includes('Delivered') ? 
                                            <img src={delivered} alt="delivered product" className="order-status__img" />
                                            :
                                            <img src={process} alt="processing product" className="order-status__img" />
                                        }
                                    </ListItem>

                                    <Divider textAlign="left"><Chip sx={{fontSize: '1.4rem!important'}} label="Order Items" /></Divider>
                                    <Box sx={{mt: 2}}>
                                        {orderItems && orderItems.map(item => (
                                            <ListItem button  key={item.product} >
                                                <Link to={`/products/${item.product}`}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Avatar src={item.image} alt={item.name} />
                                                    </Stack>
                                                </Link>
                                                <ListItemText primary={`$${item.price}`} />
                                                <ListItemText primary={`${item.quantity} Piece(s)`} />
                                            </ListItem>
                                        ))}
                                    </Box>
                                </List>
                            </Box>
                        </Grid>

                        <Grid item xs={8} className="processOrder__grid_item">
                            <Item>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="h4">Status</Typography>
                                    <FormControl className="MuiTextField-root" id="processOrder__field__select">
                                        <InputLabel id="demo-simple-select-label" sx={{fontSize: '1.6rem'}}>Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="processOrder__select"
                                            value={status}
                                            name='status'
                                            label="Status"
                                            style={{ height: 'auto!important' }}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <MenuItem value="Processing" className="processOrder__option" sx={{fontSize: '1.6rem'}}>Processing</MenuItem>
                                            <MenuItem value="Shipped" className="processOrder__option" sx={{fontSize: '1.6rem'}}>Shipped</MenuItem>
                                            <MenuItem value="Delivered" className="processOrder__option" sx={{fontSize: '1.6rem'}}>Delivered</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <Button variant="contained" id="processOrder__bg" onClick={() => updateOrderHandler(order._id)}>Update Status</Button>
                                </Stack>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}

export default ProcessOrder
