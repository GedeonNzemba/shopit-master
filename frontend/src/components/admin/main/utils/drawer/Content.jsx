import React, { memo } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import './drawer.css'
import { useTranslation, Trans } from 'react-i18next';

function Content() {
    const {i18n } = useTranslation();

    const items = [
        {
            title: i18n.resolvedLanguage === 'fr' ? 'tableau de bord' : 'dashboard',
            icon: <DashboardCustomizeRoundedIcon />
        },
        {
            title: i18n.resolvedLanguage === 'fr' ? 'produit' : 'product',
            icon: <ProductionQuantityLimitsRoundedIcon />
        },
        {
            title: i18n.resolvedLanguage === 'fr' ? 'consommateur' : 'user',
            icon: <GroupRoundedIcon />
        },
        {
            title: i18n.resolvedLanguage === 'fr' ? 'commande' : 'order',
            icon: <LocalMallRoundedIcon />
        },
        {
            title: i18n.resolvedLanguage === 'fr' ? 'Commentaires' : 'reviews',
            icon: <ReviewsRoundedIcon />
        }
    ]


    let lists = document.querySelectorAll('.admin-list_item_wrapper');


    for (let i = 0; i < lists.length; i++) {
        const element = lists[i];
        element.addEventListener('click', () => {
            let initialList = document.querySelector('.admin-list_item_wrapper.active');
            let view = document.querySelector('.admin__content_item.active');
            let viewItem = document.getElementsByClassName('admain__main-view')[0].getElementsByClassName('view')[i];

            // remove current active class item & remove view class item
            initialList.classList.remove('active');
            view.classList.remove('active');

            // add active class to the clicked item & add to the view
            element.classList.add('active');
            viewItem.classList.add('active');

        })

    }



    return (
        <List sx={{ mt: 2.4 }} className="admin__sidedrawer-list-wrap">
            <ListItem button className="admin-list_item_wrapper active">
                <ListItemIcon className="admin-list_item_iconWrap">
                    {items[0].icon}
                </ListItemIcon>
                <ListItemText primary={items[0].title} className="admain-list_item_title" />
            </ListItem>

            

            <ListItem button className="admin-list_item_wrapper" id="product_view">
                <ListItemIcon className="admin-list_item_iconWrap">
                    {items[1].icon}
                </ListItemIcon>
                <ListItemText primary={items[1].title} className="admain-list_item_title" />
            </ListItem>

            <ListItem button className="admin-list_item_wrapper" id="user_view">
                <ListItemIcon className="admin-list_item_iconWrap">
                    {items[2].icon}
                </ListItemIcon>
                <ListItemText primary={items[2].title} className="admain-list_item_title" />
            </ListItem>

            <ListItem button className="admin-list_item_wrapper" id="order_view">
                <ListItemIcon className="admin-list_item_iconWrap">
                    {items[3].icon}
                </ListItemIcon>
                <ListItemText primary={items[3].title} className="admain-list_item_title" />
            </ListItem>

            <ListItem button className="admin-list_item_wrapper" id="review_view">
                <ListItemIcon className="admin-list_item_iconWrap">
                    {items[4].icon}
                </ListItemIcon>
                <ListItemText primary={items[4].title} className="admain-list_item_title" />
            </ListItem>
        </List>
    )
}

export default memo(Content);
