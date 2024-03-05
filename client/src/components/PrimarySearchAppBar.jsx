import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

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

export default function PrimarySearchAppBar() {
  return (
      <AppBar position="sticky" color="default" elevation={0} stuyle={{backgroundColor: 'transparent'}}>
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
            <Button sx={{ my: 2, color: 'black', display: 'block' }}>Courses</Button>
            <Button sx={{ my: 2, color: 'black', display: 'block' }}>Teach on Skillify</Button>
            <Button sx={{ my: 2, color: 'black', display: 'block' }}>Services</Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large" aria-label="show cart items" color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <Link to={'/login'}  underline="none"> <Button color="inherit" variant="outlined">Log in</Button></Link>
            <Link to={'/reg'}  underline="none"><Button  color="inherit" variant="outlined" sx={{ ml: 1 }}>
              Sign IN
            </Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
