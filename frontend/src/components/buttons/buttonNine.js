import React from "react"
import "../../styles/Locataire.css"

const ButtonNine = (props) => {

  return (
    <div className="button">
      <a href="www.google.com" className="btnB-header btnB--transparent-header">{props.name}</a>
    </div>
  )
}

export default ButtonNine