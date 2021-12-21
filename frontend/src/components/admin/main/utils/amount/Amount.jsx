import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
import caretUpOutlined from '@iconify/icons-ant-design/caret-up-outline';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { allOrders } from '../../../../../actions/orderActions'


export const Amount = () => {
    const dispatch = useDispatch();

    const { totalAmount } = useSelector(state => state.allOrders)

    const RootStyle = styled(Card)(({ theme }) => ({
        boxShadow: 'none',
        textAlign: 'center',
        marginTop: '5rem',
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

  

    return (
      <RootStyle>
      <IconWrapperStyle>
          <Icon icon={caretUpOutlined} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3" className="admin__boxText">${totalAmount && totalAmount.toFixed(2)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72, fontSize: '1.6rem' }} className="admin__boxText">
      Total Amount
      </Typography>
  </RootStyle>
    )
}

export default Amount