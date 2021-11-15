import React, { Fragment } from 'react'
import img_main from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_1400.jpg"
import img_1 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_200.jpg"
import img_2 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_499.jpg"
import img_3 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_713.jpg"
import img_4 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_897.jpg"
import img_5 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_1063.jpg"
import img_6 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_1227.jpg"
import img_7 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_1355.jpg"
import img_8 from "../../images/reaalty/all types/Mobile/img1/estate_4_w6togy_c_scale,w_1400.jpg"

export default function Mobile() {
    return (
        <Fragment>
            <img
                className="mobile_one tablet__IMG"
                sizes="(max-width: 1400px) 100vw, 1400px"
                // srcSet={`${small} 200w, ${medium} 499w, ${large} 713vw`}
                srcSet={`
                ${img_1} 200w,
                ${img_2} 499w,
                ${img_3} 713vw,
                ${img_4} 897vw,
                ${img_5} 1063vw,
                ${img_6} 1227w,
                ${img_7} 1355w,
                ${img_8} 1400w`}
                src={img_main}

                alt="prospect1" />
        </Fragment>
    )
}
