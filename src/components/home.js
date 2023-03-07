import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class GymHome extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
          <div className="container-fluid">
            <button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/">Home</a>
                </li><li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/adminlogin">Admin Login</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/trainerlogin">Trainer Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
            <button>
              <a href="/">
                Logout
              </a>             
            </button>
        </div>


        <MDBFooter style={{ backgroundColor: '#C4C4C4', marginTop: "60px" }} className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="8">
              </MDBCol>
              <MDBCol md="4">
                <p style={{ fontWeight: 'bold' }}>www.A+Fitness.lk</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <p style={{ fontWeight: 'bold' }}>Copyright © 2022 A+Fitness| Designed by A+Fitness</p>
              <p style={{ fontWeight: 'bold' }}>©All rights reserved</p>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    )
  }
}
