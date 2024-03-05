import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { Container, Typography, Box, Paper, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';

const CourseDetails = () => {
    const [course, setCourse] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/courses/${id}`)
            .then(res => setCourse(res.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div style={{ backgroundColor: '#f0f6ff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <IconButton component={Link} to="/home" style={{ marginRight: '10px' }}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h4">Course Details</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img src={course.image} alt={course.title} style={{ width: '100%', marginBottom: '20px', borderRadius: '10px' }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom><DescriptionIcon sx={{ marginRight: '8px' }} /> Title</Typography>
                            <Typography variant="body1">{course.title}</Typography>
                            <Typography variant="h5" gutterBottom><DescriptionIcon sx={{ marginRight: '8px' }} /> Description</Typography>
                            <Typography variant="body1">{course.desc}</Typography>
                            <Typography variant="h5" gutterBottom><AttachMoneyIcon sx={{ marginRight: '8px' }} /> Price</Typography>
                            <Typography variant="body1" color="green">${course.price}</Typography> 
                            <Typography variant="h5" gutterBottom><InfoIcon sx={{ marginRight: '8px' }} /> Detailed Information</Typography>
                            <Typography variant="body1">{course.notes}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default CourseDetails;
