import React, { useState, useEffect } from 'react';
import '../../style.css'
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
// import {formSchema} from './validation/formValidation'
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';

import { TextField } from 'formik-material-ui';
import swal from 'sweetalert'

// import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from 'yup'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        width: '100%'
    },
    email: {
        width: '50%'
    },
    stack: {
        marginBottom: '2rem'
    },
    textarea: {
        width: '70%'
    },
    check: {
        marginTop: '2rem'
    },
}));


export default function Index(props) {

    const classes = useStyles();

    // const formSchema = Yup.object().shape({
    //     firstName: Yup.string().required('Please enter your first name'),
    //     lastName: Yup.number().required('Please enter your last name'),
    //     email: Yup.string().required('Please enter your email'),
    //     subject: Yup.string().required('Please enter a subject'),
    //     phone: Yup.string().required('Please enter your phone number'),
    //     message: Yup.string().required('Please enter your message'),
    //     address: Yup.string().required('Please enter your business name'),
    //     company: Yup.string().required('Please enter your street address'),
    //     country: Yup.string().required('Please select your country')
    // })

    // let initialValues = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     address: '',
    //     country: '',
    //     companyName: '',
    //     website: '',
    //     subject: '',
    //     phone: '',
    //     message: ''
    // }

    // const formik = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         address: '',
    //         country: '',
    //         companyName: '',
    //         website: '',
    //         subject: '',
    //         phone: '',
    //         message: ''
    //     },
    //     onSubmit: (values) => {
    //         console.log(JSON.stringify(values));
    //     },
    //     validationSchema: formSchema
    // });
    // let firstname = document.getElementById('firstName')
    // let lastname = document.getElementById('lastName')
    // let email = document.getElementById('email')
    // var checkErr = document.querySelector('.MuiInput-formControl');


    useEffect(() => {
        const nextBtns = document.querySelectorAll(".btn-next");
        const prevBtns = document.querySelectorAll(".btn-prev");
        const progress = document.getElementById("progress");
        const formSteps = document.querySelectorAll(".form-step");
        const progressSteps = document.querySelectorAll(".progress-step");




        let formStepsNum = 0;



        nextBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {

                formStepsNum++;
                updateFormSteps();
                updateProgressbar();
                e.preventDefault()

            });

        });

        prevBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                formStepsNum--;
                updateFormSteps();
                updateProgressbar();
                e.preventDefault()
            });
        });

        function updateFormSteps() {
            formSteps.forEach((formStep) => {
                formStep.classList.contains("form-step-active") &&
                    formStep.classList.remove("form-step-active");
            });

            formSteps[formStepsNum].classList.add("form-step-active");
        }

        function updateProgressbar() {
            progressSteps.forEach((progressStep, idx) => {
                if (idx < formStepsNum + 1) {
                    progressStep.classList.add("progress-step-active");
                } else {
                    progressStep.classList.remove("progress-step-active");
                }
            });

            const progressActive = document.querySelectorAll(".progress-step-active");

            progress.style.width =
                ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
        }
    }, [])

    // const AlertPop = () => {
    //    return (
    //     swal({
    //         title: "Hold on",
    //         text: "Please, fill in all the required fields.",
    //         icon: "warning",
    //         button: "Close!",
    //     })
    //    )

    // <Alert severity="warning" elevation="6">
    //     <AlertTitle>Warning</AlertTitle>
    //     Please — <strong>fill in the required fields.</strong>
    // </Alert>


    const formik = useFormik({
        initialValues: {
            firstName: '',
            address: '',
            message: ''
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        }
    })



    

   





    return (

        <form className="form" onSubmit={formik.handleSubmit}>
            <div className="progressbar">
                <div className="progress" id="progress"></div>
                <div className="progress-step progress-step-active" data-title="Personal"></div>
                <div className="progress-step" data-title="Organisation"></div>
                <div className="progress-step" data-title="Message"></div>
            </div>

            {/* -- Steps -- */}
            <div className="form-step form-step-active">
                <TextField
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    variant="standard"
                    className={classes.input + ' inputField'}
                    type="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}

                />
                <div className="" style={{ marginTop: '2rem' }}  >
                    <Button variant="outlined" onClick={(e) => e.preventDefault} className={`btn_f width-50 ml-auto btn-next ${formik.initialValues.firstName === '' ? ' off-field' : ''}`}>Next</Button>

                </div>

            </div>
            <div className="form-step">
                <TextField
                    id="standard-basic"
                    label="Address"
                    variant="standard"
                    className={classes.input}
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}

                />
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" onClick={(e) => e.preventDefault} className="btn_f btn-prev">Previous</Button>
                    <Button variant="contained" onClick={(e) => e.preventDefault} className="btn_f btn-next">Next</Button>
                </Stack>
            </div>
            <div className="form-step">
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={6}
                    placeHolder="Write your message..."
                    variant="standard"
                    className={classes.textarea}
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}

                />
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" onClick={(e) => e.preventDefault} className="btn_f btn-prev">Previous</Button>
                    <Button type="submit" variant="contained" onClick={(e) => e.preventDefault} className="btn_f btn-prev">Submit</Button>
                </Stack>
            </div>
        </form>
    )

}