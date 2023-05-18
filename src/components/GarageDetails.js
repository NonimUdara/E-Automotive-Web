import React, { Component } from 'react';
import axios from 'axios';

export default class GarageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      garages: [],
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/garages").then(res => {
      if (res.data.success) {
        this.setState({
          garages: res.data.existingGarages
        });

        console.log(this.state.garages);
      }
    });
  }

  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Garage?")) {
      axios.delete(`/garage/delete/${id}`).then((res) => {
        alert("Garage Deleted Successfully");
        this.retrievePosts();
      });
    } else {
      console.log("Garage delete cancelled.");
    }
  };

  onTrue = (id,email) => {
    const data = {
      access: "True",
      email: email
    };
    if (window.confirm("Are you sure you want to update the part?")) {
      axios.put("/garage/updateAT/" + id, data).then((res) => {
        if (res.data.success) {
          
          alert("Part Updated Successfully");

        }
      });
    }
  };

  onFalse = (id,email) => {
    const data = {
      access: "False",
      email: email
    };
    if (window.confirm("Are you sure you want to update the part?")) {
      axios.put("/garage/updateAF/" + id, data).then((res) => {
        if (res.data.success) {
          
          alert("Part Updated Successfully");

        }
      });
    }
  };


  filterData(garages, searchKey) {

    const result = garages.filter((post) =>
      post.name.toLowerCase().includes(searchKey) ||
      post.town.toLowerCase().includes(searchKey) ||
      post.address.toLowerCase().includes(searchKey) ||
      post.number.toLowerCase().includes(searchKey) ||
      post.latitude.toLowerCase().includes(searchKey) ||
      post.longitude.toLowerCase().includes(searchKey) ||
      post.access.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey)
    )

    this.setState({ garages: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/garages").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingGarages, searchKey)

      }
    });
  }



  render() {
    return (
      <div className="container">

        <div className="row" style={{ marginBottom: '30px', marginTop: '30px' }}>
          <center>
            <h4 style={{fontWeight:'bold'}}>
              Garage Details
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
              <th scope="col">Town</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Access</th>
              <th scope="col">Owner E-Mail</th>
              <th scope="col">Garage Photo</th>
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
                  <img alt="profile" className="activator" style={{ width: 150, height: 150 }} src={'data:image/jpg;base64,' + garages.image1} />
                </td>
                <td className="text-center">
                  <div className="text-center">
                  <a className="btn btn-primary" href={`/garage/edit/${garages._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit All
                  </a>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => this.onDelete(garages._id)}>
                      <i className="fa fa-trash"></i>&nbsp;Delete
                    </button>
                  </div>
                  &nbsp;
                  &nbsp;
                  <div>
                  <div className="text-center">
                    <button className="btn btn-success" onClick={() => this.onTrue(garages._id,garages.email)}>
                      <i className="fas fa-edit"></i>&nbsp;Give Access
                    </button>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => this.onFalse(garages._id,garages.email)}>
                      <i className="fa fa-trash"></i>&nbsp;Access Denied
                    </button>
                  </div>
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
