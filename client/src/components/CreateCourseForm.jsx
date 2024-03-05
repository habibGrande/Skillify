import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CssBaseline } from '@mui/material';
import axios from 'axios';

const CreateCourseForm = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    desc: '',
    image: '',
    price: '',
    notes: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/add', courseData)
      .then(response => {
        console.log(response);
        alert('Course created successfully');
        setCourseData({
          title: '',
          desc: '',
          image: '',
          price: '',
          notes: '',
        });
      })
      .catch(error => {
        console.log(error);
        alert('Error creating course');
      });
  };
  
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Typography component="h1" variant="h5">
      Create New Course
    </Typography>
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="title"
        label="Course Title"
        name="title"
        autoComplete="title"
        autoFocus
        value={courseData.title}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="desc"
        label="Course Description"
        name="desc"
        autoComplete="description"
        multiline
        rows={4}
        value={courseData.desc}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="image"
        label="Image URL"
        name="image"
        autoComplete="image"
        value={courseData.image}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="price"
        label="Price"
        name="price"
        type="number"
        InputProps={{
          inputProps: { min: 0 },
        }}
        value={courseData.price}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="notes"
        label="Additional Notes"
        name="notes"
        multiline
        rows={4}
        autoComplete="notes"
        value={courseData.notes}
        onChange={handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Create Course
      </Button>
    </form>
  </Container>
  );
};

export default CreateCourseForm;
