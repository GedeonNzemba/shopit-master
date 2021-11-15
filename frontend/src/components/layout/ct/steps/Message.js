import React, { useState } from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import { Box } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';
import styled from 'styled-components';


const useStyles = makeStyles({
    root: {
        fontSize: '1.6rem'
    },
});


const Message = props => {

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

    const classes = useStyles();
    const [subject, setSubject] = useState('');
    console.log(subject)

    const handleChange = (e) => {
        setSubject(prevState => (e.target.value));
        console.log(subject)
    };

    return (
        <>
            <section className="mCustomScrollbar" data-mcs-theme="dark" id="message_part">

                {/* <Typography variant="h3" component="h1">
                Your Message
			</Typography> */}
                <Box paddingBottom={2}>
                    <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                    <Select
                        name="selectOpt"
                        labelId="demo-simple-select-label"
                        id="selectSubject"
                        value={subject}
                        onChange={handleChange}
                        label='Subject'
                        fulwWidth
                    >

                        <MenuItem value='Locataire Real-Estate' className="select__item-ct">Locataire Real-Estate</MenuItem>
                        <MenuItem value='Locataire Audit & Risk Management' className="select__item-ct">Locataire Audit & Risk Management</MenuItem>
                        <MenuItem value='Locataire Farm' className="select__item-ct">Locataire Farm</MenuItem>
                        <MenuItem value='Locataire careers' className="select__item-ct">Locataire careers</MenuItem>
                    </Select>
                    {/* <Field className={classes.root} name="subject" label="Subject" component={Select}  value={subject} >
                </Field> */}

                </Box>
                {/* <Box paddingBottom={2}>
                    <Field className={classes.root} name="phone" label="Phone" component={TextField} style={{ width: '80%' }} id="phoneNumber" />
                </Box> */}
                {/* <Box
                    paddingBottom={2}
                >
                    <Field className={classes.root}
                        name="message"
                        label="Message"
                        component={TextField}
                        id="messageField"
                        multiline
                        rows={8}
                        defaultValue="your message"
                        variant="standard"
                        fulwWidth
                        style={{ Width: '100%' }}

                    />
                </Box> */}



                <Group>
                    <Input type="text" required name="phone" label="Phone" />
                    <Highlight className="highlight" />
                    <Bar className="bar" />
                    <Label>Phone</Label>
                </Group>

                <Group>
                    <TextArea type="textarea" rows="5" required spellcheck="false" name="message" label="Message" />
                    <Highlight className="highlight" />
                    <Bar className="bar" />
                    <Label>Message</Label>
                </Group>

                <Box paddingBottom={2} style={{ display: 'none' }} >
                    <Field className={classes.root} name="googleSecurity" label="Type the following" component={TextField} />
                    <p id="verificationMessage"></p>
                </Box>




            </section>
        </>
    );
};

Message.label = 'Your Message';
Message.initialValues = {
    subject: '',
    phone: '',
    message: '',
    googleSecurity: ''
};
Message.validationSchema = Yup.object().shape({
    subject: Yup.string().required('Please enter a subject'),
    phone: Yup.string().required('Please enter your phone number'),
    message: Yup.string().required('Please enter your message')
});

export default Message;
