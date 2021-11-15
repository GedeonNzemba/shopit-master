import React, { useEffect } from 'react'
import Header from '../components/layout/Risk/Header'
import Main from '../components/layout/Risk/Main'
import Bootstrap from './Boostrapp'
import Msg from './layout/ct/steps/layout/Message'

export const Risk = () => {

    useEffect(() => {
        var farmNav = document.getElementById('homeView');
        farmNav.style.display = 'none';
        var riskHeader = document.getElementsByClassName('navbar')[0];
        riskHeader.style.position = 'fixed'

        return () => {
            farmNav.style.display = 'block';
            riskHeader.style.position = 'sticky'
        }
    }, [])

    return (
        <div className="auditNrisk">
            <Bootstrap link="https://res.cloudinary.com/locataire/raw/upload/v1625499877/bootstrap/bootstrap_nnf8yw.css" />
            <Header />
            <Main />
            <Msg />
        </div>
    )
}
