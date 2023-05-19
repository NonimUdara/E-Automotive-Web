import React, { Component } from 'react';
import axios from 'axios';

export default class ContactUsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/contactus").then(res => {
      if (res.data.success) {
        this.setState({
          contact: res.data.existingPosts
        });

        console.log(this.state.contact);
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

  filterData(contact, searchKey) {

    const result = contact.filter((post) =>
      post.type.toLowerCase().includes(searchKey) ||
      post.message.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey)
    )

    this.setState({ contact: result })

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
            <h4 style={{fontWeight:'bold'}} >
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
            <tr style={{border:"1px solid black", textAlign:'center'}}>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col"> </th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Problem</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Message</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contact.map((contact, index) => (
              <tr style={{border:"1px solid black", textAlign:'center'}} key={index}>
                <th style={{border:"1px solid black", textAlign:'center'}} scope="row">{index + 1}</th>
                <td style={{border:"1px solid black", textAlign:'center'}}>{contact.type}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{contact.message}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    )
  }
};
