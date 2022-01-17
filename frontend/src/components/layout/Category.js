import React, { Fragment, memo } from 'react'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import CategoriesData from './categories.js'
import { GiChicken } from "react-icons/gi";
import {BsEgg} from "react-icons/bs"
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import { GiGoat } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import { useTranslation } from 'react-i18next';

const Category = () => {

    const { t  } = useTranslation();

    const categories = [
        {
            "title": `${t('farm.header.products_category.title1')}`,
            "svg": <GiChicken />,
            "atl": "LaiWiv",
            "page": "/product-category/poultry"
        },
        {
            "title":  `${t('farm.header.products_category.title2')}`,
            "svg":  <BsEgg />,
            "atl": "KTrngrIo",
            "page": "/product-category/fresh-eggs"
        },
        {
            "title": `${t('farm.header.products_category.title3')}`,
            "svg": <SavingsOutlinedIcon />,
            "atl": "EyCVOYElB",
            "page": "/product-category/pigsty"
        },
        {
            "title": `${t('farm.header.products_category.title4')}`,
            "svg": <GiGoat />,
            "atl": "EyCVOYElP",
            "page": "/product-category/goat-sheep-mammals"
        },
        {
            "title": `${t('farm.header.products_category.title5')}`,
            "svg": <MdPets />,
            "atl": "XgcabxkzflU",
            "page": "/product-category/park-animals"
        },
        {
            "title": `${t('farm.header.products_category.title6')}`,
            "svg": <BiotechOutlinedIcon />,
            "atl": "tkTOAnrTpGM",
            "page": "/product-category/purebred-seed"
        },
        {
            "title": `${t('farm.header.products_category.title7')}`,
            "svg": <MdPets />,
            "atl": "nnFiNyv",
            "page": "/product-category/livestock-food"
        }
    ]

    return (
        <Fragment >
            {categories.map((item, key) => {
                return (
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <List component="nav" style={{zIndex: '1'}} aria-label="main mailbox folders">
                            <Link to={item.page} key={key}>
                                <ListItemButton className="home__list_btn">
                                    <ListItemIcon className="home__list_icon">
                                        {item.svg}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} className="home__list_text" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Box>
                );
            })}
        </Fragment>
    )
}

export default memo(Category)
