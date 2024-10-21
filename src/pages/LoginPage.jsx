import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Handle authentication logic
    console.log(credentials);
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        name="email"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        label="Password"
        name="password"
        fullWidth
        margin="normal"
        variant="outlined"
        type="password"
        onChange={handleChange}
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
