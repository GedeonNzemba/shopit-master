import React, { Fragment, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './hover/hover.css'
import IntroText from '../sectionIdentifier/IntroText';
import Title from '../sectionIdentifier/Title';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './about.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    contact: {
        backgroundColor: '#02843d',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#101010'
        }
    },
    employ: {
        alignSelf: 'center',
        backgroundColor: '#101010',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#313962'
        }
    }
    
}));


const Main = () => {

    const classes = useStyles();
    let appWrap = document.getElementById('root');

    useEffect(() => {
        const app = document.getElementsByClassName('App')[0];
        const ct = document.getElementById('contactFormWrapper');
        ct.style.backgroundColor = 'unset!important';

        app.classList.add('about-page');

        return () => {
            app.classList.remove('about-page');
            ct.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }, [])

    return (

        <Fragment>
            <h3 id="first_sec-title">Vision and Mission</h3>
            <section className="first_sec" id="main_service" style={{ zIndex: '1' }}>
                <div className="content_left">
                    <div className="content_top_wrapp">
                        <div id="vcl_line" />
                        <div className="content_wrap">
                            Locataire is a brand under which thousands of
                            <span style={{fontSize: '2.2rem'}} id="content_span_color"> {" "} dedicated professionals in independent entities </span>
                            to provide products and services to private and public clients spanning multiple industries, including real
                            estate, agriculture &amp; livestock production, poultry farming and egg production, audit &amp; risk management.
                        </div>
                    </div>
                    <div className="content_text">
                        <p>
                            These entities are members of Locataire Group, Limited Liability Company (LLC), an American multinational
                            conglomerate holding company headquartered in New York, United States.<br /><br />
                            Each independent entity provides services geographic regions and is subject to the laws and professional
                            ons of the country in which it operates and is liable only for their own acts and omissions.
                        </p>
                    </div>
                </div>
                <div className="content_right">
                    <div className="content_image">
                        <div className="content_image_big" />
                        <div className="content_image_smll" />
                        <div className="content_image_med" />
                    </div>
                </div>
            </section>

            <div className="main_banner" style={{ zIndex: '1' }}>
                <div className="main_banner_partern">
                    <h4 id="main_banner_title">Our Service</h4>
                    <div className="main_banner-wrap">
                        <Splide
                            className="row"
                            options={{
                                rewind: true,
                                type: 'loop',
                                height: '20rem',
                                gap: '6rem',
                                autoWidth: true,
                                focus: 'center',
                                autoplay: true,

                            }}
                        // onArrowsMounted={(splide, prev, next) => { console.log(prev, next) }}
                        >

                            <SplideSlide className="hvr-outline-in">
                                <div className="main_banner__item">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="350" height="50" viewBox="0 0 350 50">
                                        <defs>
                                            <pattern id="pattern" width="1" height="1" viewBox="0 -5.713 185.705 59.426">
                                                <image preserveAspectRatio="xMidYMid slice" width="185.705" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAA9CAYAAACusYWeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMTc1RDJEMUFBQzkxMUVBOTBGQUM0Q0ZGOEMyQUFERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMTc1RDJEMkFBQzkxMUVBOTBGQUM0Q0ZGOEMyQUFERSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNzVEMkNGQUFDOTExRUE5MEZBQzRDRkY4QzJBQURFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxNzVEMkQwQUFDOTExRUE5MEZBQzRDRkY4QzJBQURFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++/ZThwAAEMdJREFUeF7tnQuUF1Udx38sigiyKySK4q6ClJlLIig+QMhnAYWkmaAoPhIwlEpTjqSlHfWkVD5R4JwUFVPzlaTLMVJTwQeZiaya+TysZr6oJXw/6P+dvRfu3r0zc78z8//Pfzvz4fzPzszyv3d+9/5e9zGzXdaXkIKCgk5BpzXYTz7/VFa8/pw89voz8szbr8gLa16TN99bI++83yoff/aJdK3pKrWb9ZDabj1ly+5byMDe28kuW+0oQ7YZJHv1/4p8YfM6VVJBQeehUxksjPSu55fJLc/eJ00vPibvf/Kh+g1HTZcaGbz1QBk3aB85fJevydB+X1K/KSiobjqFwa77+AO54i+3lT63yxvr3lVXs2PYtjvL94Z8UyY1Hix1m/VUVwsKqo+qNtj1pX8LVy6R2Q/Ml3+tW6Oulg8Y68zhR8hpex0ZpNEFBdVG1RosDHTK4gvkjy+vUFcqx1Y96mTOgTPkuN3GqCsFBdVBVRrsw6tXysQ7z5V//vcddSUfvr3zKJk/7gzp22NLdaWgIF+qzmB/89TdcnLTr4IJpmqg3xZ95K7v/kKGb7eLulJQkB9VZbDnPnSNnPfQteqseuixaXe584gL5JCBw9WVgoJ8qBqDPX3plfLrx29RZ9UHjPb+yZcFa7gFBXlRFQZ75n1XyZxHb1Jn1cs2PfvI01MXytY9e6srBQWVpUb9zA1E1TBj7b5JN9mhrl+wsWHXvgOkf6++6jf5gJ1Up957qTorKKg8uUbYxf9YJofd+hP5bP3n6opIt66bytSh4+XoxoNlj22/LJvUdFW/aaP1o/dk1VsvyQOvPilLX3lCHmlZ1e77leDR4+fJ3v13VWcFBZUj1mCXL1suUyZPVmd+XDF3rowZN1aduXn+3dUy/JqpsrZkgJqxg/aRyw6ZKYP6bK+uxPPWe/+WO/7+oNzYvFSWl4wXmy3KzVElZ3LjhJ+qs4JKMueii2T+1fPUWTyNgwfL7/+wWJ11fmJT4uZVq9SRP42DG9WRmw8//VgOv+3sDcbapfTvZ6OOl7snXkQZK8B4cvqwCfLwlLnywoyb5Jz9jpOGum3Ub8vDvS9VfjNHQRusPsbpYmcj1mDXrm1VR37U1dVJfUODOnNz1v3zgydsAIz12vFnybmjTgiO07BT7/7y89Enyiun/E6WHn2JTPnqGNmi2+bqt9nR+tE6dVRQaZpXNasjP+rro3WxsxFrsEiJGeKMdVnL03LZilvVmcjlX/9BYFhZgqdxDhqwhywcP1ve+OFdcsOh5wTnuJ4Fu3fSp3uQSg7acYD3B+lnNdGyerW0tnIBpCFGHzsbsRqMRmIYMXKEOuoIdi9Nu2fOhnHmzD2/I6fseXhwXC4QYScPPiSIuC0zb5dfHjRDRjXsJl0TGm+vbj3kym/8SJ11LpqbuXSy2qITG13BvhH62BmJ1NokHq22NvzB8LlP3CHPvvNqcLzP9o0y56DvB8eVYrteW8npe0+UB4+9Ut48bbHcccQFwfmI+sHSu3sv9b/cYD/xtKGHSvO06zvtNsWW1S3qyI9qG/+tJoMHhmf4/D8ROUu85J4mOXXGDHXmx3WLFjmj7H8+XCc7zT1S1nywVnpu2l1WTl0YjDmrCbytomXtW/LuB63BM7jIBPp0r5X62q1lQO9tU4+x8wSOd9huQ9SZHy++2jbPUFA9REZY1qOBMK98yeO3BMYKzt//pKozVoDH6nbv98VgvDth5/2Cp3VG7zAkeL1MZzZWwA5tsBxSUH1ERlhEV0RZX5B+/HXlU+psI4hW9ZcfFkTZxr4D5W8nXdNhQ4QJJrowfd/Sslpu/q17FxQUaszYsUGdE4+apK6mB/Wi/qi6UR/Gd2PHjY2dZPMF7QwHiXFmWJtD1qnTpwfHbN2Q5ezZs9VZPFhHx3o6SznlwEQYw/kXXthBN5gyXPqMiTstG9Z3fRybjz4jK913xMhgkixqD0OkwU741vigIl/COhmvdpmptvT96ehL5cABw4JjGzRG0pnJaSdPD5QAjZwE1L1g3jx6zI6Gnjr95MjJtjBQF+pkNgKYxNWNvkMfpiVu80G55QBJZLENii3D1GcY6MUl3dSZisuYTdAmMM6k+nzGrFmBTtuEpsSokDFWEDaFvuDJts4+YMehTmOFYBhfpVlGgLIcMGp0qFcPA3XrJQzWWIHeCcbeO+4XMidVcqDrDiuDnWQKI8qQKiEHSDJDbEdutozGxjZjR98i2zSHFVFZgW6TNPqM7+5f0mfbBkMNlh3zANcywKOvNUvz2y8Ha6AXH9hxVhgNgVQtibHYoAzfNB7/F0rCpIlRoJN8JujQrvDyaTrTBmW5lJ1dxgnDNfNfSTkA0kkGRFY722LLgKMKuyfXXI3WqazaBG08ZfIx7Yw21GCTeDSXELc99+fg59kjjw3eTmgC4diI6AOMMMrhaGWDZ88SyBKmcECnZGzm4gOUxJY5yaShC3ucVmk5ACtLfUO9OtoIUwaMHfoR1p92cGoz1mMy16m2IHSKOouKsKQ3Aq4B+MMtTwfrreeNPlFdaQMdk7VwGgg5vzSmcoHfHVtq2CiDTgPGci50w+NnuWiynF8Sp+vCdMR5yAEeIXVFp7MmTBlIeaMipa3rCBLlcGAAuqonqyIiLFe5y1jBihMWyI/3bj9TF+W5sgLRzqVUMKhyGStAna6sISxyZMkjy5epo7b7yKI+KK6ZWlZaDgBZWAdhz6ewZcTpv+nE0N/lyBRNbr4p1mA57+xKQcJYMO9qdRQPFOaBhx4MFvGZ5Rt0ji0DroVNq7sw63bN2IVhp16mh4wjaZ02MDKUwbYbwAyl/i7uRZOHHCCL4VlW2QZA25pODLPHviCwYXaZ7RftQJwGy3oj4EpBXCC6MqnwxEmTgs4HvnVo7EgAZWPkMutOs69We0cfzDpxnAWssobNCuclB5vtwZh03Zos01VzfzIiK5NxoC20sSfRZ6fBsuMF4PtUhJ3uxGEqD+tEbJY0cWkLFvWzgInqaeStNby+CaustrJr8pKDnU9x3X+SOZkwTF1varpHHflhbopIos9Og00yu+iaIXbBdDo8kTk2TtNxaBxGcW0vndRZoE7f79rytra2beX0RXtukyTGGlZOXnJkkSFkmRLrbAvtwQQ3yGXKlsSJOA2WLQg3EeaVTZhOB/ajUWyj19XVqiM+a+hQd8I1TSb9t9uQNjZH2t6S0RM6ecrBpJwgbN04K3QbQacqqc/AabBsQb7Rlel0YKfZbKObisManF030yamF2XqtSNDkrd92LByh42r8pKDdfLAXrFIUkYUunw2E81Cn90RlizIbqAwWOUxPS3b6BDO7Hh64d2oG/UybWI6MCbC2ZGBdXAux5lWqTR5ycFmCMBuhyRlhGHqehp9hj6x+gw6GGwSbxT10LpJmsidNrVjU+L2dfOeEKAdmXTQVAbUyXwXmBmFhm1z1/JcnnLQjrb0XTvTSDIno8ESFx4A0Mtc5kMQbNtic4V+/Q72CTM0qH7pYLBJvJFrkG/DRilgdnyaSIG6WSdkKg3uQ3eYz0crDC9vm5PA99C5DKjTVlS2zfF9s801ecpBp/SWowZsGQCzuehLrCG7HndLos9p0P3SwWCTeCOXZ7fhO7294qRLp9nI3nHjeBJYQ8d9QsHhfbNIh/no6u7HPOVgZXCl9En6P+5ZYLbMtGh97pgSs4ZRaiAf5WY7zk7N+Ebf2PF8Sua/ayst8NTYpgnlxsMQzLKXie3gACu3y+h9KYccSaKYPWmWpIxp6uH6KNi2TYvuG8cYNrlhRMHOFJoNn6jjjI5PU3e5gHLjiRf93GTa9Mo1j8DKbWYlvpRTjiRl2c6WLQPBx5UC27Btmxad/bQz2Cw8WhisRzJTG/qerGjDRvewmdK0YBsbnpnVD8xn6aWzibB+fVkpOZKknbYMbBm+r0VldSoNkElnse0MNolH81XuNJE7bTrNG3zy1NAFFBxRyPfh+iS47jnrbKnScrAbeFwOhy3DV59ZndIPQiT5mDPT7Qw2idfwGe8hcuPjC7yJOQGSJqVFw6apOy1QbnyYKOSTkpm45hGSyG2XYZKHHGzkdukinWV4ZIx56lQ7g02Sl/ukUWnWQAHb6KaXZKOMq2H12lncBwptgnMmEqEt4YlHjBiprviRRXSNSgXzkoPOEBzGlnWWAcpRpi/tDJb2Rh7GCtilIrvcNA3E1m2vKTNtYioMshVGyfFsJFIfOIws0rg069YmecnBZmXAloEtwzcSptfnVU6HH/Yx02/LYMvjOdiOs2cK0zQ6u0xlz7YybWJ2zBLisSvcL96hq8kijUuzbm2SlxxsVgZsfUyb2YWRVqeYoaetzxsMljUM4LsMwDoCM8qx37VTO3bnlu0NGWdjdjgVlawHvFmZXWM3Xm63suYlBxvFXNExbSQMg23bNA9D2DJtMFi2cUFYGmVjhnQfzJtMm9qxdduK61s/OhtKAxBZGOdndiibxgGXorHRzVYMkKccbFbmcjhpMrso0rYt833b2DcYLGsYwGfNiu04CKcVH7Dph5lWpa0b+KZVZsMyHhj1mYrKp3HpjdV0NiZ5ysEGEHc7cGXYxuEiSfCx25a5LzuL3RhhScPATbg62SZthGOVxnQia2kPb9ftP0wwHQXTlkkjusYVWdKkoiZ5ysE6HVd0TBsJXTABALjkYsqwv2+MYbm8HJW6ZrT0R4992NeD2DOFTKPDWH2cSBj2d13vx3VhOwpGWTukS6TjdM0j0ErlmLQCecnBGhqwo2MSY/XRnTT6DBhniqzBzhyMMSzfSFH4bKhwYXpKNq1i1/1sbEX3fWEcNgiYnc1GOBNWZtc8QpJsyUVecrDBA9gOgy3DlalkgR35mVl3/HVGm8BgszZW4BpT+KCNBMYT9vZ+F+gw+z2vYW8RDANKptsCm9p9pt+h7PbTHcwwwDQK1MlGR9c8AqustrJr8pKDjs6l+7edDltGWJZhox8k98V8U6evTmlcb+1UBpvck7owjZUVEAIhpcbTH4wjOXPWLHW0EXRiWPRwASXDXlnUj03tPuBPXJoKz47ZIaMeRvjWqQmTL8k92OQpRxbjeLYMV6biwuUcokjaLnjThcuRBgbLTn/HYTYgKnVVnCVhbwUArgiUFagz7Vvt0xCWxrHRDYqU1NiywJaDDSCu6MiWwQzh9B+jLhdRehUYLOuN4rAnQtK++T0KTDbAG4UxcdJR6ihbUK/rrQTldk4mrmEHa6w2uu/ykgP3z0Z3OzqyZSBiMkM4DL2YKMuA+4h620VgsOwEQRx2A8JblEMB4ImuW7RInbmBYWUdBVFmVL1M55uw9+maIWaVz8aMdnnIkWR4ZkdHPrpyuok2NrdgZkWbXt2gztzUwBul9co2rjT0+tKNZGm0aLC49+5oEIGZPzwUBcqKcxI+rxix8ZXFJCwlTlK/xuyjPORg5i2Ay0GxZYS1YxQIFklkDUPrVVzkrsl6wgkVuiqFIuCRq6j0NQ6Ui+/joV7WALWBJ3UaiBq4f5/ooTszrvEB7gcdhe+wihYmC8pK0s4oz7znPOSgX2vjaAO6DEem4gNkxV+iS5PBQY999Qp0mXfV1euznGiISxc12FiBsTMmvKJe2AVBsJYFL4qyswAz0VCqqLpRH9bBoKxpojOm8l31oExMlphlY2bcN9vB/ZlvInABGSErlsp8lhO0gbqolByYpWcMHvXa6SlbBvQ1C91C20BuLOWE1Y969h0xMrFedVlfQh0XFBRUNSL/AwNxWIGiUtrMAAAAAElFTkSuQmCC" />
                                            </pattern>
                                        </defs>
                                        <rect id="Rectangle_5" data-name="Rectangle 5" width="350" height="50" fill="#fff" />
                                        <rect id="logo" width="150" height="48" transform="translate(1)" fill="url(#pattern)" />
                                        <path id="Rectangle_6" data-name="Rectangle 6" d="M48,0H186a2,2,0,0,1,2,2V48a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2v0A48,48,0,0,1,48,0Z" transform="translate(162)" fill="#02843d" />
                                        <text id="Real_Estate" data-name="Real Estate" transform="translate(220 34)" fill="#f8f7f5" font-size="20" font-family="OpenSans, Open Sans"><tspan x="0" y="0">Real Estate</tspan></text>
                                    </svg>

                                </div>
                            </SplideSlide>
                            <SplideSlide className="hvr-outline-in">
                                <div className="main_banner__item">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="378" height="50" viewBox="0 0 378 50">
                                        <defs>
                                            <pattern id="pattern" width="1" height="1" viewBox="0 -5.713 185.705 59.426">
                                                <image preserveAspectRatio="xMidYMid slice" width="185.705" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAA9CAYAAACusYWeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMTc1RDJEMUFBQzkxMUVBOTBGQUM0Q0ZGOEMyQUFERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMTc1RDJEMkFBQzkxMUVBOTBGQUM0Q0ZGOEMyQUFERSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNzVEMkNGQUFDOTExRUE5MEZBQzRDRkY4QzJBQURFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxNzVEMkQwQUFDOTExRUE5MEZBQzRDRkY4QzJBQURFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwv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" />
                                            </pattern>
                                        </defs>
                                        <rect id="Rectangle_5" data-name="Rectangle 5" width="378" height="50" fill="#fff" />
                                        <rect id="logo" width="150" height="48" transform="translate(1)" fill="url(#pattern)" />
                                        <path id="Rectangle_6" data-name="Rectangle 6" d="M48,0H214a2,2,0,0,1,2,2V48a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2v0A48,48,0,0,1,48,0Z" transform="translate(162)" fill="#02843d" />
                                        <text id="Agribusiness_Farm" data-name="Agribusiness Farm" transform="translate(189 33)" fill="#f8f7f5" font-size="20" font-family="OpenSans, Open Sans"><tspan x="0" y="0">Agribusiness Farm</tspan></text>
                                    </svg>

                                </div>
                            </SplideSlide>
                            <SplideSlide className="hvr-outline-in">
                                <div className="main_banner__item">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="452" height="50" viewBox="0 0 452 50">
                                        <defs>
                                            <pattern id="pattern" width="1" height="1" viewBox="0 -5.713 185.705 59.426">
                                                <image preserveAspectRatio="xMidYMid slice" width="185.705" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAA9CAYAAACusYWeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMTc1RDJEMUFBQzkxMUVBOTBGQUM0Q0ZGOEMyQUFERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMTc1RDJEMkFBQzkxMUVBOTBGQUM0Q0ZGOEMyQUFERSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNzVEMkNGQUFDOTExRUE5MEZBQzRDRkY4QzJBQURFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxNzVEMkQwQUFDOTExRUE5MEZBQzRDRkY4QzJBQURFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwv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" />
                                            </pattern>
                                        </defs>
                                        <rect id="Rectangle_5" data-name="Rectangle 5" width="447" height="50" fill="#fff" />
                                        <rect id="logo" width="150" height="48" transform="translate(1)" fill="url(#pattern)" />
                                        <path id="Rectangle_6" data-name="Rectangle 6" d="M48,0H288a2,2,0,0,1,2,2V48a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2v0A48,48,0,0,1,48,0Z" transform="translate(162)" fill="#02843d" />
                                        <text id="Audit_Risk_Management" data-name="Audit &amp; Risk Management" transform="translate(193 33)" fill="#f8f7f5" font-size="20" font-family="OpenSans, Open Sans"><tspan x="0" y="0">Audit &amp; Risk Management</tspan></text>
                                    </svg>

                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                </div>
            </div>

            <div className="product_listing" style={{ zIndex: '1' }}>
                <IntroText title="Our objective" />
                <section className="listing_wrap" style={{ zIndex: '1' }}>
                    <Title title="Our objective is to help our clients achieve what is important to them." className="headline_about" id="headline__about" />
                    <div className="product_listing__text">
                        <p className="about_product_text">
                            Our values illustrate our commitment
                            to principles of personal and professional behaviors, guiding how our people relate to each other, what we
                            expect from our clients and what they expect of us.
                        </p>
                    </div>
                    <div className="product_listing__list-wrapper">
                        <Box className="product_listing--item" elevation={3}>
                            <div className="product_listing--image --image_1" />
                            <div className="product_listing--content">
                                <h4>Primary Objectives</h4>
                                <p>
                                    Maximize the total return to property owners, throught
                                    re-lease and management of these properties for maximum cash flow.
                                </p>
                            </div>
                        </Box>
                        <Box className="product_listing--item" elevation={3}>
                            <div className="product_listing--image --image_3" />
                            <div className="product_listing--content">
                                <h4>Our Commitment</h4>
                                <p>
                                    Helping our clients preserve wealth for yourself and 
                                    prepare for future responsibilities as wealth owners and leaders.
                                </p>
                            </div>
                        </Box>
                        <Box className="product_listing--item" elevation={3}>
                            <div className="product_listing--image --image_4" />
                            <div className="product_listing--content">
                                <h4>Our Values</h4>
                                <p>
                                    Driven by a business culture
                                    based on common values: Trust, Teamwork and Accountability.
                                </p>
                            </div>
                        </Box>
                    </div>
                </section>

                <section className="product_listing--deepS" style={{ zIndex: '1' }}>
                    <IntroText title=" Locataire" cssName="wK" />
                    <div className="color_highlight"> - Products & Services</div>
                    <div className="product_listing--bg">
                        <p>Locataire provide products and services to private and public clients spanning multiple industries, including: </p>
                        <div className="product_listing--quote">
                            <span id="product_listing__q">
                                Each independent entity provides services geographic regions and is subject to the laws and professional
                                regulations of the country in which it operates and is liable only for their own acts and omissions.
                            </span>
                        </div>
                        <Button variant="contained" id="btn__abt" color="secondary" className={classes.contact}>
                            Contact Locataire
                        </Button>
                    </div>
                     {/* eslint-disable-next-line eqeqeq */}
                    { appWrap.clientWidth <= 600 ? mobile_CMP() : deskTop_CMP() }
                </section>
            </div>
            <section className="product_listing--bnt" style={{ zIndex: '1' }}>
                  <div className="__product-listing-wrapper">
                  <IntroText title="Locataire Careers" cssName="" />
                    <div className="color_highlight">Benefits of working at Locataire</div>

                    <div className="numGrid">
                        <div className="grid_num-wrap">
                            <div className="grid_num-item">
                                <div className="grid_num-item--left">
                                    <span>01</span>
                                </div>
                                <div className="grid_num-item--right">
                                    <h4>Mobility</h4>
                                    <p>
                                        We are committed to creating and sustaining an inclusive and diverse work
                                        environment where all employees are treated with dignity and respect.
                                    </p>
                                </div>
                            </div>
                            <div className="grid_num-item">
                                <div className="grid_num-item--left">
                                    <span>02</span>
                                </div>
                                <div className="grid_num-item--right">
                                    <h4>Employment Policy</h4>
                                    <p>
                                        Locataire’ s long-standing equal employment
                                        opportunity policy prohibits discrimination and harassment 
                                        against any employee or applicant.
                                    </p>
                                </div>
                            </div>
                            <div className="grid_num-item">
                                <div className="grid_num-item--left">
                                    <span>03</span>
                                </div>
                                <div className="grid_num-item--right">
                                    <h4>Your Journey</h4>
                                    <p>
                                        Your journey with Locataire begins here. By sending
                                        your resume to <a href="mailto:info@locataire.net?subject=Locataire Career" ><strong>info@locataire.net</strong></a>, you will
                                        automatically be considered for jobs that match your
                                        skills and experience. Availability Status.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button variant="contained" id="btn__abt" color="secondary" sx={{mt: 3}} className={classes.employ}>
                        Let us know you are ready to work
                        </Button>
                    </div>
                  </div>
            </section>
        </Fragment>
    )
}

export default Main

function deskTop_CMP() {
    return (
        <div className="product_listing--pd">
        <div className="product_listing--pd_item --pd_item_1">
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_a" />
                <p>investment services</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_b" />
                <p>property management</p>
            </div>
        </div>
        <div className="product_listing--pd_item --pd_item_2">
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_c" />
                <p>Real Estate</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_d" />
                <p>agriculture &amp; livestock production</p>
            </div><div className="--pd_item-wrap">
                <div className="--pd_item_img_e" />
                <p>poultry farming &amp; egg production</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_f" />
                <p>audit &amp; risk management</p>
            </div>
        </div>
        <div className="product_listing--pd_item --pd_item_3">
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_g" />
                <p>fresh eggs</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_h" />
                <p>livestock</p>
            </div>
        </div>
    </div>
    )
}
function mobile_CMP() {
    return (
        <div className="product_listing--pd">
        <div className="product_listing--pd_item --pd_item_2">
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_c" />
                <p>Real Estate</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_d" />
                <p>agriculture &amp; livestock production</p>
            </div><div className="--pd_item-wrap">
                <div className="--pd_item_img_e" />
                <p>poultry farming &amp; egg production</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_f" />
                <p>audit &amp; risk management</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_a" />
                <p>investment services</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_b" />
                <p>property management</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_g" />
                <p>fresh eggs</p>
            </div>
            <div className="--pd_item-wrap">
                <div className="--pd_item_img_h" />
                <p>livestock</p>
            </div>
        </div>
    </div>
    )
}

