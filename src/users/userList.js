import React from 'react';
import { Link } from 'react-router-dom';

import './user.css';
import UserCard from './userCard.js';

export default class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    let self = this;
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(users => {
        self.setState({ users: users.slice(0, self.props.listSize) });
      });
  }

  render() {
    let users;
    if (this.state.users.length > 0) {
      users = this.state.users.map((item, idx) =>
        <UserCard user={item} cardNumber={idx} key={item.id} />
      )
    } else {
      users = <div className="loader">LOADING...</div>
    }
    return (
      <div id="user-list">
        <Link to="/new-user">
          <button className="btn">Novo Usuário</button>
        </Link>
        <div className="header">
          {this.props.listSize} primeiros da lista
        </div>
        {users}
      </div>
    );
  }

}