import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Import the FavoriteBorder icon
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const CourseCard = ({ course }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ borderColor: 'grey.300', height: '100%', position: 'relative' }}>
      <CardMedia
        component="img"
        height="140"
        image={course.image}
        alt={course.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.desc}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${course.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', padding: '10px', margin: '0px' }}>
        <Link to={'/payment'} style={{ textDecoration: 'none' }}>
          <Button size="small">Buy Now</Button>
        </Link>
        <Link to={`/courses/${course._id}`} style={{ textDecoration: 'none' }}>
          <Button size="small">Show More</Button>
        </Link>
        <FavoriteBorderIcon sx={{ position: 'absolute', bottom: 0, right: 0, color: 'red', margin: '8px' }} /> {/* Add margin */}
      </CardActions>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{course.title}</DialogTitle>
        <DialogContent>
          <Typography>{course.desc}</Typography>
          <Typography>Price: ${course.price}</Typography>
          {/* Add more course details here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default CourseCard;
