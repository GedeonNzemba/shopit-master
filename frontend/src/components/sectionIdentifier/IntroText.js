import React from 'react'
import { Fragment } from 'react'

const IntroText = (props) => {
    return (
        <Fragment>
            <div className="intro_text row">
                <div className="col" id="intro_text--title">{props.title}</div>
                <div id="intro_text--line" className={props.cssName}></div>
            </div>
        </Fragment>
    )
}

export default IntroText
