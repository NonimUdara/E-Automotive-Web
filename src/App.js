import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from "./components/AdminLogin";


export default class App extends Component {
  render() {

    //const user = localStorage.getItem("token");
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<AdminLogin />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};