import React, { Fragment, useEffect, useState } from 'react'

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom'
import { Typography, Box, Button, TextField, Stack } from '@mui/material';
import Loader from '../../../../../layout/Loader'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProductReviews, deleteReview, clearErrors } from '../../../../../../actions/productActions'
import { DELETE_REVIEW_RESET } from '../../../../../../constants/productConstants'
import Styled from 'styled-components'
import { useTranslation, Trans } from 'react-i18next';
import i18nt from "i18next";
import axios from 'axios'

const Star = Styled.div`
    display: block;
`
const RatingOuter = Styled.div`
    float: left;
`

export const Review = () => {
    const { t, i18n } = useTranslation();

    const [trans, setTrans] = useState('')
    const [userComment, setUserComment] = useState('')
    const [isSubmitted, setIsSubnitted] = useState(false);
    // !isSubmitted && console.log('NO!!!')

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

    const [productId, setProductId] = useState('')



    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, reviews } = useSelector(state => state.productReviews);
    const { isDeleted, error: deleteError } = useSelector(state => state.review)


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



    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        // if (productId) {
        //     dispatch(getProductReviews(productId))
        //     setTrans(reviews && reviews[0].comment)
        // }

        if (isDeleted) {
            alert.success('Review deleted successfully');
            dispatch({ type: DELETE_REVIEW_RESET })
        }





    }, [dispatch, alert, error, isDeleted, deleteError, reviews])


    const deleteReviewHandler = (id) => {
        dispatch(deleteReview(id, productId))
    }


    useEffect(() => {
        axios({
            method: 'post',
            url: 'https://translate.mentality.rip/translate',
            headers: { "Content-Type": "application/json" },
            data: {
                q: isSubmitted && trans,
                source: "en",
                target: "fr",
                format: "text"
            }
        }).then(function (response) {
            // console.log(response.data.translatedText);
            isSubmitted && setUserComment(response.data.translatedText);
            // isSubmitted && console.log('TESTING' + userComment + '\n' + trans)

        })
            .catch(function (error) {
                console.log(error);
            })
    }, [isSubmitted, trans, userComment]);


    // setUserComment(await res.json())



    // console.log('isSubmitted is: ' + isSubmitted)
    // console.log(productId)

    const submitHandler = (e) => {
        e.preventDefault();
        if (productId !== '') {
            dispatch(getProductReviews(productId));
            reviews && setTrans(reviews[0].comment)
            reviews && setIsSubnitted(true)
            // console.log('YES!!!')
            // console.log('CONTENT: ' + reviews[0].comment)

        } else {
            window.alert(t('review__alert'))
            // console.log('NO!!!')
        }
    }


    return (
        <Fragment>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '70ch', display: 'flex', placeContent: 'center' },
                }}
                noValidate
                id="box_review"
                autoComplete="off"
            >
                <Stack direction="column" spacing={2} >
                    <TextField id="field__review" value={productId} onChange={(e) => setProductId(e.target.value)} label="Enter Product ID" type="text" variant="standard" sx={{ fontSize: '1.6rem' }} />
                    <Button variant="contained" id="btn__review" onClick={submitHandler}>{t('search')}</Button>
                </Stack>
            </Box>

            {reviews && reviews.length > 0 ?
                (
                    <>
                        <MDBTable bordered className='mdb__table-container'>
                            <MDBTableHead className='mdb__table-head'>
                                <tr className='mdb__table-row'>
                                    <th className="all_users__table-head">#</th>
                                    <th className="all_users__table-head">{t('farm.dashboard.reviews.items.table.review_id')}</th>
                                    <th className="all_users__table-head">{t('farm.dashboard.reviews.items.table.rating')}</th>
                                    <th className="all_users__table-head">{t('farm.dashboard.reviews.items.table.comment')}</th>
                                    <th className="all_users__table-head">{t('farm.dashboard.products.all_products.products_modification.table.name')}</th>
                                    <th className="all_users__table-head">{t('farm.dashboard.total_users.actions')}</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody className='mdb__table-body'>
                                {reviews && reviews.map((review, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{review._id}</td>
                                            <td>
                                                <Star>
                                                    <RatingOuter className="rating-outer">
                                                        <div className="rating-inner" style={{ width: `${(review.rating / 5) * 100}%` }}></div>
                                                    </RatingOuter>
                                                </Star>
                                            </td>
                                            <td>{i18n.resolvedLanguage === 'fr' ? userComment : review.comment}</td>
                                            <td>{review.name}</td>
                                            <td>
                                                <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteReviewHandler(review._id)}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </MDBTableBody>
                        </MDBTable>

                        <br />
                        <br />
                        <br />

                        {reviews && reviews.map((review, index) => (
                            <Card sx={{ maxWidth: 400 }} key={index} id="card__review">
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Box>
                                            <Star>
                                                <RatingOuter className="rating-outer">
                                                    <div className="rating-inner" style={{ width: `${(review.rating / 5) * 100}%` }}></div>
                                                </RatingOuter>
                                            </Star>
                                        </Box>
                                        <Typography variant="h3" color="text.primary" sx={{ fontSize: '2rem' }} gutterBottom>
                                            {review.name}
                                        </Typography>
                                    </Stack>

                                    <Divider sx={{ marginLeft: 0 }}>
                                        <Chip label={t('farm.dashboard.reviews.items.table.comment')} sx={{ fontSize: '1.6rem', mb: 1 }} className="chip__review" />
                                    </Divider>
                                    <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary" gutterBottom>
                                        {i18n.resolvedLanguage === 'fr' ? userComment : review.comment}
                                    </Typography>

                                </CardContent>

                                <CardActions>
                                    <Button onClick={() => deleteReviewHandler(review._id)}>
                                        <DeleteForeverIcon sx={{ width: '1.5em', height: '1.5em' }} />
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}


                    </>
                )
                :
                (
                    <Typography paragraph >
                        No Reviews.
                    </Typography>
                )
            }

        </Fragment>

    )
}

export default Review