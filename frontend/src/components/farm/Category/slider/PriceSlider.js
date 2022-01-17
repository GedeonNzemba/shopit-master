import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

const PriceSlider = () => {
    const [price, setPrice] = useState([0, 450])
    // const { error } = useSelector(state => state.products)

    // useEffect(() => {
    //     if (error) {
    //         return alert.error(error)
    //     }

    //     dispatch(i18n.resolvedLanguage === 'fr' ? getProductsCategoryFR(price) : getProductsCategory(price));


    // }, [dispatch, alert, error, price, i18n.resolvedLanguage])


  return (
    <Box>
      <Slider
        value={price}
        onChange={price => setPrice(price)}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

export default PriceSlider