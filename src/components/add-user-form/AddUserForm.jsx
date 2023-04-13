import { Component } from 'react';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };
  handelChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.addUser({...this.state}  );
    this.props.closeForm();
  };
  render() {
    const { name, email } = this.state;
    return (
      <form action="" onSubmit={this.handelSubmit}>
        <label htmlFor="">
          {' '}
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handelChange}
          />
        </label>
        <label htmlFor="">
          {' '}
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handelChange}
          />
        </label>
        <button>Add</button>
      </form>
    );
  }
}
