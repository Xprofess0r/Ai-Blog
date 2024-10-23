import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css'; // Ensure you're importing your Tailwind CSS here
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
