import React from "react"
import "../../styles/Locataire.css"

export default function ButtonTwo() {

  return (
    <a href="www.google.com" className="getMoreInfo" style={{ textDecoration: "none" }}>
      <button className="getMoreInfo-btn" type="button" id="buttonTwo">Get More Info</button>
    </a>
  )
}