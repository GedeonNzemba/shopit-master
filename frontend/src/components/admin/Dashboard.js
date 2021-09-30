import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './dashboard.css'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useDispatch, useSelector } from 'react-redux'

import { getAdminProducts } from '../../actions/productActions'
import { allOrders } from '../../actions/orderActions'
import { allUsers } from '../../actions/userActions'

const Dashboard = () => {

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

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products)
    const { users } = useSelector(state => state.allUsers)
    const { orders, totalAmount, loading } = useSelector(state => state.allOrders)

    let outOfStock = 0;
    products.forEach(product => {
        if (product.stock === 0) {
            outOfStock += 1;
        }
    })

    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(allOrders())
        dispatch(allUsers())
    }, [dispatch])

    return (
        <Fragment>
            <div className="row" id="dashboard_main-wrap">
                <div className="col-12 col-md-2" id="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10" id="main_dashboard-info">
                    <h1 className="my-4 " id="dashboard_header-title">Dashboard</h1>

                    {loading ? <Loader /> : (
                        <Fragment>
                            <MetaData title={'Admin Dashboard'} />

                            <div className="row pr-4">
                                <div className="col-xl-12 col-sm-12 mb-3">
                                    <div className="card text-white bg-primary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size dashboard-title">Total Amount<br /> <b>${totalAmount && totalAmount.toFixed(2)}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row pr-4" style={{ marginTop: '1.6rem' }}>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-success o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size dashboard-title">Products<br /> <b>{products && products.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                            <span className="float-left view_details">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-danger o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size dashboard-title">Orders<br /> <b>{orders && orders.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                            <span className="float-left view_details ">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-info o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size dashboard-title">Users<br /> <b>{users && users.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                            <span className="float-left view_details">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-warning o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size dashboard-title">Out of Stock<br /> <b>{outOfStock}</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}

                </div>
            </div>

        </Fragment >
    )
}

export default Dashboard
