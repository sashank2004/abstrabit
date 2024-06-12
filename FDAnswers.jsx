// src/FDAnswers.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Link, Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const FDAnswers = () => {
  const answers = [
    {
      title: "How FDs are taxed",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more..."
    },
    {
      title: "How FDs are taxed",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more..."
    },
    {
      title: "How FDs are taxed",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more..."
    }
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <div>
      <Typography variant="h5">Get Answer</Typography>
      <Typography variant="subtitle1" color="textSecondary">to all your questions</Typography>
      </div>
      <div>
      <IconButton>
          <ArrowBackIos />
        </IconButton>
        <IconButton>
          <ArrowForwardIos />
        </IconButton>
      </div>
      </div>
      
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Grid container spacing={2}>
          {answers.map((answer, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{answer.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{answer.description}</Typography>
                  <Link href="#" underline="always">{answer.link}</Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FDAnswers;
