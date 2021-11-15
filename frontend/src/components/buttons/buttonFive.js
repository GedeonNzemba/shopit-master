import React from "react"
import "../../styles/Locataire.css"

const ButtonFive = (props) => {

  return (
    <a href="www.google.com" className="contactUs-farm" style={{ textDecoration: "none" }}>
      <button className="contactUs-btn-farm" type="button" id="buttonFive">{props.name}</button>
    </a>
  )
}

export default ButtonFive