import React, { useState } from "react";

import { CurrentUserContext } from "./contexts/CurrentUserContext";

import Login from "./components/Login";
import Signup from "./components/Signup";
import EditProfile from "./components/EditProfile";

const App = () => {
  const [selectedItem, setSelectedItem] = useState("Login");
  const [currentUser, setCurrentUser] = useState({
    first_name: "",
    last_name: "",
    email: "password",
    guid: "",
    date_joined: "",
  });

  return (
    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
      <b>
        <u>Current User:</u>
      </b>
      <p>{"Name: " + currentUser.first_name + " " + currentUser.last_name}</p>
      <p>{"Email: " + currentUser.email}</p>
      <p>{"Date joined: " + currentUser.date_joined}</p>
      <p>{"Password: " + currentUser.password}</p>
      <p>{"GUID: " + currentUser.guid}</p>
      <div className="w-full h-full absolute bg-slate-400">
        <div className="mx-auto mt-5 max-w-sm bg-slate-200 items-center block rounded-xl shadow-lg">
          <div className="top-0 left-0 cursor-pointer select-none">
            <a
              onClick={() => setSelectedItem("Login")}
              className={
                "float-left w-1/3 text-center rounded-se-xl rounded-ss-xl" +
                (selectedItem === "Login" ? " bg-slate-300" : "")
              }
            >
              Login
            </a>
            <a
              onClick={() => setSelectedItem("Signup")}
              className={
                "float-left w-1/3 text-center rounded-se-xl rounded-ss-xl" +
                (selectedItem === "Signup" ? " bg-slate-300" : "")
              }
            >
              Signup
            </a>
            <a
              onClick={() => setSelectedItem("Edit Profile")}
              className={
                "float-left w-1/3 text-center rounded-se-xl rounded-ss-xl" +
                (selectedItem === "Edit Profile" ? " bg-slate-300" : "")
              }
            >
              Edit Profile
            </a>
          </div>
          <div className="bg-slate-300 inline-block rounded-es-xl rounded-ee-xl p-3 w-full">
            {selectedItem === "Login" ? <Login /> : null}
            {selectedItem === "Signup" ? <Signup /> : null}
            {selectedItem === "Edit Profile" ? <EditProfile /> : null}
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
