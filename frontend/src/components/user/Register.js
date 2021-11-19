import React, { useState, useEffect } from 'react'

import Paper from '@mui/material/Paper';


import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Btn from '@mui/material/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    icon: {
        alignSelf: 'center',
    },
    button: {
        // backgroundColor: '#231f20'
    },
    h1: {
        textAlign: 'center',
    },
    field: {
        width: '100%!important'
    },
    paperWrapp: {
        borderRadius: '20px!important',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        fontSize: '1.6rem!important', 
        [theme.breakpoints.down(501)]: {
            width: '87%',
          
        },
    },
    FileLoader: {
        width: '95%!important',
    },
    signUp: {
        '& span': {
            marginLeft: 'unset!important',
        }
    }

}));

export default function Register({ history }) {

    // 
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    // 

    const classes = useStyles();

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        app.classList.add('register_page');


        return () => {
            app.classList.remove('register_page');
        }
    }, [])

    return (

        <Container component="main" maxWidth="xs" style={{paddingTop: '8%'}}>
            <MetaData title={'Register User'} />
            <CssBaseline />
            <Paper  elevation={3} className={classes.paperWrapp} id="remove_footer_bg">
                <Avatar className={classes.avatar + ' ' + classes.icon}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.h1}>
        <Container component="main" maxWidth="xs">
            <MetaData title={'Register User'} />
            <CssBaseline />
            <div className={classes.paper} id="remove_footer_bg">
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">

                    Sign up
                </Typography>
                <form className={classes.form} Validate onSubmit={submitHandler} encType='multipart/form-data'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField

                                name="name"
                                variant="outlined"
                                required
                                fullwidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={name}
                                onChange={onChange}
                                inputProps={{
                                    autocomplete: 'new-firstName',
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullwidth
                                id="lastName"
                                label="last Name"

                                name="lastName"
                                inputProps={{
                                    autocomplete: 'new-lastName',
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullwidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={onChange}
                                inputProps={{
                                    autocomplete: 'new-email',
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullwidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                inputProps={{
                                    autocomplete: 'new-password',
                                    form: {
                                        autocomplete: 'off',
                                    },
                                }}
                                value={password}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div className='form-group'>
                                {/* <label htmlFor='avatar_upload'>Avatar</label> */}
                                <div className='avatar-wrap'>
                                    {/* img */}
                                    <Avatar alt="Avatar Preview" src={avatarPreview} className={classes.large} />
                                    {/* field */}

                                    <div className={ classes.FileLoader + ' custom-file'}>
                                    <div className='custom-file'>

                                        <TextField
                                            id="outlined-basic"
                                            type='file'
                                            name='avatar'
                                            label="Choose Image"
                                            variant="outlined"
                                            accept="iamges/*"
                                            onChange={onChange}

                                            className='avatar_preview_content'
                                            className="avatar_preview_content"

                                        />
                                        {/* <input
                                            type='file'
                                            name='avatar'
                                            className='custom-file-input'
                                            id='customFile'
                                            accept="iamges/*"
                                            onChange={onChange}
                                        /> */}
                                        {/* <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Avatar
                                        </label> */}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'none' }}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        id="register_button"
                        type="submit"
                        fullwidth
                        variant="contained"
                        color="primary"

                        className={classes.submit + ' ' + classes.signUp}
                        className={classes.submit}

                        disabled={loading ? true : false}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2" className="css-wpssva-MuiTypography-root-MuiLink-root">

                                <Btn variant="outlined"> { window.innerWidth < 432 ? 'Already have an account?' : '' } Sign in</Btn>
                                <Btn variant="outlined"> Already have an account? Sign in</Btn>

                            </Link>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
            </div>


        </Container>
    );
}