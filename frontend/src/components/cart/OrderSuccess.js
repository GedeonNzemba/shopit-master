import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import Button from '@material-ui/core/Button';


const OrderSuccess = () => {

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        app.classList.add('order_succ');


        return () => {
            app.classList.remove('order_succ');
        }
    }, [])

    return (
        <div className="order_succ-inner">

            <MetaData title={'Order Success'} />

            <div className="succes_msg">
                <h2>Your Order has been placed successfully.</h2>
                <Link to="/orders/me">
                    <Button variant="contained" color="primary" >
                        Go to Orders
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default OrderSuccess
