import React, { Component } from 'react';
import axios from 'axios';

export default class CheckoutsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkouts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/payments").then(res => {
      if (res.data.success) {
        this.setState({
            checkouts: res.data.existingPosts
        });

        console.log(this.state.checkouts);
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

  filterData(checkouts, searchKey) {

    const result = checkouts.filter((post) =>
      post.name.toLowerCase().includes(searchKey) ||
      post.address.toLowerCase().includes(searchKey) ||
      post.postal.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.phone.toLowerCase().includes(searchKey) ||
      post.amount.toLowerCase().includes(searchKey)
    )

    this.setState({ checkouts: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/payments").then(res => {
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
              Checkouts
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
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Postal Code</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.checkouts.map((checkouts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{checkouts.name}</td>
                <td>{checkouts.address}</td>
                <td>{checkouts.postal}</td>
                <td>{checkouts.email}</td>
                <td>{checkouts.phone}</td>
                <td>{checkouts.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    )
  }
};
