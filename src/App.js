import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AdminLogin from "./components/AdminLogin";
import EditPost from './components/EditPost';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import UniqueUserDetail from './components/UniqueUserDetail';
import UserDetails from './components/UserDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar/>   
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/memberdetails" element={<UserDetails />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<UniqueUserDetail />} />
          </Routes>
          <Footer/>         
        </div>
      </BrowserRouter>
    )
  }
};
