import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import 
{
 productsReducer,
 getProductsCategory_PoultryReducer,
 getProductsCategory_EggsReducer,
 getProductsCategory_LivestockReducer,
 getProductsCategory_MammalsReducer,
 getProductsCategory_OthersReducer,
 getProductsCategory_PigstyReducer,
 purebredReducer,
 newProductReducer,
 productReducer,
 productDetailsReducer,
 newReviewReducer,
 productReviewsReducer,
 reviewReducer
} from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    products: productsReducer,
    poultry: getProductsCategory_PoultryReducer,
    freshEggs: getProductsCategory_EggsReducer,
    livestock: getProductsCategory_LivestockReducer,
    mammals: getProductsCategory_MammalsReducer,
    others: getProductsCategory_OthersReducer,
    pigsty: getProductsCategory_PigstyReducer,
    purebred: purebredReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    allOrders: allOrdersReducer,
    orderDetails: orderDetailsReducer,
    order: orderReducer,
    newReview: newReviewReducer
})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;