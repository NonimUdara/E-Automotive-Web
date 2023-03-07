import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const { id } = this.props.params;
    const data = {
      name: name,
      email: email,
      phone: phone,
    };

    axios.put("/post/update/" + id, data).then((res) => {
      console.log(data);
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState({
          name: "",
          email: "",
          phone: "",
        });
      }
    });
  };

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
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#C4C4C4", marginBottom: "10px" }}
        >
          <div className="container-fluid">
            <button
              style={{ margin: "10px" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="navbar-brand"
                    aria-current="page"
                    style={{ fontWeight: "small", fontSize: 20 }}
                    href="/"
                  >
                    {" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="navbar-brand"
                    aria-current="page"
                    style={{ fontWeight: "small", fontSize: 20 }}
                    href="/adminpanel"
                  >
                    Admin Panel
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="navbar-brand"
                    aria-current="page"
                    style={{ fontWeight: "small", fontSize: 20 }}
                    href="/"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="col-md-8 mt-4 mx-auto">
          <center>
            <h3>Update User</h3>
          </center>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Enter Phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>

            <button
              className="btn btn-warning w-100"
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
          </form>
        </div>

        <MDBFooter
          style={{ backgroundColor: "#C4C4C4", marginTop: "60px" }}
          className="font-small pt-4 mt-4"
        >
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="8"></MDBCol>
              <MDBCol md="4">
                <p style={{ fontWeight: "bold" }}>www.A+Fitness.lk</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <p style={{ fontWeight: "bold" }}>
                Copyright © 2022 A+Fitness| Designed by A+Fitness
              </p>
              <p style={{ fontWeight: "bold" }}>©All rights reserved</p>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default withParams(EditPost);
