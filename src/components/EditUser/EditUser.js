import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from '../../actions/users.actions'

class EditUser extends Component {

    componentDidMount() {
        debugger;
        const id = this.props.match.params.id;
        this.props.dispatch(userActions.fetchUser(id));
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>

                <div style={{ "width": "50%", "margin": "0 auto" }}>
                    <h2>Edit User</h2>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" placeholder="First Name" name="fname" onChange={this.onInputChangeHandler} value={this.props.user.first_name} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" name="lname" onChange={this.onInputChangeHandler} value={this.props.user.last_name} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Email" name="email" onChange={this.onInputChangeHandler} value={this.props.user.email} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div>
                        <img src={this.props.user.avatar} alt="profile" />
                    </div>
                    <div className="form-group">
                        <label>Upload New Photo</label>
                        <input type="file" className="form-control" onChange={this.onInputChangeHandler} id="exampleInputEmail1" placeholder="Your name" name="filename" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button className="btn btn-primary" onClick={this.onSubmitHandler}>Update</button>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    debugger;
    return {
        user: state.user.user
    }

}
export default connect(mapStateToProps)(EditUser);