import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import { useTranslation, Trans } from 'react-i18next';

import Loader from '../../../../../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, deleteProduct, clearErrors } from '../../../../../../actions/productActions'
import { DELETE_PRODUCT_RESET } from '../../../../../../constants/productConstants'

const ProductsList = ({ history }) => {
    const { t, i18n } = useTranslation();

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

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.products);
    const { error: deleteError, isDeleted } = useSelector(state => state.product)

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
            history.push('/dashboard');
            alert.success(t('delete_product'));
            dispatch({ type: DELETE_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id))
    }

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: t('farm.dashboard.products.all_products.products_modification.table.name'),
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: t('farm.dashboard.products.all_products.products_modification.table.price'),
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: t('farm.dashboard.products.all_products.products_modification.table.stock'),
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label: t('farm.dashboard.products.all_products.products_modification.table.actions'),
                    field: 'actions',
                },
            ],
            rows: []
        }

        products.forEach(product => {
            data.rows.push({
                id: product._id,
                name: i18n.resolvedLanguage === 'fr' ? product.french.name : product.name,
                price: i18n.resolvedLanguage === 'fr' ? product.french.price + ' CFA' : `$${product.price}`,
                stock: product.stock,
                actions: <Fragment>
                    <Link to={`/admin/product/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

   

    let isMobile = window.innerWidth <= 650;
    let isSmallMobile = window.innerWidth <= 420;

    return (

        <div id="admin__products_list">


            {loading ? <Loader /> : (
                <>
                    {
                        window.innerWidth <= 650 ? (
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3 mdb_product_info"
                                bordered
                                striped
                                hover
                                entriesOptions={[5, 20, 25]}
                                entries={5}
                                pagesAmount={4}
                            />
                        )
                            :
                            window.innerWidth <= 420 ? (
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3 mdb_product_info"
                                bordered
                                striped
                                hover
                                entriesOptions={[4, 19, 24]}
                                entries={4}
                                pagesAmount={2}
                            />
                        )
                            :

                            (
                                <MDBDataTable
                                    data={setProducts()}
                                    className="px-3 mdb_product_info"
                                    bordered
                                    striped
                                    hover

                                />
                            )
                    }
                </>

            )}


        </div>
    )
}

export default ProductsList