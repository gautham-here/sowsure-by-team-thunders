import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,       // animation duration
  once: true,          // whether animation happens only once
  offset: 100,         // offset (in px) before triggering
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
