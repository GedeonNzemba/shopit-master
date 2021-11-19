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
                <Field
                    component={TextField}
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    type="number"
                    className={classes.input}
                    name="phone"
                    
                />
            </Stack>
            <Stack direction="column" spacing={2} className={classes.stack}>
            <Field
                component={TextField}
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={6}
                defaultValue="Write your message..."
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



export default function Message() {

    const Group = styled.div`
        position: relative;
        margin: 45px 0;
    `;
    const Input = styled.input`
        background: none;
        color: #c6c6c6;
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 320px;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #c6c6c6;
        line-height: 1.15;
        margin: 0;
        overflow: visible;
    `;
    const Highlight = styled.span`
        box-sizing: border-box;
        margin-left: unset!important;
    `;
    const Bar = styled.span`
        position: relative;
        display: block;
        margin-left: unset!important;
        width: 320px;
        &:before {
            content: "";
            height: 2px;
            width: 0;
            bottom: 0px;
            position: absolute;
            background: #2196F3;
            transition: 300ms ease all;
            left: 0%;
        }
    `;
    const Label = styled.label`
        color: #c6c6c6;
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;
    `;
    const TextArea = styled.textarea`
        background: none;
        color: #c6c6c6;
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 320px;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #c6c6c6;
        line-height: 1.15;
        margin: 0;
        overflow: auto;
        resize: none;
    `;

    const Form = styled.form`
        width: 320px;
        margin: 45px auto;
    `;

    const LabelS = styled.label`
        color: #666;
        display: block;
        margin: 16px;
        max-width: 300px;
        padding: 8px;
        opacity: 0;
        position: relative;
        transition-property: opacity;
        z-index: 1;
        & * {
            transition-duration: 0.2s;
            transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
            cursor: pointer;
        }
    `;
    const SpanS = styled.span`
        color: inherit;
        display: block;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        left: 9px;
        pointer-events: none;
        position: absolute;
        top: 32px;
        transform: scale(1) translateY(0);
        transition-property: color, font-size, top;
        z-index: 1;
        margin-left: unset!important;
    `;
    const ImgCTG = styled.div`
        background: rgba(255, 255, 255, 0);
        position: relative;
        border-color: #666;
        border-style: solid;
        border-width: 0 0 2px 0;
        color: #666;
        cursor: pointer;
        font-size: 20px;
        height: 24px;
        line-height: 24px;
        margin: 24px 32px 0 0;
        min-width: 250px;
        padding-top: 24px;
        outline: 0;
        z-index: 1;

        &:after {
            content: "";
            height: 24px;
            width: 24px;
            position: absolute;
            top: 0;
            right: 0;
        }
    `;
    const SpanSb = styled.span`
        height: 24px;
        left: 1px;
        line-height: 24px;
        opacity: 0;
        position: absolute;
        top: 0;
        transform: translateY(24px);
        transition-property: opacity, transform;
        will-change: transform;

        color: inherit;
        display: block;
        font-size: 16px;
        pointer-events: none;
        z-index: 1;
    `;
    const Ul = styled.ul`
        background: #fff;
        box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
        display: block;
        height: 0;
        list-style: none;
        margin-top: 2px;
        opacity: 0;
        overflow: hidden;
        padding: 0 1px;
        pointer-events: none;
        transition-property: height, opacity;
        width: 100%;
        z-index: 2;
    `;
    const Li = styled.li`
        height: 32px;
        padding: 8px 4px;
    
    `;



    return (
        <Form>
            <LabelS id="img_category_label" class="field" for="img_category" data-value="">
                <span>Category</span>
                <div id="img_category" class="psuedo_select" name="img_category">
                    <span class="selected"></span>
                    <ul id="img_category_options" class="options">
                        <li class="option" data-value="opt_1">Option 1</li>
                        <li class="option" data-value="opt_2">Option 2</li>
                    </ul>
                </div>
            </LabelS>

            <Group>
                <Input type="text" required />
                <Highlight className="highlight" />
                <Bar className="bar" />
                <Label>Name</Label>
            </Group>

            <Group>
                <TextArea type="textarea" rows="5" required spellcheck="false" />
                <Highlight className="highlight" />
                <Bar className="bar" />
                <Label>Message</Label>
            </Group>
        </Form>
    );
}

