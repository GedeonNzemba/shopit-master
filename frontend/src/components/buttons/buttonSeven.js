import React from "react"
import { Link } from 'react-scroll'
import "../../styles/Locataire.css"

const ButtonSeven = (props) => {

  return (
    <div className="button">
      <Link to="investmentService" className="btn" spy={true} smooth={true} id="header-risk-btn-left">{props.title}</Link>
    </div>
  )
}

export default ButtonSeven