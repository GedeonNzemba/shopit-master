import React from "react"
import { Link } from 'react-scroll'
import "../../styles/Locataire.css"

const ButtonNine = (props) => {

  return (
    <div className="button">
      <Link to="main-realtyContainer" className="btn-header btn--green-header" spy={true} smooth={true}>{props.name}</Link>
    </div>
  )
}

export default ButtonNine