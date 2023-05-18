import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";;

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

function downloadImage(imageData) {
    const link = document.createElement("a");
    link.href = `data:image/jpg;base64,${imageData}`;
    link.download = "image.jpg";
    link.click();
}

class UniqueGarageDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
        };
    }

    componentDidMount() {
        const { id } = this.props.params;

        axios.get("/garage/" + id).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post,
                });
                console.log(this.state.post);
            }
        });
    }

    render() {

        const { name, town, address, number, latitude, longitude, access, email } = this.state.post;
        const { image1 } = this.state.post;
        const { image2 } = this.state.post;


        return (

            <div style={{ marginTop: '20px' }}>

                <div className="container">
                    <center style={{ marginBottom: '30px', marginTop: '30px' }}><h4>Unique Garage Detail</h4></center>


                    <div>
                        <h4>
                            <dt className="col-sm-3">Garage Image</dt>
                            <img alt="" className="activator" style={{ width: 200, height: 200 }} src={`data:image/jpg;base64,${image1}`} />
                            <button style={{ marginLeft: 20 }} onClick={() => downloadImage(image1)} className="btn btn-outline-primary">Download Now</button>
                        </h4>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <h4 >
                            <dt className="col-sm-3">Garage Report</dt>
                            <img alt="" className="activator" style={{ width: 200, height: 200 }} src={`data:image/jpg;base64,${image2}`} />
                            <button style={{ marginLeft: 20 }} onClick={() => downloadImage(image2)} className="btn btn-outline-primary">Download Now</button>
                        </h4>
                    </div>

                    <hr />

                    <dl className="row" style={{ marginBottom: '100px' }}>
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9">{name}</dd>

                        <dt className="col-sm-3">Town</dt>
                        <dd className="col-sm-9">{town}</dd>

                        <dt className="col-sm-3">Address</dt>
                        <dd className="col-sm-9">{address}</dd>

                        <dt className="col-sm-3">Number</dt>
                        <dd className="col-sm-9">{number}</dd>

                        <dt className="col-sm-3">Latitude</dt>
                        <dd className="col-sm-9">{latitude}</dd>

                        <dt className="col-sm-3">Longitude</dt>
                        <dd className="col-sm-9">{longitude}</dd>

                        <dt className="col-sm-3">Access</dt>
                        <dd className="col-sm-9">{access}</dd>

                        <dt className="col-sm-3">Owner E-Mail</dt>
                        <dd className="col-sm-9">{email}</dd>
                    </dl>
                </div>

            </div>
        );
    }
}

export default withParams(UniqueGarageDetail);
