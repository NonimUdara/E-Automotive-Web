import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.name.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.phone.toLowerCase().includes(searchKey)
    )

    this.setState({ posts: result })

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/posts").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)

      }
    });
  }



  render() {
    return (
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#C4C4C4' }}>
          <div className="container">
            <button style={{ margin: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'bold', fontSize: 20 }} href="/">E-Automotives</a>
                </li>
                <li className="nav-item" style={{}}>
                  <a className="navbar-brand" aria-current="page" style={{ fontWeight: 'small', fontSize: 20, textAlign: 'right' }} href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row" style={{ marginBottom: '30px', marginTop: '30px' }}>
          <center>
            <h4>
              User Details
            </h4>
          </center></div>
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
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {<a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.name}
                  </a>}
                </td>
                <td>{posts.email}</td>
                <td>{posts.phone}</td>
                <td>
                  <a className="btn btn-primary" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  &nbsp;
                  <button className="btn btn-danger" onClick={() => this.onDelete(posts._id)}>
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
