import React, { Fragment, useState, useEffect } from 'react'
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword, clearErrors } from '../../actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'
import login_bg from "../../images/login.jpg"
import { makeStyles } from "@material-ui/core/styles";
import updateImageIlls from "../../images/updateimageills.svg";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    button: {
        backgroundColor: "#061311!important",
        width: "100%!important",
    },
    stack: {
        marginTop: "1rem",
        marginBottom: "1rem",
    },
});

const UpdatePassword = ({ history }) => {
    const classes = useStyles();
    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        const footer = document.getElementsByClassName('contactFormWrapper')[0];

        footer.style.backgroundColor = 'unset'

        app.style.backgroundImage = `url(${login_bg})`
        app.style.backgroundSize = 'cover'
        app.style.backgroundRepeat = 'no-repeat'
        app.style.backgroundAttachment = 'fixed'

    }, [])

    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Password updated successfully')

            history.push('/me')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('password', password);

        dispatch(updatePassword(formData))
    }

    return (
        <Fragment>
            <MetaData title={'Change Password'} />

            <div className="row wrapper remove_footer_bg">
                <div className="update__form-profile">
                    <Box
                        component="form"
                        className="shadow-lg"
                        onSubmit={submitHandler}
                        encType="multipart/form-data"
                        sx={{
                            "& .MuiTextField-root": { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Stack direction="column" spacing={2} className={classes.stack}>
                            <Box>
                                <h1 className="mt-2 mb-5">Update Password</h1>
                            </Box>
                            <TextField
                                type="password"
                                id="old_password_field"
                                className="form-control"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                label="Old Password"
                                variant="outlined"
                            />
                            <TextField
                                type="password"
                                id="new_password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="New Password"
                                variant="outlined"
                            />
                        </Stack>
                        <Stack direction="row" spacing={2} className={classes.stack}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                type="submit"
                                disabled={loading ? true : false}
                            >
                                Update Password
                            </Button>
                        </Stack>
                    </Box>
                </div>
               
                {/* <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mt-2 mb-5">Update Password</h1>
                        <div className="form-group">
                            <label for="old_password_field">Old Password</label>
                            <input
                                type="password"
                                id="old_password_field"
                                className="form-control"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label for="new_password_field">New Password</label>
                            <input
                                type="password"
                                id="new_password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn update-btn btn-block mt-4 mb-3" disabled={loading ? true : false} >Update Password</button>
                    </form>
                </div> */}

            </div>

        </Fragment>
    )
}

export default UpdatePassword
