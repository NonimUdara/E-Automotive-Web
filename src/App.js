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
import UniqueGarageDetail from './components/UniqueGarageDetail';
import EditGarage from './components/EditGarage';
import ContactUsDetails from './components/ContactUsDetails';
import CheckoutsDetails from './components/CheckoutsDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar/>   
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/memberdetails" element={<UserDetails />} />
            <Route path="/partsdetails" element={<PartsDetails />} />
            <Route path="/garagesdetails" element={<GaragesDetails />} />
            <Route path="/contactusdetails" element={<ContactUsDetails />} />
            <Route path="/checkoutsdetails" element={<CheckoutsDetails />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<UniqueUserDetail />} />
            <Route path="/garage/:id" element={<UniqueGarageDetail />} />
            <Route path="/part/edit/:id" element={<EditPart />} />
            <Route path="/garage/edit/:id" element={<EditGarage />} />
          </Routes>
          <Footer/>         
      </BrowserRouter>
    )
  }
};
