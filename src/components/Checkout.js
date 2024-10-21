import React from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';

const Checkout = ({ cartItems, totalPrice, handlePayment }) => {
  return (
    <Container maxWidth="sm" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Box>
        <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
      </Box>
      <Box mt={3}>
        <TextField fullWidth label="Enter your address" variant="outlined" />
        <TextField fullWidth label="Enter your payment details" variant="outlined" margin="normal" />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handlePayment}
          style={{ marginTop: '20px' }}
        >
          Place Order
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
