import React from 'react'


const Nutrition_hero = (props) => {
    return (
        <video autoPlay loop style={{ objectFit: 'fill' }}>
            <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default Nutrition_hero
