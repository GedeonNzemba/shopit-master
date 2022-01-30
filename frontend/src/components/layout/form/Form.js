import React, { memo, useState, useCallback, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "../ct/steps/layout/style.css";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import ReCAPTCHA from "react-google-recaptcha";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import { useTranslation, Trans } from 'react-i18next';
import toFrench from '../../../language/locales/en.json'

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    input: {
        width: "100%!important",
    },
    email: {
        width: "100%!important",
    },
    stack: {
        marginBottom: "2rem",
    },
    textarea: {
        width: "100%!important",
    },
    check: {
        marginTop: "2rem",
        width: "fit-content",
        placeSelf: "center",
    },
    select: {
        width: "100%!important",
    },
}));

function FormUI() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    const [robot, setRobot] = useState('');

    // const formSchema = Yup.object().shape({
    //     firstName: Yup.string().required("Please enter your first name"),
    //     lastName: Yup.string().required("Please enter your last name"),
    //     email: Yup.string().required("Please enter your email"),
    //     subject: Yup.string().required("Please enter a subject"),
    //     phone: Yup.number().required("Please enter your phone number"),
    //     message: Yup.string().required("Please enter your message"),
    //     address: Yup.string().required("Please enter your business name"),
    //     company: Yup.string().required("Please enter your street address"),
    //     country: Yup.string().required("Please select your country"),
    // });

    function onChangeCheck(value) {
        console.log("Captcha value:", value);
        setRobot((prevState) => prevState = value)
    } 

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [website, setWebsite] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    
    const handleForm = (e) => {
        e.preventDefault();
        const values = getValues();
        console.log('values... \n' + values)

        emailjs.sendForm(
                "service_j9cx42g",
                "template_q2q44us",
                e.target,
                "user_QdlOPmbEXe6behLJTKfQh"
        ).then(
            (result) => {
                console.log(result);
                messageSentAlert(i18n.resolvedLanguage === 'fr' ? toFrench.after_submit.success.title : "THANK YOU", i18n.resolvedLanguage === 'fr' ? toFrench.after_submit.success.message : "WE HAVE RECIEVED YOUR MESSAGE", "success")
            },
            (error) => {
                console.log(error.text);
                messageSentAlert(i18n.resolvedLanguage === 'fr' ? toFrench.after_submit.failed.title  : "SORRY", i18n.resolvedLanguage === 'fr' ? toFrench.after_submit.failed.message  : "SOMETHING WENT WRONG", "error")
            }
        );
    };

    const messageSentAlert = (title, text, icon) => {
        swal({
            title: title,
            text: text,
            icon: icon,
            button: i18n.resolvedLanguage === 'fr' ? toFrench.after_submit.close : "Close",
        });
    }


    const onSubmit = e => {
        if (robot === '') {
            e.preventDefault()
            messageSentAlert(i18n.resolvedLanguage === 'fr' ? toFrench.after_submit.failed.title  : "SORRY", i18n.resolvedLanguage === 'fr' ? toFrench.after_submit.failed.message  : "SOMETHING WENT WRONG", "error")
        } else {
            console.log(e)
            handleForm(e)
        }
       
    };


    return (
        <div className="form">
            <form onSubmit={(e) => handleSubmit(onSubmit(e))} id="footer_form">
                
                <Stack direction="column" spacing={2} >
                    <TextField
                        id="firstName"
                        name="firstName"
                        label={t('first__name')}
                        className={classes.input + " inputField"}
                        {...register("firstName", {
                            onChange: (e) => setFirstName(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.first_name.required : "First name is required",
                            maxLength: 12,
                        })}
                        value={firstName}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName?.message}
                    />
                    <TextField
                        name="lastName"
                        id="lastName"
                        label={t('last__name')}
                        className={classes.input + " inputField"}
                        type="text"
                        value={lastName}
                        {...register("lastName", {
                            onChange: (e) => setLastName(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.last_name.required : "Last Name is required",
                            maxLength: 12,
                        })}
                        error={Boolean(errors.lastName)}
                        helperText={errors.lastName?.message}
                    />
                    <TextField
                        name="email"
                        id="email"
                        label={t('farm.dashboard.total_users.email')}
                        className={classes.email + " inputField"}
                        value={email}
                        {...register("email", {
                            onChange: (e) => setEmail(e.target.value),
                            required: "required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: i18n.resolvedLanguage === 'fr' ? toFrench.email.required : "Email is required"
                            }
                          })}


                        type="email"
                        
                    />
                    <TextField
                        id="standard-basic"
                        label={t('address')}
                        className={classes.input}
                        name="address"
                        value={address}
                        {...register("address", {
                            onChange: (e) => setAddress(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.address.required : "Address is required",
                        })}
                        error={Boolean(errors.address)}
                        helperText={errors.address?.message}
                    />
                    <TextField
                        id="standard-basic"
                        label={t('country')}
                        className={classes.input}
                        name="country"
                        value={country}
                        {...register("country", {
                            onChange: (e) => setCountry(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.country.required : "Country is required",
                            maxLength: 12,
                        })}
                        error={Boolean(errors.country)}
                        helperText={errors.country?.message}
                    />
                    <TextField
                        id="standard-basic"
                        label={ i18n.resolvedLanguage === 'fr' ? toFrench.company_name.name : "Company Name"}
                        className={classes.input}
                        name={i18n.resolvedLanguage === 'fr' ? toFrench.company_name.name :"companyName"}
                        value={companyName}
                        {...register("companyName", {
                            onChange: (e) => setCompanyName(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.company_name.required : "Company name is required",
                        })}
                        error={Boolean(errors.companyName)}
                        helperText={errors.companyName?.message}
                    />
                    <TextField
                        id="standard-basic"
                        label={i18n.resolvedLanguage === 'fr' ? toFrench.company_website.name : "Company Website"}
                        className={classes.input}
                        name="website"
                        value={website}
                        {...register("website", {
                            onChange: (e) => setWebsite(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.company_website.required : "Website is required",
                        })}
                        error={Boolean(errors.website)}
                        helperText={errors.website?.message}
                    />
                    <Box paddingBottom={2} className={classes.input}>
                        <InputLabel id="demo-simple-select-label">{i18n.resolvedLanguage === 'fr' ? toFrench.company_website.name : "Subject"}</InputLabel>
                        <Select
                            name="subject"
                            labelId="demo-simple-select-label"
                            id="selectSubject"
                            label={i18n.resolvedLanguage === 'fr' ? toFrench.company_website.name : "Subject"}
                            className={classes.select}
                            value={subject}
                            {...register("subject", {
                                onChange: (e) => setSubject(e.target.value),
                                required: i18n.resolvedLanguage === 'fr' ? toFrench.company_website.required : "Subject is required",
                            })}
                            error={Boolean(errors.subject)}
                            helperText={errors.subject?.message}
                        >
                            <MenuItem
                                value="Locataire Real-Estate"
                                className="select__item-ct"
                            >
                                {i18n.resolvedLanguage === 'fr' ? toFrench.subject.list.two : "Locataire Real-Estate"}
                            </MenuItem>
                            <MenuItem
                                value="Locataire Audit & Risk Management"
                                className="select__item-ct"
                            >
                                {i18n.resolvedLanguage === 'fr' ? toFrench.subject.list.three : "Locataire Audit & Risk Management"}
                            </MenuItem>
                            <MenuItem value="Locataire Farm" className="select__item-ct">
                                {i18n.resolvedLanguage === 'fr' ? toFrench.subject.list.one : "Locataire Farm"}
                            </MenuItem>
                            <MenuItem value="Locataire careers" className="select__item-ct">
                                {i18n.resolvedLanguage === 'fr' ? toFrench.subject.list.four : "Locataire careers"}
                            </MenuItem>
                        </Select>
                    </Box>
                    <TextField
                        id="standard-basic"
                        label={i18n.resolvedLanguage === 'fr' ? toFrench.phone.name : "Phone Number"}
                        type="number"
                        className={classes.input}
                        name="phone"
                        value={phone}
                        {...register("phone", {
                            onChange: (e) => setPhone(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.phone.required  : "Phone is required",
                        })}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone?.message}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Message"
                        multiline
                        rows={6}
                        placeholder="Write your message..."
                        className={classes.textarea}
                        name="message"
                        value={message}
                        {...register("message", {
                            onChange: (e) => setMessage(e.target.value),
                            required: i18n.resolvedLanguage === 'fr' ? toFrench.message.required : "Message is required",
                        })}
                        error={Boolean(errors.message)}
                        helperText={errors.message?.message}
                    />
                   <Box id="box_robot">
                   <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChangeCheck}
                        className={classes.check}
                    />
                   </Box>
                </Stack>

                <br />
                {/* <Button type="submit" variant="outlined">
                    Submit
                </Button> */}
                <br />
                <input
                    
                    type="submit"
                    value={t('submit')}
                    style={{padding: '1rem 3rem', borderRadius: '4px', background: '#313962', color: '#fff'}}
                />
            </form>
        </div>
    );
}

export default memo(FormUI);
