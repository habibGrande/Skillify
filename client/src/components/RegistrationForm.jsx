// RegistrationForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CssBaseline } from '@mui/material';

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registrationData); // Replace with actual registration logic
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography variant="h5" component="h1" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          autoComplete="fname"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          margin="normal"
          value={registrationData.firstName}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
          margin="normal"
          value={registrationData.lastName}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          margin="normal"
          value={registrationData.email}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          margin="normal"
          value={registrationData.password}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          margin="normal"
          value={registrationData.confirmPassword}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationForm;
