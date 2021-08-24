import React from "react"
import "../../styles/Locataire.css"

const comp = props => {
    return (
        <footer className={props.light ? "lightFooter" : "darkFooter"}>
            <div className="footerContainer">

                <div className="footerSocialIconsContainer">
                    <div className="socialsHoverOrange">
                        <a href="https://www.instagram.com/properliving/" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                style={{ margin: "10px", marginLeft: 0 }}
                                viewBox="0 0 19.338 19.333"
                            >
                                <path
                                    id="Icon_awesome-instagram"
                                    data-name="Icon awesome-instagram"
                                    d="M9.666,6.948A4.957,4.957,0,1,0,14.622,11.9,4.949,4.949,0,0,0,9.666,6.948Zm0,8.179A3.223,3.223,0,1,1,12.888,11.9a3.228,3.228,0,0,1-3.223,3.223Zm6.316-8.382a1.156,1.156,0,1,1-1.156-1.156A1.153,1.153,0,0,1,15.981,6.745Zm3.283,1.173A5.722,5.722,0,0,0,17.7,3.867a5.759,5.759,0,0,0-4.051-1.562c-1.6-.091-6.38-.091-7.977,0A5.751,5.751,0,0,0,1.624,3.863,5.74,5.74,0,0,0,.063,7.914c-.091,1.6-.091,6.38,0,7.977a5.722,5.722,0,0,0,1.562,4.051A5.766,5.766,0,0,0,5.675,21.5c1.6.091,6.38.091,7.977,0A5.722,5.722,0,0,0,17.7,19.941a5.759,5.759,0,0,0,1.562-4.051c.091-1.6.091-6.376,0-7.972ZM17.2,17.6a3.263,3.263,0,0,1-1.838,1.838c-1.273.5-4.292.388-5.7.388s-4.43.112-5.7-.388A3.263,3.263,0,0,1,2.129,17.6c-.5-1.273-.388-4.292-.388-5.7s-.112-4.431.388-5.7A3.263,3.263,0,0,1,3.967,4.368c1.273-.5,4.292-.388,5.7-.388s4.43-.112,5.7.388A3.263,3.263,0,0,1,17.2,6.206c.5,1.273.388,4.292.388,5.7S17.707,16.335,17.2,17.6Z"
                                    transform="translate(0.005 -2.238)"
                                    fill="#FFF4DF"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="socialsHoverOrange">
                        <a href="https://www.facebook.com/properlivingproperty" target="_blank" rel="noreferrer">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                style={{ margin: "10px" }}
                                viewBox="0 0 19.327 19.327"
                            >
                                <path
                                    id="Icon_awesome-facebook-square"
                                    data-name="Icon awesome-facebook-square"
                                    d="M17.256,2.25H2.071A2.071,2.071,0,0,0,0,4.321V19.506a2.071,2.071,0,0,0,2.071,2.071H7.992V15.006H5.274V11.913H7.992V9.556c0-2.681,1.6-4.162,4.041-4.162a16.465,16.465,0,0,1,2.4.209V8.234H13.079a1.546,1.546,0,0,0-1.744,1.671v2.008H14.3l-.475,3.093H11.335v6.571h5.921a2.071,2.071,0,0,0,2.071-2.071V4.321A2.071,2.071,0,0,0,17.256,2.25Z"
                                    transform="translate(0 -2.25)"
                                    fill="#FFF4DF"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footerContactIconsContainer">
                    <div className="iconTextWrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.333"
                            height="13.333"
                            viewBox="0 0 13.333 13.333"
                        >
                            <path
                                id="Icon_awesome-phone-alt"
                                data-name="Icon awesome-phone-alt"
                                d="M12.953,9.422l-2.917-1.25a.625.625,0,0,0-.729.18L8.016,9.93A9.653,9.653,0,0,1,3.4,5.316L4.979,4.024a.623.623,0,0,0,.18-.729L3.909.378A.629.629,0,0,0,3.193.016L.484.641A.625.625,0,0,0,0,1.25,12.082,12.082,0,0,0,12.084,13.334a.625.625,0,0,0,.609-.484l.625-2.708A.633.633,0,0,0,12.953,9.422Z"
                                transform="translate(0 0)"
                                fill="#fff5e0"
                            />
                        </svg>

                        <div className="contactIconTextWrapper">
                            <a href="tel:0786803384">
                                646-481-2004
              </a>
                        </div>
                    </div>

                    <div className="iconTextWrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="12"
                            viewBox="0 0 15 12"
                        >
                            <path
                                id="Icon_material-email"
                                data-name="Icon material-email"
                                d="M16.5,6H4.5A1.5,1.5,0,0,0,3.008,7.5L3,16.5A1.5,1.5,0,0,0,4.5,18h12A1.5,1.5,0,0,0,18,16.5v-9A1.5,1.5,0,0,0,16.5,6Zm0,3-6,3.75L4.5,9V7.5l6,3.75,6-3.75Z"
                                transform="translate(-3 -6)"
                                fill="#fff5e0"
                            />
                        </svg>
                        <div className="contactIconTextWrapper">
                            <a href="mailto: info@locataire.net">
                                info@locataire.net
              </a>
                        </div>
                    </div>

                    <div
                        className="iconTextWrapper footerMobileNansenAddress">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.666"
                            height="22.38"
                            viewBox="0 0 15.666 22.38"
                        >
                            <path
                                id="Icon_material-location-on"
                                data-name="Icon material-location-on"
                                d="M15.333,3A7.827,7.827,0,0,0,7.5,10.833c0,5.875,7.833,14.547,7.833,14.547s7.833-8.672,7.833-14.547A7.827,7.827,0,0,0,15.333,3Zm0,10.631a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,15.333,13.631Z"
                                transform="translate(-7.5 -3)"
                                fill="#fff5e0"
                            />
                        </svg>

                        <div className="contactIconTextWrapper">
                            Central Business District,
              <br /> Newark, NJ, United States
              <br /> 07102
            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default comp
