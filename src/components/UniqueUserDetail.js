import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";;

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class UniqueUserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.params;

    axios.get("/post/" + id).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
        console.log(this.state.post);
      }
    });
  }

  render() {

    const { name, email, phone } = this.state.post;
    const { image } = this.state.post;

    return (

      <div style={{ marginTop: '20px' }}>

        <center style={{ marginBottom: '30px', marginTop: '30px' }}><h4>Unique User Detail</h4></center>

        <h4>
          <img alt="" className="activator" style={{ width: 100, height: 100 }} src={'data:image/jpg;base64,' + image} />
        </h4>

        <hr />

        <dl className="row" style={{ marginBottom: '100px' }}>
          <dt className="col-sm-3">Name</dt>
          <dd className="col-sm-9">{name}</dd>

          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{email}</dd>

          <dt className="col-sm-3">Phone Number</dt>
          <dd className="col-sm-9">{phone}</dd>
        </dl>

      </div>
    );
  }
}

export default withParams(UniqueUserDetail);
