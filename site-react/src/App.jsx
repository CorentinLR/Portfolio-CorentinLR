import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProjects from './components/AllProjects';
import ScrollToTop from './components/ScrollToTop';

// Helper to scroll top on navigation
function ScrollComponent() {
  // We can create a simple ScrollToTop component usually, 
  // but for now let's just make sure we export a clean router.
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
