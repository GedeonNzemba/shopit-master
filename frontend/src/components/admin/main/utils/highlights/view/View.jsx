import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import appstoreOutlined from '@iconify/icons-ant-design/appstore-outlined';
import editOutlined from '@iconify/icons-ant-design/edit-outlined';
import unorderedListOutlined from '@iconify/icons-ant-design/unordered-list-outlined';
// material
import TabMobile from './TabMobile'
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import Loader from '../../../../../layout/Loader'
import { useAlert } from 'react-alert'
// utils
import PRODUCTS from '../products/Products';

import ProductSort from '../products/ProductSort';
import ProductList from '../products/ProductList';
import ProductCartWidget from '../products/ProductCartWidget';
import ProductFilterSidebar from '../products/ProductFilterSidebar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useFormik } from 'formik';
import { Container, Stack } from '@mui/material';
import { getAdminProducts, deleteProduct, clearErrors } from '../../../../../../actions/productActions'
import { allOrders } from '../../../../../../actions/orderActions'
import { allUsers } from '../../../../../../actions/userActions'
import { DELETE_PRODUCT_RESET } from '../../../../../../constants/productConstants'
import PropTypes from 'prop-types';
import User from './Users'
import UsersList from './Users';
import { useTranslation } from 'react-i18next';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} id="tabpanel__rendered-child">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export const Highlights = ({ history }) => {
  const { t, i18n } = useTranslation();

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(state => state.products);
  const { error: deleteError, isDeleted } = useSelector(state => state.product)


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


  useEffect(() => {
    dispatch(getAdminProducts());

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors())
    }

    if (isDeleted) {
      alert.success('Product deleted successfully');
      history.push('/admin/products');
      dispatch({ type: DELETE_PRODUCT_RESET })
    }
  }, [alert, deleteError, dispatch, error, history, isDeleted])

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // -------------------------------------------------

  const productsGridsData = (
    <Container sx={{padding: '0!important', marginTop: '5rem'}}>
      <Typography variant="h4" style={{ marginBottom: '3rem' }} className="admin__productsTab-title">
        Products
      </Typography>

      {loading ? <Loader /> : <ProductList products={products && products} />}
    </Container>
  )

  const productsInfoData = (
    <Container sx={{marginTop: '5rem'}}>
      <UsersList />
    </Container>
  )

  //  ---------------------------------------------------


  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {window.innerWidth >= 600 &&
          <>
            <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example" centered className="admin__tabSelector">
            <Tab label={t('farm.dashboard.products.all_products.products.title')} sx={{ fontSize: '1.6rem' }} className="tabContent" />
            <IconWrapperStyle className="iconWrapper"><Icon icon={appstoreOutlined} width={24} height={24} /></IconWrapperStyle>
            <Tab label={t('farm.dashboard.products.all_products.products_modification.title')} sx={{ fontSize: '1.6rem' }} className="tabContent" id="tabContent" />
            <IconWrapperStyle className="iconWrapper"><Icon icon={editOutlined} width={24} height={24} /></IconWrapperStyle>
            {/* <Tab label="Products List"  sx={{ fontSize: '1.6rem' }} className="tabContent" />
        <IconWrapperStyle className="iconWrapper"><Icon icon={unorderedListOutlined} width={24} height={24} /></IconWrapperStyle> */}
          </Tabs>

          <TabPanel value={value} index={0}>
            <Container>
              <Typography variant="h4" style={{ marginBottom: '3rem' }} className="admin__productsTab-title">
                {t('farm.dashboard.products.title')}
              </Typography>

              {loading ? <Loader /> : <ProductList products={products && products} />}

            </Container>
          </TabPanel>

          <TabPanel value={value} index={2} style={{ backgroundColor: 'aliceblue' }}>
            <Container >
              <UsersList />
            </Container>
          </TabPanel>
          </>
        }

        {window.innerWidth <= 599 &&
          <>
            <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example" centered className="admin__tabSelector">
              <Tab label={`${window.innerWidth <= 350 ? t('farm.dashboard.products.title') : t('farm.dashboard.products.all_products.products.title')}`} sx={{ fontSize: '1.6rem' }} className="tabContent" />
              <Tab label={`${window.innerWidth <= 350 ? t('farm.dashboard.products.all_products.products_modification.title_sm') : 'Modify Products'}`} sx={{ fontSize: '1.6rem' }} className="tabContent" id="tabContent" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Container>
              <Typography variant="h4" style={{ marginBottom: '3rem' }} className="admin__productsTab-title">
              {t('farm.dashboard.products.title')}
              </Typography>

              {loading ? <Loader /> : <ProductList products={products && products} />}

            </Container>
          </TabPanel>

          <TabPanel value={value} index={1} style={{ backgroundColor: 'aliceblue' }}>
            <Container id="Tabpanel-product_info__container">
              <UsersList />
            </Container>
          </TabPanel>
          </>
        }
        
      

      {/* <TabPanel value={value} index={1}>
        Item Three
      </TabPanel> */}
    </Box>

  )
}

export default Highlights