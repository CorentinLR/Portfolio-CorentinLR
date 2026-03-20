import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProjects from './components/AllProjects';
import ScrollToTop from './components/ScrollToTop';

// Helper to scroll top on navigation
function ScrollComponent() {
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
