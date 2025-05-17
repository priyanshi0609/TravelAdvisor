import React from 'react';
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;