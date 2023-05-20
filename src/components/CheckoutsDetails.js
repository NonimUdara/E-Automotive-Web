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
            <tr style={{border:"1px solid black", textAlign:'center'}}>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col"> </th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Name</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Address</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Postal Code</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Email</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Phone Number</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Amount</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.checkouts.map((checkouts, index) => (
              <tr key={index} style={{border:"1px solid black", textAlign:'center'}}>
                <th style={{border:"1px solid black", textAlign:'center'}} scope="row">{index + 1}</th>
                <td style={{border:"1px solid black", textAlign:'center'}}>{checkouts.name}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{checkouts.address}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{checkouts.postal}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{checkouts.email}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{checkouts.phone}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{checkouts.amount}.00</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{checkouts.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    )
  }
};
