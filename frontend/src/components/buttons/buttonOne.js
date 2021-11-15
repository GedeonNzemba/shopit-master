import React from "react"
import "../../styles/Locataire.css"

export default function ButtonOne() {

  return (
    <a href="www.google.com" className="contactUs" style={{ textDecoration: "none" }}>
      <button className="contactUs-btn" type="button" id="buttonOne">Contact us</button>
    </a>
  )
}