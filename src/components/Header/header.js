import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Features','Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar  sx={{backgroundColor : "white" , boxShadow : "none"}} position="static">
      <Container  maxWidth="xl">
        <Toolbar  disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , ml:"20px" ,color:"#F53838"}} />
      
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 30,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#0B132A',
              textDecoration: 'none',
            }}
          >
            OnionVPN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"#0B132A"}} />
          <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 , pl:"50px" ,color:"#F53838"}} />

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
                display: { xs: 'block', md: 'none'  },
                color:"#4F5665",
            
                
              }}
            >
              {pages.map((page) => (
                <MenuItem   key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{color:"#4F5665"}} textAlign="center">{page}</Typography>
                </MenuItem>
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
              mr: 5,
              ml : "-60px",
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'poppins',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: '#0B132A',
              textDecoration: 'none',
            }}
          >
            OnionVPN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,color:"#4F5665"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#4F5665', display: 'block',ml:"50px" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                <Button sx={{color:"#0B132A",fontFamily:"poppins"}}>Sign In</Button>
          <Button sx={{
            ml:"10px",color:"#F53855",
            backgroundColor:"white",
            border:"2px solid #F53855",
            borderRadius:"20px",
            width:"110px"
        }}>Sign Up</Button>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;