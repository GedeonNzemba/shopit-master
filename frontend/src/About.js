import React, { Fragment } from 'react'
import Header from './components/about/Header'
import Nav from "./components/layout/Header"
import Main from './components/about/Main'

const About = () => {


    return (
        <Fragment>
            <Nav />
            <div className="farm_about">
                <Header />
                <Main />
            </div>
        </Fragment>
    )
}

export default About
