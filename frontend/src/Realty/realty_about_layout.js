import React from "react"
import "../styles/Locataire.css"
import Buttonthree from "../components/buttons/ButtonThree";
import ButtonOne from "../components/buttons/buttonOne";

export default function RealtyAboutLayout() {

    const realty_about = require('../images/reaalty/realty_about_layout.png');


    return (
        <div className="realty" id="realty_about" style={{ backgroundImage: `url('${realty_about}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <header className="realty__heading">
                <div className="realty__headerContainer">
                    <div className="realty__smallTitle">
                        <span>small title</span>
                    </div>
                    <div className="realty__bigTitle">
                        <h1>
                            A New Way Of Working For<br />
                            Many Professional
                        </h1>
                    </div>
                </div>
            </header>
            <article className="realty__article">
                <div className="realty__article-content">
                    <div className="realty__image">
                        <figure id="realty__about-Fimg">
                            <img src={require('../images/REALTY/all types/office-881758.jpg')} alt="about locataire" id="realty__about-img"></img>
                        </figure>
                        <div className="realty__image-svgOne">
                            <img src={require('../images/REALTY/Group8.png')} alt="about locataire svg" id="realty__about-svgOne"></img>
                        </div>
                        <div className="realty__image-svgTwo">
                            <img src={require('../images/REALTY/Group8.png')} alt="about locataire svg" id="realty__about-svgTwo"></img>
                        </div>
                    </div>
                    <div className="realty__content">
                        <div className="realty__textWrap">
                            <div className="realty__text-container">
                                <p>
                                    text here
                                </p>
                            </div>
                            <div className="realty__text-container">
                                <p>
                                    text here
                                </p>
                            </div>
                        </div>
                        <div className="realty__content_buttonWrap">
                            <div className="realty__leftBtn">
                                <Buttonthree />
                            </div>
                            <div className="realty__rightBtn">
                                <ButtonOne />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
