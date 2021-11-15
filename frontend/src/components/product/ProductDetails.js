import React, { Fragment, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import ListReviews from "../review/ListReviews";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductDetails,
    newReview,
    clearErrors,
} from "../../actions/productActions";
import { addItemToCart } from "../../actions/cartActions";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = ({ match }) => {
    const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, product } = useSelector(state => state.productDetails)
    const { user } = useSelector(state => state.auth)
    const { error: reviewError, success } = useSelector(state => state.newReview)

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (reviewError) {
            alert.error(reviewError);
            dispatch(clearErrors())
        }

        if (success) {
            alert.success('Reivew posted successfully')
            dispatch({ type: NEW_REVIEW_RESET })
        }

    }, [dispatch, alert, error, reviewError, match.params.id, success])

    const addToCart = () => {
        dispatch(addItemToCart(match.params.id, quantity));
        alert.success('Item Added to Cart')
    }

    const increaseQty = () => {
        const count = document.querySelector('.count')

        if (count.valueAsNumber >= product.stock) return;

        const qty = count.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {

        const count = document.querySelector('.count')

        if (count.valueAsNumber <= 1) return;

        const qty = count.valueAsNumber - 1;
        setQuantity(qty)

    }

    function setUserRatings() {
        const stars = document.querySelectorAll('.star');

        stars.forEach((star, index) => {
            star.starValue = index + 1;

            ['click', 'mouseover', 'mouseout'].forEach(function (e) {
                star.addEventListener(e, showRatings);
            })
        })

        function showRatings(e) {
            stars.forEach((star, index) => {
                if (e.type === 'click') {
                    if (index < this.starValue) {
                        star.classList.add('orange');

                        setRating(this.starValue)
                    } else {
                        star.classList.remove('orange')
                    }
                }

                if (e.type === 'mouseover') {
                    if (index < this.starValue) {
                        star.classList.add('yellow');
                    } else {
                        star.classList.remove('yellow')
                    }
                }

                if (e.type === 'mouseout') {
                    star.classList.remove('yellow')
                }
            })
        }
    }

    const reviewHandler = () => {
        const formData = new FormData();

        formData.set('rating', rating);
        formData.set('comment', comment);
        formData.set('productId', match.params.id);

        dispatch(newReview(formData));
    }

    const ariaLabel = { "aria-label": "description" };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={product.name} />
                    <main id="productD_main farmStyle" style={{ marginTop: '12rem' }}>
                        <div className="productD__wrapper">
                            {/* IMAGE */}
                            <section className="productD__image">
                                <Carousel pause="hover">
                                    {product.images &&
                                        product.images.map((image) => (
                                            <Carousel.Item key={image.public_id}>
                                                <img
                                                    className="d-block w-100"
                                                    src={image.url}
                                                    alt={product.title}
                                                />
                                            </Carousel.Item>
                                        ))}
                                </Carousel>
                            </section>
                            <section className="productD__content">
                                <h1>{product.name}</h1>
                                <div className="rating_wrapp">
                                    <div className="rating-outer">
                                        <div
                                            className="rating-inner"
                                            style={{ width: `${(product.ratings / 5) * 100}%` }}
                                        ></div>
                                    </div>
                                    <span id="no_of_reviews">
                                        ({product.numOfReviews} Reviews)
                                    </span>
                                </div>
                                <div className="price_wrap">
                                    <p id="product_price">${product.price}</p>
                                </div>
                                <div className="stockCounter" id="wrap_qpt" style={{ display: 'none!important' }}>
                                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                </div>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        variant="contained"
                                        startIcon={<RemoveIcon />}
                                        color="secondary"
                                        className="minus"
                                        onClick={decreaseQty}
                                    >
                                        Decrease
                                    </Button>
                                    <Input
                                        defaultValue="Quantity"
                                        value={quantity}
                                        readOnly
                                        type={"number"}
                                        className="count "
                                        error
                                        inputProps={ariaLabel}
                                        id="input_quantity"
                                    />
                                    <Button
                                        variant="contained"
                                        className="plus"
                                        endIcon={<AddIcon />}
                                        onClick={increaseQty}
                                    >
                                        Increase
                                    </Button>
                                </Stack>
                                <Button disabled={product.stock === 0} onClick={addToCart} variant="contained" color="success" id="add_to_card">
                                    Add to Card
                                </Button>
                                <div className="product_status">
                                    <p>
                                        Status:{" "}
                                        <span
                                            id="stock_status"
                                            className={product.stock > 0 ? "greenColor" : "redColor"}
                                        >
                                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                        </span>
                                    </p>
                                </div>
                                <div className="product_size">
                                    <p>
                                        Size:
                                        <span> {product.size}</span>
                                    </p>
                                </div>
                                <article className="product_description">
                                    <div className="description_header">
                                        <h4 className="mt-2">Description:</h4>
                                    </div>
                                    <p>
                                        <span>{product.description}</span>
                                    </p>
                                </article>
                                <br />
                                {user ? (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        id="add_to_card"
                                        data-toggle="modal"
                                        data-target="#ratingModal"
                                        onClick={setUserRatings}
                                    >
                                        Submit Your Review
                                    </Button>
                                ) : (
                                    <div className="alert alert-danger mt-5" type="alert">
                                        Login to post your review.
                                    </div>
                                )}
                            </section>
                        </div>
                    </main>

                    <div className="row mt-2 mb-5">
                        <div className="rating w-50">
                            <div
                                className="modal fade"
                                id="ratingModal"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="ratingModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="ratingModalLabel">
                                                Submit Review
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="stars">
                                                <li className="star">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="star">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="star">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="star">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="star">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                            </ul>

                                            <textarea
                                                name="review"
                                                id="review"
                                                className="form-control mt-3"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                            ></textarea>


                                            {/* <button
                                                className="btn my-3 float-right review-btn px-4 text-white"
                                                onClick={reviewHandler}
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                Submit
                                            </button> */}
                                            <Button variant="contained"
                                                onClick={reviewHandler}
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                id="add_to_card">
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {product.reviews && product.reviews.length > 0 && (
                        <ListReviews reviews={product.reviews} />
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default ProductDetails;
