import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      garages: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/garages").then(res => {
      if (res.data.success) {
        this.setState({
          garages: res.data.existingPosts
        });

        console.log(this.state.garages);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/garage/delete/${id}`).then((res) => {
      alert("User Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(garages, searchKey) {

    const result = garages.filter((post) =>
      post.name.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.phone.toLowerCase().includes(searchKey)
    )

    this.setState({ garages: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/garages").then(res => {
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
              Garage Details
            </h4>
          </center>
        </div>

        <div className="row">
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>

        <table class="table" style={{ marginBottom: "60px" }}>
          <thead>
            <tr>
              <th scope="col"> </th>
              <th scope="col">Name</th>
              <th scope="col">Town</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Access</th>
              <th scope="col">Owner E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.garages.map((garages, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {<a href={`/garage/${garages._id}`} style={{ textDecoration: 'none' }}>
                    {garages.name}
                  </a>}
                </td>
                <td>{garages.town}</td>
                <td>{garages.address}</td>
                <td>{garages.number}</td>
                <td>{garages.latitude}</td>
                <td>{garages.longitude}</td>
                <td>{garages.access}</td>
                <td>{garages.email}</td>
                <td>
                  <img alt="" className="activator" style={{ width: 200, height: 200 }} src={'data:image/jpg;base64,' + garages.image1} />
                </td>
                <td className="text-center">
                  <div className="d-flex text-center">
                    <button className="btn btn-primary" href={`/garage/edit/${garages._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit All
                    </button>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => this.onDelete(garages._id)}>
                      <i className="fa fa-trash"></i>&nbsp;Delete
                    </button>
                  </div>
                  &nbsp;
                  &nbsp;
                  <div>
                    <button className="btn btn-primary" href={`/garage/edit/${garages._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Update Access
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    )
  }
};
