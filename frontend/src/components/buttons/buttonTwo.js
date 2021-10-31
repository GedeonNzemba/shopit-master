import React from "react"
import "../../styles/Locataire.css"
import { Link } from 'react-scroll'

export default function ButtonTwo() {

  return (
    <Link to="contactFormWrapper" className="getMoreInfo" style={{ textDecoration: "none" }} spy={true} smooth={true}><button className="getMoreInfo-btn" type="button" id="buttonTwo">Get More Info</button></Link>
  )
}