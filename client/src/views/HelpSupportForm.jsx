import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import HelpIcon from '@mui/icons-material/Help';
import SupportIcon from '@mui/icons-material/Support';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const FormContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#F0F6FF',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2), 
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
  maxWidth: '600px', 
  margin: '0 auto',
}));

const HelpSupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can add code here to submit the form data to your backend
    // For example, using Axios or Fetch to send the data to your API
  };

  return (
    <Box bgcolor="#F0F6FF" minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', marginBottom: '20px' }}>
        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIcon /> Back to Home
        </Typography>
      </Link>
      <FormContainer>
        <Box display="flex" alignItems="center" justifyContent="center" marginBottom={2}>
          <HelpIcon sx={{ fontSize: 40, marginRight: 2 }} />
          <Typography variant="h5" gutterBottom>
            Need Help or Support?
          </Typography>
          <SupportIcon sx={{ fontSize: 40, marginLeft: 2 }} />
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </Box>
        </form>
      </FormContainer>
    </Box>
  );
};

export default HelpSupportForm;
