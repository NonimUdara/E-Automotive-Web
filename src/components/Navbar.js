import React, { Component } from 'react';

export default class Navbar extends Component {

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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  };
}