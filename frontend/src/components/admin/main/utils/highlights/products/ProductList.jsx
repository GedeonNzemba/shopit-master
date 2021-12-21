import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCart';
import { Fragment } from 'react';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ products, ...other }) {
  return (
    <Fragment>
      {window.innerWidth <= 899 ? 
       <div className='admin__product-container'>
          {products.map((product) => (
          <div key={product._id} >
            <ShopProductCard product={product} />
          </div>
        ))}
       </div>
      :
      <Grid container spacing={3} {...other}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={3}>
            <ShopProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      }
    </Fragment>
  );
}
