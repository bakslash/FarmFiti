import React from 'react';
import { Container, Typography, Box, Button, TextField, List, ListItem } from '@mui/material';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, totalPrice, removeFromCart } = useCart();

  const handlePlaceOrder = () => {
    alert('Order Placed Successfully!');
    // Here you can add further order processing logic
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Box>
        <Typography variant="h6">Your Cart:</Typography>
        <List>
          {cart.map((item, index) => (
            <ListItem key={index}>
              {item.name} - ${item.price}
              <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item)}>
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
      </Box>
      <Box mt={3}>
        <TextField fullWidth label="Enter your address" variant="outlined" />
        <TextField fullWidth label="Enter your payment details" variant="outlined" margin="normal" />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
          style={{ marginTop: '20px' }}
        >
          Place Order
        </Button>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
