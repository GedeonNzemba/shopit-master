import React from "react"
import "../../styles/Locataire.css"

const ButtonSix = (props) => {



  return (
    // <a href="www.google.com" className="getStarted" style={{textDecoration: "none"}}>
    //     <button className="getStarted-btn " type="button" id="buttonSix">Get Started</button>
    // </a>
    <div className="button">
      <a href="www.google.com" className="btn  " id="header-risk-btn-left">{props.name}</a>
    </div>
  )
}

export default ButtonSix