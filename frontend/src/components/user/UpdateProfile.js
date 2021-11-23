import React, { Fragment, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfile,
  loadUser,
  clearErrors,
} from "../../actions/userActions";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
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

const UpdateProfile = ({ history }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("User updated successfully");
      dispatch(loadUser());

      history.push("/me");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, history, isUpdated, user, alert]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("avatar", avatar);

    dispatch(updateProfile(formData));
  };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    const newPass = document.getElementById("NewPassword");
    newPass.style.display = "none";

    const app = document.getElementsByClassName("App")[0];
    app.classList.add("user_update_profile");

    return () => {
      newPass.style.display = "block";
      app.classList.remove("user_update_profile");
    };
  }, []);
  return (
    <Fragment>
      <MetaData title={"Update Profile"} />

      <div className="row wrapper new_passUP">
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
                <h1 className="mt-2 mb-5 updateprofile_title">
                  Update Profile
                </h1>
              </Box>
              <TextField
                type="name"
                id="name_field"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                variant="outlined"
              />
              <TextField
                type="email"
                id="email_field"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" spacing={2} className={classes.stack}>
              <Avatar alt="profile image" src={avatarPreview} />
              <TextField
                type="file"
                name="avatar"
                id="customFile"
                accept="image/*"
                onChange={onChange}
                label="image"
                variant="standard"
              />
            </Stack>
            <Stack direction="row" spacing={2} className={classes.stack}>
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                disabled={loading ? true : false}
              >
                Update
              </Button>
            </Stack>
          </Box>
        </div>
        <div className="update_profile_ils">
          <img
            id="update_image_ills"
            src={updateImageIlls}
            alt="update illustration"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProfile;
