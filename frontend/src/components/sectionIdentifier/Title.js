import React from 'react'
import { Fragment } from 'react'

const Title = (props) => {
    return (
        <Fragment>
            <h1 className="headline" id={props.id}>
                {props.title}
            </h1>
        </Fragment>
    )
}

export default Title
