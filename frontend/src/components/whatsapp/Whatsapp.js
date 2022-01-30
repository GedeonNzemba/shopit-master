import React, {memo, useEffect} from 'react'
import './whatsapp.css'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import { useTranslation } from 'react-i18next';

const Whatsapp = () => {
  const { t } = useTranslation();

   useEffect(() => {
    const wrap = document.querySelector('#farmSHOP div');
    wrap.style.position = 'fixed';
    wrap.style.bottom = '4rem';
    wrap.style.zIndex = '99999999'

    if (window.innerWidth <= 500 ) {
      wrap.style.right = '3.5rem';
    } else {
      wrap.style.right = '2rem';
    }
   }, []);

  return <WhatsAppWidget phoneNumber='+27680122108' sendButton={t('whatsapp_send')} message={t('whatsapp_message')} textReplyTime={t('whats__reply')} companyName={t('locataire_farm')} />
}

export default memo(Whatsapp)