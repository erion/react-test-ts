import React from 'react';
import { Link } from 'react-router-dom';

import './userForm.css';

export default class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      title: '',
      body: '',
      response: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: this.state.userId,
        title: this.state.title,
        body: this.state.body
      })
    })
      .then(res => {
        console.log('post response', res);
        if (res.status === 201) {
          this.setState({
            userId: "",
            title: "",
            body: "",
            response: 'Inserido com sucesso.'
          });
        } else {
          this.setState({ response: 'Falha ao inserir registro.' })
        }
      });
    event.preventDefault();
  }

  render() {

    return (
      <div id="new-user">
        <Link to="/">
          <button className="btn">Voltar</button>
        </Link>
        <p>{this.state.response}</p>
        <form id="user-form" onSubmit={this.handleSubmit}>

          <div className="clearfix">
            <div className="left">
              <label htmlFor="user-id">UserId:</label>
              <input name="userId" id="user-id" value={this.state.userId} onChange={this.handleInputChange} />
            </div>

            <div className="right">
              <label htmlFor="user-title">Title:</label>
              <input name="title" id="user-title" value={this.state.title} onChange={this.handleInputChange} />
            </div>
          </div>

          <br />

          <div className="text-left">
            <label htmlFor="user-body">Body:</label> <br />
            <textarea name="body" id="user-body" value={this.state.body} onChange={this.handleInputChange} ></textarea>
          </div>

          <input className="btn" type="submit" value="Enviar" />
        </form>
      </div>
    );
  }

}