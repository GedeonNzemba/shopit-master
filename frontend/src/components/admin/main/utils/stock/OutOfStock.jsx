import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import shopOutlined  from '@iconify/icons-ant-design/shop-outlined';
// material
import { alpha, styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';

import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../number/number';

// utils
import { getAdminProducts } from '../../../../../actions/productActions'
import { allOrders } from '../../../../../actions/orderActions'
import { allUsers } from '../../../../../actions/userActions'

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.lighter
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
    color: theme.palette.error.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
      theme.palette.error.dark,
      0.24
    )} 100%)`
  }));


export const OutOfStock = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products)
    const { users } = useSelector(state => state.allUsers)
    const { orders, totalAmount, loading } = useSelector(state => state.allOrders)

    let outOfStock = 0;
    products.forEach(product => {
        if (product.stock === 0) {
            outOfStock += 1;
        }
    })

    useEffect(() => {
        dispatch(getAdminProducts())
       
    }, [dispatch])


    return (
        <RootStyle>
        <IconWrapperStyle>
          <Icon icon={shopOutlined } width={24} height={24} />
        </IconWrapperStyle>
        <Typography variant="h3" className="admin__boxText">{outOfStock}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72, fontSize: '1.6rem' }} className="admin__boxText">
          Out Of Stock
        </Typography>
      </RootStyle>
    )
}

export default OutOfStock