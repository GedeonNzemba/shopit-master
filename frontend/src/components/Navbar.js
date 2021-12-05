import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../images/logo_main.png";
import logoB from "../images/logoblack.png";
import { MobileRealty } from '../SVG/Svg'
import Sidebar from './farm/Category/sidebar/Sidebar'
import hamburgerLight from "../images/reaalty/hamburgerLight.svg"

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // Apply background color to navbar on scroll event
  const isSticky = (e) => {
    const header = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    scrollTop >= 500 && header.classList.add('bar__bg');
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);

    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

  

   

  

  const [screen, setScreen] = useState()
  const app = document.getElementById('root');
  let minScreen = app.clientWidth;

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
                    <ListItemText primary={item.title} id="list_item_text" style={{ color: '#ffffff!important' }} />
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
              <img src={hamburgerLight} className="mobile-risk-burger realt"  alt="hamburger icon" id="hamburgerTemp" />
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
