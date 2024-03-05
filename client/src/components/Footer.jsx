import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import SocialMediaBottoms from './SocialMediaBottoms';



const Footer = ({ textColor }) => {

  return (
    <>
      <Box
        component="footer"
        sx={{

          bgcolor: 'transparent',
          color: textColor || 'white', 
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} style={{ justifyContent: 'center' }}>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" color="inherit" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="inherit" gutterBottom>
                We are a learning platform passionate about providing high-quality education. Skillify is our final project for MERN stack development, created by a group of enthusiastic developers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" color="inherit" gutterBottom>
              <Link href="/contactus" underline="none">Contact Us</Link> 
              </Typography>
              <Typography variant="body2" color="inherit" gutterBottom>
                Email: contact@skillify.com<br />
                Phone: +1234567890<br />
                Fax: +1234567890
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" color="inherit" gutterBottom>

                Our Services
              </Typography>
              <Typography variant="body2" color="inherit" gutterBottom>
                - Web Development Courses<br />
                - Python Developer Path<br />
                - Introduction to C#<br />=======

                <Link href="/aboutus" underline="none"> About Us</Link>

              </Typography>
            </Grid>
            {/* Add more columns if needed */}
          </Grid>
          <SocialMediaBottoms />
          <Typography variant="body2" color="inherit" align="center">
            &copy; Skillify 2024
          </Typography>
        </Container>
      </Box>

      <SocialMediaBottoms/>

    </>
  );
};

export default Footer;
