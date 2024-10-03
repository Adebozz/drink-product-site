// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#ff0066' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          DrinkWorld
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/products">Products</Button>
        <Button color="inherit" component={Link} to="/about-us">About Us</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
