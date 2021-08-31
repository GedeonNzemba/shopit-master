import React, { useEffect } from 'react'
import ButtonSeven from '../../components/buttons/buttonSeven'
import ButtonSix from '../../components/buttons/buttonSix'
import imgA from "../../images/reaalty/Group8.png"
import imgB from "../../images/reaalty/Group8.png"
import imgC from "../../images/reaalty/Group8.png"
import imgD from "../../images/reaalty/Group8.png"
import imgE from "../../images/reaalty/Group8.png"
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import imgJ from "../../images/reaalty/all types/real-estate.jpg";
import imgK from "../../images/reaalty/all types/single-family-home (2).jpg";
import imgL from "../../images/reaalty/all types/estate_1.jpg";
import Helmet from "react-helmet";
import { Col } from "react-bootstrap";
import imgG from "../../images/reaalty/condominium-690086.jpg";
import imgH from "../../images/reaalty/interior-3778708.jpg";
import imgI from "../../images/reaalty/all types/estate_5.jpg";
import ButtonPrt from '../../components/buttons/ButtonPrt'


function Main_Desktop() {
    useEffect(() => {
        const script = document.createElement('script');
        script.scr = "https://res.cloudinary.com/locataire/raw/upload/v1626300234/bootstrap/scrollmmm_sn5kxc.js";
        script.async = true;
        document.body.appendChild(script);

        if (window.screen.width >= 1800) {
            var ul = document.getElementById('listLoopB');
            ul.classList.remove('carousel');
            ul.style.display = 'none'

        } else {
            console.log('not in range')
        }

        return () => {
            document.body.removeChild(script);
        }
    }, []);




    return (
        <main id="main-realtyContainer" className="this_yes " style={{ paddingTop: '1.5rem' }}>
            <div className="realty" id="realty_about">

                {/* HEDER FOR MAIN */}
                <header className="realty__heading">
                    <div className="realty__image-svgThree">
                        <img
                            src={imgA}
                            alt="about locataire svg"
                            id="realty__about-svgTwo"
                        ></img>
                    </div>
                    <div className="realty__headerContainer">
                        <div className="realty__smallTitle">
                            <span>Locataire Realty</span>
                        </div>
                        <div className="realty__bigTitle">
                            <h1>
                                Locataire Realty provides real estate <br />
                                services to prospective clients.
                            </h1>
                        </div>
                    </div>
                </header>

                {/*---- MAIN CONTENT  A ----*/}
                <div className="content">
                    <div className="item offReverse itemWrapper itemMwrapper">
                        <div className="item__img-wrap itemInnerWrap">
                            <div className="item__img item__img--t1 item__img--t"></div>
                            <div className="realty__image-svgOne">
                                <img
                                    src={imgB}
                                    alt="about locataire svg"
                                    id="realty__about-svgOne"
                                ></img>
                            </div>
                            <div className="realty__image-svgTwo">
                                <img
                                    src={imgC}
                                    alt="about locataire svg"
                                    id="realty__about-svgTwo"
                                ></img>
                            </div>
                        </div>

                        <div className="realty__content" id="realty__content">
                            <div className="realty__textWrap" id="realty__textWrap">
                                <div className="realty__text-container">
                                    <p style={{ marginBottom: "0" }}>
                                        Our core business includes management and
                                        administration of commercial and multifamily
                                        residential properties, and our primary business
                                        objective is to maximize the total return to property
                                        owners, through strategic acquisition, re-development,
                                        re-lease and management of these properties for
                                        maximum cash flow.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="realty__content_buttonWrap"
                                id="realty__content_buttonWrap"
                            >
                                <div className="realty__leftBtn">
                                    <ButtonSeven title="learn more" />


                                </div>
                                <div className="realty__rightBtn hidden">
                                    <ButtonSix name="contact us" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*---- MAIN CONTENT  B ----*/}
                <div className="content">
                    <div className="item onReverse itemWrapper">
                        <div className="item__img-wrap  itemInnerWrap">
                            <div className="item__img item__img--t1 item__img--t"></div>
                            <div className="realty__image-svgOne" id="realty__image-svgOne-two">
                                <img
                                    src={imgD}
                                    alt="about locataire svg"
                                    id="realty__about-svgOne"
                                ></img>
                            </div>
                            <div className="realty__image-svgTwo">
                                <img
                                    src={imgE}
                                    alt="about locataire svg"
                                    id="realty__about-svgTwo"
                                ></img>
                            </div>
                        </div>

                        <div className="realty__content" id="realty__content">
                            <div className="realty__textWrap" id="realty__textWrap">
                                <div className="realty__text-container">
                                    <p style={{ marginBottom: "0" }}>
                                        Our core business includes management and
                                        administration of commercial and multifamily
                                        residential properties, and our primary business
                                        objective is to maximize the total return to property
                                        owners, through strategic acquisition, re-development,
                                        re-lease and management of these properties for
                                        maximum cash flow.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="realty__content_buttonWrap"
                                id="realty__content_buttonWrap"
                            >
                                <div className="realty__leftBtn">
                                    <ButtonPrt title="learn more" />


                                </div>
                                <div className="realty__rightBtn hidden">
                                    <ButtonSix name="contact us" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----- INVESTMENT ARCH */}
                <div className="realty_services" style={{ display: "none", paddingTop: '1.5rem' }} id="investmentService">
                    <span className="realty_services-svg"></span>
                    <div className="realty__services-svgDivider"></div>
                    <section className="realty_services-header">
                        {/* content */}
                        <div className="realty_services-content">
                            <h1>investment service</h1>
                            <div className="realty_services_content-text">
                                <Helmet>
                                    <link
                                        rel="stylesheet"
                                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                                        integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                                        crossorigin="anonymous"
                                    />
                                </Helmet>
                                <Container className="realty_service--container">
                                    <Row>
                                        <Col sm={2}>
                                            <span className="realty_services_content-text-icon">
                                                <i class="fas fa-info-circle"></i>
                                            </span>
                                        </Col>
                                        <Col sm={10}>
                                            <div className="realty_services_content-paragraph">
                                                <p>
                                                    Locataire offers to prospective partners
                                                    opportunities to invest in dozens of high-growth
                                                    residential and commercial properties in the United
                                                    States, and Canada.
                                                </p>

                                                <p>
                                                    We leverage experience and local market knowledge to
                                                    produce top quality risk-adjusted returns for
                                                    investors.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <br />
                            <div className="realty_services_content-banner"></div>

                            <div className="realty_services-subContent">
                                <div className="realty_services-subsvg"></div>
                                <div className="realty_services-subtitle">
                                    <div className="realty_services-verticalLine"></div>
                                    <div className="services-subtitle">
                                        <h3>
                                            Real Estate investment services include the following.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* image */}
                        <div className="realty_services-image">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgG}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Multifamily residential real estate</h3>
                                        <p>
                                            Locataire Realty provides real estate services to
                                            prospective clients looking to buy, sell or lease
                                            residential and commercial real estates in the United
                                            States, and Canada.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgH}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Condominiums</h3>
                                        <p>
                                            We leverage experience and local market knowledge to
                                            produce top quality risk-adjusted returns for investors.{" "}
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgI}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Commercial</h3>
                                        <p>
                                            We get paid after you get paid. Which means, if we don’t
                                            collect rent as agreed, you don’t pay us a management
                                            fee.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <span className="realty_services-midsvg"></span>
                        </div>
                    </section>

                    <br />

                    <div className="realty_services-option">
                        <div className="realty_services-option-boxItem">
                            <ul className="carousel remove__bg"
                                data-flickity='{ "wrapAround": true, "autoPlay": true }' id="listLoopA">
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageOne"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-search-location"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Identify undervalue real estate properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageTwo"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-home"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Property acquisition</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageThree"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-house-damage"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Renovation and remodeling</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFour"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-chart-line"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Implement strategic capital and operational programs
                                                        to increase cashflow</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFive"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-tasks"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Implement effective asset management controls</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageSix"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Reduce overall risk</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="carousel remove__bg"
                                data-flickity='{ "wrapAround": true }' id="listLoopAup">
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageOne"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-search-location"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Identify undervalue real estate properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageTwo"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-home"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Property acquisition</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageThree"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-house-damage"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Renovation and remodeling</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFour"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-chart-line"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Implement strategic capital and operational programs
                                                        to increase cashflow</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFive"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-tasks"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Implement effective asset management controls</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageSix"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Reduce overall risk</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="realty_services-option-decoration"></div>
                        </div>
                    </div>

                </div>

                {/* ----- PROPERTY MANAGEMENT ---- */}
                <div className="realty_services" style={{ display: "none", paddingTop: '1.5rem' }} id="PropertyService">
                    <span className="realty_services-svg realty__services-svgLeft"></span>
                    <div className="realty__services-svgDivider realty__services-svgDividerLeft"></div>
                    <section className="realty_services-header realty_services-headerLeft">
                        {/* content */}
                        <div className="realty_services-content realty_services-contentLeft">
                            <h1>property management</h1>
                            <div className="realty_services_content-text" id="side__service">
                                <span className="realty_services_content-text-icon">
                                    <i class="fas fa-info-circle"></i>
                                </span>
                                <div className="realty_services_content-paragraph">
                                    Locataire real estate property managers offer hands-on
                                    experience management of single-family homes, multi-family
                                    homes, condominiums, townhouses, and commercial properties.
                                    building, our agents can assist you maximize profit and keep
                                    operating expenses low
                                </div>
                            </div>

                            <br />
                            <div className="realty_services_content-banner"></div>

                            <div className="realty_services-subContent">
                                <div className="realty_services-subsvg"></div>
                                <div className="realty_services-subtitle">
                                    <div className="realty_services-verticalLine"></div>
                                    <div className="services-subtitle">
                                        <h3>
                                            Property management services
                                            <br />
                                            include the following
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* image */}
                        <div className="realty_services-image" id="realty_image-wrap">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgJ}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Multifamily residential real estate</h3>
                                        <p>
                                            Locataire Realty provides real estate services to
                                            prospective clients looking to buy, sell or lease
                                            residential and commercial real estates in the United
                                            States, and Canada.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgK}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Condominiums</h3>
                                        <p>
                                            We leverage experience and local market knowledge to
                                            produce top quality risk-adjusted returns for investors.{" "}
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgL}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Commercial</h3>
                                        <p>
                                            We get paid after you get paid. Which means, if we don’t
                                            collect rent as agreed, you don’t pay us a management
                                            fee.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <span
                                className="realty_services-midsvg"
                                id="realty_services-midsvg-two"
                            ></span>
                        </div>
                    </section>

                    <br />

                    <div className="realty_services-option">
                        <div className="realty_services-option-boxItem">
                            <ul className="carousel remove__bg" data-flickity='{ "wrapAround": true, "autoPlay": true }' id="listLoopB">
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageOneLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-search-location"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Advertising and filling vacancies</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageTwoLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-home"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Tenant screening (credit, criminal background)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageThreeLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-house-damage"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Leases administration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFourLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-chart-line"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Move-in inspection walkthrough</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFiveLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-tasks"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Rent payment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageSixLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Repairs & maintenance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageSevenLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Vendor management</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageEightLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Evictions proceedings</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageNineLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Possession of leased premises</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageTenLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Financial reporting</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="carousel remove__bg" data-flickity='{ "wrapAround": true }' id="listLoopBup">
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageOneLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-search-location"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Advertising and filling vacancies</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageTwoLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-home"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Tenant screening (credit, criminal background)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageThreeLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-house-damage"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Leases administration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFourLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-chart-line"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Move-in inspection walkthrough</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageFiveLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-tasks"></i>
                                                </div>
                                                <div
                                                    className="realty__services-option-itemTitle"
                                                    id="services-option-itemTitle-long"
                                                >
                                                    <p>Rent payment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageSixLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Repairs & maintenance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageSevenLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Vendor management</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageEightLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Evictions proceedings</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageNineLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Possession of leased premises</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="realty_services-option--boxContainer">
                                        <div className="realty__services-option--innerBox">
                                            <div className="realty_services-option--imageContainer realty__services-option--imageTenLeft"></div>
                                            <div className="realty_services-option--content">
                                                <div className="realty__services-option-icon">
                                                    <i class="fas fa-balance-scale"></i>
                                                </div>
                                                <div className="realty__services-option-itemTitle">
                                                    <p>Financial reporting</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="realty_services-option-decoration"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Main_Desktop
