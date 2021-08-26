import React, { useEffect } from "react";
import MAIN_DESKTOP from "./main/Main_Desktop";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import "../styles/Locataire.css";
import "../styles/fonts/gt super/stylesheet.css";
import "./realty_about_layout";
import ButtonEight from "../components/buttons/ButtonEight";
import ButtonSevenB from "../components/buttons/buttonNine";
import Realtymobile from "./Realtymb";
import image_1a from "../images/reaalty/all types/900_1199/office-881758.jpg";
import image_3c from "../images/reaalty/all types/900_1199/pexels-tomek-mądry.jpg";
import image_6f from "../images/reaalty/header1.jpeg";
import image_6fC from "../images/reaalty/all types/header1.jpeg";
import image_3cC from "../images/reaalty/all types/header2.jpeg";
import image_1aA from "../images/reaalty/all types/header3.jpeg";
import { Col } from "react-bootstrap";
import { GiContract, GiAutoRepair } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { RiSkullFill, RiCriminalLine } from "react-icons/ri";
import { HiUserRemove, HiDocumentReport } from "react-icons/hi";
import { BsHouseFill } from "react-icons/bs";
import { FcInspection } from "react-icons/fc";
import Media from "react-bootstrap/Media";
// import { GrVmMaintenance, GrSystem } from "react-icons/gr";
import {
    FaBullhorn,
    FaTimes,
    FaHands,
    FaAtlas,
    FaCogs,
} from "react-icons/fa";
import "../styles/hover.css";
import logo from "../images/logo.png";
import imgF from "../images/reaalty/all types/house_purshase.jpg";


export default function RealEstate() {
    useEffect(() => {
        const addFlickity = (url) => {
            const script = document.createElement("script");
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        };

        addFlickity("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.scr = "https://www.dropbox.com/s/e9a7t5bwephdi06/scrollmmm.js?dl=0";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);




    return (
        <div className="loading">
            <main>
                <div data-scroll>
                    <Helmet>
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://npmcdn.com/flickity@2/dist/flickity.css"
                        />
                    </Helmet>
                    <Realtymobile />
                    <div className="realEstate this_yes">
                        <Helmet>
                            <script src="../static/wowslider.js" type="text/javascript" />
                        </Helmet>
                        {/* top header */}
                        <header className="realEstate_header ">
                            <nav className="realEstate_navigation">
                                <div className="realEstate_logoWrap">
                                    <img src={logo} alt="Locataire logo" />
                                </div>
                                <div className="realEstate_navItem">
                                    <ul>
                                        <li>
                                            <a href="www.google.com">home</a>
                                        </li>
                                        <li>
                                            <a href="www.google.com">real estate</a>
                                        </li>
                                        <li>
                                            <a href="www.google.com">livestock</a>
                                        </li>
                                        <li>
                                            <a href="www.google.com">risk management</a>
                                        </li>
                                        <li>
                                            <a href="www.google.com">career</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="realEstate_contactBtn">
                                    <ButtonEight name="contact us" />
                                </div>
                            </nav>

                            <section className="realEstate_headerSection">
                                <div className="realEstate_leftContainer">
                                    <div className="realEstate_innerLeftContainer">
                                        <div className="realEstate_title-wrap">
                                            <h1>locataire realty</h1>
                                        </div>
                                        <div className="realEstate_text-wrap">
                                            <p>
                                                Locataire Realty provides real estate services to
                                                prospective clients looking to buy, sell or lease
                                                residential and commercial real estates in the United
                                                States and Canada.
                                            </p>
                                        </div>

                                        <section id="header-bottomLeftContent">
                                            <div className="realEstate_getMoreInfoBtn">
                                                <ButtonSevenB name="learn more" />
                                            </div>

                                            <div className="realEstate_flag-wrap">
                                                <div className="realEstate_flag" />
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="realEstate_rightContainer">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={window.screen.availWidth > 1199 ? image_1aA : image_1a}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>
                                                    Nulla vitae elit libero, a pharetra augue mollis
                                                    interdum.
                                                </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={window.screen.availWidth > 1199 ? image_3cC : image_3c}
                                                alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>Second slide label</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.
                                                </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={window.screen.availWidth > 1199 ? image_6fC : image_6f}
                                                alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>Third slide label</h3>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl
                                                    consectetur.
                                                </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </section>
                        </header>

                        {/* ABOUT LOCATAIRE */}
                        <br />
                        <br />
                        <br />
                        <MAIN_DESKTOP />
                        <br />
                        <br />

                        <main id="main-realtyContainer" className="this_yes ">
                            {/* TABLET */}
                            <div className="realty-container">
                                <div className="realty-content">
                                    <Container className="property-container">
                                        <Row className="justify-content-md-center investS">
                                            <Col md={8}>
                                                <div className="invest-img" />
                                            </Col>
                                            <Col md={4} className="realty-content_left border_right">
                                                <h1>investment service</h1>
                                                <p>
                                                    Locataire offers to prospective partners opportunities
                                                    to invest in dozens of high-growth residential and
                                                    commercial properties in the United States, and
                                                    Canada.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>

                                </div>

                                <Container className="display_off">
                                    <Row>
                                        <Col>
                                            <div className="p1_img" />
                                        </Col>
                                        <Col className="sub_text-p1">
                                            <p className="p1">
                                                We leverage experience and local market knowledge to
                                                produce top quality risk-adjusted returns for investors.
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>

                                {/* SLIDER A */}

                                <div
                                    className="carousel"
                                    id="carousel-investor"
                                    data-flickity='{ "wrapAround": true, "autoPlay": true }'
                                >
                                    <div className="carousel-cell hvr-underline-from-left hvr-underline-from-center">
                                        <div className="realEstate-invest__item ">
                                            <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                                            <Container className="container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex hvr-icon-forward">
                                                        <i class="fas fa-search-dollar hvr-icon"></i>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>Identify undervalue real estate properties</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                    <div className="carousel-cell hvr-underline-from-left">
                                        <div className="realEstate-invest__item">
                                            <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                                            <Container className="container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                        <i class="fab fa-acquisitions-incorporated hvr-icon"></i>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>Property acquisition</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                    <div className="carousel-cell hvr-underline-from-left">
                                        <div className="realEstate-invest__item">
                                            <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />

                                            <Container className="container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                        <GiContract className="hvr-icon" />
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>Leases administration</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                    <div className="carousel-cell hvr-underline-from-left">
                                        <div className="realEstate-invest__item">
                                            <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />

                                            <Container className="container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                        <GiAutoRepair className="hvr-icon" />
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>Renovation and remodeling</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                    <div className="carousel-cell hvr-underline-from-left">
                                        <div className="realEstate-invest__item">
                                            <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />

                                            <Container className="container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                        <FaChartLine className="hvr-icon" />
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>
                                                                Implement strategic capital and operational
                                                                programs to increase cashflow
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>

                                    <div className="carousel-cell hvr-underline-from-left">
                                        <div className="realEstate-invest__item">
                                            <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />

                                            <Container className="container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                        <RiSkullFill className="hvr-icon" />
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>Reduce overall risk</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>

                                    <div className="carousel-cell hvr-underline-from-left">
                                        <div className="realEstate-invest__item">
                                            <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />

                                            <Container className="container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                        <HiUserRemove className="hvr-icon" />
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>Evictions proceedings</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>

                                    <div className="carousel-cell hvr-underline-from-left">
                                        <div className="realEstate-invest__item">
                                            <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />

                                            <Container className="invest-container container_height">
                                                <Row>
                                                    <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                        <BsHouseFill className="hvr-icon" />
                                                    </Col>
                                                    <Col sm={8}>
                                                        <div className="realEstate-invest__item-content">
                                                            <p>Possession of leased premises</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>

                                {/* SLIDER A ENDS */}
                            </div>

                            <div className="realty-container right-hand-container" id="realty-content">
                                <div className="realty-content realty-content_sec">
                                    <Container className="property-container">
                                        <Row className="justify-content-md-center">
                                            <Col md={8}>
                                                <div className="property-img" />
                                            </Col>
                                            <Col md={4} className="realty-content_left">
                                                <h1>Property management</h1>
                                                <p>
                                                    Locataire real estate property managers offer hands-on
                                                    experience management of single-family homes,
                                                    multi-family homes, condominiums, townhouses, and
                                                    commercial properties.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>

                            <Container className="margin_btm">
                                <Row>
                                    <Col>
                                        <Media>
                                            <img
                                                width={128}
                                                height={128}
                                                className="mr-3"
                                                src={imgF}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5 className="media_title">
                                                    Property management services include the following:
                                                </h5>
                                                <p style={{ fontSize: "2rem" }}>
                                                    Whether you own one unit or many in an apartment
                                                    building, our agents can assist you maximize profit
                                                    and keep operating expenses low.
                                                </p>
                                                <br />
                                            </Media.Body>
                                        </Media>

                                        <p style={{ fontSize: "2rem" }}>
                                            Our objective is to maximize the total return to property
                                            owners, through strategic acquisition, re-development,
                                            re-lease and management of these properties for maximum
                                            cash flow. We get paid after you get paid. Which means, if
                                            we don’t collect rent as agreed, you don’t pay us a
                                            management fee.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>

                            <Container className="display_off">
                                <Row>
                                    <Col>
                                        <div className="p1_img" />
                                    </Col>
                                    <Col className="sub_text-p1">
                                        <p className="p1">
                                            our agents can assist you maximize profit and keep
                                            operating expenses low.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                            {/* SLIDER A */}
                            <div
                                className="carousel"
                                id="carousel"
                                data-flickity='{ "wrapAround": true, "autoPlay": true }'
                            >
                                <div className="carousel-cell hvr-underline-from-center">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex hvr-icon-forward">
                                                    <FaBullhorn className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Advertising and filling vacancies</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <RiCriminalLine className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>
                                                            Tenant screening (credit, criminal background)
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <GiContract className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Leases administration</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <FcInspection className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Move-in inspection walkthrough</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <FaCogs className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Repairs & maintenance</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>

                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <FaAtlas className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Vendor management</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>

                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <FaTimes className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Evictions proceedings</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>

                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <FaHands className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Possession of leased premises</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>

                                <div className="carousel-cell hvr-underline-from-left">
                                    <div className="realEstate-invest__item">
                                        <div className="realEstate-invest__item-image-ten_b realEstate-invest__item-image--prop" />
                                        <Container className="container_height">
                                            <Row>
                                                <Col sm={4} className="icon-flex  hvr-icon-forward">
                                                    <HiDocumentReport className="hvr-icon" />
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="realEstate-invest__item-content">
                                                        <p>Financial reporting</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                            {/* SLIDER A ENDS */}
                        </main>
                    </div>
                </div>
            </main>
        </div>
    );
}
