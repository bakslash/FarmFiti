import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Typography variant="h6">${product.price}</Typography>
          <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
