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
import Photo from './components/Photo/Photo.js';
import UserProfile from './components/User/UserProfile.js';
import NotFound from './components/NotFound.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </UserStorage>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
