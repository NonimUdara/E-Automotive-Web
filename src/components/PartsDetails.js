import React, { Component } from 'react';
import axios from 'axios';

export default class PartsDetails extends Component {
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
    axios.get("/parts").then(res => {
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
      post.name.toLowerCase().includes(searchKey) ||
      post.model.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.price.toLowerCase().includes(searchKey) ||
      post.condition.toLowerCase().includes(searchKey) ||
      post.type.toLowerCase().includes(searchKey)
    )

    this.setState({ parts: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/parts").then(res => {
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
              Parts Details
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
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col"> </th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Name</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Owner Email</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Model</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Price</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Condition</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Type</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col">Part image</th>
              <th style={{border:"1px solid black", textAlign:'center'}} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.parts.map((parts, index) => (
              <tr style={{border:"1px solid black", textAlign:'center'}} key={index}>
                <th scope="row">{index + 1}</th>
                <td style={{border:"1px solid black", textAlign:'center'}}>
                  {parts.name}
                </td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{parts.email}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{parts.model}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{parts.price}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{parts.condition}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>{parts.type}</td>
                <td style={{border:"1px solid black", textAlign:'center'}}>
                  <img alt="" className="activator" style={{ width: 100, height: 100 }} src={`data:image/jpg;base64,${parts.image.image}`} />
                  <div style={{ marginTop: '10px' }}>
                    <a href={`data:image/jpg;base64,${parts.image.image}`} download={`part_${parts._id}.jpg`} className="btn btn-outline-primary">Download</a>
                  </div>
                </td>
                <td style={{border:"1px solid black", textAlign:'center'}}>
                  <a className="btn btn-primary" style={{margin:10}} href={`/part/edit/${parts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  &nbsp;
                  <button className="btn btn-danger" style={{margin:10}} onClick={() => this.onDelete(parts._id)}>
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
