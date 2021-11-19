import React, { Fragment, useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../actions/userActions'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message)
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData))

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }


    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        field: {
            width: '100%!important'
        },
        paperWrapper: {
            borderRadius: '20px!important',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            fontSize: '1.6rem!important', 
            [theme.breakpoints.down(501)]: {
                width: '87%',
              
            },
        },
        icon: {
            alignSelf: 'center',
        },
        h1: {
            textAlign: 'center',
        },
    }));

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        app.classList.add('forgot_password_page');


        return () => {
            app.classList.remove('forgot_password_page');
        }
    }, [])


    const classes = useStyles();
    return (
        <Fragment>
            <MetaData title={'Forgot Password'} />

            {/* <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Forgot Password</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Enter Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button
                            id="forgot_password_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false} >
                            Send Email
                    </button>

                    </form>
                </div>
            </div> */}

            {/* ..... */}

            <MetaData title={'Login'} />
            <Container component="main" maxWidth="xs" className="new_password remove_footer_bg">
                <CssBaseline />
                <Paper elevation={3} className={classes.paperWrapper}>
                    <Avatar className={classes.avatar + ' ' + classes.icon}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5"  className={classes.h1}>
                        Reset Password
                    </Typography>
                    <form className={classes.form} Validate onSubmit={submitHandler}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullwidth
                            id="email"
                            label="Email Address"
                            name="email"
                            inputProps={{
                                autocomplete: 'new-password',
                                form: {
                                    autocomplete: 'off',
                                },
                            }}
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={classes.field + ' reset-password'}
                        />


                        <Button
                            type="submit"
                            fullwidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            id="login_button"
                            disabled={loading ? true : false}
                        >
                            Send Email
                        </Button>

                    </form>
                </Paper>

            </Container>

            {/* ..... */}


        </Fragment>
    )
}

export default ForgotPassword
