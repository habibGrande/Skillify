import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

// Create a light theme instance
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // You can change this to your preferred color
    },
  },
});

const PaymentForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    zipCode: '',
    paymentMethod: 'creditCard',
  });

  // Handle form field changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission
    console.log(formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit} style={{ marginTop: '8px' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            autoFocus
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormControl component="fieldset" style={{ marginTop: '16px' }}>
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup
              row
              aria-label="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
              <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cardNumber"
            label="Card Number"
            type="text"
            id="cardNumber"
            autoComplete="cc-number"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="expiryDate"
            label="Expiration Date (MM/YY)"
            type="text"
            id="expiryDate"
            autoComplete="cc-exp"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cvc"
            label="CVC"
            type="text"
            id="cvc"
            autoComplete="cc-csc"
            value={formData.cvc}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="zipCode"
            label="Zip Code"
            type="text"
            id="zipCode"
            autoComplete="postal-code"
            value={formData.zipCode}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0px 16px' }}
          >
            Pay Now
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default PaymentForm;
