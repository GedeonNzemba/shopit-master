import React from "react"
import { Link } from 'react-scroll'
import "../../styles/Locataire.css"

const ButtonPrt = (props) => {

    return (
        <div className="button">
            <Link to="PropertyService" className="btn" spy={true} smooth={true} id="header-risk-btn-left">{props.title}</Link>
        </div>
    )
}

export default ButtonPrt