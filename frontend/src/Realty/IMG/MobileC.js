import React, { Fragment } from 'react'
import img_main from "../../images/reaalty/all types/Mobile/img3/header3_purlix_c_scale,w_1400.jpg"
import img_1 from "../../images/reaalty/all types/Mobile/img3/header3_purlix_c_scale,w_200.jpg"
import img_2 from "../../images/reaalty/all types/Mobile/img3/header3_purlix_c_scale,w_546.jpg"
import img_3 from "../../images/reaalty/all types/Mobile/img3/header3_purlix_c_scale,w_806.jpg"
import img_4 from "../../images/reaalty/all types/Mobile/img3/header3_purlix_c_scale,w_1023.jpg"
import img_5 from "../../images/reaalty/all types/Mobile/img3/header3_purlix_c_scale,w_1206.jpg"


export default function MobileC() {
    return (
        <Fragment>
            <img
                className="d-block w-100"
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet={`
                ${img_1} 200w,
                ${img_2} 546w,
                ${img_3} 806w,
                ${img_4} 1023w,
                ${img_5} 1206w,
                ${img_main} 1400w`}
                src={img_main}
                alt="prospect2" />
        </Fragment>
    )
}
