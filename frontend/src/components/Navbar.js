import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../images/logo_main.png";

function Navbar(props) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // Apply background color to navbar on scroll event
  useEffect(() => {
    var navbar = document.getElementById('homeNavbar');
    document.addEventListener('scroll', () => {
      console.log('Scrolling: ' + window.scrollY);
      if (window.scrollY > 300) {
        navbar.classList.add('bar__bg');
      } else if (window.scrollY < 300) {
        navbar.classList.remove('bar__bg');
      }
    })

    return () => {
      if (window.scrollY < 300) {
        navbar.classList.remove('bar__bg');
      }
    }
  }, [])

  // CHECK URL IS RISK MANAGEMENT
  const [active, setActive] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);

  window.addEventListener('scroll', function () {
    var el = document.getElementById('homeNavbar');
    el.classList.contains('bar__bg') ? setChangeIcon(true) : setChangeIcon(false);

  })


  useEffect(() => {
    const page = "http://localhost:3000/riskmanagement";
    const activateBar = () => {
      setActive(true);


    }
    const disactivateBar = () => {

      setActive(false);
      console.log("User not at real estate page.........active is false")
    }


    (window.location.href === page && window.innerWidth >= 900) ? activateBar() : disactivateBar();
  }, [])


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar" id="homeNavbar">
          <div className="menu-bars">
            {
              active ? (
                changeIcon ? <img src={props.iconB} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
                  : <img src={props.icon} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
              )
                : <FaIcons.FaBars onClick={showSidebar} />
            }
          </div>

          <Link to="/" className="logo">
            <figure className="logo">
              <img src={logo} alt="Locataire logo" id="logo" />
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
    </>
  );
}

export default Navbar;
