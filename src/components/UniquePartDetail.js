import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";;

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class UniquePartDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.params;

    axios.get("/part/" + id).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
        console.log(this.state.post);
      }
    });
  }

  render() {

    const { name, model, price, condition, type } = this.state.post;
    const { image } = this.state.post;

    return (

      <div style={{ marginTop: '20px' }}>

        <center style={{ marginBottom: '30px', marginTop: '30px' }}><h4>Unique Part Detail</h4></center>

        <h4>
          <img alt="" className="activator" style={{ width: 100, height: 100 }} src={'data:image/jpg;base64,' + image} />
        </h4>

        <hr />

        <dl className="row" style={{ marginBottom: '100px' }}>
          <dt className="col-sm-3">Name</dt>
          <dd className="col-sm-9">{name}</dd>

          <dt className="col-sm-3">Model</dt>
          <dd className="col-sm-9">{model}</dd>

          <dt className="col-sm-3">Price</dt>
          <dd className="col-sm-9">{price}</dd>
          
          <dt className="col-sm-3">Condition</dt>
          <dd className="col-sm-9">{condition}</dd>

          <dt className="col-sm-3">Type</dt>
          <dd className="col-sm-9">{type}</dd>
        </dl>

      </div>
    );
  }
}

export default withParams(UniquePartDetail);
