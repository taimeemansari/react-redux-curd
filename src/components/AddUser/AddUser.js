import React, { Component } from 'react';
import userActions from '../../actions/users.actions';
import { connect } from 'react-redux';
import axios from 'axios';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            filename: ''
        }
    }
    componentDidMount() {
        let url1 = 'https://reqres.in/api/users';
        let url2 = 'https://jsonplaceholder.typicode.com/users'
        let api1 = axios.get(url1);
        let api2 = axios.get(url2);
        axios.all([api1, api2])
            .then(axios.spread((...responses) => {
                console.log(responses[0].data.data)
                console.log(responses[1].data)
            }))

    }
    onInputChangeHandler = (event) => {
        debugger;
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.dispatch(userActions.AddUser(this.state));
    }
    render() {
        return (
            <React.Fragment>
                <div style={{ "width": "50%", "margin": "0 auto" }}>
                    <h2>Add user</h2>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" placeholder="First Name" name="fname" onChange={this.onInputChangeHandler} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" name="lname" onChange={this.onInputChangeHandler} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Email" name="email" onChange={this.onInputChangeHandler} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label>Upload Photo</label>
                        <input type="file" className="form-control" onChange={this.onInputChangeHandler} id="exampleInputEmail1" placeholder="Your name" name="filename" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button className="btn btn-primary" onClick={this.onSubmitHandler}>Add user</button>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(AddUser);