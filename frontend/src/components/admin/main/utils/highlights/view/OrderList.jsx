import React, { useEffect } from 'react'

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom'

import Loader from '../../../../../layout/Loader'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allOrders, deleteOrder, clearErrors } from '../../../../../../actions/orderActions'
import { DELETE_ORDER_RESET } from '../../../../../../constants/orderConstants'



export const OrderList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, orders } = useSelector(state => state.allOrders);
    const { isDeleted } = useSelector(state => state.user)


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

    useEffect(() => {
        dispatch(allOrders());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Order deleted successfully');
            history.push('/admin/orders');
            dispatch({ type: DELETE_ORDER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])



   



    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id))
    }

    return (
        <MDBTable bordered className='mdb__table-container'>
            {loading ? <Loader />
                :
                (
                    <>
                        <MDBTableHead className='mdb__table-head'>
                            <tr className='mdb__table-row'>
                                <th className="all_users__table-head">#</th>
                                <th className="all_users__table-head">Order ID</th>
                                <th className="all_users__table-head">No of Items</th>
                                <th className="all_users__table-head">Amount</th>
                                <th className="all_users__table-head">Status</th>
                                <th className="all_users__table-head">Actions</th>
                            </tr>
                        </MDBTableHead>

                        <MDBTableBody className='mdb__table-body'>
                            {orders && orders.map((order, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{order._id}</td>
                                        <td>{order.orderItems.length}</td>
                                        <td>{`$${order.totalPrice}`}</td>
                                        <td>
                                            {String(order.orderStatus).includes('Delivered')
                                                ? <p style={{ color: 'green' }}>{order.orderStatus}</p>
                                                : <p style={{ color: 'red' }}>{order.orderStatus}</p>
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/admin/order/${order._id}`} className="btn btn-primary py-1 px-2">
                                                <i className="fa fa-eye"></i>
                                            </Link>
                                            <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteOrderHandler(order._id)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </MDBTableBody>
                    </>
                )

            }
        </MDBTable>

    )
}

export default OrderList