import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Storia from './pages/Storia';
import Matrimonio from './pages/Matrimonio';
import Galleria from './pages/Galleria';
import Trani from './pages/Trani';
import Viaggio from './pages/Viaggio';
import RSVP from './pages/RSVP';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="storia" element={<Storia />} />
          <Route path="matrimonio" element={<Matrimonio />} />
          <Route path="galleria" element={<Galleria />} />
          <Route path="trani" element={<Trani />} />
          <Route path="viaggio" element={<Viaggio />} />
          <Route path="rsvp" element={<RSVP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
