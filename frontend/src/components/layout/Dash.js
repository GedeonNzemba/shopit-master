import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import linkdin_en from '../../images/home_header/ads/link/linkdin.png'
import linkdin_fr from '../../images/home_header/ads/link/linkdin_fr.png'
import { useTranslation} from 'react-i18next';

const Dash = () => {
    const { i18n } = useTranslation();

    const style = {
        width:' 100%',
        height:' 100%',
        objectFit: 'fill'
    }

    return (
        <Fragment>
            <section id="dash_top " className="_bg">
                <div className={i18n.resolvedLanguage === 'fr' ? 'ads_fr' : 'ads_en'} />
            </section>

            <section id="dash_two" className=" _bg">
               <Link to="https://www.linkedin.com/company/locataire-llc/">
                   { i18n.resolvedLanguage === 'fr' ?
                   <img src={linkdin_fr} alt="linkdin" style={style} />
                   :
                   <img src={linkdin_en} alt="linkdin" style={style} />
                    }
                </Link>
            </section>
        </Fragment>
    )
}

export default Dash
