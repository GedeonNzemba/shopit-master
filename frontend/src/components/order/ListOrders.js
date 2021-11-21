import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders, clearErrors } from '../../actions/orderActions'
import { Button } from '@material-ui/core'
import Topsell from '../product/Topsell'
import { getOrderDetails } from '../../actions/orderActions'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));



const ListOrders = ({ match }) => {

    useEffect(() => {
        const app = document.getElementsByClassName('App')[0];
        app.classList.add('listOrder_bg');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';
        const upProfil = document.getElementById('UpdateProfile');
        upProfil.style.display = 'none';


        return () => {
            newPass.style.display = 'block';
            upProfil.style.display = 'block';
            app.classList.remove('listOrder_bg');

        }
    }, [])

    const classes = useStyles();


    const alert = useAlert();
    const dispatch = useDispatch();

    const { order = {} } = useSelector(state => state.orderDetails)
    const { orderItems } = order

    const { loading, error, orders } = useSelector(state => state.myOrders);

    useEffect(() => {
        dispatch(myOrders());
        dispatch(getOrderDetails(match.params.id));

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.id])

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: 'Order ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Num of Items',
                    field: 'numOfItems',
                    sort: 'asc'
                },
                {
                    label: 'Amount',
                    field: 'amount',
                    sort: 'asc'
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                },
            ],
            rows: []
        }

        orders.forEach(order => {
            data.rows.push({
                id: order._id,
                numOfItems: order.orderItems.length,
                amount: `$${order.totalPrice}`,
                status: order.orderStatus && String(order.orderStatus).includes('Delivered')
                    ? <p style={{ color: 'green' }}>{order.orderStatus}</p>
                    : <p style={{ color: 'red' }}>{order.orderStatus}</p>,
                actions:
                    <Link to={`/order/${order._id}`}>
                        <Button variant="contained" color="primary">
                            View Product
                        </Button>
                    </Link>
            })

        })



        return data;
    }



    return (
        <Fragment>

            <MetaData title={'My Orders'} />

            <div className="listorder">
                {/* <h1 className="my-5">My Orders</h1> */}

                {loading ? <Loader /> : (
                    <>
                        <div className="bg_lis">


                            <div className="list_wrappe">
                                <div className="list_wrap">
                                    <h1>My Orders</h1>
                                    {orderItems && orderItems.map(item => (
                                        <Card className={classes.root} key={item}>
                                            <div className={classes.details}>
                                                <CardContent className={classes.content}>
                                                    <Typography component="h5" variant="h5">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                        Mac Miller
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                            <CardMedia
                                                className={classes.cover}
                                                image={item.image}
                                                title="Live from space album cover"
                                            />
                                        </Card>

                                    ))}
                                </div>
                                {window.innerWidth < 657 ?
                                    <div className="container list_wrap" style={{overflowX: 'scroll', width: '30em', whiteSpace: 'nowrap'}}>
                                       <MDBDataTable
                                        data={setOrders()}
                                        className="px-3"
                                        bordered
                                        striped
                                        hover
                                        
                                    />
                                    </div>
                                    :
                                    <div className="list_wrap">
                                    <MDBDataTable
                                        data={setOrders()}
                                        className="px-3"
                                        bordered
                                        striped
                                        hover
                                        
                                    />
                                </div>
                                }
                            </div>
                        </div>

                        {/* <div id="topsell__list">

                            <Topsell />
                        </div> */}

                    </>


                )}
            </div>

        </Fragment>
    )
}

export default ListOrders
