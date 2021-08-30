import React, { Fragment } from 'react'
import Nav from "../../HeaderBSN"
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import Slider from './Slider'
// import Styled from 'styled-components'
import Helmet from "react-helmet"




const Header = () => {

    const FlickityScript = (url) => {
        var script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
    }
    FlickityScript('https://res.cloudinary.com/locataire/raw/upload/v1620773240/flickity_pt5r1r.js');
    FlickityScript('https://npmcdn.com/flickity@2/dist/flickity.pkgd.js');
    FlickityScript('https://res.cloudinary.com/locataire/raw/upload/v1620934139/main_el5xtl.js');


    const HeaderOne = () => {
        return (
            <div>
                <div className="riskHeader_title">
                    <h1>
                        enhance the <span id="fa-underline">degree</span> of confidence
                    </h1>
                </div>
                <div className="riskHeader_sub-title">
                    <p>

                        Locataire Risk Management provides tailored solutions to help private companies improve business strategies and practices.
                    </p>
                </div>

            </div>
        )
    }

    const HeaderTwo = () => {
        return (
            <div>
                <div className="riskHeader_title">
                    <h1>
                        <span id="fa-underline">Our</span> Service in: <div style={{ color: '#313962', fontWeight: 'bold' }}>Audit</div>
                    </h1>
                </div>
                <div className="riskHeader_sub-title">
                    <p>
                        Achieved by our expression of an opinion on whether the financial statements are prepared in accordance with the applicable reporting framework.
                    </p>
                </div>

            </div>
        )
    }
    const HeaderThree = () => {
        return (
            <div>
                <div className="riskHeader_title">
                    <h1>
                        <span id="fa-underline">Our</span> Service in: <div style={{ color: '#313962', fontWeight: 'bold' }}>Assurance</div>
                    </h1>
                </div>
                <div className="riskHeader_sub-title">
                    <p>
                        Extract insights from data, as well as third-party assurance to manage risks from the extended enterprise.
                    </p>
                </div>

            </div>
        )
    }
    const HeaderFour = () => {
        return (
            <div>
                <div className="riskHeader_title">
                    <h1>
                        <span id="fa-underline">Our</span> Service in: <div style={{ color: '#313962', fontWeight: 'bold' }}>Operational Risk & Transformation </div>
                    </h1>
                </div>
                <div className="riskHeader_sub-title">
                    <p>
                        We help clients transform the ways in which they leverage people, technology, data, business processes and controls to address their operational risks and drive business performance.
                    </p>
                </div>

            </div>
        )
    }
    const HeaderFive = () => {
        return (
            <div>
                <div className="riskHeader_title">
                    <h1>
                        <span id="fa-underline">Our</span> Service in: <div style={{ color: '#313962', fontWeight: 'bold' }}>Third Party Risk Management </div>
                    </h1>
                </div>
                <div className="riskHeader_sub-title">
                    <p>
                        We help clients evaluate and manage third-party risk related to outsourcing, and other business partnerships across the organization to maximize effectiveness.
                    </p>
                </div>

            </div>
        )
    }


    const HeaderOneImageFS = () => {
        return (
            <div className="riskHeader_imageRight-banner" id="riskHeader_imgOne_Fs" />
        )
    }
    const HeaderOneImage = () => {
        return (
            <div className="riskHeader_imageRight-banner" id="riskHeader_imgOne" />
        )
    }
    const HeaderTwoImage = () => {
        return (
            <div className="riskHeader_imageRight-banner" id="riskHeader_imgTwo" />
        )
    }
    const HeaderThreeImage = () => {
        return (
            <div className="riskHeader_imageRight-banner" id="riskHeader_imgThree" />
        )
    }
    const HeaderFourImage = () => {
        return (
            <div className="riskHeader_imageRight-banner" id="riskHeader_imgFour" />
        )
    }
    const HeaderFiveImage = () => {
        return (
            <div className="riskHeader_imageRight-banner" id="riskHeader_imgFive" />
        )
    }




    return (
        <Fragment>
            <Helmet>
                <link rel="stylesheet" href="https://npmcdn.com/flickity@2/dist/flickity.css" />
            </Helmet>
            <Nav />
            <div className="riskHeader">
                {/* image */}
                <div id="risk_cycle-img" />
                {/* image end */}
                <section className="riskHeader_row riskHeader_content" id="riskHeader_content">
                    <Slider contentOne={<HeaderOne />} contentTwo={<HeaderTwo />} contentThree={<HeaderThree />} contentFour={<HeaderFour />} contentFive={<HeaderFive />} />
                    <div className="riskHeader_btn">
                        <Link to="/" className="riskHeader_btn-left">
                            <Button variant="contained" color="primary" >
                                Learn More
                            </Button>
                        </Link>
                        <Link to="/" className="riskHeader_btn-right">
                            <Button variant="outlined" color="primary" >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="riskHeader_row riskHeader_image" id="risk_header-video" style={{ zIndex: '1' }} />
            </div>
            <header className="riskHeader__smallDesktop">
                <div className="__container">
                    <div className="__content">
                        <h3>risk management</h3>
                        <div id="sep_riskHeader_ct" />
                        <h1>enhance the degree of confidence</h1>
                        <div id="__smallScreen_text">
                            <p>
                                We provides tailored solutions to help private companies improve business strategies and practices.
                            </p>
                        </div>

                        <div className="riskHeader_btn">
                            <Link to="/" className="riskHeader_btn-left">
                                <Button variant="contained" color="secondary" >
                                    Learn More
                                </Button>
                            </Link>
                            <Link to="/" className="riskHeader_btn-right">
                                <Button variant="contained" color="primary" >
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="__image">
                        <div id="riskHeader_illustr" />
                    </div>

                </div>
            </header>
        </Fragment>
    )
}

export default Header;