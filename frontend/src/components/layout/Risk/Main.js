import React, { Fragment, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Slider from './Slider'

import audit_1 from '../../../images/risk/audit_1.jpg'
import audit_2 from '../../../images/risk/audit_2.jpg'
import audit_3 from '../../../images/risk/audit_3.jpg'

import assurance_1 from '../../../images/risk/assurance_1.jpg'
import assurance_2 from '../../../images/risk/assurance_2.jpg'
import assurance_3 from '../../../images/risk/assurance_3.jpg'

import transform_1 from '../../../images/risk/transformation.jpg'
import transform_2 from '../../../images/risk/operational risk and transformation.png'
import transform_3 from '../../../images/risk/2.jpg'

import audit_1a from '../../../images/risk/third.jpg'
import audit_2a from '../../../images/risk/third_2.png'
import audit_3a from '../../../images/risk/third_3.png'

const Main = () => {

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
                    <div className="main-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_1}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_2}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_3}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_1}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_2}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_3}
                                alt="test three"
                            />
                        </div>
                    </div>
                </div>

                <div className="__innerItem-container-text mobile-text-wrap" id="__innerItem-container-text">
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
                    <div className="main-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={assurance_1}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={assurance_2}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={assurance_3}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={assurance_1}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={assurance_2}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={assurance_3}
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
                <Slider fade="fade" contentOne={Audit()} contentTwo={Audit_a()} contentThree={Audit_b()} contentFour={Audit_a()} contentFive={Audit_b()} />
            </center>
            <div className="risk-content remove_mt" id="risk-content-up" style={{ marginTop: 'unset!important' }}>
                <div className="__innerItem-container-img">
                    <div className="main-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={transform_1}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={transform_2}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={transform_3}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={transform_1}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={transform_2}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={transform_3}
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
                    <div className="main-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_1a}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_2a}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_3a}
                                alt="test three"
                            />
                        </div>
                    </div>
                    <div className="md-carousel" data-flickity='{ "wrapAround": true, "autoPlay": 5500, "imagesLoaded": true  }'>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_1a}
                                alt="test one"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_2a}
                                alt="test two"
                            />
                        </div>
                        <div className="carousel-cell">
                            <img
                                className="item-img img-resp"
                                src={audit_3a}
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
                <Slider fade="fade" contentOne={Risk()} contentTwo={Risk_a()} contentThree={Risk_b()} contentFour={Risk_a()} contentFive={Risk_b()} />
            </center>
        </Fragment>
    )
}

export default Main
