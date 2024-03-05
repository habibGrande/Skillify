

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CssBaseline, Grid } from '@mui/material';import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


import './LoginForm.css';



const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [isLogged, setIsLogged] = useState(false);



  const user = {
    email,
    password
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("hiiiiiiiiiiii")
    axios.post('http://localhost:8000/api/users/login', user)
      .then(res => {
        localStorage.setItem('jwt', '124q3cdfgdraw3q244444w555cfgudtse57w34s5eu8cfise58');
        console.log(user.email)

        axios.get(`http://localhost:8000/api/users/loggeduser?email=${email}`)


          .then(res => { localStorage.setItem("userid", res.data.user._id) });
        localStorage.setItem('loggeduser', email);
        setIsLogged(true);
        navigate("/home");
        //window.location.reload()
      })
      .catch(err => console.log(err))
  }


  //   const LogoutHandle = () => {
  //     axios.get('http://localhost:8000/api/users/logout')
  //         .then(res => {
  //             localStorage.removeItem('jwt');
  //             localStorage.removeItem("userid");
  //             localStorage.removeItem('loggeduser');
  //             setIsLogged(false);
  //             navigate("/home");
  //             //window.location.reload()
  //         })
  //         .catch(err => console.log(err))
  // }
  return (

    <>
      <div className="login-container1">
        <div className="background1-image" />
        <div className="login-card">
        <Grid container justifyContent="center" alignItems="center">
        <img 
          src={'/landingPageImages/siteLogo.png'}
          alt="Skillify Logo"
          style={{ height: '50px' }}
        /> </Grid>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h5" component="h1" gutterBottom>
              Start Skillify
            </Typography>
          </Grid>
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

                onChange={(e) => {
                  setEmail(e?.target?.value);
                  if (e?.target?.value?.length == 0) {
                    setEmailError("*Email is required!")
                  }
                  else if (e?.target?.value?.length < 2) {
                    setEmailError("*Email must be at least 2 characters long!")
                  } else {
                    setEmailError()
                  }
                }}
              />
              <p style={{ color: "red", fontSize: "14px" }}>{emailError}</p>

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
                onChange={(e) => {
                  setPassword(e?.target?.value);
                  if (e?.target?.value?.length == 0) {
                    setPasswordError("*Password is required!")
                  }
                  else if (e?.target?.value?.length < 6) {
                    setPasswordError("*Password must be at least 6 characters long!")
                  } else {
                    setPasswordError()
                  }
                }}
              />
              <p style={{ color: "red", fontSize: "14px" }}>{passwordError}</p>
              {/* {
          isLogged ?
            <Button onClick={LogoutHandle} fullWidth variant="contained" color="error">Logout</Button>
            : (emailError || passwordError ?
              <Button fullWidth disabled variant="contained" color="error">Login</Button>
              : <Button onClick={handleSubmit} fullWidth variant="contained" color="primary">Login</Button>
            )
        } */}
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
          </Container>
          <div className="register-link">
            <p>Not a user?  <Link to={'/'}>register here</Link>.</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginForm;
