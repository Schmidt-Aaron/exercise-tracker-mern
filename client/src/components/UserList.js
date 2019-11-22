import React from "react";
import { Link } from "react-router-dom";

export default function UserList(props) {
  const { users } = props;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, i) => (
          <Link key={i} to={`/user/${user.username}`}>
            <li>{user.username}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
