import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" mt={5} py={3} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body1">Farmfiti © 2024</Typography>
    </Box>
  );
};

export default Footer;
