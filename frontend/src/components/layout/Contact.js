import React, { Fragment, useEffect, useState } from "react"
import "../../styles/Locataire.css"
import Footer from "./Footer"
import ContactB from './ct/CtForm'


const Contact = props => {

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







    return (
        <Fragment>

            <div className="contactFormWrapper" id="contactFormWrapper">

                <div className="contactFormHeader">Contact Us</div>
                <div className="contactFormContainer">
                    <div className="contactFormInternalContainer">
                        <h2 className="contactFormHeading">
                            Get in touch !
                        </h2>
                        <ContactB />

                    </div>
                    <div className="contactFormMapDiv">
                        <div
                            className="contactFormMap"

                        >
                            <iframe width="501" height="512" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=501&amp;height=512&amp;hl=en&amp;q=84%20W%20Kinney%20St,%20Newark,%20NJ%2007102,%20USA%20Newark+(Locataire%20Head%20Office)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="map" ></iframe>
                        </div>
                        <p className="contactMapFooterLocation" style={{ marginTop: 'unset', lineHeight: '4', fontWeight: '400' }}>84 W Kinney St, Newark, NJ 07102, USA</p>
                    </div>
                </div>

                <Footer light />
            </div>
        </Fragment>
    )
}
export default Contact