import { useState } from 'react'
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency, fCurrencyFR } from '../../number/number';
//
import Label from '../label/Label';
import ColorPreview from '../color/ColorPreview';
import Styled from 'styled-components'
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------
const Star = Styled.div`
    display: block;
`
const RatingOuter = Styled.div`
    float: left;
`
const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ product }) {
  const { t, i18n } = useTranslation();

  const [rating, setRating] = useState(0)

  const { category, name, price, stock, ratings, images, french } = product;

  return (
    <Card>
      <Link to={`/product/${product._id}`} color="inherit" underline="hover" component={RouterLink} sx={{height: 'fit-content'}}>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          {/* {status && (
            <Label
              variant="filled"
              color={(status === 'sale' && 'error') || 'info'}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: 'absolute',
                textTransform: 'uppercase'
              }}
            >
              {status}
            </Label>
          )} */}
          <ProductImgStyle alt={name} src={images[0].url} />
        </Box>
      </Link>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Star>
          <RatingOuter className="rating-outer">
            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
          </RatingOuter>
        </Star>

        <Link to={`/product/${product._id}`} color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap className="admin__product_text">
            {i18n.resolvedLanguage === 'fr' ? french.name : name}
          </Typography>
          <Typography variant="subtitle2" noWrap className="admin__product_text">
            {i18n.resolvedLanguage === 'fr' ? french.category : category}
          </Typography>

        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text',
                textDecoration: 'none'
              }}
              className="admin__product_priceText"
            >
              {i18n.resolvedLanguage === 'fr' ? fCurrencyFR(french.price) + ' CFA' :  fCurrency(price)}
            </Typography>
            {/* &nbsp;
            {fCurrency(price)} */}
          </Typography>
        </Stack>


      </Stack>
    </Card>
  );
}
