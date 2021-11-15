import React from 'react'
import { Fragment, useEffect } from 'react'
import { } from './styles/styleHeader'
const Header = () => {

    // remove farm header when farm mounts
    useEffect(() => {
        var homeView = document.getElementById('homeView');
        homeView.style.display = 'none'
        return () => {
            homeView.style.display = 'block'
        }
    }, [])

    return (
        <Fragment>

        </Fragment>
    )
}

export default Header