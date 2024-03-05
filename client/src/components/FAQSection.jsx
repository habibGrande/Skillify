import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, ListItemIcon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Import the HelpOutlineIcon

const FAQSection = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 800 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <ListItemIcon>
                <HelpOutlineIcon /> {/* Add the HelpOutlineIcon here */}
              </ListItemIcon>
              <Typography variant="h6">How do I sign up for courses?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can sign up for courses by visiting our website and selecting the desired course. Follow the prompts to create an account or sign in, and then complete the enrollment process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <ListItemIcon>
                <HelpOutlineIcon /> {/* Add the HelpOutlineIcon here */}
              </ListItemIcon>
              <Typography variant="h6">What payment methods do you accept?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We accept payments via credit card, debit card, PayPal, and other secure online payment methods. You can choose the preferred payment option during checkout.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <ListItemIcon>
                <HelpOutlineIcon /> {/* Add the HelpOutlineIcon here */}
              </ListItemIcon>
              <Typography variant="h6">Are there any prerequisites for your courses?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Prerequisites vary depending on the course. Some courses may require prior knowledge or experience in specific subjects, while others may be suitable for beginners. Check the course description for more information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
