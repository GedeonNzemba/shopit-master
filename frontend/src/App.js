import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import "./route.css"
import './styles/Locataire.css'

import Home from './components/Home'
import Career from './components/Career/Career'

// Category
import Poultry from './components/farm/Category/Poultry'
import FreshEggs from './components/farm/Category/Eggs'
import Pigsty from './components/farm/Category/Pigsty'
import Mammals from './components/farm/Category/Mammals'
import ParkedAnimals from './components/farm/Category/Others'
import Purebred from './components/farm/Category/Purebred'
import LivestockFood from './components/farm/Category/LivestockFood'

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
import Header from './components/layout/Header'


function App() {


  // GET PRODUCTS FROM API BACKEND
  // const [products, setProducts]

  // The back-to-top button is hidden at the beginning
  // const [showButton, setShowButton] = useState();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 300) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton((prevState) => prevState = false);
  //     }
  //   });
  // }, []);

  // This function will scroll the window to the top 



  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();


  }, [])

  // const { user, isAuthenticated, loading } = useSelector(state => state.auth)




  // const cartPage = 'Cart - Locataire';
  // const loginPage = 'Login - Locataire';
  // const shippingPage = 'Shipping Info - Locataire';
  // const confirmOrderPage = 'Confirm Order - Locataire';
  // let pageTitle = document.title;





  return (
    <Router >
      <main>
        <div className='App'>
          <div className="farmStyle" id="farmSHOP">
           <Header />
            <Route path="/" component={Home} exact />

            <main id="shipping_wrapper">
              <ProtectedRoute path="/shipping" component={Shipping} />
            </main>
            <main id="confirm_order">
              <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
            </main>
            <main id="order_success">
              <ProtectedRoute path="/success" component={OrderSuccess} />
            </main>

            <main id="Login">
              <Route path="/login" component={Login} />
            </main>
            <main id="Register">
              <Route path="/register" component={Register} />
            </main>
            <main id="ForgotPassword">
              <Route path="/password/forgot" component={ForgotPassword} exact />
            </main>
            <main id="NewPassword">
              <Route path="/password/reset/:token" component={NewPassword} exact />
            </main>
            <main id="Profile">
              <ProtectedRoute path="/me" component={Profile} exact />
            </main>
            <main id="UpdateProfile">
              <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
            </main>
            <main id="UpdatePassword">
              <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
            </main>




            <div className="container container-fluid"  >
              {/* <Route path="/" component={Home} exact /> */}
              <Route path="/product/:id" component={ProductDetails} exact />

              {stripeApiKey &&
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <ProtectedRoute path="/payment" component={Payment} />
                </Elements>
              }
            </div>

            <Route path="/search/:keyword" component={Shop} />


            <Route path="/shop" component={Shop} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/about" component={About} exact />
            <Route path="/career" component={Career} exact />
            <Route path="/farm" component={Farm} exact />

            <Route path="/product-category/poultry" component={Poultry} exact />
            <Route path="/product-category/fresh-eggs" component={FreshEggs} exact />
            <Route path="/product-category/pigsty" component={Pigsty} exact />
            <Route path="/product-category/goat-sheep-mammals" component={Mammals} exact />
            <Route path="/product-category/park-animals" component={ParkedAnimals} exact />
            <Route path="/product-category/purebred-seed" component={Purebred} exact />
            <Route path="/product-category/livestock-food" component={LivestockFood} exact />


            <ProtectedRoute path="/orders/me" component={ListOrders} exact />
            <ProtectedRoute path="/order/:id" component={OrderDetails} exact />


            <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
            <ProtectedRoute path="/admin/products" isAdmin={true} component={Dashboard} exact />
            <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />
            <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />
            <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact />
            <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
            <ProtectedRoute path="/admin/users" isAdmin={true} component={Dashboard} exact />
            <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
            <ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} exact />


          </div>

          <div className="realtyBSN">
            {/* <HeaderBSN /> */}
            <Route path="/real-estate" component={RealEstate} exact />
            <Route path="/riskmanagement" component={Risk} exact />
            {/* <Contact /> */}
          </div>




          {/* {!loading && (!isAuthenticated || user.role !== 'admin') && ( */}
          <Contact />
          {/* )} */}

          {/* {showButton && (
            <div class="scrollWrap" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
              <img
                onClick={scrollToTop}
                className={hover ? 'back-to-topHovered' : 'back-to-top'}
                src={hover ? scrollUpHovered : scrollUp}
                alt="scroll up"
              />
            </div>
          )
          } */}
        </div>
      </main>
    </Router>
  );
}

export default App;


// useEffect(() => {
//   const page = "http://localhost:3000/riskmanagement";
//   const activateBar = () => {
//     setActive(true);


//   }
//   const disactivateBar = () => {

//     setActive(false);
//     console.log("User not at real estate page.........active is false")
//   }


//   (window.location.href === page && window.innerWidth >= 900) ? activateBar() : disactivateBar();
// }, [])