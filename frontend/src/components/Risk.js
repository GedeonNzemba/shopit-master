import React, { useEffect } from 'react'
import Header from '../components/layout/Risk/Header'
import Main from '../components/layout/Risk/Main'
import Bootstrap from './Boostrapp'
import Msg from './layout/ct/steps/layout/Message'

export const Risk = () => {

    useEffect(() => {
        var farmNav = document.getElementById('homeView');
        farmNav.style.display = 'none';

        return () => {
            farmNav.style.display = 'block';
        }
    }, [])

    return (
        <div className="auditNrisk">
            <Bootstrap link="https://res.cloudinary.com/locataire/raw/upload/v1625499877/bootstrap/bootstrap_nnf8yw.css" />
            <Header />
            <Main />
        </div>
    )
}
