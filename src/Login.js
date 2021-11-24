import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import auth from "./auth";

const Login = (props) => {
  return (
    <div className="login">
      <button 
      onClick={() => {
        auth.login(() => {
            props.history.push("/dashboard")
        });
    }} className="loginBtn">Login</button>
      <br />
      <h4>Or</h4>
      <Link to="/register">
        <button  className="registerBtn">Register</button>
      </Link>
    </div>
  );
};

export default Login;
