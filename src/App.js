import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import UserList from './users/userList.js';
import UserForm from './users/userForm.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <div id="main-content">
            <Route exact path="/" render={() => <UserList listSize="4" />} />
            <Route path="/new-user" component={UserForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
