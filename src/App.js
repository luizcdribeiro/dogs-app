import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Login from './components/Login/Login.js';
import User from './components/User/User.js';
import ProtectedRoute from './components/helper/ProtectedRoute.js';
import { UserStorage } from './UserContext.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
        </UserStorage>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
