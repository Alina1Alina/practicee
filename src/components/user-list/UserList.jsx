import { User } from '../user/User';

export const UserList = ({ users, deleteUser }) => {
  return (
    <ul>
      {users.map(({ name, email, id }) => {
        return (
          <li key={id}>
            <User user={{ name, email, id }} deleteUser={deleteUser} />
          </li>
        );
      })}
    </ul>
  );
};