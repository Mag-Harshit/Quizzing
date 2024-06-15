import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navbar/>}/>
          <Route path="/Login" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;