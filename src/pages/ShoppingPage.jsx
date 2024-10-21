import React from 'react';
import { Container, Typography, Button, Box, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Farm Inputs' },
  { id: 2, name: 'Farm Produce' },
];

const ShoppingPage = ({ products, onAddToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    onAddToCart(product);
    navigate('/cart');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="left" sx={{ fontWeight: 'bold' }}>
        Available Products
      </Typography>

      <Grid2 container spacing={4}>
        {/* Categories Section */}
        <Grid2 item xs={12} md={3}>
          <Box mb={2} sx={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Categories
            </Typography>
            <Box display="flex" >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outlined"
                  color="primary"
                  sx={{
                    marginRight: '10px',
                    textTransform: 'capitalize',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Grid2>

        {/* Products Section */}
        <Grid2 item xs={12} md={9}>
          <Grid2 container spacing={3}>
            {products.map((product) => (
              <Grid2 item xs={12} sm={6} md={4} key={product.id}>
                <Box
                  sx={{
                    border: '1px solid #ddd',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    transition: '0.3s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    height: '100%',
                    '&:hover': {
                      boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <img
                    src={product.image || '/placeholder-image.png'}
                    alt={product.name}
                    style={{
                      width: '120px',
                      height: '160px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginBottom: '15px',
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    Price: ${product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                    sx={{ mt: 2, px: 3, py: 1, fontWeight: 'bold' }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ShoppingPage;
