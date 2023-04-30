import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class EditUser extends Component {

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

    axios.put("/user/update/" + id, data).then((res) => {
      console.log(data)
      if (res.data.success) {
        alert("User Updated Successfully");
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

    axios.get("/user/" + id).then((res) => {
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

      </div>
    )
  }
}

// export default EditPost;

export default withParams(EditUser)