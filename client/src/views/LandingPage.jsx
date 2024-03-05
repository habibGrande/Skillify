import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import axios from 'axios';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import ImageCarousal from '../components/ImageCarousel';
import CourseCard from '../components/CourseCard';
import AwardsExperience from '../components/AwardsExperience';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';


const StyledContainer = styled('div')({
  backgroundColor: '#f0f6ff',
  padding: '20px',
});

const ContentContainer = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
});


const SectionTitle = styled(Typography)({
  textAlign: 'center',
  color: 'black',
  padding: '20px 0',
});


const AwardsContainer = styled('div')({
  marginTop: '50px',
  marginBottom: '50px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
});


const SectionWithShadow = styled('div')({
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  marginBottom: '30px',
});

const FullWidthPrimarySearchAppBar = styled(PrimarySearchAppBar)({
  width: '100%',
});

<Cookie/>
    <Typography variant="h3" component="h3" style={{textAlign: 'center', color: 'white', paddingBottom: 20}}>
    Explore Courses
    </Typography>


const LandingPage = () => {
  const [courses, setCourses] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses')
      .then(res => {
        setCourses(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <StyledContainer>
      <FullWidthPrimarySearchAppBar />
      <div className="App">
        <ImageCarousal images={['/landingPageImages/16.webp', '/landingPageImages/17.webp', '/landingPageImages/18.webp']} />
        <ContentContainer>
          <SectionTitle variant="h3" component="h3">
            Explore Courses
          </SectionTitle>
          <Grid container spacing={4}>
            {loaded && courses.map(course =>
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <CourseCard course={course} />
              </Grid>
            )}
          </Grid>
          <AwardsContainer>
            <SectionTitle variant="h3" component="h3">
              {/* Awards & Recognitions */}
            </SectionTitle>
            <AwardsExperience />
          </AwardsContainer>
          <SectionWithShadow>
            <SectionTitle variant="h3" component="h3">
              {/* Frequently Asked Questions */}
            </SectionTitle>
            <FAQSection />
          </SectionWithShadow>
        </ContentContainer>
        <Footer />
      </div>
    </StyledContainer>
  );
};

export default LandingPage;
