import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const ShoppingCart = ({ cart, onRemoveFromCart, onCheckout }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container maxWidth="lg" style={{ padding: '50px 0' }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <div>
          {cart.map((item) => (
            <Paper key={item.id} style={{ padding: '20px', marginBottom: '20px' }}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Typography variant="body1">{item.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">Quantity: {item.quantity}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">Price: ${item.price.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">Total: ${(item.price * item.quantity).toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" onClick={() => onRemoveFromCart(item.id)}>
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
          <Typography variant="h6" style={{ marginTop: '20px' }}>
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" onClick={onCheckout} style={{ marginTop: '20px' }}>
            Proceed to Checkout
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ShoppingCart;
