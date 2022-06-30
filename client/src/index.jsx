import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('root element not found');
const root = ReactDOM.createRoot(rootEl);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
  </BrowserRouter>
);
