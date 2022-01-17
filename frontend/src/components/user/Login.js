import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import './styles/login.css'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'
import { useTranslation, Trans } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
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
    paper: {
        borderRadius: '20px!important',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        fontSize: '1.6rem!important',
        [theme.breakpoints.down(501)]: {
            width: '87%',

        },
    }
}));

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Locataire LLC
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const Login = ({ history, location }) => {
    const { t, i18n } = useTranslation();

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    const redirect = location.search ? location.search.split('=')[1] : '/'



    useEffect(() => {
        if (isAuthenticated) {
            history.push(redirect)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, alert, isAuthenticated, error, history])

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        app.classList.add('login_page');


        return () => {
            app.classList.remove('login_page');
        }
    }, [])




    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <Fragment>
            <MetaData title={'Login'} />
            {loading ? <Loader /> : (
                <ThemeProvider theme={theme}>
                    <Container component="main" style={{ padding: '0', margin: '0' }} className="login__main">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            id="login__interface-wrapper"
                        >
                            <Paper elevation={3} className={classes.paper} id="login__inner-interface">
                                <Avatar sx={{ m: 1, bgcolor: '#313962' }} className={classes.icon}>
                                    <LoginIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5" className={classes.h1}>
                                    {t('login__signin')}
                                </Typography>
                                <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label={t('login__e_address')}
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                        className={classes.field}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label={t('login__password')}
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        className={classes.field}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label={t('login__rme')}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        className={classes.button}
                                    >
                                        {t('login__signin')}
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to="/password/forgot" variant="body2" className="css-wpssva-MuiTypography-root-MuiLink-root">
                                                <Button variant="outlined" id="fpass">{t('login__fpass')}</Button>
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link to="/register" variant="body2" className="css-wpssva-MuiTypography-root-MuiLink-root">
                                                <Button variant="outlined" id="sUp">{t('login__signup')}</Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </ThemeProvider>
            )}
        </Fragment>
    )
}

export default Login

    // < Fragment >

    //                 <div className="row wrapper">
    //                     <div className="col-10 col-lg-5">
    //                         <form className="shadow-lg" onSubmit={submitHandler}>
    //                             <h1 className="mb-3">Login</h1>
    //                             <div className="form-group">
    //                                 <label htmlFor="email_field">Email</label>
    //                                 <input
    //                                     type="email"
    //                                     id="email_field"
    //                                     className="form-control"
    //                                     value={email}
    //                                     onChange={(e) => setEmail(e.target.value)}
    //                                 />
    //                             </div>

    //                             <div className="form-group">
    //                                 <label htmlFor="password_field">Password</label>
    //                                 <input
    //                                     type="password"
    //                                     id="password_field"
    //                                     className="form-control"
    //                                     value={password}
    //                                     onChange={(e) => setPassword(e.target.value)}
    //                                 />
    //                             </div>

    //                             <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link>

    //                             <button
    //                                 id="login_button"
    //                                 type="submit"
    //                                 className="btn btn-block py-3"
    //                             >
    //                                 LOGIN
    //                             </button>

    //                             <Link to="/register" className="float-right mt-3">New User?</Link>
    //                         </form>
    //                     </div>
    //                 </div>

    //                 <br />

    //                 <SignIn />


    //             </Fragment >