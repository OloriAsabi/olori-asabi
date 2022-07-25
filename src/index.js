import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ContextProvider } from './context/Context';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
  </ContextProvider>
);

