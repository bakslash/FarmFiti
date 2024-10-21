import React from 'react';
import { Button, Container, Typography, Grid, Box, Paper } from '@mui/material';

const LandingPage = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '50px 0' }}>
      {/* Hero Section */}
      <Box
        textAlign="center"
        mb={10}
        style={{
          background: 'linear-gradient(to bottom right, #4caf50, #81c784)',
          padding: '80px 20px', // Increased padding for a more spacious look
          borderRadius: '15px',
          color: '#fff',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Added shadow
        }}
      >
        <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold' }}>
          Welcome to Farmfiti
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          Empowering African farmers with access to affordable inputs, fair market prices, and the latest technologies.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="/register"
          style={{
            backgroundColor: '#fff',
            color: '#4caf50',
            marginRight: 10,
            padding: '12px 30px',
            borderRadius: '50px',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // Added shadow for button
            '&:hover': { // Hover effect
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          Register as Farmer
        </Button>
        <Button
          variant="contained"
          size="large"
          href="/register"
          style={{
            backgroundColor: '#ff9800',
            color: '#fff',
            padding: '12px 30px',
            marginRight: 10,
            borderRadius: '50px',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // Added shadow for button
            '&:hover': { // Hover effect
              backgroundColor: '#fb8c00',
            },
          }}
        >
          Register as Vendor
        </Button>
        {/* Button to Navigate to Shopping Page */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/shopping" // Link to your shopping page
          style={{
            backgroundColor: '#ff9800',
            color: '#fff',
            padding: '12px 30px',
            borderRadius: '50px',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // Added shadow for button
            '&:hover': { // Hover effect
              backgroundColor: '#fb8c00',
            },
          }}
        >
          Go to Marketplace
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4}>
        {[
          {
            imgSrc: '/images/soil-testing.png',
            title: 'Soil Testing',
            description: 'Use your smartphone for easy soil testing and boost your yields.',
          },
          {
            imgSrc: '/images/marketplace.png',
            title: 'Farm Marketplace',
            description: 'Connect with B2B and B2C customers to sell your produce at fair prices.',
          },
          {
            imgSrc: '/images/logistics.jpg',
            title: 'Logistics Support',
            description: 'Get seamless delivery with real-time tracking to reduce spoilage.',
          },
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                textAlign: 'center',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Shadow for card
              }}
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                style={{
                  width: '80px',
                  marginBottom: '20px',
                  borderRadius: '50%',
                }}
              />
              <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                {feature.title}
              </Typography>
              <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;
