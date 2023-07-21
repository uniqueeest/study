import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import { RecoilRoot } from 'recoil';

// Clear the existing HTML content
const app = document.querySelector('#app');

// Render your React component instead
const root = createRoot(app);
root.render(
  <RecoilRoot>
    <Home />
  </RecoilRoot>
);
