import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { Box } from "@material-ui/core";

const ContactInformation = props => {
    return (
        <section id="personal">
            {/* <Typography variant="h3" component="h1">
                Contact Information
			</Typography> */}
            <Box paddingBottom={2} display='flex' justifyContent='space-between'>
                <Field name="firstName" label="First Name" component={TextField} style={{ width: '45%' }} id="firstname" />
                <Field name="lastName" label="Last Name" component={TextField} style={{ width: '45%' }} id="lastname" />
            </Box>

            <Box paddingBottom={2}>
                <Field name="email" label="Email" component={TextField} fullwidth id="email" />
            </Box>
            <Box paddingBottom={2}>
                <Field name="yourRole" label="Your Role" component={TextField} fullwidth id="yourRole" />
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
