// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0066',
    },
    secondary: {
      main: '#ffcc00',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
