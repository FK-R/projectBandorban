const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");
const fileupload = require("express-fileupload");
const exp = require("constants");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hbs = require("hbs");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
app.use(fileupload());

// const publicDirectory = path.join(__dirname + "/public");
// app.use(express.static(publicDirectory));
// app.use("image", express.static(publicDirectory + "/image/"));
// const sms = require("ssl-wireless-sms-send");

// app.set("views", path.join(__dirname + "/public/views"));
// app.set("view engine", "hbs");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "bkabd_maindatabase",
//   password: "b85r)UqiHUuA",
//   database: "bkabd_maindatabase",
// });

app.get("/server", (req, res) => {
  res.send("<h1>Server Running</h1>");
});

app.listen("5000", (req, res) => {
  console.log("SERVER RUNNING");
});
