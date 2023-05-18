import React, { Component } from 'react';

export default class AdminDashboard extends Component {
  render() {
    return (
      <div>

        <div className="container" style={{ marginBottom: 50, marginTop: 50 }}>
          <div className="card">
            <div className="row">
              <h3 style={{ textAlign: 'center', marginTop: '30px', fontWeight: 'bold', fontSize: 35, marginBottom: '30px' }}> Welcome Admin</h3>
              <hr style={{ width: '70%', margin: 'auto' }}></hr>
              <div className="col-6" style={{ alignItems: 'center', textAlign: 'center', marginTop: 30 }}>
                <p>User Management</p>
                <a className="btn btn-outline-primary w-25" href="/memberdetails" role="button">Users</a>
              </div>
              <div className="col-6" style={{ alignItems: 'center', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>
                <p>Parts Management</p>
                <a className="btn btn-outline-primary w-25" href="/partsdetails" role="button">Parts</a>
              </div>
              <hr style={{ width: '70%', margin: 'auto', marginTop: 30, marginBottom: 30 }}></hr>
              <div className="col-12" style={{ alignItems: 'center', textAlign: 'center' }}>
                <p>Manage Location Send By Users</p>
                <a className="btn btn-outline-success w-25" href="garagesdetails" role="button" style={{ marginTop: 30, marginBottom: 30 }}>Manage</a>
              </div>
              <hr style={{ width: '70%', margin: 'auto' }}></hr>
              <div className="col-6" style={{ alignItems: 'center', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>
                <p>View Checkouts</p>
                <a className="btn btn-outline-primary w-25" href="/checkoutsdetails" role="button">Checkouts</a>
              </div>
              <div className="col-6" style={{ alignItems: 'center', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>
                <p>View Contact Us Messages</p>
                <a className="btn btn-outline-primary w-25" href="contactusdetails" role="button" style={{ marginBottom: 30 }}>Messages</a>
              </div>
              <hr style={{ width: '70%', margin: 'auto' }}></hr>
              <div className="col-12" style={{ alignItems: 'center', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>
                <a className="btn btn-outline-danger w-25" href="/" role="button">Logout</a>
              </div>

            </div>
          </div>

        </div>

      </div>
    )
  }
}
