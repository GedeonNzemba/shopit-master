import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "../styles/Locataire.css"
import { Link } from 'react-scroll'
import "../styles/fonts/gt super/stylesheet.css"
import "./realty_about_layout"
import ButtonSeven from "../components/buttons/buttonSeven"
import ContactBtn from "../components/buttons/Contact_btn"

import Slick from "./Slick";
import SlickInvestment from "./SlickInvestment";
import image_1 from "../images/reaalty/all types/estate_1.jpg";
import image_3 from '../images/reaalty/all types/estate_3.jpg'
import image_6 from '../images/reaalty/all types/estate_6.jpg'
import SlickProperty from "./SlickProperty";
import { Col } from "react-bootstrap";
import { GiContract, GiAutoRepair } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';
import { RiSkullFill, RiCriminalLine } from 'react-icons/ri';
import { HiUserRemove, HiDocumentReport } from 'react-icons/hi';
import { FcInspection } from 'react-icons/fc'
import { FaBullhorn, FaTimes, FaHands, FaAtlas, FaCogs } from 'react-icons/fa';
import '../styles/hover.css';
import Navbar from "../components/Navbar"
import Mobile from "./IMG/Mobile"
import MobileB from "./IMG/MobileB"
import MobileC from "./IMG/MobileC"
import hamburger from "../images/reaalty/hamburger.svg"
import hamburgerLight from "../images/reaalty/hamburgerLight.svg"


export default function Realtymobile() {



  return (
    <>
      <div className="realEstate-midD reset-this">
        <Navbar iconB={hamburger} icon={hamburgerLight} />
        {/* TOP HEADER */}
        <header className="realEstate_header" >

          <section className="realEstate-header_section">
            <div className="svg-Mobile-header_top" />
            <div className="realEstate-header-content" >
              <div className="svg-Mobile-header_bottom" />
              <div className="realEstate-header-content__title">
                <h1>locataire realty</h1>
              </div>
              <div className="realEstate-header-content__text">
                <p>
                  Locataire Realty provides real estate
                  services to prospective clients looking
                  to buy, sell or lease residential and
                  commercial real estates in the United
                  States, and Canada.
                </p>
              </div>
              <div className="realEstate-header-content__btn">
                <ContactBtn name="contact us" />
              </div>
            </div>
            <div className="realEstate-header-content__btn" id="realEstate-header-content__btn">
              <ContactBtn name="contact us" />
            </div>
          </section>
        </header>

        {/* MAIN CONTENT */}



        <main className="realEstate-about">
          <section className="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-subTitle">
                <span>about us</span>
              </div>
              <div className="realEstate-title">
                <h1>
                  Locataire Realty provides real estate
                  services to prospective clients.
                </h1>
              </div>
            </div>
          </section>



          <section className="realEstate-image">
            <Slick
              img_1={<Mobile />}
              img_2={<MobileB />}
              img_3={<MobileC />}
            />
            <div className="svg-Mobile-about_left" />
            <div className="svg-Mobile-about_right"></div>
          </section>
          <section className="realEstate-content" id="realty-list">
            <div className="realEstate-content_wrap" >
              <div className="realEstate-content_text">

                <p>
                  Our core business includes management
                  and administration of commercial and
                  multifamily residential properties.
                  <p></p>
                  our primary business objective is to
                  maximize the total return to property
                  owners, through strategic acquisition,
                  re-development, re-lease and
                  management of these properties for
                  maximum cash flow.
                </p>
              </div>
            </div>
            <Link to="realEstate-title__two" spy={true} smooth={true} >
              <div className="realEstate-content_btn">
                <div className="realEstate-content_btn-left">
                  <ButtonSeven title="learn more" />


                </div>

              </div>
            </Link>
          </section>



          <section className="realEstate-title" id="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-title" id="realEstate-title__two">
                <h1 className="realEstate-title_invest">
                  investment services
                </h1>
              </div>
            </div>
          </section>
          <section className="realEstate-image">
            <SlickInvestment
              img_1={
                <img
                  className="d-block w-100"
                  src={image_3}
                  alt="First slide"
                />
              }
              img_2={
                <img
                  className="d-block w-100"
                  src={image_6}
                  alt="First slide"
                />
              }
              img_3={
                <img
                  className="d-block w-100"
                  src={image_1}
                  alt="Third slide"
                />
              }
            />
            <div id="svg-Mobile-about_left" />
            <div className="svg-Mobile-about_right" id="svg-Mobile-about_right" />
          </section>

          <section className="realEstate-content" id="realty-list">
            <div className="realEstate-content_wrap" >
              <div className="realEstate-content_text">
                <div id="svg-Mobile-invest_left" />
                <div className="realEstate-content_icon">
                  <span><i class="fas fa-info-circle"></i></span>
                  <p>
                    Locataire offers to prospective partners
                    opportunities to invest in dozens of high-growth
                    residential and commercial properties in the
                    United States, and Canada.
                  </p>
                </div>
                <div className="realEstate-content_icon">
                  <span><i class="fas fa-info-circle"></i></span>
                  <p>
                    We leverage experience and local market
                    knowledge to produce top quality risk-adjusted
                    returns for investors.
                  </p>
                </div>
              </div>
            </div>

            <div className="realEstate-content-typo">
              <div className="realEstate-conent_content">
                <div className="realEsate-content__svg">
                  <div id="svg-Mobile-invest" />
                </div>
                <div className="realEstate-content-sub_heading">
                  <div id="realEstate-verticle_line" />
                  <div className="realEstate-content-sub_heading--text">
                    <h3>
                      Real Estate investment services {window.innerWidth <= 400 ? '' : <br />}
                      include the following
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDER A */}

            <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex hvr-icon-forward">
                        <i class="fas fa-search-dollar hvr-icon"></i>
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Identify undervalue real estate properties
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <i class="fab fa-acquisitions-incorporated hvr-icon"></i>
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Property acquisition
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <GiContract className="hvr-icon" />
                      </Col>
                      <Col sm={8} className="padding-left">
                        <div className="realEstate-invest__item-content">
                          <p>
                            Leases administration
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <GiAutoRepair className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Renovation and remodeling
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                </div>
              </div>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <FaChartLine className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p className="lg-off">
                            Capital and operational programs to increase cashflow
                          </p>
                          <p className="xm-on">
                            Capital & operational programs to increase cashflow
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <RiSkullFill className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Reduce overall risk
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <HiUserRemove className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Evictions proceedings
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>




            </div>

            {/* SLIDER A ENDS */}
          </section>



          {/* PROPERTY MANAGEMENT */}
          <section className="realEstate-title" id="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-title">
                <h1 className="realEstate-title_invest">
                  property management
                </h1>
              </div>
            </div>
          </section>
          <section className="realEstate-image">
            <SlickProperty
              img_1={
                <img
                  className="d-block w-100"
                  src={image_1}
                  alt="Second slide"
                />
              }
              img_2={
                <img
                  className="d-block w-100"
                  src={image_3}
                  alt="Second slide"
                />
              }
              img_3={
                <img
                  className="d-block w-100"
                  src={image_1}
                  alt="Third slide"
                />
              }
            />


            <div id="svg-Mobile-about_left" />
            <div className="svg-Mobile-about_right" id="svg-Mobile-about_right" />
          </section>

          <section className="realEstate-content" id="property-management">
            <div className="realEstate-content_wrap" >
              <div className="realEstate-content_text">
                <div id="svg-Mobile-invest_left" />
                <div className="realEstate-content_icon">
                  <span><i class="fas fa-info-circle"></i></span>
                  <p>
                    Locataire real estate property managers offer hands-on
                    experience management of single-family homes,
                    multi-family homes, condominiums, townhouses, and
                    commercial properties.
                  </p>
                </div>
                <div className="realEstate-content_icon">
                  <span><i class="fas fa-info-circle"></i></span>
                  <p>
                    Whether you own one unit or many in an apartment building, our agents can assist you maximize profit and keep operating expenses low
                  </p>
                </div>
              </div>
            </div>

            <div className="realEstate-content-typo">
              <div className="realEstate-conent_content">
                <div className="realEsate-content__svg">
                  <div id="svg-Mobile-invest" />
                </div>
                <div className="realEstate-content-sub_heading">
                  <div id="realEstate-verticle_line" />
                  <div className="realEstate-content-sub_heading--text">
                    <h3>
                      Property management services {window.innerWidth <= 400 ? '' : <br />}
                      include the following
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDER A HERE*/}

            <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
              <div className="carousel-cell hvr-overline-from-center">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-one_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex hvr-icon-forward">
                        <FaBullhorn className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Advertising and filling vacancies
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-two_b realEstate-invest__item-image--prop" />
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
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <GiContract className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Leases administration
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-four_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <FcInspection className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Move-in inspection walkthrough
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                </div>
              </div>
              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-five_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <FaCogs className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Repairs & maintenance
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-six_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <FaAtlas className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Vendor management
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-seven_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <FaTimes className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Evictions proceedings
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <FaHands className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Possession of leased premises
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                </div>
              </div>

              <div className="carousel-cell ">
                <div className="realEstate-invest__item hvr-overline-from-center">
                  <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />
                  <Container className="container_height">
                    <Row>
                      <Col sm={4} className="icon-flex  hvr-icon-forward">
                        <HiDocumentReport className="hvr-icon" />
                      </Col>
                      <Col sm={8}>
                        <div className="realEstate-invest__item-content">
                          <p>
                            Financial reporting
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>

            {/* SLIDER A ENDS */}


          </section>



        </main>
      </div>
    </>
  )
}