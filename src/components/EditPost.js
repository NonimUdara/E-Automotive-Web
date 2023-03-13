import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class EditPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {

    e.preventDefault();

    const { name, email, phone } = this.state;
    const { id } = this.props.params;
    const data = {
      name: name,
      email: email,
      phone: phone
    }



    axios.put("/post/update/" + id, data).then((res) => {
      console.log(data)
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState(
          {
            name: "",
            email: "",
            phone: ""
          }
        )
      }
    })

  }

  componentDidMount() {

    const { id } = this.props.params;

    axios.get("/post/" + id).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.post.name,
          email: res.data.post.email,
          phone: res.data.post.phone,
        });

        console.log(this.state.post);
      }
    });
  }

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

        <div className="col-md-8 mt-4 mx-auto">
          <center><h3 style={{ marginBottom: '30px' }}>Update User</h3></center>
          <form className="needs-validation" noValidate style={{ border: '1px solid black', borderRadius: '5px', padding: '20px' }}>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Name</label>
              <input type="text"
                className="form-control"
                name="name"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Email</label>
              <input type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Phone</label>
              <input type="text"
                className="form-control"
                name="phone"
                placeholder="Enter Phone"
                value={this.state.phone}
                onChange={this.handleInputChange} />
            </div>

            <center>
              <button className="btn btn-outline-primary w-25" type="submit" style={{ marginTop: '15px', textAlign: 'center', alignItems: 'center' }} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; Update
              </button>
            </center>

          </form>
        </div>

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

      </div>
    )
  }
}

// export default EditPost;

export default withParams(EditPost)