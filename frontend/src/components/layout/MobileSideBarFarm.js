import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Category from './Category';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export default function MobileSideBar({ searchBar, cardInfo, login }) {

    return (
        <section className="mobile__sidebar col">
            <List sx={style} component="section" aria-label="mailbox folders">
                <ListItem button>
                    <Category />
                </ListItem>
                <Divider />
                <ListItem button>
                    {login}
                </ListItem>
                <Divider light />
                <ListItem button>
                    {cardInfo}
                </ListItem>
                <Divider light />
                <ListItem >
                    <div className="mobile__searchBar">
                        {searchBar}
                    </div>
                </ListItem>
            </List>

        </section>
    )
}
