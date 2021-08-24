import React, { useEffect } from 'react'
import { Fragment } from 'react'
import Header from '../components/layout/Risk/Header'
import Main from '../components/layout/Risk/Main'
import Bootstrap from './Boostrapp'

export const Risk = () => {

    return (
        <div className="auditNrisk">
            <Bootstrap link="https://res.cloudinary.com/locataire/raw/upload/v1625499877/bootstrap/bootstrap_nnf8yw.css" />
            <Header />
            <Main />
        </div>
    )
}
