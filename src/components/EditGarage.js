import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class EditGarage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            town: "",
            address: "",
            number: "",
            latitude: "",
            longitude: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();

        const { name, town, address, number, latitude, longitude } = this.state;
        const { id } = this.props.params;
        const data = {
            name: name,
            town: town,
            address: address,
            number: number,
            latitude: latitude,
            longitude:longitude
        }

        axios.put("/garage/update/" + id, data).then((res) => {
            console.log(data)
            if (res.data.success) {
                alert("Garage Updated Successfully");
                this.setState(
                    {
                        name: "",
                        town: "",
                        address: "",
                        number: "",
                        latitude: "",
                        longitude: ""
                    }
                )
            }
        })
    }

    componentDidMount() {

        const { id } = this.props.params;

        axios.get("/garage/" + id).then((res) => {
            if (res.data.success) {
                this.setState({
                    name: res.data.post.name,
                    town: res.data.post.town,
                    address: res.data.post.address,
                    number: res.data.post.number,
                    latitude: res.data.post.latitude,
                    longitude: res.data.post.longitude
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
            <div>

                <div className="col-md-8 mt-4 mx-auto">
                    <center><h3 style={{ marginBottom: '30px' }}>Update Garage</h3></center>
                    <form className="needs-validation" noValidate style={{ border: '1px solid black', borderRadius: '5px', padding: '20px' }}>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Garage Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Nearest Town</label>
                            <input type="text"
                                className="form-control"
                                name="town"
                                placeholder="Enter Town"
                                value={this.state.town}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Address</label>
                            <input type="text"
                                className="form-control"
                                name="address"
                                placeholder="Enter Address"
                                value={this.state.address}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Phone Number</label>
                            <input type="number"
                                className="form-control"
                                name="number"
                                placeholder="Enter Number"
                                value={this.state.number}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Latitude</label>
                            <input type="text"
                                className="form-control"
                                name="latitude"
                                placeholder="Enter latitude"
                                value={this.state.latitude}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Longitude</label>
                            <input type="text"
                                className="form-control"
                                name="longitude"
                                placeholder="Enter longitude"
                                value={this.state.longitude}
                                onChange={this.handleInputChange} />
                        </div>

                        <center>
                            <button className="btn btn-outline-primary w-25" type="submit" style={{ marginTop: '15px', textAlign: 'center', alignItems: 'center' }} onClick={this.onSubmit}>
                                <i className="far fa-check-square"></i>
                                &nbsp; Update
                            </button>
                        </center>

                    </form>
                </div>

            </div>
        )
    }
}

// export default EditPost;

export default withParams(EditGarage)