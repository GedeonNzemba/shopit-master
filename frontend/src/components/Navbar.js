import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../images/logo_main.png";
import logoB from "../images/logoblack.png";
import { MobileRealty } from '../SVG/Svg'

function Navbar({ icon, iconB }) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // Apply background color to navbar on scroll event

  const [changeIcon, setChangeIcon] = useState();
  function listernForScroll() {
    document.getElementsByClassName('bar__bg')[0] ? setChangeIcon(true) : setChangeIcon(false);
  }
  document.addEventListener('scroll', listernForScroll)

  useEffect(() => {
    var riskHeader = document.getElementsByClassName('navbar')[0];
    riskHeader.style.position = 'fixed'

    return () => {
      riskHeader.style.position = 'sticky'
    }
  }, [])

  const [screen, setScreen] = useState()
  const app = document.getElementById('root');
  let minScreen = app.clientWidth;






  return (
    <Fragment style={{ position: 'sticky!important' }}>
      <IconContext.Provider value={{ color: "#fff" }} >
        <div className="navbar homeNav" >
          <div className="menu-bars">
            <div className="br-log">
              {
                changeIcon ? <img src={iconB} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
                  : <img src={icon} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
              }
            </div>
            <div className="br-log">
              <img src={iconB} className="mobile-risk-burger" onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
            </div>
            {/* {
              !screen ?
                (
                  changeIcon ? <img src={iconB} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
                    : <img src={icon} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
                )
                :
                (
                  <img src={iconB} className="mobile-risk-burger" onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
                )

            } */}
          </div>

          <Link to="/" className="logo">
            <figure className="logo">
              {changeIcon ?
                <img src={logo} alt="Locataire logo" id="logo" />
                :
                <img src={logo} alt="Locataire logo" id="logo" />
              }
            </figure>
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div className="menu-bars">
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
}

export default Navbar;
