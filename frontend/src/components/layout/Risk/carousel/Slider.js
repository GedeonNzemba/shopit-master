import React, { useEffect } from 'react'
import '../style.css'

export default function Slider({images}) {

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://res.cloudinary.com/locataire/raw/upload/v1638538041/flickity/flickityPArallax_nbmlii.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return (
    <div className="carousel">
      {images}
    </div>
  )
}
