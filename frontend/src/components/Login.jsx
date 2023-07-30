import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const login = (email, password) => {
    console.log(email, password);
  };

  return (
    <>
      <BiSolidUserCircle size="250" className="text-green-700 mx-auto p-5" />
      <b className="text-slate-800">Email:</b>
      <input
        type="email"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter email"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, email: e.target.value });
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
          login(user.email, user.password);
        }}
        className="w-full px-4 py-2 text-white border border-gray-200 rounded-md shadow-lg bg-green-700 mt-5"
      >
        Submit
      </button>
    </>
  );
};

export default Login;
