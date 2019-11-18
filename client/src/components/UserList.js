import React from "react";

export default function UserList(props) {
  const { users } = props;
  console.log(users);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
