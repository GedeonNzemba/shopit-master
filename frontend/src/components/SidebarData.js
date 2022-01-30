import React from "react";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import StoreIcon from '@material-ui/icons/Store';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WorkIcon from '@material-ui/icons/Work';

export const SidebarData = [
  {
    title: "RealEstate",
    titre: "Immobilier",
    path: "/real-estate",
    icon: <HomeWorkIcon />,
    cName: "nav-text",
  },
  {
    title: "Farm",
    titre: "Ferm",
    path: "/",
    icon: <StoreIcon />,
    cName: "nav-text",
  },
  {
    title: "Audit & Risk",
    titre: "Audit et Risk",
    path: "/riskmanagement",
    icon: <VerifiedUserIcon />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    titre: "Contact",
    path: "/contact",
    icon: <ContactMailIcon />,
    cName: "nav-text",
  },
  {
    title: "Career",
    titre: "Carrière",
    path: "/career",
    icon: <WorkIcon />,
    cName: "nav-text",
  },
];
