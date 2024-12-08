const express = require("express");
const app = express();
const db = require("./db");

// const Person = require("./models/person");

// const MenuItem = require("./models/MenuItem");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to my hotel");
});

// Import the router files
const personRoutes = require("./routes/personRoutes");

const menuItemRoutes = require("./routes/menuItemRoutes");

// Use the routers
app.use("/person", personRoutes);

app.use("/menu", menuItemRoutes);

app.listen(3000);
