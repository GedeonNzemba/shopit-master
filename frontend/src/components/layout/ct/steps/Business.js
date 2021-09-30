import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Box } from '@material-ui/core';
import * as Yup from 'yup';

const Business = props => {
    return (
        <>
            {/* <Typography variant="h3" component="h1">
                Org Information
			</Typography> */}
            <section id="business">
                <Box paddingBottom={2} >
                    <Field
                        name="address"
                        label="Address"
                        component={TextField}
                        fullwidth
                        id="address"
                    />
                </Box>
                <Box paddingBottom={2} display='flex' justifyContent='space-between'>
                    <Field
                        name="company"
                        label="Company Name"
                        component={TextField}
                        style={{ width: '45%' }}
                        id="company"
                    />
                    <Field
                        name="country"
                        label="Country"
                        component={TextField}
                        style={{ width: '45%' }}
                        id="country"
                    />
                </Box>
                <Box paddingBottom={2}>
                    <Field
                        name="companyWebsite"
                        label="Company Website"
                        component={TextField}
                        fullwidth
                        id="companyWebsite"
                    />
                </Box>
            </section>
        </>
    );
};

Business.label = 'Org Information';
Business.validationSchema = Yup.object().shape({
    address: Yup.string().required('Please enter your business name'),
    company: Yup.string().required('Please enter your street address'),
    country: Yup.string().required('Please select your country')
});

export default Business;
