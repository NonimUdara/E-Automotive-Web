import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {

    const { id } = this.props.params;

    axios.get("/post/" + id).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });

        console.log(this.state.post);
      }
    });
  }



  render() {

    const { name, email, address, age, height, weight, payment_status } = this.state.post;

    return (
      <div style={{ marginTop: '20px' }}>

        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#C4C4C4', marginBottom: '50px' }}>
          <div className="container-fluid">
            <button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/"> </a>
                </li><li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/adminpanel">Admin Panel</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20 }} href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <center style={{marginBottom:'50px'}}><h4>Unique Member Detail</h4></center>
        <h4>{name}</h4>
        <hr />

          <dl className="row" style={{ marginBottom: '100px' }}>
            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{email}</dd>

            <dt className="col-sm-3">Address</dt>
            <dd className="col-sm-9">{address}</dd>

            <dt className="col-sm-3">Age</dt>
            <dd className="col-sm-9">{age}</dd>

            <dt className="col-sm-3">Height</dt>
            <dd className="col-sm-9">{height}</dd>

            <dt className="col-sm-3">Weight</dt>
            <dd className="col-sm-9">{weight}</dd>

            <dt className="col-sm-3">Payment Status</dt>
            <dd className="col-sm-9">{payment_status}</dd>
          </dl>

        <MDBFooter style={{ backgroundColor: '#C4C4C4' }} className="font-small pt-4 mt-4">
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

export default (props) => (
  <PostDetails
    {...props}
    params={useParams()}
  />
);