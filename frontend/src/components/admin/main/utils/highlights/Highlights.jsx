import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-ant-design/shopping-cart-outlined';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { getAdminProducts } from '../../../../../actions/productActions'
import { allOrders } from '../../../../../actions/orderActions'
import { allUsers } from '../../../../../actions/userActions'

export const Highlights = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products)
    const [isAllProducts, setIsAllProducts] = useState(false)

    const changeState = () => {
        setIsAllProducts(previousState => { return {...previousState, isAllProducts: true} })
        handleChange()
   }

   const handleChange = () => {
    const sideItem = document.getElementById('product_view');
    sideItem.click();
   }



    // --------------------------------------------------------------------------------------------

    const RootStyle = styled(Card)(({ theme }) => ({
        boxShadow: 'none',
        textAlign: 'center',
        padding: theme.spacing(5, 0),
        color: theme.palette.primary.darker,
        backgroundColor: theme.palette.primary.lighter
    }));

    const IconWrapperStyle = styled('div')(({ theme }) => ({
        margin: 'auto',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        width: theme.spacing(8),
        height: theme.spacing(8),
        justifyContent: 'center',
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.dark,
        backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
            theme.palette.primary.dark,
            0.24
        )} 100%)`
    }));

    // ---------------------------------------------------------------------------------------------------
    

    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(allOrders())
        dispatch(allUsers())
    }, [dispatch])


    return (
        <Link to="#" onClick={changeState}>
            <RootStyle>
                <IconWrapperStyle>
                    <Icon icon={shoppingCart} width={24} height={24} />
                </IconWrapperStyle>
                <Typography variant="h3" className="admin__boxText">{products && products.length}</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.72, fontSize: '1.6rem' }}  className="admin__boxText">
                    Products
                </Typography>
            </RootStyle>
        </Link>
    )
}

export default Highlights