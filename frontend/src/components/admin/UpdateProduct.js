import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, getProductDetails, clearErrors } from '../../actions/productActions'
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'
import { Container } from '@material-ui/core';
import { useTranslation, Trans } from 'react-i18next';

const UpdateProduct = ({ match, history }) => {
    const { t, i18n } = useTranslation();

    // -------------------------------REMOVE HEADER AND FOOTER -------------------------------
    function removeHeader() {
        const header = document.querySelector('.farm-header');
        const footer = document.querySelector('#contactFormWrapper');
        header && (header.style.display = 'none');
        footer && (footer.style.display = 'none');
    }

    function mountHeader() {
        const header = document.querySelector('.farm-header');
        const footer = document.querySelector('#contactFormWrapper');
        header && (header.style.display = 'block');
        footer && (footer.style.display = 'block');
    }

    function checkDashboard() {  
        removeHeader();
    }

    useEffect(() => {
        checkDashboard()
        
        return () => {
            mountHeader();
        }
    }, [])

    useEffect(() => {
        const upProfil = document.getElementById('UpdateProfile');
        upProfil.style.display = 'none';


        const app = document.getElementsByClassName('App')[0];
        app.classList.add('dashboard_main');

        const newPass = document.getElementById('NewPassword');
        newPass.style.display = 'none';


        return () => {
            app.classList.remove('dashboard_main');
            upProfil.style.display = 'block';
            newPass.style.display = 'block';
        }
    }, [])

    // -----------------------------------------------------------------------------------------------

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(0);
    const [seller, setSeller] = useState('');
    const [images, setImages] = useState([]);

    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

    const categories = [
        t('crumb__poultry'),
        t('fresh_eggs'),
        t('pigsty'),
        t('goats_sheeps_mammels'),
        t('parc_animals'),
        t('purebred__seed'),
        t('livestock_food')
    ]

    const productSize = [
        '0 KG',
        '2 KG',
        '50 KG',
        '3 L',
        '5 L',
        '10 L',
        t('medium'),
        'Large',
        t('trout'),
        t('verrat'),
        '1 Dose',
        '1 T'
    ]

    const productColor = [
        t('grey'),
        t('white'),
        t('brown'),
        t('maroon'),
        t('blue'),
        t('black'),
        t('yellow')
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, product } = useSelector(state => state.productDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.product);

    const productId = match.params.id;

    useEffect(() => {

        if (product && product._id !== productId) {
            dispatch(getProductDetails(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setDescription(product.description);
            setSize(product.size);
            setSize(product.color);
            setCategory(product.category);
            setSeller(product.seller);
            setStock(product.stock)
            setOldImages(product.images)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }


        if (isUpdated) {
            history.push('/dashboard');
            alert.success(t('update_product_info'));
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, isUpdated, history, updateError, product, productId])


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('price', price);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('size', size);
        formData.set('size', color);
        formData.set('stock', stock);
        formData.set('seller', seller);

        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(updateProduct(product._id, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])
        setOldImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }

   


    return (
        <Container style={{paddingTop: '5%', paddingBottom: '2%', maxWidth: '100%', paddingLeft: '0', paddingRight: '0'}} id="update_product__container">
            <MetaData title={'Update Product'} />
            <Box
                component="form"
                style={{ padding: '2rem' }}
                noValidate
                autoComplete="off"
                onSubmit={submitHandler}
                encType='multipart/form-data'
                id="shipping_fistForm"
                className="update_product__form"
            >
                <div id="shipping_info">
                    <h1 className="mb-4 shipping_title">{t('update_product')}</h1>
                    <Stack direction="column" spacing={4} id="shipping_field-wrapper">
                        <TextField
                            id="name_field"
                            htmlFor="name_field"
                            label={t('farm.dashboard.products.all_products.products_modification.table.name')}
                            variant="standard"
                            fullWidth
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            
                        />
                        <TextField
                            id="price_field"
                            htmlFor="price_field"
                            label={t('farm.dashboard.products.all_products.products_modification.table.price')}
                            variant="standard"
                            fullWidth
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}

                        />
                        <FormControl className="MuiTextField-root" >
                            <InputLabel id="demo-simple-select-label">{t('color')}</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="update_product__color"
                            value={category}
                            label={t('color')}
                            onChange={(e) => setColor(e.target.value)}
                            >
                                {productColor.map(color => (
                                    <MenuItem key={color} value={color} className="update_product__option" >{color}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className="MuiTextField-root" >
                            <InputLabel id="demo-simple-select-label">{t('size')}</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="update_product__color"
                            value={size}
                            label={t('size')}
                            onChange={(e) => setSize(e.target.value)}
                            >
                                {productSize.map(size => (
                                    <MenuItem key={size} value={size} className="update_product__option">{size}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            id="standard-multiline-static"
                            value={description}
                            label={t('description')}
                            onChange={(e) => setColor(e.target.value)}
                            multiline
                            rows={4}
                            defaultValue=""
                            variant="standard"
                        />
                        <FormControl className="MuiTextField-root" >
                            <InputLabel id="demo-simple-select-label">{t('category')}</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="update_product__category"
                            value={category}
                            label={t('category')}
                            onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <MenuItem key={category} value={category} className="update_product__option">{category}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            id="stock_field"
                            htmlFor="stock_field"
                            label={t('stock')}
                            variant="standard"
                            fullWidth
                            name="stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            
                        />
                    
                        
                        <Stack direction="row" spacing={2} className="MuiTextField-root" sx={{p: 4}}>
                            {oldImages && oldImages.map(img => (
                                <Avatar key={img} src={img.url} alt={img.url} />
                            ))}
                            {imagesPreview.map(img => (
                                <Avatar key={img} src={img} alt="image preview" />
                            ))}
                            <TextField
                                type="file"
                                name="avatar"
                                id="customFile"
                                accept="image/*"
                                onChange={onChange}
                                label={t('product_image')}
                                variant="standard"
                            />
                        </Stack>
                    </Stack>
                </div>

                <center style={{marginTop: '5rem'}}>
                <Button
                    id="update-product_button"
                    type="submit"
                    variant="contained"
                    className="btn btn-block py-3"
                    disabled={loading ? true : false}
                    style={{textTransform: 'uppercase'}}
                >
                    {t('update')}
                </Button>
            </center>
            </Box>
          

        </Container >
    )
}

export default UpdateProduct
