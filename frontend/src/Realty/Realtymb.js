import React, { memo } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "../styles/Locataire.css"
import { Link } from 'react-scroll'
import "../styles/fonts/gt super/stylesheet.css"
import "./realty_about_layout"
import ButtonSeven from "../components/buttons/buttonSeven"
import ContactBtn from "../components/buttons/Contact_btn"

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
import hamburger from "../images/reaalty/hamburger.svg"
import hamburgerLight from "../images/reaalty/hamburgerLight.svg"
import isFrench from '../language/locales/en.json'
import { useTranslation } from 'react-i18next';
import img_1 from "../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_897.jpg"
import img_2 from "../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_1400.jpg"
import img_3 from "../images/reaalty/all types/Mobile/img3/header3_purlix_c_scale,w_1400.jpg"

const Realtymobile = () => {
  const { i18n } = useTranslation();

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
                <h1>{i18n.resolvedLanguage === 'fr' ? isFrench.realty.main_desktop.invest.title : "investment service"}</h1>
              </div>
              <div className="realEstate-header-content__text">
                {i18n.resolvedLanguage === 'fr' ? (
                  <>
                    <p>
                      {isFrench.realty.main_desktop.invest.text_one}
                    </p>


                  </>
                ) : (
                  <p>
                    Locataire Realty provides real estate
                    services to prospective clients looking
                    to buy, sell or lease residential and
                    commercial real estates in the United
                    States, and Canada.
                  </p>

                )}
              </div>
              <div className="realEstate-header-content__btn">
                <ContactBtn name={i18n.resolvedLanguage === 'fr' ? isFrench.realty.navbar.contact_us : "contact us"} />
              </div>
            </div>
            <div className="realEstate-header-content__btn" id="realEstate-header-content__btn">
              <ContactBtn name={i18n.resolvedLanguage === 'fr' ? isFrench.realty.navbar.contact_us : "contact us"} />
            </div>
          </section>
        </header>

        {/* MAIN CONTENT */}



        <main className="realEstate-about">
          <section className="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-subTitle">
                {i18n.resolvedLanguage === 'fr' ? <span> À propos</span> : <span>about us</span>}
              </div>
              <div className="realEstate-title">
                <h1>
                  {i18n.resolvedLanguage === 'fr' ? "Locataire Realty fournit des biens immobiliersservices aux clients potentiels." : "Locataire Realty provides real estate services to prospective clients."}
                </h1>
              </div>
            </div>
          </section>



          <section className="realEstate-image">
            <SlickProperty
              img_1={
                <img
                  className="d-block w-100"
                  src={img_1}
                  alt="Second slide"
                />
              }
              img_2={
                <img
                  className="d-block w-100"
                  src={img_2}
                  alt="Second slide"
                />
              }
              img_3={
                <img
                  className="d-block w-100"
                  src={img_3}
                  alt="Third slide"
                />
              }
            />
            {/* <Slick
              img_1={<Mobile />}
              img_2={<MobileB />}
              img_3={<MobileC />}
            /> */}
            <div className="svg-Mobile-about_left" />
            <div className="svg-Mobile-about_right"></div>
          </section>
          <section className="realEstate-content" id="realty-list">
            <div className="realEstate-content_wrap" >
              <div className="realEstate-content_text">

                {i18n.resolvedLanguage === 'fr' ? (
                    <>
                      <p>
                      Locataire Immobilier propose une large gamme de services immobiliers aux clients potentiels cherchant à acheter, vendre ou louer un ou des biens immobiliers résidentiels 
                      </p>
                      <p>
                      Notre activité principale comprend la gestion et l’administration de propriétés résidentielles et commerciales, et notre objectif principal est de maximiser au mieux le rendement total pour les propriétaires, par l’acquisition stratégique, le réaménagement, et la gestion de ces propriétés pour un flux de trésorerie maitrisé.
                      </p>
                    </>
                ) : (
                  <>
                    <p>
                  Our core business includes management
                  and administration of commercial and
                  multifamily residential properties.
                  </p>

                  <p>
                  our primary business objective is to
                  maximize the total return to property
                  owners, through strategic acquisition,
                  re-development, re-lease and
                  management of these properties for
                  maximum cash flow.
                </p>
                  </>
                )}

              </div>
            </div>
            <Link to="realEstate-title__two" spy={true} smooth={true} >
              <div className="realEstate-content_btn">
                <div className="realEstate-content_btn-left">
                  <ButtonSeven title={i18n.resolvedLanguage === 'fr' ? isFrench.realty.header.learn_more : "learn more"} />
                </div>

              </div>
            </Link>
          </section>



          <section className="realEstate-title" id="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-title" id="realEstate-title__two">
                <h1 className="realEstate-title_invest">
                  {i18n.resolvedLanguage === 'fr' ? isFrench.realty.main_desktop.invest.title : "investment service"}
                </h1>
              </div>
            </div>
          </section>
          <section className="realEstate-image">
            <SlickProperty
              img_1={
                <img
                  className="d-block w-100"
                  src={image_3}
                  alt="Second slide"
                />
              }
              img_2={
                <img
                  className="d-block w-100"
                  src={image_6}
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
            {/* <SlickInvestment
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
            /> */}
            <div id="svg-Mobile-about_left" />
            <div className="svg-Mobile-about_right" id="svg-Mobile-about_right" />
          </section>

          <section className="realEstate-content" id="realty-list">
            <div className="realEstate-content_wrap" >
              <div className="realEstate-content_text">
                <div id="svg-Mobile-invest_left" />
                <div className="realEstate-content_icon">
                  <span><i class="fas fa-info-circle"></i></span>
                  {i18n.resolvedLanguage === 'fr' ? (
                    <>
                      <p>
                        {isFrench.realty.main_desktop.invest.text_one}
                      </p>


                    </>
                  ) : (
                    <p>
                      Locataire Realty provides real estate
                      services to prospective clients looking
                      to buy, sell or lease residential and
                      commercial real estates in the United
                      States, and Canada.
                    </p>

                  )}

                </div>
                <div className="realEstate-content_icon">
                  <span><i class="fas fa-info-circle"></i></span>
                  {i18n.resolvedLanguage === 'fr' ? (
                    <>
                      <p>
                        {isFrench.realty.main_desktop.invest.text_two}
                      </p>


                    </>
                  ) : (

                    <p>
                      We leverage experience and local market
                      knowledge to produce top quality risk-adjusted
                      returns for investors.
                    </p>
                  )}
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
                    {i18n.resolvedLanguage === 'fr' ? (
                      <h3>
                        {isFrench.realty.main_desktop.invest.image_texts.services.servise_heading}
                      </h3>
                    ) : (
                      <h3>
                        Real Estate investment services {window.innerWidth <= 400 ? '' : <br />}
                        include the following
                      </h3>

                    )}
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
                            {i18n.resolvedLanguage === 'fr' ? "Identifier les biens immobiliers sous-évalués" : "Identify undervalue real estate properties"}
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
                            {i18n.resolvedLanguage === 'fr' ? "Acquisition de biens immobiliers" : "Property acquisition"}
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
                            {i18n.resolvedLanguage === 'fr' ? "Administration des baux" : "Leases administration"}
                            
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
                            {i18n.resolvedLanguage === 'fr' ? "Rénovation et remodelage" :  "Renovation and remodeling"}
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
                          {i18n.resolvedLanguage === 'fr' ? "Gestion des risques liés à l’immobilier " : (
                            <>
                            <p className="lg-off">
                            Capital and operational programs to increase cashflow 

                          </p>
                          <p className="xm-on">
                            Capital & operational programs to increase cashflow
                          </p>
                            </>
                          )}
                          
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
                            {i18n.resolvedLanguage === 'fr' ? "Réduire le risque global" : "Reduce overall risk"}
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
                            {i18n.resolvedLanguage === 'fr' ? "Procédures d’expulsion" : "Evictions proceedings"}
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
                  {i18n.resolvedLanguage === 'fr' ? isFrench.realty.main_desktop.porperty.title : "property management"}
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
                  {i18n.resolvedLanguage === 'fr' ? (
                    <p>
                      {isFrench.realty.main_desktop.porperty.text_one}
                    </p>
                  ) : (
                    <p>
                      Locataire real estate property managers offer hands-on
                      experience management of single-family homes,
                      multi-family homes, condominiums, townhouses, and
                      commercial properties.
                    </p>

                  )}
                </div>
                <div className="realEstate-content_icon">
                  <span><i class="fas fa-info-circle"></i></span>
                  {i18n.resolvedLanguage === 'fr' ? (
                    <p>
                      Locataire vous assure le maintien de stabilité de vos revenus aux files de l’eau dans le temps et délais.
                    </p>
                  ) : (
                    <p>
                      Whether you own one unit or many in an apartment building, our agents can assist you maximize profit and keep operating expenses low
                    </p>

                  )}
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
                    {i18n.resolvedLanguage === 'fr' ? (
                      <h3>
                        {isFrench.realty.main_desktop.porperty.image_texts.services.servise_heading}
                      </h3>
                    ) : (

                      <h3>
                        Property management services {window.innerWidth <= 400 ? '' : <br />}
                        include the following
                      </h3>
                    )}
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
                            {i18n.resolvedLanguage === 'fr' ? "Publicité et pourvoir les postes vacants" : "Advertising and filling vacancies"}
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
                            {i18n.resolvedLanguage === 'fr' ? "Filtrage des locataires (crédit, antécédents criminels)" : "Tenant screening (credit, criminal background)"}
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
                          {i18n.resolvedLanguage === 'fr' ? "Administration des baux" : "Leases administration"}
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
                            {i18n.resolvedLanguage === 'fr' ? "Procédure pas à pas d’inspection d’emménagement" : "Move-in inspection walkthrough"}
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
                          {i18n.resolvedLanguage === 'fr' ? " Travaux de maintenance ou de réparation" : "Repairs & maintenance"}
                          
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
                            {i18n.resolvedLanguage === 'fr' ? "Gestion des fournisseurs" : "Vendor management"}
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
                            {i18n.resolvedLanguage === 'fr' ? "Procédures d’expulsion" : "Evictions proceedings"}
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
                            {i18n.resolvedLanguage === 'fr' ? "Possession de locaux loués" : "Possession of leased premises"}
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
                           {i18n.resolvedLanguage === 'fr' ? "Rapports financiers" : "Financial reporting"}
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
export default memo(Realtymobile)