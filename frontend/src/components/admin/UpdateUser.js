import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUserDetails, clearErrors } from '../../actions/userActions'
import { UPDATE_USER_RESET } from '../../constants/userConstants'
import { useTranslation, Trans } from 'react-i18next';

const UpdateUser = ({ history, match }) => {
    const { t, i18n } = useTranslation();

    // -------------------------------REMOVE HEADER AND FOOTER -------------------------------
    function removeHeader() {
        const header = document.querySelector('.farm-header');
        const footer = document.querySelector('#contactFormWrapper');
        header && (header.style.display = 'none');
        footer && (footer.style.display = 'none');
    }

    function mountHeader() {
        const header = document.querySelector('.farm-header');
        const footer = document.querySelector('#contactFormWrapper');
        header && (header.style.display = 'block');
        footer && (footer.style.display = 'block');
    }

    function checkDashboard() {
        removeHeader();
    }

    useEffect(() => {
        checkDashboard()

        return () => {
            mountHeader();
        }
    }, [])

    useEffect(() => {
        const upProfil = document.getElementById('UpdateProfile');
        upProfil.style.display = 'none';


        const app = document.getElementsByClassName('App')[0];
        app.classList.add('dashboard_main');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';


        return () => {
            app.classList.remove('dashboard_main');
            upProfil.style.display = 'block';
            newPass.style.display = 'block';
        }
    }, [])

    // -----------------------------------------------------------------------------------------------


    useEffect(() => {
        const upProfil = document.getElementById('UpdateProfile');
        upProfil.style.display = 'none';


        const app = document.getElementsByClassName('App')[0];
        app.classList.add('dashboard_main');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';


        return () => {
            app.classList.remove('dashboard_main');
            upProfil.style.display = 'block';
            newPass.style.display = 'block';
        }
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user);
    const { user } = useSelector(state => state.userDetails)

    const userId = match.params.id;

    useEffect(() => {

        console.log(user && user._id !== userId);
        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success(t('user_update'))

            history.push('/dashboard')

            dispatch({
                type: UPDATE_USER_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated, userId, user])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('role', role);

        dispatch(updateUser(user._id, formData))
    }


    return (
        <Fragment>
            <Container style={{ paddingTop: '5%', paddingBottom: '2%', maxWidth: '100%', height: '100vh', paddingLeft: '0', paddingRight: '0' }} id="update_product__container">
                <MetaData title={`Update User`} />
                <Box
                    component="form"
                    style={{ padding: '2rem' }}
                    noValidate
                    autoComplete="off"
                    onSubmit={submitHandler}
                    encType='multipart/form-data'
                    id="shipping_fistForm"
                    className="update_product__form"
                >
                    <div id="shipping_info">
                        <h1 className="mt-2 mb-5" style={{paddingTop: '1rem'}}>{t('update_user')}</h1>
                        <Stack direction="column" spacing={4} id="shipping_field-wrapper">
                            <TextField
                                type="name"
                                id="name_field"
                                name='name'
                                fullWidth
                                label={t('farm.dashboard.products.all_products.products_modification.table.name')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                type="email"
                                id="email_field"
                                fullWidth
                                name='email'
                                label={t('farm.dashboard.total_users.email')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormControl className="MuiTextField-root" >
                                <InputLabel id="demo-simple-select-label">{t('farm.dashboard.total_users.role')}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="update_product__color"
                                    value={role}
                                    label={t('farm.dashboard.total_users.role')}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <MenuItem value="user" className="update_product__option">{t('user')}</MenuItem>
                                    <MenuItem value="admin" className="update_product__option">{t('admin')}</MenuItem>
                                </Select>
                            </FormControl>

                        </Stack>
                        <center style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                            <Button
                                id="update-product_button"
                                type="submit"
                                variant="contained"
                                className="btn btn-block py-3"
                                style={{textTransform: 'uppercase'}}
                            >
                                {t('update')}
                            </Button>
                        </center>
                    </div>
                </Box>
            </Container>
        </Fragment>
    )
}

export default UpdateUser
