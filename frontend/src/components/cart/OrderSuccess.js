import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTranslation, Trans } from 'react-i18next';
import img1 from '../../images/MOB1.svg'
import img2 from '../../images/MOB2.svg'

const OrderSuccess = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {

        const app = document.getElementsByClassName('App')[0];
        window.innerWidth >= 700 && app.classList.add('orderSuccess');

        const isEnClass = app.classList.contains('order_succ');
        const isFrClass = app.classList.contains('commande_succ');


        if (i18n.resolvedLanguage === 'fr' && window.innerWidth >= 700) {
            if (isEnClass) {
                app.classList.remove('order_succ')
                app.classList.add('commande_succ')
            } else {
                app.classList.add('commande_succ')
            }
        } else {
            if (isFrClass) {
                app.classList.remove('commande_succ')
                app.classList.add('order_succ')
            } else {
                app.classList.add('order_succ')
            }
        }


        return () => {
            app.classList.remove(i18n.resolvedLanguage === 'fr' ? 'commande_succ' : 'order_succ');
            app.classList.remove('orderSuccess');
        }
    }, [i18n.resolvedLanguage])

    return (
        <>
            <MetaData title={'Order Success'} />
            <div className="order_succ-inner">
                <div className="succes_msg">
                    <h2>{t('order_placed')}</h2>
                    <Link to="/orders/me">
                        <Button variant="contained" color="primary" id="btn__order_in">
                            {t('go_to_order')}
                        </Button>
                    </Link>
                </div>
            </div>

            {window.innerWidth <= 699 && (
                <div className="mobile_success_wrap">
                    <Stack direction="column" spacing={2} id="mobile_order_success">
                        <Box className="image_order_success">
                            {i18n.resolvedLanguage === 'fr' ? 
                            <div className="imgFR" />
                                :
                            <div className="imgEN" />
                            }
                        </Box>

                        <Box className='content_order_success'>
                             <br />
                            <div className="succes_content">
                                <h2>{t('order_placed')}</h2>
                                <br />
                                <Link to="/orders/me">
                                    <Button variant="contained" color="primary" className="btn__after_pay">
                                        {t('go_to_order')}
                                    </Button>
                                </Link>
                            </div>
                        </Box>
                    </Stack>
                </div>
            )}
        
        </>
    )
}

export default OrderSuccess
