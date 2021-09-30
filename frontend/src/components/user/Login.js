import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'

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
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LoginIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="/password/forgot" variant="body2" className="css-wpssva-MuiTypography-root-MuiLink-root">
                                            <Button variant="outlined">Forgot password?</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/register" variant="body2" className="css-wpssva-MuiTypography-root-MuiLink-root">
                                            <Button variant="outlined">{"Don't have an account? Sign Up"}</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
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