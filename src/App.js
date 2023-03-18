import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from "./components/AdminLogin";
import Home from './components/Home';
import EditPost from './components/EditPost';
import MemberDetails from './components/MemberDetails';
import UniqueDetail from './components/UniqueDetail';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/memberdetails" element={<MemberDetails />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<UniqueDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};