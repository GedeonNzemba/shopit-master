import React from 'react'
import Typography from '@mui/material/Typography';


const ListReviews = ({ reviews }) => {
    return (
        <div class="reviews w-75" style={{ marginBottom: '8rem' }}>
            {/* <h3>Other's Reviews:</h3> */}
            <Typography id="modal-modal-title" variant="h3" component="h3">
                Other's Reviews:
            </Typography>
            <hr />
            {reviews && reviews.map(review => (
                <div key={review._id} class="review-card my-3">
                    <div class="rating-outer">
                        <div class="rating-inner" style={{ width: `${(review.rating / 5) * 100}%` }}></div>
                    </div>
                    {/* <p class="review_user"></p> */}
                    <Typography id="modal-modal-title" variant="h6" component="p">
                        by {review.name}
                    </Typography>
                    {/* <p class="review_comment">{review.comment}</p> */}
                    <Typography variant="subtitle1" gutterBottom component="div" id="rev_comment">
                        {review.comment}
                    </Typography>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ListReviews
