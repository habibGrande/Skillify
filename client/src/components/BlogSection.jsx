import React from 'react';
import { Typography, Card, CardContent, CardActionArea, Grid, Link } from '@mui/material';

const BlogSection = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Mastering Web Development',
      excerpt: 'Discover useful tips and techniques to improve your web development skills.',
      url: '#',
    },
    {
      id: 2,
      title: 'Introduction to Python Programming',
      excerpt: 'Learn the basics of Python programming language with this introductory guide.',
      url: '#',
    },
    {
      id: 3,
      title: 'The Importance of UX Design in Software Development',
      excerpt: 'Explore the role of UX design in creating successful software products.',
      url: '#',
    },
  ];

  return (
    <div style={{ padding: '40px 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Blog & Resources
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {blogPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardActionArea href={post.url}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogSection;
