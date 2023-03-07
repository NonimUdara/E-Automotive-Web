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

    const { name, email, phone } = this.state.post;

    return (
      <div style={{ marginTop: '20px' }}>

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

        <center style={{ marginBottom: '30px' ,marginTop: '30px' }}><h4>Unique User Detail</h4></center>
        <h4>{name}</h4>
        <hr />

        <dl className="row" style={{ marginBottom: '100px' }}>
          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{email}</dd>

          <dt className="col-sm-3">Phone Number</dt>
          <dd className="col-sm-9">{phone}</dd>
        </dl>

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
export default (props) => (
  <PostDetails
    {...props}
    params={useParams()}
  />
);