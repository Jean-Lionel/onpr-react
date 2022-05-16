import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { Link } from 'react-router-dom';
import axios from "axios"

const settings = ['Profile', 'Account', 'Dashboard'];
const routes = [
  {
    name : "Utilisateurs",
    path : "/users"
  },
  {
    name : "Articles",
    path : "/admin-article"
  },
  {
    name : "Slides",
    path : "/admin-slides"
  },
  {
    name : "Test",
    path : "/test-compontent"
  },
  {
    name : "Institution",
    path : "/institution"
  },
  {
    name : "Cotisations",
    path : "/cotisations"
  },

];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 // const [activeTab, setActiveTab] = React.useState("home");
 const connectedUser = JSON.parse(localStorage.getItem("user"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutUserMenu =  ()  => {
    if( window.confirm("Are you sure you want to logout ?")){
    
      axios.post("/logout",
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
      ).then(res => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/";
      })
      

      
    }
  }

  return (
    <AppBar position="static">
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ONPR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes.map((route) => (
                <Link to={route.path} key={route.name}  underline="none">
                  <MenuItem key={route.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{route.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ONPR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map((route, index) => (
              <Link to={route.path} key={index}>
                <p>
                  <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}  
                  onClick={() => 
                    handleCloseNavMenu
                  }
                >
                {route.name}
              </Button>
                </p>
               
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Typography
               variant = "h5"
               mr={2}
              >
                {connectedUser.user.name}
              </Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                
              </IconButton>
            
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}

              <MenuItem onClick={handleLogoutUserMenu}>
                <Typography textAlign="center">Se Deconnecter</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
