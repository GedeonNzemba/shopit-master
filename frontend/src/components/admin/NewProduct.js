import React, { Fragment, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Input = styled('input')({
    display: 'none',
});



const NewProduct = ({ history }) => {
    const { t } = useTranslation();


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

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState();
    const [seller, setSeller] = useState('');
    const [images, setImages] = useState([]);
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


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProduct);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/dashboard');
            alert.success(t('alert__product_created'));
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, success, history])


    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])

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



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.set('name', name);
        formData.set('price', price);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('stock', stock);
        formData.set('seller', seller);

        images.forEach(image => {
            formData.append('images', image)
        })
        dispatch(newProduct(formData))
        console.log(formData);

    }
    console.log(errors);


    return (
        <Fragment>
            <MetaData title={'New Product'} />

            <Box id="create_product__container">
                <Container style={{ paddingTop: '5%', paddingBottom: '2%', maxWidth: '100%', paddingLeft: '0', paddingRight: '0' }} >
                    <Box
                        component="form"
                        style={{ padding: '2rem' }}
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        encType='multipart/form-data'
                        autoComplete="off"
                        id="shipping_fistForm"
                        className="update_product__form"
                    >
                        <div id="shipping_info">
                            <h1 className="mt-2 mb-5" style={{ paddingTop: '1rem' }}>{t('create__product')}</h1>
                            <Stack direction="column" spacing={4} id="shipping_field-wrapper">
                                <TextField
                                    type="text"
                                    id="name_field"
                                    name='name'
                                    fullWidth
                                    label={t('farm.dashboard.products.all_products.products_modification.table.name')}
                                    value={name}
                                    {...register('name', {
                                        onChange: (e) => setName(e.target.value),
                                        required: t('error_name'),
                                        maxLength: 25,
                                    })}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name?.message
                                    }
                                />
                                <TextField
                                    type="number"
                                    id="price_field"
                                    name='price'
                                    fullWidth
                                    label={t('farm.dashboard.products.all_products.products_modification.table.price')}
                                    value={price}
                                    {...register('price', {
                                        onChange: (e) => setPrice(e.target.value),
                                        required: t('error_price'),
                                        maxLength: 15,
                                        pattern: /^[0-9 ()+-]+$/
                                    })}
                                    error={Boolean(errors.price)}
                                    helperText={errors.price?.message
                                    }
                                />
                                <TextField
                                    id="descriptio_field"
                                    label={t('description')}
                                    multiline
                                    name="description"
                                    rows={8}
                                    defaultValue="Default Value"
                                    variant="standard"
                                    value={description}
                                    type="text"
                                    {...register('description', {
                                        onChange: (e) => setDescription(e.target.value),
                                        required: t('error_description'),
                                    })}
                                    error={Boolean(errors.description)}
                                    helperText={errors.description?.message
                                    }

                                />
                                <FormControl className="MuiTextField-root" >
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="update_product__color"
                                        name="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        label={t('category')}
                                        {...register('category', {
                                            onChange: (e) => setCategory(e.target.value),
                                            required: t('error_category'),
                                        })}
                                        error={Boolean(errors.category)}
                                        helperText={errors.category?.message
                                        }
                                    >
                                        {categories.map(category => (
                                            <MenuItem key={category} value={category}  className="update_product__option">{category}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    type="number"
                                    id="stock_field"
                                    name='stock'
                                    fullWidth
                                    label={t('farm.dashboard.products.all_products.products_modification.table.stock')}
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    {...register('stock', {
                                        onChange: (e) => setStock(e.target.value),
                                        required: t('error_stock'),
                                        pattern: /^[0-9 ()+-]+$/
                                    })}
                                    error={Boolean(errors.price)}
                                    helperText={errors.price?.message
                                    }
                                />
                                {/* <TextField
                                            type="text"
                                            id="seller_field"
                                            name='seller'
                                            fullWidth
                                            label="Seller Name"
                                            value={seller}
                                             {...register('seller', {
                                                onChange: (e) => setSeller(e.target.value),
                                                required: 'Seller name is required',
                                            })}
                                            error={Boolean(errors.seller)}
                                            helperText={errors.seller?.message
                                            }
                                        /> */}
                                <Stack direction="column">
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" onChange={onChange} id="contained-button-file" required multiple type="file" />
                                        <Button variant="contained" component="span" sx={{ fontSize: '1.4rem', pl: 8, pr: 8 }} id="btn__newProduct-img" >
                                            {t('add_images')}
                                        </Button>
                                    </label>

                                    <Stack direction="row" spacing={2}>
                                        {imagesPreview.map(img => (
                                            <Avatar src={img} key={img} sx={{ width: 56, height: 56 }} alt="Images Preview" />
                                        ))}
                                    </Stack>
                                </Stack>
                            </Stack>
                            <center style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                                <Button
                                    id="update-product_button"
                                    type="submit"
                                    variant="contained"
                                    className="create_product__btn"
                                    disabled={loading ? true : false}
                                >
                                    {t('create__product')}
                                </Button>
                            </center>
                        </div>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}

export default NewProduct
