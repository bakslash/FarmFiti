import React from 'react';
import { List, ListItem, ListItemText, Button, Box, Typography } from '@mui/material';

const Cart = ({ cartItems, removeFromCart, totalPrice }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`Price: $${item.price}`} />
            <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Box mt={2}>
        <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
        <Button variant="contained" color="primary" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </Button>
      </Box>
    </div>
  );
};

export default Cart;
