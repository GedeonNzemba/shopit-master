import React, { useState } from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import { Box } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import * as Yup from 'yup';

const Message = props => {
    const [subject, setSubject] = useState('');
    console.log(subject)

    const handleChange = (e) => {
        setSubject(prevState => (e.target.value));
        console.log(subject)
    };

    return (
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
                {/* <Field name="subject" label="Subject" component={Select}  value={subject} >
                </Field> */}

            </Box>
            <Box paddingBottom={2}>
                <Field name="phone" label="Phone" component={TextField} style={{ width: '80%' }} id="phoneNumber" />
            </Box>
            <Box paddingBottom={2}>
                <Field
                    name="message"
                    label="Message"
                    component={TextField}
                    id="messageField"
                    multiline
                    rows={4}
                    defaultValue="your message"
                    variant="outlined"
                    fulwWidth

                />
            </Box>
            <Box paddingBottom={2}>
                <Field name="googleSecurity" label="Type the following" component={TextField} />
                <p id="verificationMessage"></p>
            </Box>




        </section>
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
