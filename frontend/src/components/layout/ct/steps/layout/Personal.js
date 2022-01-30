import React from 'react'
import './style.css'
import { Box } from "@material-ui/core";
import styled from 'styled-components'
import { Field } from 'formik';
import {TextField} from 'formik-material-ui';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';


import * as yup from 'yup';



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

const Personal = () => {

   
   
    const classes = useStyles();

    return (
        <section className={classes.root} id="personal_form">
            <Stack direction="row" spacing={2} className={classes.stack}>
                <Field
                    component={TextField}
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    variant="standard"
                    className={classes.input + ' inputField'}
                    type="text"
                   
                />
                <Field
                    component={TextField}
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    variant="standard"
                    className={classes.input + ' inputField'}
                    type="text"
                />
            </Stack>

            <Stack direction="row" spacing={2} className={classes.stack}>
                <Field
                    component={TextField}
                    name="email"
                    id="email"
                    label="Email"
                    variant="standard"
                    className={classes.email + ' inputField'}
                    type="email"
                   
                />
            </Stack>



        </section>
    );
}


export default Personal

