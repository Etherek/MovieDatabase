import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sticker from './Sticker';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} /><Route/>
          <Route path="/login" element={<LoginPage/>} /> <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;