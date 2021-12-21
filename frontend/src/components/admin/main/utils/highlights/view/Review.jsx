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

const Star = Styled.div`
    display: block;
`
const RatingOuter = Styled.div`
    float: left;
`

export const Review = () => {

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

        if (productId) {
            dispatch(getProductReviews(productId))
        }

        if (isDeleted) {
            alert.success('Review deleted successfully');
            dispatch({ type: DELETE_REVIEW_RESET })
        }



    }, [dispatch, alert, error, productId, isDeleted, deleteError])


    const deleteReviewHandler = (id) => {
        dispatch(deleteReview(id, productId))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getProductReviews(productId))
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
                onSubmit={submitHandler}
            >
                <Stack direction="column" spacing={2} >
                    <TextField id="field__review" value={productId} onChange={(e) => setProductId(e.target.value)} label="Enter Product ID" type="text" variant="standard" sx={{ fontSize: '1.6rem' }} />
                    <Button variant="contained" id="btn__review">SEARCH</Button>
                </Stack>
            </Box>
            
            {reviews && reviews.length > 0 ?
                (
                    <>
                        <MDBTable bordered className='mdb__table-container'>
                            <MDBTableHead className='mdb__table-head'>
                                <tr className='mdb__table-row'>
                                    <th className="all_users__table-head">#</th>
                                    <th className="all_users__table-head">Review ID</th>
                                    <th className="all_users__table-head">Rating</th>
                                    <th className="all_users__table-head">Comment</th>
                                    <th className="all_users__table-head">Name</th>
                                    <th className="all_users__table-head">Actions</th>
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
                                            <td>{review.comment}</td>
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
                                        <Typography variant="h3" color="text.primary" sx={{fontSize: '2rem'}} gutterBottom>
                                            {review.name}
                                        </Typography>
                                        </Stack>

                                        <Divider sx={{marginLeft: 0}}>
                                            <Chip label="comment" sx={{fontSize: '1.6rem', mb: 1}} className="chip__review" />
                                        </Divider>
                                        <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary" gutterBottom>
                                            {review.comment}
                                        </Typography>

                                    </CardContent>

                                    <CardActions>
                                        <Button onClick={() => deleteReviewHandler(review._id)}>
                                            <DeleteForeverIcon sx={{width: '1.5em', height: '1.5em'}} />
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