import React, { Component } from 'react';

export default class AdminDashboard extends Component {
  render() {
    return (
      <div>

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
              <a className="btn btn-outline-primary w-25" href="/partsdetails" role="button">Parts</a>
            </div>
            <hr style={{ marginTop: '30px', marginBottom: '30px' }}></hr>

            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Garage Locations</h3>
            <div className="col-12" style={{ alignItems: 'center', textAlign: 'center' }}>
              <p>Manage Location Send By Users</p>
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

      </div>
    )
  }
}
