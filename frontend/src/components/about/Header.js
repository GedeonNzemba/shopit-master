import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import image_1 from "../../images/all.png";
import image_2 from "../../images/about_1.png";
import image_3 from "../../images/about_2.png";
import image_4 from "../../images/about_3.png";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    const about_images = [
        image_1,
        image_2,
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
                                    <div className="col" id="Fabout_subtitle-text">the value we bring</div>
                                    <div className="col"><TrendingFlatIcon id="arrow_about-header" /></div>
                                </div>
                            </div>
                            <div className="Fabout_title"><h1>Agribusiness and Food Ingredient Entity <span id="Fabout_unc">dedicated to improving</span> the global food supply chain.</h1></div>
                            <div className="Fabout_text">
                                <p id="Fabout_inner-text">
                                    The farm is located in Pointe-Noire, a port city
                                    and oil industry hub in the Republic of the Congo
                                </p>
                            </div>

                            <div className={classes.root + ' Fabout_btn'}>
                                <Button onClick={scrollDown} variant="contained" color="secondary">
                                    Learn More
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
                            {about_images.map((image) => (
                                <SplideSlide key={image}>
                                    <div className="Fheader_image-wrap" >
                                        <img src={image} alt={image.key} />
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
