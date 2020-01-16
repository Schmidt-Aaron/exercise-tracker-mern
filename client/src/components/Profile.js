import React, { useContext } from "react";
import UserContext from "../hooks/UserContext";

const Profile = props => {
  // access our user context
  const user = useContext(UserContext);
  console.log(user);
  // deconstruct our variables
  const { username, email, age, height, weight } = user;

  return (
    <section>
      <p>Welcome {username}</p>
    </section>
  );
};

export default Profile;
