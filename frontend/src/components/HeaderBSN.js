import React, { useEffect } from 'react'
import ButtonEight from "./buttons/ButtonEight"
import logo from "../images/logo_main.png"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const HeaderBSN = () => {



    return (
        <nav className="realEstate_navigation" id="realEstateHeader">
            <div className="realEstate_logoWrap">
                <img
                    src={logo}
                    alt="Locataire logo"
                ></img>
            </div>
            <div className="realEstate_navItem">
                <ul>
                    <li>
                        <Link to="/realestate">home</Link>
                    </li>
                    <li>
                        <Link to="/riskmanagement">risk management</Link>
                    </li>
                    {/* <li>
                        <Link to="/">livestock</a>
                    </li> */}
                    <li>
                        <Link to="/">farm</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/career">career</Link>
                    </li>
                </ul>
            </div>
            <div className="realEstate_contactBtn">
                {/* <ButtonEight name="contact us" /> */}
                <Link to="/" className="riskHeader_btn-right">
                    <Button variant="contained" color="secondary" >
                        Contact Us
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default HeaderBSN
