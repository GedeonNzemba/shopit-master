import React from "react"
import { Link } from 'react-scroll'
import "../../styles/Locataire.css"

const ButtonEight = (props) => {

    return (
        <div className="button" id="scrollToContact">
            <Link to="contactFormWrapper" className="btn-header btn--green-header" spy={true} smooth={true}>{props.name}</Link>
        </div>
    )
}

export default ButtonEight