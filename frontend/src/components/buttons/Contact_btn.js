import React from "react"
import "../../styles/Locataire.css"
import { Link } from "react-scroll"

const Contact_btn = (props) => {



  return (
    // <a href="www.google.com" className="getStarted" style={{textDecoration: "none"}}>
    //     <button className="getStarted-btn " type="button" id="buttonSix">Get Started</button>
    // </a>
    <div className="button">
      <Link to="contactFormWrapper" className="btn-header-mobile btn--green-header-mobile" spy={true} smooth={true}>{props.name}</Link>
    </div>
  )
}

export default Contact_btn