import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Home from '../pages/Home';
import About from '../pages/About';
import AllCourses from '../pages/AllCourses';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routers = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
    </>
  );
};

export default Routers;