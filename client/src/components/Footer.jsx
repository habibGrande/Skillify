import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'transparent',
        color: 'white',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={4} style={{justifyContent: 'center'}}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Learning paths
            </Typography>
            <Link href="#" color="inherit" underline="none">Web Development</Link><br />
            <Link href="#" color="inherit" underline="none">Python Developer</Link><br />
            {/* ... more links */}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Contact Us
            </Typography>
            <Link href="#" color="inherit" underline="none">Introduction to C</Link><br />
            <Link href="#" color="inherit" underline="none">Introduction to Python</Link><br />
            {/* ... more links */}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="inherit" gutterBottom>
              About Us
            </Typography>
            <Link href="#" color="inherit" underline="none">C# Intermediate</Link><br />
            <Link href="#" color="inherit" underline="none">Python Intermediate</Link><br />
            {/* ... more links */}
          </Grid>
          {/* ... more columns */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
