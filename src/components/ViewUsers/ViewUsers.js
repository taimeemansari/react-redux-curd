import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from '../../actions/users.actions';

class ViewUsers extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    onEditUserClick(id) {
        this.props.history.push(`/EditUser/${id}`)
    }

    render() {
        console.log(this.props)
        const tdata = this.props.users.map(user =>
            (<tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td className="text-center"><img src={user.avatar} style={{ "height": "40px" }} alt="profile phto" /></td>
                <td className="text-center">
                    <button className="btn btn-secondary" style={{ "marginRight": "10px" }} onClick={() => this.onEditUserClick(user.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => this.props.deleteClick(user.id)}>Delete</button>
                </td>
            </tr>
            ));
        return (
            <React.Fragment>
                <h2>View Users</h2>
                <table className="table table-striped" border="1" style={{ 'borderCollapse': 'collapse', 'padding': '5px' }}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tdata}
                    </tbody>
                </table >
            </React.Fragment>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        users: state.user.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteClick: (id) => dispatch(userActions.deleteUser(id)),
        fetchUsers: () => dispatch(userActions.fetchAllUsers()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers);