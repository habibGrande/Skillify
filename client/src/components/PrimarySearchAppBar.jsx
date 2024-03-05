import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import the Favorite icon
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'inherit',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
  },
  margin: '0 8px',
}));

const WhatsAppIconButton = styled(StyledIconButton)(({ theme }) => ({
  color: '#25D366',
}));

const EmailIconButton = styled(StyledIconButton)(({ theme }) => ({
  color: theme.palette.secondary.main, 
}));

export default function PrimarySearchAppBar() {
  const [courses, setCourses] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses')
      .then(res => {
        setCourses(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWhatsAppClick = () => {
    // Replace the phone number with the desired number
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} style={{ backgroundColor: 'transparent' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={'/landingPageImages/siteLogo.png'} alt="Skillify Logo" style={{ marginRight: '10px', height: '40px' }} />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Skillify
          </Typography>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for anything"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-end' }}>
          <Link to="#" style={{ textDecoration: 'none' }}>
            <Button
              aria-controls="courses-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Courses
            </Button>
          </Link>
          <Menu
            id="courses-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {courses.map(course => (
              <MenuItem key={course.id} onClick={handleClose}>
                {course.title}
              </MenuItem>
            ))}
          </Menu>
          <Link to="#" style={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'black', display: 'block' }}>About Us</Button>
          </Link>
          <Link to="#" style={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'black', display: 'block' }}>Contact Us</Button>
          </Link>
          <Link to='/helpandsupport' style={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'black', display: 'block' }}>Help & Support</Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <StyledIconButton size="large" aria-label="show cart items">
            <ShoppingCartIcon />
          </StyledIconButton>
          <Link to='/helpandsupport' style={{ textDecoration: 'none' }}>
            <WhatsAppIconButton size="large" aria-label="whatsapp" onClick={handleWhatsAppClick}>
              <WhatsAppIcon />
            </WhatsAppIconButton>
          </Link>
          <Link to='/helpandsupport' style={{ textDecoration: 'none' }}>
            <EmailIconButton size="large" aria-label="email">
              <EmailIcon />
            </EmailIconButton>
          </Link>
          <IconButton size="large" aria-label="favorites" style={{ color: 'red' }}>
            <FavoriteIcon />
          </IconButton>
          <Link to={'/login'} style={{ textDecoration: 'none' }}>
            <StyledButton variant="outlined">Log in</StyledButton>
          </Link>
          <Link to={'/reg'} style={{ textDecoration: 'none' }}>
            <StyledButton variant="contained">
              Sign up
            </StyledButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
