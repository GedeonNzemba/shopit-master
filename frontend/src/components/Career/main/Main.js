import React from 'react'
import './main.css'
import ic1 from '../../../images/cl.png'
import ic2 from '../../../images/equal.png'
import ic3 from '../../../images/f.png'
import ic4 from '../../../images/cm.png'
import isFrench from '../../../language/locales/en.json'
import { useTranslation } from 'react-i18next';

export default function Main() {
    const {i18n } = useTranslation();

    const ourWho = () => {
        return (
            <div className="ourWho">
                <div className="ourWho__item">
                    <h3>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.main.who.title : "who are we"}</h3>
                    {i18n.resolvedLanguage === 'fr' ? (
                        <p>
                            {isFrench.career_page.main.who.text}
                        </p>
                    ) : (
                        <p>
                        Locataire is a brand under which thousands of dedicated professionals in independent entities collaborate to
                        provide products and services to private and public clients spanning multiple industries, including real
                        estate, agriculture &amp; livestock production, poultry farming and egg production, audit &amp; risk management.
                    </p>
                    )}
                    
                </div>
                <div className="ourWho__item">
                    <h3>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.main.where.title : "where we come from"}</h3>
                    {i18n.resolvedLanguage === 'fr' ? (
                        <p>
                            {isFrench.career_page.main.where.entity}
                            <br /><br />
                            {isFrench.career_page.main.where.locataion}
                        </p>
                    ) : (
                        <p>
                        These entities are members of Locataire Group, Limited Liability Company (LLC), an American multinational
                        conglomerate holding company headquartered in New York, United States.
                        <br /><br />
                        The farm is located in Pointe-Noire, a port city and oil industry
                        hub in the Republic of the Congo.
                    </p>
                    )}
                   
                </div>
            </div>
        )
    }
    
    const Benifits = () => {
        return (
            <div className="benifits">
                <div className="benifits__wrapper">
                    <div className="benifits__heading">
                        <h2>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.main.benefits.title : "Benefits & Perk's"}</h2>
                        {i18n.resolvedLanguage === 'fr' ? (
                            <p>
                                {isFrench.career_page.main.benefits.text}
                            </p>
                        ) : (
                            <p>
                            Our ability to create value is driven by a business culture
                            based on common values: Trust, Teamwork and Accountability.
                        </p>
                        )}
                    </div>
    
                    <section className="benifits__tips">
                        <article className="benifits__tip">
                            <div className="tips__icon-wrap">
                                <ul>
                                    <li>
                                        <img src={ic3} alt="cl" />
                                    </li>
                                    <li>
                                        <h3>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.main.benefits.items.stability.title : "stability and planning"}</h3>
                                    </li>
                                </ul>
                            </div>
                            {i18n.resolvedLanguage === 'fr' ? (
                                <p>
                                    {isFrench.career_page.main.benefits.items.stability.text}
                                </p>
                            ) : (
                                <p>
                                Locataire is a brand under which thousands of dedicated professionals in independent entities collaborate to
                                provide products and services to private and public clients spanning multiple industries, including real
                                estate, agriculture &amp; livestock production, poultry farming and egg production, audit &amp; risk management.
                            </p>
                            )}
                            
                        </article>
                        <article className="benifits__tip">
                            <div className="tips__icon-wrap">
                                <ul>
                                    <li>
                                        <img src={ic4} alt="cl" />
                                    </li>
                                    <li>
                                        <h3>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.main.benefits.items.community.title : "Community and Caring"}</h3>
                                    </li>
                                </ul>
                            </div>
                            {i18n.resolvedLanguage === 'fr' ? (
                                <p>
                                    {isFrench.career_page.main.benefits.items.community.text}
                                </p>
                            ) : (
                                <p>
                                Locataire, everyone matters. We are committed to creating and sustaining an inclusive and diverse work
                                environment where all employees are treated with dignity and respect.
                            </p>
                            )}
                            
                        </article>
                        <article className="benifits__tip">
                            <div className="tips__icon-wrap">
                                <ul>
                                    <li>
                                        <img src={ic1} alt="cl" />
                                    </li>
                                    <li>
                                        <h3>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.main.benefits.items.professional.title : "professional Growth"}</h3>
                                    </li>
                                </ul>
                            </div>
                            {i18n.resolvedLanguage === 'fr' ? (
                                <p>
                                    {isFrench.career_page.main.benefits.items.professional.text}
                                </p>
                            ) : (
                                <p>
                                Our objective is to help our clients achieve what is important to them. Our values illustrate our commitment
                                to principles of personal and professional behaviors, guiding how our people relate to each other, what we
                                expect from our clients and what they expect of us.
                            </p>
                            )}
                            
                        </article>
                        <article className="benifits__tip">
                            <div className="tips__icon-wrap">
                                <ul>
                                    <li>
                                        <img src={ic2} alt="cl" />
                                    </li>
                                    <li>
                                        <h3>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.main.benefits.items.equal.title : "Equal Apportunities"}</h3>
                                    </li>
                                </ul>
                            </div>
                            {i18n.resolvedLanguage === 'fr' ? (
                                <p>
                                    {isFrench.career_page.main.benefits.items.equal.text}
                                </p>
                            ) : (
                                <p>
                                As such and in alignment with our Guiding Principles, Locataire’ s long-standing equal employment
                                opportunity policy prohibits discrimination and harassment against any employee or applicant based on race,
                                ethnicity, color, religion, national origin, ancestry, sex,
                                gender, gender identity, gender expression, sexual
                                orientation, age, disability, pregnancy, genetic
                                information, marital status, family status, citizenship
                                status, veteran status, military status, union affiliation,
                                or any other status protected by law.
                            </p>
                            )}
                            
                        </article>
                    </section>
                </div>
            </div>
        )
    }

    return (
        <div className="career__main">
           {ourWho()}
           <Benifits />

           <div className="career__line" />
        </div>
    )
}


