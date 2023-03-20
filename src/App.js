import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AdminLogin from "./components/AdminLogin";
import Home from './components/home';
import EditPost from './components/EditPost';
import MemberDetails from './components/MemberDetails';
import UniqueDetail from './components/UniqueDetail';
import AdminDashboard from './components/AdminDashboard';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/memberdetails" element={<MemberDetails />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<UniqueDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};

//comment