import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import "./route.css"
import './styles/Locataire.css'

import Home from './components/Home'

// Category
import Poultry from './components/farm/Category/Poultry'

import ProductDetails from './components/product/ProductDetails'

// Cart Imports
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'
import OrderSuccess from './components/cart/OrderSuccess'

// Order Imports
import ListOrders from './components/order/ListOrders'
import OrderDetails from './components/order/OrderDetails'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

// Admin Imports
import Dashboard from './components/admin/Dashboard'
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import OrdersList from './components/admin/OrdersList'
import ProcessOrder from './components/admin/ProcessOrder'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'
import ProductReviews from './components/admin/ProductReviews'


import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import axios from 'axios'

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Shop from './components/Shop'
import About from './About'
import Farm from './farm/Farm'
import { Risk } from './components/Risk'
import Contact from './components/layout/Contact'
import RealEstate from './Realty/RealEstate'
import scrollUp from './images/reaalty/scrollup.svg'
import scrollUpHovered from './images/reaalty/scrollupHover.svg'
import Header from './components/layout/Header'


function App() {

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();

  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)


  // SCROLL TO UP HOVER 
  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  }

  const handleMouseOut = () => {
    setHover(false);
  }




  return (
    <Router>
      <main>
        <div className="App">
          <div className="farmStyle" id="farmSHOP">
            <Header />
            <Route path="/" component={Home} exact />

            <div className="container container-fluid"  >
              {/* <Route path="/" component={Home} exact /> */}
              <Route path="/search/:keyword" component={Home} />
              <Route path="/product/:id" component={ProductDetails} exact />

              <ProtectedRoute path="/shipping" component={Shipping} />
              <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
              <ProtectedRoute path="/success" component={OrderSuccess} />
              {stripeApiKey &&
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <ProtectedRoute path="/payment" component={Payment} />
                </Elements>
              }

              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/password/forgot" component={ForgotPassword} exact />
              <Route path="/password/reset/:token" component={NewPassword} exact />
              <ProtectedRoute path="/me" component={Profile} exact />
              <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
              <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
            </div>

            <Route path="/shop" component={Shop} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/about" component={About} exact />
            <Route path="/farm" component={Farm} exact />

            <Route path="/product-category/poultry" component={Poultry} exact />


          </div>

          <div className="realtyBSN">
            {/* <HeaderBSN /> */}
            <Route path="/real-estate" component={RealEstate} exact />
            <Route path="/riskmanagement" component={Risk} exact />
            {/* <Contact /> */}
          </div>


          <ProtectedRoute path="/orders/me" component={ListOrders} exact />
          <ProtectedRoute path="/order/:id" component={OrderDetails} exact />


          <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
          <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact />
          <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />
          <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />
          <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact />
          <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
          <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />
          <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
          <ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} exact />

          {!loading && (!isAuthenticated || user.role !== 'admin') && (
            <Contact />
          )}

          {showButton && (
            <div class="scrollWrap" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
              <img
                onClick={scrollToTop}
                className={hover ? 'back-to-topHovered' : 'back-to-top'}
                src={hover ? scrollUpHovered : scrollUp}
                alt="scroll up"
              />
            </div>
          )}
        </div>
      </main>
    </Router>
  );
}

export default App;
