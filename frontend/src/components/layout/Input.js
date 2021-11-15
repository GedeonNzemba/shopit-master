import React from "react"
import "../../styles/Locataire.css"

const Input = (props) => {

    let invalid = false;
    if (!props.valid && props.touched) {
        invalid = true;
    }
    // send the value $blue in props.style to change it to blue input 
    // default colour is $green (as used in the lease application modal)
    // let style = props.blueStyle !==undefined ? "fieldBlue" : "fieldGreen";

    return (
        <div className={props.firstname ? ["inputSection", "inputSectionFirstname"].join(" ") : "inputSection"}>
            <div className={props.contactForm ? "fieldContact" : "field"}>
                {props.textarea ?
                    <textarea
                        rows="4"
                        type={props.type}
                        required
                        onChange={(e) => props.handleChange(e)}
                        name={props.name}
                        value={props.value} /> :
                    <input
                        type={props.type}
                        required
                        onChange={(e) => props.handleChange(e)}
                        name={props.name}
                        value={props.value} />}
                <label>{props.label}</label>
            </div>
            {invalid ? <p className="inputInvalid">{props.error}</p> : null}
        </div>
    )
}

export default Input