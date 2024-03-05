import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CssBaseline } from '@mui/material';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Footer from './Footer';
import axios from 'axios';


const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginData); 
    axios.post('http://localhost:8000/authors/new', {
      name,
  })
  .then(res=>{console.log(res);
  navigate("/authors");}) 
  
  .catch(err=>{
      const errorResponse = err.response.data.errors; // Get the errors from err.response.data
      const errorArr = []; // Define a temp error array to push the messages in
      for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)   
      }
      setErrors(errorArr);
  }) 
  

}

  return (
    <>
    <PrimarySearchAppBar/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={loginData.email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={loginData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </form>
      {/* <div className="helpers--auth-form-row--fFzdR">
        <label className="ud-toggle-input-container ud-text-sm" htmlFor="checkbox--7">
          Send me special offers, personalized recommendations, and learning tips.
          <input name="subscribeToEmails" className="ud-sr-only ud-real-toggle-input" id="checkbox--7" type="checkbox" />
          <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-xsmall ud-fake-toggle-input ud-fake-toggle-checkbox">
            <use xlinkHref="#icon-tick"></use>
          </svg>

        </label>
      </div> */}
      <span>Dont  have an account? <a    href="/reg">Sign Up</a></span>
    </Container>

    <Footer textColor="black" />
    </>
  );
};

export default LoginForm;
