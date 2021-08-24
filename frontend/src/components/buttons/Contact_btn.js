import React from "react"
import "../../styles/Locataire.css"

const Contact_btn = (props) => {



  return (
    // <a href="www.google.com" className="getStarted" style={{textDecoration: "none"}}>
    //     <button className="getStarted-btn " type="button" id="buttonSix">Get Started</button>
    // </a>
    <div className="button">
      <a href="www.google.com" className="btn-header-mobile btn--green-header-mobile">{props.name}</a>
    </div>
  )
}

export default Contact_btn