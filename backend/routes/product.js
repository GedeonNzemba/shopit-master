const express = require('express')
const router = express.Router();


const {
    getProducts,
    getProductsCategory_Poultry,
    getProductsCategory_Eggs,
    getProductsCategory_Livestock,
    getProductsCategory_Mammals,
    getProductsCategory_Others,
    getProductsCategory_Pigsty,
    getAdminProducts,
    getRandomProducts,
    getPurebred,
    getHomePoultry,
    getHomeLivestock,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview

} = require('../controllers/productController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');


router.route('/products').get(getProducts);
router.route('/admin/products').get(getAdminProducts);
router.route('/sales/products').get(getRandomProducts);

router.route('/category/purebred').get(getPurebred);
router.route('/category/poultry').get(getProductsCategory_Poultry);
router.route('/category/fresheggs').get(getProductsCategory_Eggs);
router.route('/category/livestock').get(getProductsCategory_Livestock);
router.route('/category/mammals').get(getProductsCategory_Mammals);
router.route('/category/parkanimals').get(getProductsCategory_Others);
router.route('/category/pigsty').get(getProductsCategory_Pigsty);
router.route('/category/purebred').get(getPurebred);

router.route('/home/livestock').get(getHomeLivestock);
router.route('/home/poultry').get(getHomePoultry);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

router.route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);


router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

module.exports = router;