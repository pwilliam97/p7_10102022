// Importation de REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

// Importation de l'APP
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

