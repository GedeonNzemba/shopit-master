import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Carde from "react-bootstrap/Card"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import email_img from "../../images/email.jpg"
import join from "../../images/joined.jpg"
import './styles/profile.css'
import { useTranslation, Trans } from 'react-i18next';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const Profile = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        app.classList.add('user_profile_page');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';


        return () => {
            app.classList.remove('user_profile_page');
            newPass.style.display = 'block';
        }
    }, [])

    const { user, loading } = useSelector(state => state.auth)
    const classes = useStyles();

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <div id="profile_main_main" >
                    <MetaData title={'Your Profile'} />

                    <div className="profile_main">
                        {/* <header className="header_profile" /> */}
                        <div className="profile_tile"><span id="hello">{t('hello')}, </span> {user.name}</div>
                        <main className="profile_wrapper">
                            <div className="profile_image">
                                <div className="profile__dsn">
                                    <Card className={classes.root + ' my-profile-image_wrap'}>
                                        <CardActionArea className="my-profile-image-inner-wrap">
                                            <CardMedia
                                                className={classes.media + ' my-profile-image'}
                                                image={user.avatar.url}
                                                title={user.name}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <CardContent className="profile_name-wrap">
                                    <div className="profile_name">{t('hello')}, {user.name}. {t('edit__pp')}.</div>
                                    <br />
                                    {user.role !== 'admin' && (
                                        <Link to="/orders/me">

                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.button + ' btn__profile_udt'}
                                                id="order"
                                            >
                                               {t('my__orders')}
                                            </Button>
                                        </Link>
                                    )}
                                    <Link to="/me/update">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button + ' btn__profile_udt'}

                                        >
                                            {t('edit__profiles')}
                                        </Button>
                                    </Link>

                                </CardContent>
                            </div>
                            <div className="profile_content">
                                <div className="profile_inner-left">
                                    <div className="profile_email">

                                        <Carde style={{ width: '28rem' }} id="profile_email-card">
                                            <Carde.Img variant="top" src={email_img} />
                                            <Carde.Body>
                                                <Carde.Title><h1 id="profile__cardtitle">{t('email')}</h1></Carde.Title>
                                                <Carde.Text>
                                                    <h5 id="profile__content-text">{t('hi')}{' '} {user.name}, {t('pp__content')}.</h5>
                                                    <span className="profile___email">{user.email}</span>
                                                </Carde.Text>
                                                <Link to="/shop">
                                                    <Button variant="contained" color="primary" id="profile__btn">{t('shop__now')}</Button>
                                                </Link>
                                            </Carde.Body>
                                        </Carde>
                                    </div>
                                    <div className="profile_join">

                                        <Carde style={{ width: '28rem' }}>
                                            <Carde.Img variant="top" src={join} />
                                            <Carde.Body>
                                                <Carde.Title><h1 id="profile__cardtitle">{t('your__journey')}</h1></Carde.Title>
                                                <Carde.Text style={{fontSize: '1.8rem'}}>
                                                    <h5 id="profile__content-text">{t('at__locataire')}</h5>
                                                    {t('joined')} <span className="profile__join" > {String(user.createdAt).substring(0, 10)}</span>
                                                </Carde.Text>
                                                <Link to="/password/reset/:token">
                                                    <Button variant="contained" color="primary" id="profile__btn">{t('reset__password')}</Button>
                                                </Link>
                                            </Carde.Body>
                                        </Carde>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <section className="profile_bgt">
                            <div className="profile_viewed-product"></div>
                            <div className="profile_wishlist"></div>
                        </section>
                    </div>

                    <br />



                    {/* <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                        Change Password
                            </Link> */}

                    {/* <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                            </figure>
                            <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                                Edit Profile
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4>Full Name</h4>
                            <p>{user.name}</p>

                            <h4>Email Address</h4>
                            <p>{user.email}</p>

                            <h4>Joined On</h4>
                            <p>{String(user.createdAt).substring(0, 10)}</p>

                            {user.role !== 'admin' && (
                                <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                                    My Orders
                                </Link>
                            )}

                            <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                Change Password
                            </Link>
                        </div>
                    </div> */}
                </div>
            )}
        </Fragment>
    )
}

export default Profile
