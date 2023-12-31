import express from "express";
import mysql from "mysql";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const db = mysql.createConnection({
    host: "192.168.0.12",
    user: "jsconnect",
    password: process.env.DB_PASSWORD,
    port: "3306",
    database: "UserApp",
  });

  const query =
    'INSERT INTO UserInfo (FirstName, LastName, Email, DateJoined, GUID, Password) VALUES ("' +
    req.body.first_name +
    '", "' +
    req.body.last_name +
    '", "' +
    req.body.email +
    '", "' +
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate() +
    '", "' +
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }) +
    '", "' +
    req.body.password +
    '");';

  db.connect(async (err) => {
    if (err) throw err;
    let error;
    db.query(query, function (err, result, fields) {
      if (err.code === "ER_DUP_ENTRY") {
        error = "User already exists.";
      } else if (err) {
        error = err.code;
      } else {
        error = "";
      }
      res.send(error);
      db.end();
    });
  });
  console.log(req.body);
});

app.post("/login", (req, res) => {
  const db = mysql.createConnection({
    host: "192.168.0.12",
    user: "jsconnect",
    password: process.env.DB_PASSWORD,
    port: "3306",
    database: "UserApp",
  });

  const query =
    "SELECT * FROM UserInfo WHERE Email = '" +
    req.body.email +
    "' AND Password = '" +
    req.body.password +
    "';";

  db.connect(async (err) => {
    if (err) throw err;
    db.query(query, function (err, result, fields) {
      res.send(result);
      db.end();
    });
  });
  console.log(req.body);
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
