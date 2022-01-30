import React from 'react'
import './style.css'
import styled from 'styled-components'
import { Field } from 'formik';
import {TextField} from 'formik-material-ui';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Box } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    subject: yup.string().required('Please enter a subject'),
    phone: yup.string().required('Please enter your phone number'),
    message: yup.string().required('Please enter your message')
}).required();


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    select: {
        width: '100%'
    },
    input: {
        width: '50%'
    },
    textarea: {
        width: '70%'
    },
    check: {
        marginTop: '2rem'
    },
    stack: {
        marginBottom: '2rem'
    }
}));

const Message = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            subject: '',
            phone: '',
            message: ''
        },
    })

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <section className={classes.root} id="message_form">
            <Stack direction="row" spacing={2} className={classes.stack}>
                <Box paddingBottom={2} className={classes.input}>
                    <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                    <Select
                        name="subject"
                        labelId="demo-simple-select-label"
                        id="selectSubject"
                        label='Subject'
                        className={classes.select}
                       
                    >

                        <MenuItem value='Locataire Real-Estate' className="select__item-ct">Locataire Real-Estate</MenuItem>
                        <MenuItem value='Locataire Audit & Risk Management' className="select__item-ct">Locataire Audit & Risk Management</MenuItem>
                        <MenuItem value='Locataire Farm' className="select__item-ct">Locataire Farm</MenuItem>
                        <MenuItem value='Locataire careers' className="select__item-ct">Locataire careers</MenuItem>
                    </Select>
                </Box>
                <TextField

                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    type="number"
                    className={classes.input}
                    name="phone"
                    
                />
            </Stack>
            <Stack direction="column" spacing={2} className={classes.stack}>
            <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={6}
                placeHolder="Write your message..."
                variant="standard"
                className={classes.textarea}
                name="message"
               
            />
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
                className={classes.check}
            />
             </Stack>
        </section>
    );
}


export default Message
