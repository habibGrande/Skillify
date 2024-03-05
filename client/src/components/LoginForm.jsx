import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import backgroundImage from '../../public/landingPageImages/25.jpeg';
const FormContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#F0F6FF',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2), 
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
  maxWidth: '600px', 
  margin: '0 auto',
}));

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(loginData);
    // You can add code here to handle login logic
  };

  return (
    <Box bgcolor="#F0F6FF" minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', marginBottom: '20px' }}>
        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', color:'white' }}>
          <ArrowBackIcon style={{color:'white'}} /> Back to Home
        </Typography>
      </Link>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </FormContainer>
    </Box>
  );
};

export default LoginForm;
