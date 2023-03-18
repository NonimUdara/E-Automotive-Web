import React, { Component } from 'react';

import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Home extends Component {

    render() {
        return (

    <MDBFooter style={{ backgroundColor: '#3C3C3C' }} className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '19px' }}>Vehicle Automotive spare parts sales platform</p>
              <hr style={{ color: '#CFCFCF', alignItems: 'center', textAlign: 'center' }}></hr>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <h1 style={{ marginBottom: "20px", textAlign: "center", alignItems: "center" }}>
              <a href=" " role="button" style={{ padding: "10px", color: "#4267B2" }}><FontAwesomeIcon icon={faFacebook} /></a>
              <a href=" " role="button" style={{ padding: "10px", color: "#1DA1F2" }}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href=" " role="button" style={{ padding: "10px", color: "#833AB4" }}><FontAwesomeIcon icon={faInstagram} /></a>
            </h1>
            <MDBContainer fluid>
              <p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '15px' }}>Nonim Creations © 2023</p>
              <p style={{ fontWeight: 'regular', color: '#CFCFCF', fontSize: '15px' }}>All Right Reserved</p>
            </MDBContainer>
          </div>
        </MDBFooter>
        )};
}