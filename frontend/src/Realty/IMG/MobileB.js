import React, { Fragment } from 'react'
import img_main from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_1400.jpg"
import img_1 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_200.jpg"
import img_2 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_449.jpg"
import img_3 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_612.jpg"
import img_4 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_747.jpg"
import img_5 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_879.jpg"
import img_6 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_986.jpg"
import img_7 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_1105.jpg"
import img_8 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_1247.jpg"
import img_9 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_1381.jpg"
import img_10 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_1396.jpg"
import img_11 from "../../images/reaalty/all types/Mobile/img2/estate_5_jbbxsh_c_scale,w_1400.jpg"

export default function MobileB() {
    return (
        <Fragment>
            <img
                className="d-block w-100"
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet={`
            ${img_1} 200w,
            ${img_2} 449w,
            ${img_3} 612w,
            ${img_4} 747w,
            ${img_5} 879w,
            ${img_6} 986w,
                ${img_7} 1105w,
                ${img_8} 1247w,
                ${img_9} 1381w,
                ${img_10} 1396w,
                ${img_11} 1400w`}
                src={img_main}
                alt="prospect2" />
        </Fragment>
    )
}
