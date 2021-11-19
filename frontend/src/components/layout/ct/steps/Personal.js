import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { Box } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import './layout/style.css'

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

const ContactInformation = props => {
    
    const classes = useStyles();



const ContactInformation = props => {
    return (
        <section id="personal">
            {/* <Typography variant="h3" component="h1">
                Contact Information
			</Typography> */}

            {/* <Box paddingBottom={2} display='flex' justifyContent='space-between'>

            <Box paddingBottom={2} display='flex' justifyContent='space-between'>
                <Field name="firstName" label="First Name" component={TextField} style={{ width: '45%' }} id="firstname" />
                <Field name="lastName" label="Last Name" component={TextField} style={{ width: '45%' }} id="lastname" />
            </Box>

            <Box paddingBottom={2}>
                <Field name="email" label="Email" component={TextField} fullwidth id="email" />
            </Box>
            <Box paddingBottom={2}>
                <Field name="yourRole" label="Your Role" component={TextField} fullwidth id="yourRole" />

            </Box> */}

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
                    type="number"
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

            </Box>
        </section>
    );
};

ContactInformation.label = 'Contact Information';
ContactInformation.initialValues = {
    firstName: '',
    lastName: '',
    email: '',


    yourRole: ''
};
ContactInformation.validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    email: Yup.string().required('Please enter your email'),


    yourRole: Yup.string().required('Please enter your role')
});

export default ContactInformation;
