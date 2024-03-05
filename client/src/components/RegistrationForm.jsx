import React, { useState } from 'react';
import {Box, TextField, Button, Container, Typography, CssBaseline, Alert } from '@mui/material';
import Footer from './Footer';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const user = { firstName, lastName, email, password, confirmPassword };

    axios.post("http://localhost:8000/api/user", user)
      .then(() => {
        navigate('/login');
      })
      .catch(err => {
        console.error(err);
      });
      navigate('/login');
  }

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "First Name is required!";
      valid = false;
    } else if (firstName.length < 3) {
      newErrors.firstName = "First Name must be at least 3 characters long!";
      valid = false;
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required!";
      valid = false;
    } else if (lastName.length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters long!";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required!";
      valid = false;
    } else if (!/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(email)) {
      newErrors.email = "Please enter a valid email!";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required!";
      valid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long!";
      valid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required!";
      valid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <>
      <PrimarySearchAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Join Skillify Now!
          </Typography>
          <Typography variant="body1">
            Unlock a world of learning opportunities with Skillify.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            autoComplete="fname"
            name="firstName"
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <Alert severity="error">{errors.firstName}</Alert>}

          <TextField
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <Alert severity="error">{errors.lastName}</Alert>}

          <TextField
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <Alert severity="error">{errors.email}</Alert>}

          <TextField
            type='password'
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <Alert severity="error">{errors.password}</Alert>}

          <TextField
            type='password'
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            autoComplete="current-password"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <Alert severity="error">{errors.confirmPassword}</Alert>}

          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </form>
        <Link to="/home">Already have an account? Login</Link>
      </Container>
      <Footer textColor="black" />
    </>
  );
};

export default RegistrationForm;