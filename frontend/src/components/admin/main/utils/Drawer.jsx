import React, { memo } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import NewProduct from '../../NewProduct';
import Drawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../../../images/logoblack.png';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@material-ui/core';
import './drawer/drawer.css';
import { Stack } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Content from './drawer/Content';

function SideDrawer({ drawerWidth, mobileOpen  }) {

  const { user } = useSelector(state => state.auth)

  const handleCloseSideBar = () => {
    const mainDash = document.getElementsByClassName('main_dash')[0]
    const sidebar = document.getElementById('admin__dashboard')
    var sidebarItems = document.getElementsByClassName('admin-list_item_wrapper');
    mainDash.classList.remove('main_dash_lay');
    sidebar.classList.remove('dashboard__sidebar_open');

      for (let i = 0; i < sidebarItems.length; i++) {
        const element = sidebarItems[i];
        element.addEventListener('click', () => {
          mainDash.classList.remove('main_dash_lay');
          sidebar.classList.remove('dashboard__sidebar_open');
        })
      }
  }
//   useEffect(() => {
//     dispatch(allUsers())
// }, [dispatch])

  const drawer = (
    <div id="drawer__container_content">
      <Box component="div">
        <Box className='drawer__logo-container'>
          {window.innerWidth <= 899 ? 
          <Stack direction="row" justifyContent={'space-between'} >
             <Link to="/">
             <img className='logo' src={logo} alt='logo' />
             </Link>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleCloseSideBar}
              color="inherit"
              
            >
              <CloseIcon className="admin__dashboard_menu" />
            </IconButton>
          </Stack>
          :
          <img className='logo' src={logo} alt='logo' />
          }

          <Stack direction='row' spacing={3} sx={{padding: '1.6rem 2rem', mt: 4, borderRadius: '1.2rem', backgroundColor: '#f4f6f8'}}>
            <Avatar
              src={user.avatar && user.avatar.url}
              alt={user && user.name}
              className="avatar_img_sidebar"
            />
            <ListItemText primary={user && user.name} id="list_item_text-admin"  />
          </Stack>
        </Box>

        <Content />
      </Box>


      <Box className="create_product-container">
        <Link to='/admin/product'>
                <Button variant="contained"  startIcon={<AddBoxIcon />}>Create Product</Button>
            </Link>
      </Box>
    </div>
  );

  return (
      <Box
        component="div"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className="dashboard__sidebar"
        id="admin__dashboard"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose=''
          className="admin_drawer__inner-container"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
         
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          className="admin_drawer__inner-container"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
         
          open
        >
          {drawer}
        </Drawer>
      </Box>
  )
}

export default memo(SideDrawer);
