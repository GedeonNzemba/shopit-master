import React, { useEffect } from 'react'
import Header from '../components/layout/Risk/Header'
import Main from '../components/layout/Risk/Main'
import Bootstrap from './Boostrapp'

export const Risk = () => {

    useEffect(() => {
        document.getElementById('homeView').style.display = 'none'
        return () => {
            document.getElementById('homeView').style.display = 'block'
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
