import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ShoppingPage from './pages/ShoppingPage';
import CheckoutPage from './pages/CheckoutPage';
import { useState } from 'react';
import products from './data/products'; 
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

 const onAddToCart = (product) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);
    if (existingItem) {
      // If the item already exists in the cart, increase its quantity
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    // If it's a new item, add it with a quantity of 1
    return [...prevCart, { ...product, quantity: 1 }];
  });
};

  const onRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const onCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout!');
    setCart([]);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shopping" element={<ShoppingPage products={products} onAddToCart={onAddToCart} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} onRemoveFromCart={onRemoveFromCart} onCheckout={onCheckout} />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
