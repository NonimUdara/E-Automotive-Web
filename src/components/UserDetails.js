import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/users").then(res => {
      if (res.data.success) {
        this.setState({
          users: res.data.existingPosts
        });

        console.log(this.state.users);
      }
    });
  }

  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      axios.delete(`/user/delete/${id}`).then((res) => {
        alert("User Deleted Successfully");
        this.retrievePosts();
      });
    } else {
      console.log("User delete cancelled.");
    }
  };

  filterData(users, searchKey) {

    const result = users.filter((post) =>
      post.name.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.phone.toLowerCase().includes(searchKey)
    )

    this.setState({ users: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/users").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)

      }
    });
  }

  render() {
    return (
      <div className="container">

        <div className="row" style={{ marginBottom: '30px', marginTop: '30px' }}>
          <center>
            <h4 style={{fontWeight:'bold'}}>
              User Details
            </h4>
          </center>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-12 mb-12">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>

        <table class="table" style={{ marginBottom: "60px", marginTop: "20px", border:"1px solid black" }}>
          <thead>
            <tr style={{border:"1px solid black"}}>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col"> </th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Name</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Email</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Phone</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Address</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Postal Code</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Profile picture</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((users, index) => (
              <tr key={index } style={{border:"1px solid black", textAlign:'center'}}>
                <th scope="row">{index + 1}</th>
                <td style={{border:"1px solid black", textAlign:'center'}}>
                  {<a href={`/user/${users._id}`} style={{ textDecoration: 'none' }}>
                    {users.name}
                  </a>}
                </td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{users.email}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{users.phone}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{users.address}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{users.postalcode}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>
                  <img alt="" className="activator" style={{ width: 100, height: 100 }} src={'data:image/jpg;base64,' + users.image} />
                </td>
                <td>
                  <a className="btn btn-primary" style={{margin:10}} href={`/user/edit/${users._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  &nbsp;
                  <button className="btn btn-danger" style={{margin:10}} onClick={() => this.onDelete(users._id)}>
                    <i className="fa fa-trash"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    )
  }
};
