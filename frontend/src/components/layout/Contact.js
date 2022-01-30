import React, { Fragment, useEffect, useState, memo } from "react"
import "../../styles/Locataire.css"
import Footer from "./Footer"
import Form from './form/Form'
import Button from '@mui/material/Button';
import contact_cover from '../../images/footer_cover.png'
import { useTranslation } from 'react-i18next';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import isFrench from '../../language/locales/en.json'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: '2rem',
  overflowY: "scroll",
  height: "90vh"
};

const Contact = props => {
    const { i18n } = useTranslation();

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




    useEffect(() => {
        const handleContactBg = () => {
            let contact = document.getElementById('contactFormWrapper');
            let body = document.getElementsByTagName('body')[0];
            let html = document.getElementsByTagName('html')[0];
            contact.style.backgroundColor = '#ffffff'
            body.style.backgroundColor = '#ffffff'
            html.style.backgroundColor = '#ffffff'
        }
        window.location.href !== 'http://localhost:3000/' ? handleContactBg() : console.log('at home screen ...');
    }, [])

    const ModalUI = () => (
        <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" spacing={3}>
            <Form />
          </Stack>
        </Box>
      </Modal>
        </div>
    )


    const WelcomeForm = () => (
        <>
            <ModalUI />
            <div className="contact_us__cover">
                <img  onClick={handleOpen} className="contact_us_img" src={contact_cover} alt="contact us cover" />
            </div>

            <Button onClick={handleOpen} style={{marginTop: '5rem'}} variant="contained">{i18n.resolvedLanguage === 'fr' ? isFrench.realty.navbar.contact_us : "Contact Us"}</Button>
        </>
    )




    return (
        <Fragment>


            {/* <ContactB /> */}



            <div className="contactFormWrapper" id="contactFormWrapper">

                <div className="contactFormHeader">{i18n.resolvedLanguage === 'fr' ? isFrench.realty.navbar.contact_us : "Contact Us"}</div>
                <div className='contactFormContainer' >
                    
                    <div className="contactFormInternalContainer">
                        <WelcomeForm />
                        {/* <ContactB /> */}
                    </div>

                    <div className="contactFormMapDiv">
                        <div
                            className="contactFormMap"

                        >
                            <iframe width="501" height="512" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=501&amp;height=512&amp;hl=en&amp;q=84%20W%20Kinney%20St,%20Newark,%20NJ%2007102,%20USA%20Newark+(Locataire%20Head%20Office)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="map" ></iframe>
                        </div>
                        <p className="contactMapFooterLocation" style={{ marginTop: 'unset', lineHeight: '4', fontWeight: '400' }}>84 W Kinney St, Newark, NJ 07102, USA</p>
                    </div>
                </div>

                <Footer light />
            </div>
        </Fragment>
    )
}
export default memo(Contact)