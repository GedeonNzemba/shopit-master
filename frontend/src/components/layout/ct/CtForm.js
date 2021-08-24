import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { Button, Step, StepLabel, Stepper, Box } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import ContactInformation from './steps/Personal';
import OrgInformation from './steps/Business';
import Message from './steps/Message';
import './style.css'
import Recaptcha from 'react-recaptcha';
import swal from 'sweetalert'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import mCustomCss from '../../../images/mC/jquery.mCustomScrollbar.css';



const steps = [ContactInformation, OrgInformation, Message];

const CtForm = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [isVerified, setIsverfied] = useState(false);

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const handlePrev = () => {
        setActiveStep(Math.max(activeStep - 1, 0));
    };

    const handleNext = () => [
        setActiveStep(Math.min(activeStep + 1, steps.length - 1))
    ];



    const initialValues = steps.reduce(
        (values, { initialValues }) => ({
            ...values,
            ...initialValues
        }),
        {}
    );
    const ActiveStep = steps[activeStep];
    const validationSchema = ActiveStep.validationSchema;

    const handleSubmit = (event) => {

    }





    //  Validate fields
    const handleFormValidation = (e) => {
        let firstname = document.getElementById('firstname')
        let lastname = document.getElementById('lastname')
        let email = document.getElementById('email')
        let role = document.getElementById('yourRole')

        let address = document.getElementById('address')
        let company = document.getElementById('company')
        let country = document.getElementById('country')
        let companyWebsite = document.getElementById('companyWebsite')

        let selectSubject = document.getElementById('selectSubject')
        let phoneNumber = document.getElementById('phoneNumber')
        let messageField = document.getElementById('messageField')

        e.preventDefault();

        if (firstname.value === '' || lastname.value === '' || email.value === '' || role.value === '' || address.value === '' || company.value === '' || country.value === '' || companyWebsite.value === '' || selectSubject.value === '' || phoneNumber.value === '' || messageField.value === '') {
            return handleSubmitFailure();
        } else {

            sendEmail(firstname.value, email.value, messageField.value);
            handleSubmitSuccess();
            console.log('email sent!')
        }

    }

    const sendEmail = (firstname, email, messageField) => {
        init("user_QdlOPmbEXe6behLJTKfQh");
        emailjs.send('service_j9cx42g', 'template_h9mz07x', {
            from_name: firstname,
            to_name: email,
            message: messageField
        })
    }



    const handleSubmitSuccess = () => {
        swal({
            title: "Congrats! ",
            text: "Your message has been sent successful",
            icon: "success",
            button: "Close!",
        });
    }
    const handleSubmitFailure = () => {
        swal({
            title: "Sorry! ",
            text: "Your message has could not be sent. Please see that all required steps has been filled.",
            icon: "error",
            button: "Try Again!",
        });
    }



    const onSubmit = (values, formikBag) => {
        //verification
        if (isVerified) {
            document.getElementById('verificationMessage').innerText = 'You have been verified !';
        } else {
            document.getElementById('verificationMessage').innerText = 'You have not been verified !';
        }
        const { setSubmitting } = formikBag;

        if (!isLastStep()) {
            setSubmitting(false);
            handleNext();
            return;
        }



        console.log(values);

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

    // useEffect(() => {
    //     const LoadLink = (url) => {
    //         var script = document.createElement('script');
    //         script.src = url
    //         script.async = true
    //     }





    // }, [])

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, touched, values }) => (
                <>
                    <Form id="ct_form">
                        <Stepper alternativeLabel activeStep={activeStep} id="theStepper">
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepLabel>{steps[index].label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <SwipeableViews index={activeStep} data-mcs-theme="dark" style={{ overflow: 'hidden!important' }} id="swipeview">
                            {steps.map((step, index) => {
                                const Component = steps[index];
                                return <Component key={index} />;
                            })}
                        </SwipeableViews>
                        <Box paddingTop={2} display='flex' fullWidth>
                            <Button
                                disabled={activeStep === 0 || isSubmitting}

                                variant="contained"
                                color="secondary"
                                onClick={handlePrev}
                            >
                                Previous
                            </Button>
                            <div id="ct__spc" />
                            {/* <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
                                {isLastStep() ? 'Submit' : 'Next'}
                            </Button> */}
                            {isLastStep() ? (<><Button type="submit" variant="contained" color="primary" onClick={handleFormValidation}>Submit</Button></>) : (<><Button disabled={isSubmitting} type="submit" variant="contained" color="primary">Next</Button></>)}
                        </Box>
                    </Form>

                    {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(touched, null, 2)}</pre> */}
                </>
            )}
        </Formik>
    );
};
export default CtForm;