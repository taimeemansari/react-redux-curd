import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/Home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AddUser" className="nav-link">Add User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ViewUsers" className="nav-link">View Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ShoppingCart" className="nav-link">Shopping Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;