import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Typography, Box } from '@mui/material';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: rgb(131 216 244);
  color: #000;
  padding: 16px;
  z-index: 9999;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: space-between;
`;

const CloseButton = styled.button`
  color: #000;
  cursor: pointer;
  background: rgb(131 216 244);
  border: none;
  padding: 0;
  margin: 0;
`;

const Cookie = () => {
  const [showCookie, setShowCookie] = useState(true);

  const handleClose = () => {
    setShowCookie(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Container show={showCookie}>
        <div data-testid="smart-bar-container">
          <div className="smart-bar-module--smart-bar--dotFm smart-bar-module--smart-bar--yellow--UZ-T9">
            <div className="smart-bar-module--smart-bar__content_wrapper--PRZqf">
              <div className="smart-bar-module--smart-bar__content--ocOCr">
                <div
                  className="ud-text-sm smart-bar-module--basic-bar-content--eTuvA"
                  data-testid="basic-with-timer"
                >
                  <span role="presentation" data-testid="smart-bar-copy">
                    <span
                      className="ud-text-bold ud-text-with-links smart-bar-module--smart-bar__title--1xYZY"
                      data-purpose="smart-bar-title"
                      data-testid="smart-bar-title"
                    >
                      Email has its perks
                    </span>
                    <span
                      className="ud-text-with-links"
                      role="presentation"
                      data-purpose="smart-bar-subtitle"
                      data-testid="smart-bar-subtitle"
                    >
                      | Get special offers, course recommendations, and more    .
                      <Typography
                          variant="body1"
                          component="span"
                          color="inherit"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <a href="/reg" target="_blank">
                            Sign up now
                          </a>
                        </Typography>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <CloseButton onClick={handleClose}>
                  <img
                    src={'/landingPageImages/siteLogo.png'}
                    alt="Skillify Logo"
                    style={{ marginLeft: '10%', height: '50px' }}
                  />

                  <svg
                    aria-label="Close"
                    role="img"
                    focusable="false"
                    className="ud-icon ud-icon-small"
                  >
                    <use xlinkHref="#icon-close">Close</use>
                  </svg>
                </CloseButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Grid>
  );
};

export default Cookie;
