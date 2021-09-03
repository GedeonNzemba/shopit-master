import React, { useEffect, useState } from 'react'
import logo from "../images/logo_main.png"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Linke from 'react-scroll/modules/components/Link'
import Styled from "styled-components"
import Navbar from './Navbar';
import hamburger from "../images/reaalty/hamburger.svg"
import hamburgerLight from "../images/reaalty/hamburgerLight.svg"

const HeaderBSN = () => {

    // ACTIVE NAVIGATION ITEM
    const Active = Styled.li`
        & #activeA {
            padding: 5px 3px 8px !important;
            margin-bottom: 0;
            position: relative;
            margin-top: 20px;
            text-decoration: none;
            transition: 0.5s;
        }
        & #activeA::after {
            transform: scaleX(1);
            transform-origin: left;
            position: absolute;
            content: "";
            width: 10rem;
            height: 2px;
            top: 100%;
            left: 0;
            background: #4d6de6;
            transition: transform 0.5s;
    }
  

    `
    const [active, setActive] = useState(false);
    useEffect(() => {
        const page = "http://localhost:3000/riskmanagement";
        const activateNavItem = () => {
            setActive(true);
        }
        const disactivateNavItem = () => {
            setActive(false);
            console.log("User not at real estate page.........active is false")
        }

        window.location.href === page ? activateNavItem() : disactivateNavItem();
    }, [])

    return (
        <>
            <Navbar icon={hamburger} iconB={hamburgerLight} />
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
                        <Active >
                            <Link id={active ? "activeA" : ""} to="/riskmanagement">risk management</Link>
                        </Active>
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
                <div className="realEstate_contactBtn" >
                    {/* <ButtonEight name="contact us" /> */}
                    <Linke to="contactFormWrapper" spy={true} smooth={true} className="riskHeader_btn-right">
                        <Button variant="contained" color="secondary" >
                            Contact Us
                        </Button>
                    </Linke>
                </div>
            </nav>
        </>
    )
}

export default HeaderBSN
