import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
//import HomeIcon from '@mui/icons-material/Home';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4caf50' }}> {/* Custom color for AppBar */}
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Farmfiti
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
          //  startIcon={<HomeIcon />}
            style={{ marginRight: '15px', '&:hover': { backgroundColor: '#81c784' }}} // Hover effect
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/register"
           // startIcon={<AccountCircleIcon />}
            style={{ marginRight: '15px', '&:hover': { backgroundColor: '#81c784' }}} // Hover effect
          >
            Register
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/shopping"
           // startIcon={<ShoppingCartIcon />}
            style={{ '&:hover': { backgroundColor: '#81c784' }}} // Hover effect
          >
            Marketplace
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
