import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import UniqueUserDetail from './components/UniqueUserDetail';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser';
import PartsDetails from './components/PartsDetails';
import EditPart from './components/EditPart';
import GaragesDetails from './components/GarageDetails';

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
            <Route path="/partsdetails" element={<PartsDetails />} />
            <Route path="/garagesdetails" element={<GaragesDetails />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<UniqueUserDetail />} />
            <Route path="/part/edit/:id" element={<EditPart />} />
          </Routes>
          <Footer/>         
        </div>
      </BrowserRouter>
    )
  }
};
