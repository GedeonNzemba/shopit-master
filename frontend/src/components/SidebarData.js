import React from "react";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import StoreIcon from '@material-ui/icons/Store';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WorkIcon from '@material-ui/icons/Work';

export const SidebarData = [
  {
    title: "RealEstate",
    path: "/real-estate",
    icon: <HomeWorkIcon />,
    cName: "nav-text",
  },
  {
    title: "Farm",
    path: "/",
    icon: <StoreIcon />,
    cName: "nav-text",
  },
  {
    title: "Audit & Risk",
    path: "/riskmanagement",
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
