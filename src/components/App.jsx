import { data } from '../data/users';
import { User } from '../components/user/User';
import { UserList } from './user-list/UserList';
import { Section } from './section/Section';
import { Component } from 'react';
import { Button } from './Button/Button';
import { AddUserForm } from './add-user-form/AddUserForm';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    isListShown: false,
    users: data,
    isFormShow: false,
  };
  showList = () => {
    this.setState({ isListShown: true });
  };
  deleteUser = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };
  showForm = () => {
    this.setState({ isFormShow: true });
  };

  addUser = data => {
    const newUser = { id: nanoid(), ...data };
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] };
    });
  };
  closeForm = () => {
    this.setState({ isFormShow: false });
  };
  render() {
    const { isListShown, users, isFormShow } = this.state;
    return (
      <>
        <Section title="List Of Users">
          {!isListShown ? (
            <Button text="Show list of users" clickHandler={this.showList} />
          ) : (
            <>
              <UserList users={users} deleteUser={this.deleteUser} />
              {isFormShow ? (
                <AddUserForm
                  addUser={this.addUser}
                  closeForm={this.closeForm}
                />
              ) : (
                <Button text="Add user" clickHandler={this.showForm} />
              )}
            </>
          )}
        </Section>
      </>
    );
  }
}
