import React from 'react';
import './user.css';

export default class UserCard extends React.Component {

  render() {

    //tablet layout control
    let ulRightClass = (parseInt(this.props.cardNumber) % 2 === 0) ? '' : 'ul-right';
    ulRightClass += " user-card";

    return (
      <ul className={ulRightClass}>
        <li className="card-header">
          <p><i className="fa fa-tag" aria-hidden="true"></i>{this.props.user.title}</p>
        </li>
        <li className="body">
          <p><i className="fa fa-info-circle" aria-hidden="true"></i>{this.props.user.body}</p>
        </li>
        <li>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>{this.props.user.id}
        </li>
      </ul>
    );
  }

}