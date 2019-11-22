import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
