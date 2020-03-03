import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import './App.css';
import AddUser from './components/AddUser/AddUser';
import ViewUsers from './components/ViewUsers/ViewUsers';
import Edituser from './components/EditUser/EditUser'
import NotFound from './components/NotFound/NotFound';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container mt-5">
        <Switch>
          <Route path='/AddUser' component={AddUser} />
          <Route path='/ViewUsers' component={ViewUsers} />
          <Route path='/EditUser/:id' component={Edituser} />
          <Route path='/ShoppingCart' component={ShoppingCart} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default withRouter(App);
