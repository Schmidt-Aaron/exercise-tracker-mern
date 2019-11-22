import React from "react";
import UserList from "../components/UserList";
import Layout from "../layouts/Layout";

const Users = props => {
  return (
    <Layout>
      <UserList users={[...props.users]} />
    </Layout>
  );
};

export default Users;
