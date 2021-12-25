import React, { Fragment, memo } from 'react'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoriesData from './categories.json'
import { categories } from './homecategories'

const Category = () => {

    return (
        <Fragment>
            {categories.map((item, key) => {
                return (

                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <List component="nav" aria-label="main mailbox folders">
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
