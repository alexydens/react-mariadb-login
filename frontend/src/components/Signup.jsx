import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [errorExists, setErrorExists] = useState(false);

  const signup = async (first_name, last_name, email, password) => {
    console.log(first_name, last_name, email, password);

    try {
      const result = await axios.post("http://localhost:8800/signup", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      });
      console.log(result.data);
      if (result.data === "User already exists.") {
        setErrorExists(true);
      } else {
        setErrorExists(false);
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
          var usr = user;
          setUser({ ...usr, email: e.target.value });
        }}
      />
      <div className="hidden peer-invalid:block text-red-500">Please enter a valid email address.</div>
      <b className="text-slate-800">First Name:</b>
      <input
        type="text"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter first name"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, first_name: e.target.value });
        }}
      />
      <b className="text-slate-800">Last Name:</b>
      <input
        type="text"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter last name"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, last_name: e.target.value });
        }}
      />
      <b className="text-slate-800">Password:</b>
      <input
        type="password"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter password"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, password: e.target.value });
        }}
      />
      <button
        onClick={() => {
          signup(user.first_name, user.last_name, user.email, user.password) ===
            "User already exists.";
        }}
        className="w-full px-4 py-2 text-white border border-gray-200 rounded-md shadow-lg bg-green-700 mt-5"
      >
        Submit
      </button>
      {errorExists ? (
        <div className="text-red-500">Try again: User already exists!</div>
      ) : null}
    </>
  );
};

export default Signup;
