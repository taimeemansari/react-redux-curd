import axios from 'axios';
import { history } from '../helper'

const userActions = {
    fetchAllUsers,
    AddUser,
    fetchUser,
    deleteUser
}

function fetchAllUsers() {
    debugger;
    return dispatch => {
        axios.get('https://reqres.in/api/users')
            .then(res => {
                debugger;
                dispatch(getAllUsers(res.data.data))
            })
    }
}

function AddUser(user) {
    debugger;
    return dispatch => {
        axios.post('https://reqres.in/api/users', { user })
            .then(res => {

                debugger;
                console.log(res);
                alert('user added sucessfully');
            }).then(
                history.push('/ViewUsers')
            )
    }
}
function deleteUser(id) {
    debugger;
    return dispatch => {
        const urlWithId = 'https://reqres.in/api/users/' + id;
        axios.get(urlWithId)
            .then(res => {
                debugger;
                dispatch(trimUser(res.data.data))
            })
    }
}
function fetchUser(id) {
    debugger;
    return dispatch => {
        const urlWithId = 'https://reqres.in/api/users/' + id;
        axios.get(urlWithId)
            .then(res => {
                debugger;
                dispatch(getUser(res.data.data))
            }).catch(error => {
                debugger;
                console.log(error.response)
            });
    }
}
export function getAllUsers(data) {
    return {
        type: 'GET_ALL_USERS',
        data: data
    }
}
export function getUser(userData) {
    return {
        type: 'FETCH_USER',
        data: userData
    }
}


export function trimUser(data) {
    return {
        type: 'DELETE_USER',
        data: data
    }
}
export default userActions;