import React from 'react';
import Landingpage from './components/Landingpage';
import Createform from './components/Createform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/form" element={<Createform/>} />
        {/* Add more routes as needed */}
        
      </Routes>
    </Router>
  );
}

export default App;