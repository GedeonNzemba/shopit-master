import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails, clearErrors } from '../../actions/orderActions'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: '1.6rem',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '1.4rem',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





const OrderDetails = ({ match }) => {

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        app.classList.add('order_details_bg');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';
        const upProfil = document.getElementById('UpdateProfile');
        upProfil.style.display = 'none';


        return () => {
            newPass.style.display = 'block';
            upProfil.style.display = 'block';
            app.classList.remove('order_details_bg');
        }
    }, [])

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, order = {} } = useSelector(state => state.orderDetails)
    const { shippingInfo, orderItems, paymentInfo, user, totalPrice, orderStatus } = order

    useEffect(() => {
        dispatch(getOrderDetails(match.params.id));

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.id])

    const shippingDetails = shippingInfo && `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`

    const isPaid = paymentInfo && paymentInfo.status === 'succeeded' ? true : false

    function createData(Name, Phone, Address, Amount, Payment, OrderStatus, OrderItems) {
        return { Name, Phone, Address, Amount, Payment, OrderStatus, OrderItems };
    }

    const rows = [
        createData(user && user.name, shippingInfo && shippingInfo.phoneNo, shippingDetails, '$ ' + totalPrice, isPaid ? "PAID" : "NOT PAID", orderStatus),
    ];

    const CustomizedTables = () => {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Address</StyledTableCell>
                            <StyledTableCell align="right">Amount</StyledTableCell>
                            <StyledTableCell align="right">Payment</StyledTableCell>
                            <StyledTableCell align="right">Order Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.Name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.Name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.Phone}</StyledTableCell>
                                <StyledTableCell align="right">{row.Address}</StyledTableCell>
                                <StyledTableCell align="right" className={isPaid ? "greenColor" : "redColor"}>{row.Amount}</StyledTableCell>
                                <StyledTableCell align="right" >{row.Payment}</StyledTableCell>
                                <StyledTableCell align="right" className={order.orderStatus && String(order.orderStatus).includes('Delivered') ? "greenColor" : "redColor"}>{row.OrderStatus}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <Fragment>
            <MetaData title={'Order Details'} />

            {loading ? <Loader /> : (
                <Fragment>
                    <div className="col justify-content-between" id="order_details_wrapper">
                        <h1 className="my-5 order_id_nb">Order # {order._id}</h1>
                        <h4 className="mb-4 order_title_info">Shipping Info</h4>
                        <CustomizedTables />
                        {/* <p><b>Name:</b> {user && user.name}</p>
                            <p><b>Phone:</b> {shippingInfo && shippingInfo.phoneNo}</p>
                            <p className="mb-4"><b>Address:</b>{shippingDetails}</p>
                            <p><b>Amount:</b> ${totalPrice}</p>

                            <hr />

                            <h4 className="my-4">Payment</h4>
                            <p className={isPaid ? "greenColor" : "redColor"}><b>{isPaid ? "PAID" : "NOT PAID"}</b></p>


                            <h4 className="my-4">Order Status:</h4>
                            <p className={order.orderStatus && String(order.orderStatus).includes('Delivered') ? "greenColor" : "redColor"} ><b>{orderStatus}</b></p>


                             */}

                        <br />
                        <br />
                        <h4 className="my-4" style={{ fontSize: '2.6rem', color: '#ffffff' }}>Order Items:</h4>
                        <br />
                        <div className="cart-item my-1">
                            {orderItems && orderItems.map(item => (
                                <div key={item.product} className="row my-5">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt={item.name} height="45" width="65" />
                                    </div>

                                    <div className="col-5 col-lg-5">
                                        <Link to={`/products/${item.product}`} style={{ color: '#ffffff' }} >{item.name}</Link>
                                    </div>


                                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                        <p style={{ color: '#ffffff' }} >${item.price}</p>
                                    </div>

                                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                        <p style={{ color: '#ffffff' }} >{item.quantity} Piece(s)</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fragment>
            )}

        </Fragment>
    )
}

export default OrderDetails
