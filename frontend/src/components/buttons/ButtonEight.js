import React from "react"
import "../../styles/Locataire.css"

const ButtonEight = (props) => {



    return (
        <div className="button">
            <a href="www.google.com" className="btn-header btn--green-header">{props.name}</a>
        </div>
    )
}

export default ButtonEight