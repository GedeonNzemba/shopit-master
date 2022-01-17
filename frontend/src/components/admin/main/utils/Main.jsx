import React, { memo, useMemo } from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import './drawer/drawer.css'
import ProductView from './highlights/view/View'
import Users from './highlights/view/User'
import OrderList from './highlights/view/OrderList'
import Review from './highlights/view/Review'
import Highlights from './highlights/Highlights.jsx'
import Order from './order/Order'
import User from './user/User'
import OutOfStock from './stock/OutOfStock'
// theme
import ThemeConfig from '../../../../theme/index';
import GlobalStyles from '../../../../theme/globalStyles';
import Amount from './amount/Amount';


function Main({ drawerWidth, }) {

  const { user } = useSelector(state => state.auth)

  



  return (
    <ThemeConfig>
      <GlobalStyles />
      <Container className="admain__main-view" id="admain__main-view">
        <section className="admin__content_item view active">
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4"  sx={{ fontWeight: 700, lineHeight: 1.5 }} id="dashboard__greetings">Hi <span sx={{ textTransform: 'capitalize' }}>{user && user.name}</span>, Welcome back</Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Highlights />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Order />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <User />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OutOfStock />
            </Grid>
          </Grid>

          <Amount />
        </section>

        <section  className="admin__content_item view">
          <ProductView />
        </section>

        <section className="admin__content_item view useView">
          <User />
          <br />
          <Users />
        </section>

        <section className="admin__content_item view useView">
          <Order />
          <br />
          <OrderList />
        </section>

        <sectiom className="admin__content_item view useView">
          <Review />
        </sectiom>
      </Container>
    </ThemeConfig>
  )
}

export default memo(Main);