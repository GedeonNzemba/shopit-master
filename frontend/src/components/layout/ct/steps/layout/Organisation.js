import React from 'react'
import './style.css'
import styled from 'styled-components'
import { Field } from 'formik';
import {TextField} from 'formik-material-ui';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';


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
    }
}));

const Organisation = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            address: '',
            country: '',
            companyName: '',
            website: ''
        },
    })


    return (
        <section className={classes.root} id="organiser_form">
            <Stack direction="row" spacing={2} className={classes.stack}>
                <Field
                    component={TextField}
                    id="standard-basic"
                    label="Address"
                    variant="standard"
                    className={classes.input}
                    name="address"
                   
                />
                <Field
                    component={TextField}
                    id="standard-basic"
                    label="Country"
                    variant="standard"
                    className={classes.input}
                    name="country"
                   
                />
            </Stack>
            <Stack direction="row" spacing={2} className={classes.stack}>
                <Field
                    component={TextField}
                    id="standard-basic"
                    label="Company Name"
                    variant="standard"
                    className={classes.input}
                    name="companyName"
                    
                />
                <Field
                    component={TextField}
                    id="standard-basic"
                    label="Company Website"
                    variant="standard"
                    className={classes.input}
                    name="website"
                   
                />
            </Stack>
        </section>
    );
}

export default Organisation