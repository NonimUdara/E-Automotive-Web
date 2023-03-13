import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class GymHome extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#C4C4C4' }}>
          <div className="container">
            <button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'bold', fontSize: 20 }} href="/">E-Automotives</a>
                </li>
                <li className="nav-item" style={{}}>
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20, textAlign: 'right' }} href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">

            <h1 style={{ textAlign: 'center', marginTop: '30px' }}> Welcome Admin</h1>
            <hr style={{ marginTop: '30px', marginBottom: '30px' }}></hr>
            <div className="col-6" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>User Management</p>
              <a className="btn btn-outline-primary w-25" href="/memberdetails" role="button">Users</a>
            </div>
            <div className="col-6" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>Parts Management</p>
              <a className="btn btn-outline-primary w-25" href=" "  role="button">Parts</a>
            </div>
            <hr style={{ marginTop: '30px', marginBottom: '30px' }}></hr>

            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Garage Locations</h3>
            <div className="col-4" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>View Garage Location Details Send By Users</p>
              <a className="btn btn-outline-success w-25" href=" " role="button">View</a>
            </div>
            <div className="col-4" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>Add Location</p>
              <a className="btn btn-outline-success w-25" href=" "  role="button">Add</a>
            </div>
            <div className="col-4" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>Manage Location</p>
              <a className="btn btn-outline-success w-25" href=" " role="button">Manage</a>
            </div>
            <hr style={{ marginTop: '30px', marginBottom: '30px' }}></hr>

            <div className="col-6" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>View Checkouts</p>
              <a className="btn btn-outline-primary w-25" href="/memberdetails" role="button">Checkouts</a>
            </div>
            <div className="col-6" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>View Contact Us Messages</p>
              <a className="btn btn-outline-primary w-25" href=" " role="button">Messages</a>
            </div>
            <hr style={{ marginTop: '30px', marginBottom: '30px', }}></hr>

            <div className="col-12" style={{ alignItems: 'center', textAlign: 'center' }}>
              <a className="btn btn-outline-danger w-25" href="/" role="button">Logout</a>
            </div>

          </div>
        </div>
        <MDBFooter style={{ backgroundColor: '#3C3C3C' }} className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '19px' }}>Vehicle Automotive spare parts sales platform</p>
              <hr style={{ color: '#CFCFCF', alignItems: 'center', textAlign: 'center' }}></hr>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>             
              <p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '15px' }}>Nonim Creations © 2023</p>
              <p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '15px' }}>All Right Reserved</p>
            </MDBContainer>
          </div>
        </MDBFooter>
        
      </div>
    )
  }
}
