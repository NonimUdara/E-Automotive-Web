import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/contactus").then(res => {
      if (res.data.success) {
        this.setState({
          parts: res.data.existingPosts
        });

        console.log(this.state.parts);
      }
    });
  }

  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Part?")) {
      axios.delete(`/part/delete/${id}`).then((res) => {
        alert("Part Deleted Successfully");
        this.retrievePosts();
      });
    } else {
      console.log("Part delete cancelled.");
    }
  };

  filterData(parts, searchKey) {

    const result = parts.filter((post) =>
      post.type.toLowerCase().includes(searchKey) ||
      post.message.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey)
    )

    this.setState({ parts: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/contactus").then(res => {
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
            <h4>
              Contactus Messages
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

        <table class="table" style={{ marginBottom: "60px", marginTop: "20px" }}>
          <thead>
            <tr>
              <th scope="col"> </th>
              <th scope="col">Problem</th>
              <th scope="col">Message</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.parts.map((parts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{parts.type}</td>
                <td>{parts.message}</td>
                <td>{parts.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    )
  }
};
