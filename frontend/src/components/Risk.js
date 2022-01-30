import React, { useEffect } from 'react'
import Header from '../components/layout/Risk/Header'
import Main from '../components/layout/Risk/Main'
import Bootstrap from './Boostrapp'

export const Risk = () => {

    useEffect(() => {
        const app = document.getElementsByClassName('App')[0];
        app.classList.add('isRisk');

        var farmNav = document.getElementById('homeView');
        farmNav && (farmNav.style.display = 'none');

        return () => {
            app.classList.remove('isRisk');
            farmNav && (farmNav.style.display = 'block');
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
