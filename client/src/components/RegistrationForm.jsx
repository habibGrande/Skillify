import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const FormContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#F0F6FF',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2), 
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
  maxWidth: '600px', 
  margin: '0 auto',
}));

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (registrationData.password !== registrationData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      setState({ ...state, open: true });
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      // Registration successful
      setErrorMessage('');
      navigate("/home");
    } catch (error) {
      setErrorMessage('Registration failed');
      setState({ ...state, open: true });
    }
  };

  return (
    <Box bgcolor="#F0F6FF" minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={errorMessage}
        key={vertical + horizontal}
        autoHideDuration={5000}
      />
      <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', marginBottom: '20px' }}>
        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', color:'white' }}>
          <ArrowBackIcon style={{color:'white'}} /> Back to Home
        </Typography>
      </Link>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="firstName"
            value={registrationData.firstName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="lastName"
            value={registrationData.lastName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            name="email"
            type="email"
            value={registrationData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={registrationData.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={registrationData.confirmPassword}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
        </form>
      </FormContainer>
    </Box>
  );
};

export default RegistrationForm;
