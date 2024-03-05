import React from 'react'
import { Box } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialMediaBottoms = () => {
    return (
        <div>

<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <a href='/https://www.facebook.com/mutazmhj/' rel='noreferrer noopener' target='_blank' style={{ margin: '0 8px' }}>
          <FacebookIcon />
        </a>
        <a href='/https://www.instagram.com/mutaz_jaberr/' rel='noreferrer noopener' target='_blank' style={{ margin: '0 8px' }}>
          <InstagramIcon />
        </a>
        <a href='/https://www.linkedin.com/in/mutaz-jaber-83202a91/' rel='noreferrer noopener' target='_blank' style={{ margin: '0 8px' }}>
          <PinterestIcon />
        </a>
        <a href='/https://www.linkedin.com/in/mutaz-jaber-83202a91/' rel='noreferrer noopener' target='_blank' style={{ margin: '0 8px' }}>
          <TwitterIcon />
        </a>
      </Box>
        </div>
    )
}

export default SocialMediaBottoms
