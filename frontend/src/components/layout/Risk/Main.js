import React, { Fragment, useEffect } from 'react'
import image1 from '../../../images/Spaces/Mobile/spacesMobileFourBedroom.jpg'
import image2 from '../../../images/Spaces/Mobile/spacesMobileTwoBedroom.jpg'
import image3 from '../../../images/Spaces/Mobile/spacesMobileStudioPlus.jpg'
import image4 from '../../../images/Spaces/Mobile/spacesMobileFourBedroom.jpg'
import image5 from '../../../images/Spaces/Mobile/spacesMobileTwoBedroom.jpg'
import image6 from '../../../images/Spaces/Mobile/spacesMobileStudioPlus.jpg'
import image7 from '../../../images/Spaces/Mobile/spacesMobileFourBedroom.jpg'
import image8 from '../../../images/Spaces/Mobile/spacesMobileTwoBedroom.jpg'
import image9 from '../../../images/Spaces/Mobile/spacesMobileStudioPlus.jpg'
import image10 from '../../../images/Spaces/Mobile/spacesMobileFourBedroom.jpg'
import image11 from '../../../images/Spaces/Mobile/spacesMobileTwoBedroom.jpg'
import image12 from '../../../images/Spaces/Mobile/spacesMobileStudioPlus.jpg'
import image13 from '../../../images/Spaces/Mobile/spacesMobileFourBedroom.jpg'
import image14 from '../../../images/Spaces/Mobile/spacesMobileTwoBedroom.jpg'
import image15 from '../../../images/Spaces/Mobile/spacesMobileStudioPlus.jpg'
import image16 from '../../../images/Spaces/Mobile/spacesMobileFourBedroom.jpg'
import image17 from '../../../images/Spaces/Mobile/spacesMobileTwoBedroom.jpg'
import image18 from '../../../images/Spaces/Mobile/spacesMobileStudioPlus.jpg'
import { Helmet } from 'react-helmet'
import Styled from 'styled-components'
import Slider from './Slider'

const Main = () => {
    const Img = Styled.img`
        width: 1000px;
        height: 36rem;
    `

    const loadWowScript = (url) => {
        var script = document.createElement('script');
        script.src = url
        script.type = 'text/javascript'
        script.async = true
        document.body.appendChild(script);
    }
    useEffect(() => {
        loadWowScript('https://res.cloudinary.com/locataire/raw/upload/v1621704606/wow%20slider/wowslider_sj5ksw.js');
        loadWowScript('https://res.cloudinary.com/locataire/raw/upload/v1621704605/wow%20slider/script_oz2o8g.js');

    }, [])

    const Audit = () => {
        return (
            <div className="audit_img-Style" id="audit_img-One" />
        )
    }
    const Audit_a = () => {
        return (
            <div className="audit_img-Style" id="audit_img-Two" />
        )
    }
    const Audit_b = () => {
        return (
            <div className="audit_img-Style" id="audit_img-Three" />
        )
    }
    const Risk = () => {
        return (
            <div className="risk_img-Style" id="risk_img-One" />
        )
    }
    const Risk_a = () => {
        return (
            <div className="risk_img-Style" id="risk_img-Two" />
        )
    }
    const Risk_b = () => {
        return (
            <div className="risk_img-Style" id="risk_img-Three" />
        )
    }

    return (

        <Fragment>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://npmcdn.com/flickity@2/dist/flickity.css"
                />
                <link rel="stylesheet" href="https://res.cloudinary.com/locataire/raw/upload/v1621704633/wow%20slider/style_zzarng.css" />
            </Helmet>



            <div className="risk-content" id="risk-content-up">
                <div className="__innerItem-container-img">
                    <div className="main-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image1}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image2}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image3}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image4}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image5}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image6}
                                alt="test three"
                            />
                        </div>
                    </div>
                </div>

                <div className="__innerItem-container-text">
                    <div className="_inner-text-content">
                        <div className="_item_text-header">
                            <h1>audit</h1>
                        </div>
                        <div className="item-sub-wrap">
                            <div className="sub-item">
                                <p>internal</p>
                            </div>
                            <div id="sub_divider" />
                            <div className="sub-item">
                                <p>external</p>
                            </div>
                            <div id="sub_divider" />
                            <div className="sub-item" id="sub-item">
                                <p>
                                    internal revenue <br id="sub__off" />
                    service ( IRS )
                  </p>
                            </div>
                        </div>
                        <div className="_item_text" id="_item_text">
                            <p>
                                The purpose is to enhance the degree of confidence in the
                                financial statements, to improve internal controls. This is
                                achieved by our expression of an opinion on whether the
                                financial statements are prepared in accordance with the
                  applicable reporting framework. <br />
                                <br />
                  Our Audit services go beyond merely meeting statutory
                  requirements. We help our clients perform better. We listen to
                  their needs, think about the business implications and tailor
                  our approach accordingly. Because the Audit professionals of
                  Locataire take the time to understand our client's business as
                  well as the industries in which they operate, we can help them
                  identify major risks and opportunities over and above
                  performance of the traditional financial reporting function.
                </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* 2 */}


            <div className="risk-content switchside" id="risk-content-up">
                <div className="__innerItem-container-img">
                    <div className="main-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image7}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image8}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image9}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image10}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image11}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image12}
                                alt="test three"
                            />
                        </div>
                    </div>
                </div>
                <div className="__innerItem-container-text">
                    <div className="_inner-text-content">
                        <div className="_item_text-header">
                            <h1>Assurance</h1>
                        </div>
                        <div className="item-sub-wrap">
                            <div className="sub-item">
                                <p>Aspire with assurance</p>
                            </div>
                        </div>
                        <div className="_item_text">
                            <p>
                                Our Assurance professionals gather information during a
                                Locataire Audit in order to understand fully our client's
                                business, internal controls and risk spectrum. Before making
                                Audit decisions we conduct objective diagnostic tests and
                  analytical reviews. <br />
                                <br />
                  Our methods help enable our clients to meet the growing demand
                  for enhanced disclosure and accountability. We work closely
                  with our clients, yet independently, and encourage open
                  communication. Locataire Audit goes beyond testing
                  transactions and balances to providing insights that help our
                  clients better understand their business.
                </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <center style={{ marginTop: '5rem', marginBottom: '5rem' }}>
                <Slider contentOne={Audit()} contentTwo={Audit_a()} contentThree={Audit_b()} contentFour={Audit_a()} contentFive={Audit_b()} />
            </center>
            <div className="risk-content remove_mt" id="risk-content-up" style={{ marginTop: 'unset!important' }}>
                <div className="__innerItem-container-img">
                    <div className="main-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image13}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image14}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image15}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image16}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image17}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image18}
                                alt="test three"
                            />
                        </div>
                    </div>
                </div>
                <div className="__innerItem-container-text">
                    <div className="_inner-text-content">
                        <div className="_item_text-header">
                            <h1>Operational Risk &amp; Transformation</h1>
                        </div>
                        <div className="item-sub-wrap">
                            <div className="sub-item">
                                <p>Managing risk to drive performance</p>
                            </div>
                        </div>
                        <div className="_item_text">
                            <p>
                                Risk is unavoidable, but it is manageable and—when viewed with
                                an eye on growth—potentially profitable. Locataire's
                                Operational Risk and Transformation services help clients
                                transform the ways in which they leverage people, technology,
                                data, processes and controls to address their operational
                  risks and drive performance. <br />
                                <br />
                  Locataire develops frameworks that include common risk
                  taxonomies, risk assessments and reporting, business and IT
                  process and controls assessment methods, and enabling tools
                  and technologies.
                </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="risk-content switchside" id="risk-content-up">
                <div className="__innerItem-container-img">
                    <div className="main-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image7}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image8}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image9}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image10}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image11}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={image12}
                                alt="test three"
                            />
                        </div>
                    </div>
                </div>
                <div className="__innerItem-container-text">
                    <div className="_inner-text-content">
                        <div className="_item_text-header">
                            <h1>Third Party Risk Management </h1>
                        </div>
                        <div className="item-sub-wrap">
                            <div className="sub-item">
                                <p>Aspire with risk management</p>
                            </div>
                        </div>
                        <div className="_item_text">
                            <p>
                                we help clients evaluate and manage third-party risk related to outsourcing, and other business partnerships across the organization to maximize effectiveness <br />
                                <br />
                  Our methods help enable our clients to meet the growing demand
                  for enhanced disclosure and accountability. We work closely
                  with our clients, yet independently, and encourage open
                  communication. Locataire Audit goes beyond testing
                  transactions and balances to providing insights that help our
                  clients better understand their business.
                </p>
                        </div>
                    </div>
                </div>
            </div>
            <center style={{ marginTop: '5rem' }}>
                <Slider contentOne={Risk()} contentTwo={Risk_a()} contentThree={Risk_b()} contentFour={Risk_a()} contentFive={Risk_b()} />
            </center>
        </Fragment>
    )
}

export default Main
