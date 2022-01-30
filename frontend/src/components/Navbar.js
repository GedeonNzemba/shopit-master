import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@material-ui/core/ListItemText';
import Stack from '@mui/material/Stack';

import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../images/logo_main.png";

import Sidebar from './farm/Category/sidebar/Sidebar'
import hamburgerLight from "../images/reaalty/hamburgerLight.svg"
import hamburger from "../images/reaalty/hamburger.svg"
import isFrench from '../language/locales/en.json'
import { useTranslation } from 'react-i18next';


function Navbar() {
  const {  i18n } = useTranslation();
 
  const [isRisk, setIsRisk] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const checkPathName = () => {
    const riskManagement = '/riskmanagement';
    const pathName = window.location.pathname;

   (pathName === riskManagement) && setIsRisk(true);
  }

  useEffect(() => {
    checkPathName()
  }, [])

  // Apply background color to navbar on scroll event
  const isSticky = (e) => {
    const header = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    scrollTop >= 500 && header.classList.add('bar__bg');
    scrollTop >= 500 && setHasScrolled(true);
    scrollTop <= 499 && setHasScrolled(false);

  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);

    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

  

   

  


  const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }


  const sidedrawer = (
    <List>
      <ListItem style={{ display: 'block' }}>
        <Box>
          {SidebarData.map((item, index) => {
            return (
              <ListItem key={index} style={{ padding: '0', cursor: 'pointer' }} id="list_sidebar_realty_item">
                <Link to={item.path} classNane="link_sidebar_realty">
                  <Stack direction='row' spacing={2} >
                      {item.icon}
                    <ListItemText primary={i18n.resolvedLanguage === 'fr' ? (item.titre) : (item.title)} id="list_item_text" style={{ color: '#ffffff!important' }} />
                  </Stack>
                </Link>
              </ListItem>
            )
          })}
        </Box>
      </ListItem>
    </List>

  );


  return (
    <Fragment style={{ position: 'sticky!important' }}>
      <IconContext.Provider value={{ color: "#fff" }} >
        <div className="navbar homeNav" >
          <div className="menu-bars" style={{cursor: 'pointer'}}>
            {/* <div className="br-log">
              {
                isScroll ? <img src={iconB} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
                  : <img src={icon} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
              }
            </div> */}
            <div className="bar_burger" onClick={handleDrawerToggle}>
              {isRisk ? 
                (
                  <>
                    {hasScrolled ? 
                      <img src={hamburgerLight} className="mobile-risk-burger realt"  alt="hamburger icon" id="hamburgerTemp" />
                    : 
                      <img src={hamburger} className="mobile-risk-burger realt"  alt="hamburger icon" id="hamburgerTemp" />
                    }
                  </>
                )
              :
                <img src={hamburgerLight} className="mobile-risk-burger realt"  alt="hamburger icon" id="hamburgerTemp" />
              }
            </div>


              {/* {isScroll && alert('YES! It is 500 >')} */}

            {/* {
              !screen ?
                (
                  isScroll ? <img src={iconB} onClick={showSidebar} alt="hamburger icon" id="hamburgerTemp" />
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
              {/* {isScroll ?
                <img src={logo} alt="Locataire logo" id="logo" />
                :
              } */}
              <img src={logo} alt="Locataire logo" id="logo" />
            </figure>
          </Link>
        </div>

        {mobileOpen && <Sidebar drawerContent={sidedrawer} mobileView={mobileOpen} drawerToggle={handleDrawerToggle} />}
      </IconContext.Provider>
    </Fragment>
  );
}

export default Navbar;
