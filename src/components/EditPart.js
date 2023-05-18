import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class EditPart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            model: "",
            price: "",
            condition: "",
            type: ""
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

        const { name, model, price, condition, type } = this.state;
        const { id } = this.props.params;
        const data = {
            name: name,
            model: model,
            price: price,
            condition: condition,
            type: type
        }

        axios.put("/part/update/" + id, data).then((res) => {
            console.log(data)
            if (res.data.success) {
                alert("Part Updated Successfully");
                this.setState(
                    {
                        name: "",
                        model: "",
                        price: "",
                        condition: "",
                        type: ""
                    }
                )
            }
        })
    }

    componentDidMount() {

        const { id } = this.props.params;

        axios.get("/part/" + id).then((res) => {
            if (res.data.success) {
                this.setState({
                    name: res.data.post.name,
                    model: res.data.post.model,
                    price: res.data.post.price,
                    condition: res.data.post.condition,
                    type: res.data.post.type,
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
            <div>

                <div className="col-md-8 mt-4 mx-auto">
                    <center><h3 style={{ marginBottom: '30px' }}>Update Part</h3></center>
                    <form className="needs-validation" noValidate style={{ border: '1px solid black', borderRadius: '5px', padding: '20px' }}>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle Model</label>
                            <input type="text"
                                className="form-control"
                                name="model"
                                placeholder="Enter Model"
                                value={this.state.model}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Price</label>
                            <input type="number"
                                className="form-control"
                                name="price"
                                placeholder="Enter Price"
                                value={this.state.price}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Condition</label>
                            <input type="text"
                                className="form-control"
                                name="condition"
                                placeholder="Enter Condition"
                                value={this.state.condition}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle Type</label>
                            <select
                                className="form-control"
                                name="type"
                                //value={this.state.type}
                                onChange={this.handleInputChange}>
                                <option value={this.state.type}>{this.state.type}</option>
                                <option value="CAR">Car</option>
                                <option value="MOTORCYCLE">Motorcycle</option>
                                <option value="VAN">Van</option>
                                <option value="BUS">Bus</option>
                                <option value="LORRY">Lorry</option>
                                <option value="OTHER">Other</option>
                            </select>
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

export default withParams(EditPart)