import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Locataire.css'
import Styled from 'styled-components'
import { Button } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { addItemToCart } from "../../actions/cartActions";
import { useTranslation, Trans } from 'react-i18next';
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { fCurrency, fCurrencyFR } from '../admin/main/utils/number/number'

// style for product
const Productlist = Styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 4.5rem;
    position: relative;
    width: 100%!important;
        
`
const ProductName = Styled.h6`
    text-align: left;
`
const RightContent = Styled.div`
    display: flex;
    flex-direction: column;
`
const NamePrice = Styled.div`
    justify-content: space-between!important;
    padding: 0 1rem;
`
const AddToCard = Styled.div`
    width: fit-content;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
`
const Star = Styled.div`
    display: block;
`
const RatingOuter = Styled.div`
    float: left;
`
const SidebarSpan = Styled.div`
 margin: 0.1rem!important;
    padding: .8rem 1.1rem!important;
    
`

const ProductList = ({ product, col }) => {
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();
    const alert = useAlert();

    const [Id, setId] = useState('');
    const [quantity, setQuantity] = useState(1)

    return (

        <Productlist className="product product__list farmStyle">

            <div className="img-container img_list">
                <Link to={`/product/${product._id}`}>
                    <img src={product.images[0].url} alt="products" />
                </Link>
                <div className="addCart" onClick={() => {
                    setId(product._id)
                    if (Id !== '') {
                        dispatch(addItemToCart(Id, quantity))
                        alert.success(t('add_to_cart'))
                    } else {
                        alert.info(t('alert_info'))
                    }
                }} variant="contained" color="success" id="add_to_card">
                    <i className="fas fa-shopping-cart"></i>
                </div>

                {/* <SidebarSpan className="side-icons">
                    <span className=" span__list"><i className="fas fa-search"></i></span>
                    <span className=" span__list"><i className="far fa-heart "></i></span>
                    <span className=" span__list"><i className="fas fa-sliders-h "></i></span>
                </SidebarSpan> */}

            </div>

            <Link to={`/product/${product._id}`} id="link_list">
                <RightContent className="bottom">
                    <NamePrice className="row">
                        <ProductName className="product_title">
                            <Link to={`/product/${product._id}`}>
                                {i18n.resolvedLanguage === 'fr' ? product.french.name : product.name}
                            </Link>
                        </ProductName>
                        <div className="price price_list">
                            <span>
                                {i18n.resolvedLanguage === 'fr' ? fCurrencyFR(product.french.price) + ' CFA' :  fCurrency(product.price)}
                            </span>
                        </div>
                    </NamePrice>
                    <Star>
                        <RatingOuter className="rating-outer">
                            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                        </RatingOuter>
                    </Star>
                    { window.innerWidth < 374 ? 
                        null 
                        : 
                        <AddToCard>
                            <Button variant="contained" color="primary" id="addCardList" startIcon={<ShoppingCartIcon />}>
                                {t('add_card')}
                            </Button>
                        </AddToCard> 
                    }
                </RightContent>
            </Link>

        </Productlist>
    )
}

export default ProductList
