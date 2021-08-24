import React from "react";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import StoreIcon from '@material-ui/icons/Store';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WorkIcon from '@material-ui/icons/Work';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "RealEstate",
    path: "/real-estate",
    icon: <HomeWorkIcon />,
    cName: "nav-text",
  },
  {
    title: "Farm",
    path: "/farm",
    icon: <StoreIcon />,
    cName: "nav-text",
  },
  {
    title: "Audit & Risk",
    path: "/risk",
    icon: <VerifiedUserIcon />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <ContactMailIcon />,
    cName: "nav-text",
  },
  {
    title: "Career",
    path: "/career",
    icon: <WorkIcon />,
    cName: "nav-text",
  },
];
