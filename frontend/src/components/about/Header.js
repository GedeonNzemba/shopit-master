import React, { Fragment, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import image_1 from "../../images/all.png";
import image_3 from "../../images/abb.png";
import Typist from 'react-typist';
import image_4 from "../../images/about_3.png";
import Typewriter from 'typewriter-effect/dist/core';
import { useTranslation, Trans } from 'react-i18next';
import isFrench from '../../language/locales/en.json'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    learnMore: {
        backgroundColor: '#209e2e',
        '&:hover': {
            backgroundColor: '#101010'
        },
        '& span': {
            marginLeft: 'unset'
        }
    },
   


}));


const Header = () => {
    const classes = useStyles();
    const { i18n } = useTranslation();


    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: [`${i18n.resolvedLanguage === 'fr' ? isFrench.about.header.tite_a : 'Agribusiness and Food Ingredient Entity.'}`, `${i18n.resolvedLanguage === 'fr' ? isFrench.about.header.title_b : 'Locataire Risk Management.'}`],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteAll: 1
          });
    }, []);

    // const AgriTitle = () => (<div className="Fabout_title"><h1>Agribusiness and Food Ingredient Entity <span id="Fabout_unc">dedicated to improving</span> the global food supply chain.</h1></div>)
    // const RealtyTitle = () => (<div className="Fabout_title"><h1>Locataire Risk Management provides <span id="Fabout_unc">tailored solutions</span>  to help private companies improve business strategies and practices.</h1></div>)
//     typewriter
//   .pauseFor(2500)
//   .typeString('A simple yet powerful native javascript')
//   .pauseFor(300)
//   .deleteChars(38)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
//   .start();


    const about_images = [
        image_1,
        image_3,
        image_4
    ]

    // scrolldown header
    const scrollDown = () => {
        return window.scrollBy(0, 625);
    }



    return (
        <Fragment>
            <header className="farm_header">
                <div className="inner_Fheader">
                    <section className="Fheader_content-container">
                        <div className="Fheader_content">
                            {/* content */}
                            <div className="Fabout_subtitle">
                                <div className="row" id="Fabout_subtitle-inner-wrap">
                                    <div className="col" id="Fabout_subtitle-text">
                                        {i18n.resolvedLanguage === 'fr' ? isFrench.about.header.subtit : "the value we bring"}
                                    </div>
                                    <div className="col"><TrendingFlatIcon id="arrow_about-header" /></div>
                                </div>
                            </div>

                            <div className="Fabout_title" >
                                <h1 id="typewriter">
                                   
                                </h1>
                            </div>
                            
                            <div className="Fabout_text">
                                <p id="Fabout_inner-text">
                                {i18n.resolvedLanguage === 'fr' ? isFrench.about.header.america : "An American multinational conglomerate holding company headquartered in New York, United States. "}
                                </p>
                                {/* <p id="Fabout_inner-text">
                                The farm is located in Pointe-Noire, a port city and oil industry hub in the Republic of the Congo
                                </p> */}
                            </div>

                            <div className={classes.root + ' Fabout_btn'}>

                                {/* <Button onClick={scrollDown} variant="contained" color="secondary" className={classes.learnMore}> */}

                                <Button onClick={scrollDown} variant="contained" id="btn__about_hd" style={{backgroundColor: '#02843d'}}>
                                    {i18n.resolvedLanguage === 'fr' ? isFrench.about.header.btn : "Learn More"}
                                </Button>
                            </div>

                        </div>
                    </section>


                    <section className="Fheader_image">
                        <Splide
                            options={{
                                rewind: true,
                                direction: 'ttb',
                                height: '50rem',

                                autoplay: true

                            }}
                            onArrowsMounted={(splide, prev, next) => { console.log(prev, next) }}
                        >
                            {about_images.map((image, index) => (
                                <SplideSlide key={index}>
                                    <div className="Fheader_image-wrap" >

                                        <img src={image} alt={image.key} className="about_header_img" />

                                        {/* <img src={image} alt={image.key} /> */}

                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </section>

                </div>
            </header>
        </Fragment>
    )
}

export default Header
