/* eslint-disable no-undef */
import React, { Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Carousel from './carousel/Slider'
import Slider from './Slider'
import Card from '@mui/material/Card';
import './style.css'
import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

import { Content } from './data'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

const GridItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundColor: '#313962',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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


    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://res.cloudinary.com/locataire/raw/upload/v1638733620/flickity/flickityPArallax_ufgpzk.js";
        script.async = true;
        script.type ='text/javascript';

        document.body.appendChild(script);
        
    }, [])




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

            {window.innerWidth < 900 ?
                (
                    <>
                        {Content.map((item, index) => {
                            return (
                                <Card className="risk-content" style={{ boxShadow: 'unset' }} id="risk-content-up" key={index} >
                                    {/* IMAGES   */}
                                    <div className="__innerItem-container-img">
                                        <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true,  "imagesLoaded": true  }' >
                                            <div className="carousel-cell">
                                                <img
                                                    src={item.img}
                                                    alt="green iguana"
                                                />
                                            </div>
                                            <div className="carousel-cell">
                                                <img
                                                    src={item.imgA}
                                                    alt="green iguana"
                                                />
                                            </div>
                                            <div className="carousel-cell">
                                                <img
                                                    src={item.imgB}
                                                    alt="green iguana"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <CardContent className="__innerItem-container-text">
                                        <Box>
                                            <Stack direction="column" spacing={2}>
                                                <div className="_item_text-header">
                                                    <h1>{item.title}</h1>
                                                </div>
                                                <Item className="item-sub-wrap">
                                                    <div className="item-sub-wrap">
                                                        <div className="sub-item">
                                                            <p>{item.subtitle}</p>
                                                        </div>
                                                    </div>
                                                </Item>
                                                <div className="_item_text">
                                                    {item.paragraph}
                                                </div>
                                            </Stack>
                                        </Box>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </>
                )
                :
                (
                    <>
                        <div id="risk-content-up">
                            {Content.map((item, index) => {
                                return (
                                    <Box className="wrapper_box__risk_content" sx={{ width: '95%', margin: '0 auto' }} key={index}>
                                        <Grid className="grid_item_wrapper__risk" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6} id="gridItem_risk-image">
                                                <GridItem >
                                                    <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true, "imagesLoaded": true  }'>
                                                        <div className="carousel-cell">
                                                            <img
                                                                src={item.img}
                                                                alt="green iguana"
                                                            />
                                                        </div>
                                                        <div className="carousel-cell">
                                                            <img
                                                                src={item.imgA}
                                                                alt="green iguana"
                                                            />
                                                        </div>
                                                        <div className="carousel-cell">
                                                            <img
                                                                src={item.imgB}
                                                                alt="green iguana"
                                                            />
                                                        </div>
                                                    </div>
                                                </GridItem>
                                            </Grid>
                                            <Grid item xs={6} id="gridItem_risk-content">
                                                <GridItem id="gridItem_risk">
                                                    <Box>
                                                        <div className="_item_text-header">
                                                            <h1>{item.title}</h1>
                                                        </div>
                                                    </Box>
                                                    {(item.subtitleA || item.subtitleB || item.subtitleC) && (
                                                        <Stack direction="row" spacing={2}>
                                                            <div className="sub-item">
                                                                <p>{item.subtitleA}</p>
                                                            </div>
                                                            <div id="sub_divider" />
                                                            <div className="sub-item">
                                                                <p>{item.subtitleB}</p>
                                                            </div>
                                                            <div id="sub_divider" />
                                                            <div className="sub-item" id="sub-item">
                                                                <p>
                                                                    {item.subtitleC}
                                                                </p>
                                                            </div>
                                                        </Stack>
                                                    )}
                                                    {item.subtitle && (
                                                        <Stack direction="row" spacing={2}>
                                                            <div className="sub-item">
                                                                <p>{item.subtitle}</p>
                                                            </div>
                                                        </Stack>
                                                    )}

                                                    <Box className="box_paragraph_risk">
                                                        <div className="_item_text">
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
                                                    </Box>
                                                </GridItem>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )
                            })}
                        </div>






                        {/* 2 */}



                        {/* 3 */}
                        {/* <center style={{ marginTop: '5rem', marginBottom: '5rem' }}>
                            <Slider fade="fade" contentOne={Audit()} contentTwo={Audit_a()} contentThree={Audit_b()} contentFour={Audit_a()} contentFive={Audit_b()} />
                        </center> */}

                        {/* <center style={{ marginTop: '5rem' }}>
                            <Slider fade="fade" contentOne={Risk()} contentTwo={Risk_a()} contentThree={Risk_b()} contentFour={Risk_a()} contentFive={Risk_b()} />
                        </center> */}
                    </>
                )
            }
        </Fragment>
    )
}

export default Main
