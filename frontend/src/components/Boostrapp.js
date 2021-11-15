import React from 'react'
import Helmet from 'react-helmet'

function Boostrapp(props) {
    return (
        <Helmet>
            <link rel="stylesheet" href={props.link} />
        </Helmet>
    )
}

export default Boostrapp
