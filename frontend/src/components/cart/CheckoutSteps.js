import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    {title: 'Shipping',
     url: '/shipping'
    },
    {title: 'Confirm Order',
     url: '/order/confirm'
    },
    {title: 'Payment',
     url: '/payment'
    }
]

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {

    const total = steps.length;
     

    return (
        <>
            <Box sx={{ width: '100%', marginBottom: '6rem' }} id="container_stepper">
                <Stepper activeStep={confirmOrder ? (total - 1) : payment ? (total) : (total - 2)} alternativeLabel>
                    {steps.map((item, index) => (
                        <Step key={index}>
                            <StepLabel>{item.title}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

        {/* <div className="checkout-progress d-flex justify-content-center mt-5">

            {shipping ? 
                <Link to='shippping' className="float-right">
                    <div className="triangle2-active"></div>
                    <div className="step active-step">Shipping</div>
                    <div className="triangle-active"></div>
                </Link> 
                : 
                <Link to="#!" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Shipping</div>
                    <div className="triangle-incomplete"></div>
                </Link>
            }

            {confirmOrder ? <Link to='/order/confirm' className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Confirm Order</div>
                <div className="triangle-active"></div>
            </Link> : <Link to="#!" disabled>
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Confirm Order</div>
                <div className="triangle-incomplete"></div>
            </Link>}

            {payment ? <Link to='/payment' className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Payment</div>
                <div className="triangle-active"></div>
            </Link> : <Link to="#!" disabled>
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Payment</div>
                <div className="triangle-incomplete"></div>
            </Link>}

        </div> */}
        </>
    )
}

export default CheckoutSteps
