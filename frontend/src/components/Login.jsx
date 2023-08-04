import React, { useState, useContext } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

import axios from "axios";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [errorNotFound, setErrorNotFound] = useState(false);
  const [, setCurrentUser] = useContext(CurrentUserContext);

  const login = async (email, password) => {
    console.log(email, password);
    try {
      const result = await axios.post("http://localhost:8800/login", {
        email: email,
        password: password,
      });
      console.log(result.data);
      if (result.data.length <= 0) {
        setErrorNotFound(true);
        console.log("user not found!");
        const user = {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          guid: "",
          date_joined: "",
        };
        setCurrentUser(user);
      } else {
        setErrorNotFound(false);
        const user = {
          first_name: result.data[0].FirstName,
          last_name: result.data[0].LastName,
          email: result.data[0].Email,
          password: result.data[0].Password,
          guid: result.data[0].GUID,
          date_joined: result.data[0].DateJoined,
        };
        setCurrentUser(user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BiSolidUserCircle size="250" className="text-green-700 mx-auto p-5" />
      <b className="text-slate-800">Email:</b>
      <input
        type="email"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded invalid:text-red-500 peer"
        placeholder="Enter email"
        onChange={(e) => {
          var usr = loginDetails;
          setLoginDetails({ ...usr, email: e.target.value });
        }}
      />
      <div className="hidden peer-invalid:block text-red-500">Please enter a valid email address.</div>
      <b className="text-slate-800">Password:</b>
      <input
        type="password"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter password"
        onChange={(e) => {
          var usr = loginDetails;
          setLoginDetails({ ...usr, password: e.target.value });
        }}
      />
      <button
        onClick={() => {
          login(loginDetails.email, loginDetails.password);
        }}
        className="w-full px-4 py-2 text-white border border-gray-200 rounded-md shadow-lg bg-green-700 mt-5"
      >
        Log In
      </button>
      {errorNotFound ? (
        <div className="text-red-500">
          Try again: Invalid login credentials.
        </div>
      ) : null}
    </>
  );
};

export default Login;
