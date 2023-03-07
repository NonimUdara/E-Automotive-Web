import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from "./components/AdminLogin";
import Home from './components/home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};