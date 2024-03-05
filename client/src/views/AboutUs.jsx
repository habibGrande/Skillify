import React from 'react';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SocialMediaBottoms from '../components/SocialMediaBottoms';
import ContactUs from '../components/ContactUs';
import Cookie from '../components/Cookie';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(to bottom, #FFF, black);'
}));

const CarouselContainer = styled('div')(({ theme }) => ({
  width: '100%',

}));

const AboutUs = () => {
  return (
    <>
    <Cookie/>
      <StyledContainer>
        <PrimarySearchAppBar />
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Connecting people with knowledge
          </Typography>
        </Container>
        <CarouselContainer>
          <Carousel>
            <div>
              <SocialMediaBottoms />
              <img
                style={{
                  width: '50%',
                  height: '50%',
                }}
                alt={"ayahSafi"}
                src={'https://media.licdn.com/dms/image/D4D03AQHMA9_yyAxy4A/profile-displayphoto-shrink_800_800/0/1706349356505?e=1715212800&v=beta&t=cXkocVpET4h8C5rRRnFyhnidGlZq4nDK7QhXUTG-cfI'}
              />
              <Typography variant="body1" gutterBottom>
                Ayah Safi : Computer science Full stack developer

              </Typography>
            </div>
            <div>
                <SocialMediaBottoms />
                <img
                  style={{
                    width: '50%',
                    height: '50%',
                  }}
                  alt={"Mutaz jaber"}
                  src={'https://media.licdn.com/dms/image/D4D03AQG6QMlhe3RDyQ/profile-displayphoto-shrink_800_800/0/1708265507456?e=1715212800&v=beta&t=hXaeSzZqd28dDVXYmdC7KD3tNNp4IW13xLbEO42WAoQ'}
                />
                <Typography variant="body1" gutterBottom>
                  Mutaz   jaber  : Computer science Full stack developer
                  </Typography>

              </div>
              <div>
                <SocialMediaBottoms />
                <img
                  style={{
                    width: '50%',
                    height: '50%',
                  }}
                  alt={"M-habib"}
                  src={'habib'}
                />
                <Typography variant="body1" gutterBottom>
                  M-Habib : Computer science Full stack developer

                </Typography>
              </div>
          </Carousel>
        </CarouselContainer>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Our origins
          </Typography>
          <Typography variant="body1" gutterBottom>
            Growing up in a small palestinian village, Skillify founder Mutaz Jaber had few educational opportunities — until he got a computer. Fueled by his dream to compete in mathematics, he used the internet to learn his way to a silver medal in the International Math Olympiad.
            <br /><br />
            After learning online changed his life, Mutaz partnered with co-founders Ayah Safi and M-Habib Snobur to achieve a common goal: to make quality education accessible to all.
          </Typography>
        
          <Typography variant="h4" component="h2" gutterBottom>
      <ContactUs/>
</Typography>
</Container>

        <Footer />
      </StyledContainer>
    </>
  );
};

export default AboutUs;
