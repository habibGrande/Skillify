import React from 'react';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import FullImageBackground from '../components/FullImageBackground';
import { styled, alpha } from '@mui/material/styles';
import CourseCard from '../components/CourseCard';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Footer from '../components/Footer'

const StyledContainer = styled('div')(({theme}) => ({
    backgroundImage: 'linear-gradient(to bottom, #FFF, black);'
}));

function LandingPage() {

  const images = [
    '/landingPageImages/5.jpeg',
    '/landingPageImages/6.jpeg',
    '/landingPageImages/3.jpeg',
  ];
 
 const courses = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    description: 'Learn JavaScript essentials in this beginner-friendly course.',
    price: '49.99',
    image: '/landingPageImages/js.avif',
  },
  {
    id: 2,
    title: 'Advanced Python Programming',
    description: 'Take your Python skills to the next level with advanced concepts.',
    price: '59.99',
    image: '/landingPageImages/py.png',
  },
  {
    id: 3,
    title: 'Full-Stack Web Development',
    description: 'Become a full-stack web developer by learning the most in-demand technologies.',
    price: '99.99',
    image: '/landingPageImages/fullstack.png',
  },
  {
    id: 4,
    title: 'Data Science & Machine Learning Bootcamp',
    description: 'Data Science principles and Machine Learning algorithms from the ground up.',
    price: '79.99',
    image: '/landingPageImages/ds.jpeg',
  },
  {
    id: 5,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the fundamentals of UI/UX design to create user-friendly interfaces.',
    price: '39.99',
    image: '/landingPageImages/uiux.jpeg',
  },
  {
    id: 6,
    title: 'Project Management Professional (PMP)® Certification',
    description: 'Get ready to pass the PMP exam on your first attempt and become a certified project manager.',
    price: '199.99',
    image: '/landingPageImages/pmp.jpeg',
  },
  {
    id: 7,
    title: 'Digital Marketing Complete Course',
    description: 'Master digital marketing with this course covering all major aspects from SEO to Social Media Marketing.',
    price: '69.99',
    image: '/landingPageImages/dm.png',
  },
  {
    id: 8,
    title: 'Cybersecurity: From Beginner to Expert',
    description: 'Dive into the world of cybersecurity and understand how to protect systems from cyber threats.',
    price: '89.99',
    image: '/landingPageImages/cs.webp',
  },
  {
    id: 9,
    title: 'Mobile App Development with Flutter',
    description: 'Create beautiful, fast, native-quality iOS and Android apps with Flutter.',
    price: '59.99',
    image: '/landingPageImages/flutter.jpeg',
  },
];



  return (
    <StyledContainer >

        <PrimarySearchAppBar/>
        <div className="App">
        <FullImageBackground
            title="Learning  got simplified."
            subtitle="Learn the latest technology with interactive, hands-on courses. It’s free."
            buttonText="Sign in"
        />


    <Typography variant="h3" component="h3" style={{textAlign: 'center', color: 'white', paddingBottom: 20}}>
    Explore Courses
    </Typography>

    <Grid container spacing={10} style={{padding: '0px 80px'}}>
    
    {courses.map(course => 
    <Grid item xs={4}>
        <CourseCard course={course}/>
    </Grid>
    
  )}
    </Grid>

    <Footer></Footer>

        
    </div>
    </StyledContainer>
  )
}

export default LandingPage;
