import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * @package vbenjs/vite-plugin-svg-icons
 * @description Simplifies and optimizes SVG icon usage in Vite projects.
 * See the [GitHub repository](https://github.com/vbenjs/vite-plugin-svg-icons) for installation, configuration, and advanced features.
 */
import 'virtual:svg-icons-register';

// pandacss initial setup
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
