const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
// import {skill} from "./models/skillSets"

// const userRoutes = require("./routes/user");
const userRoutes = require("./routes/user");
const formRoutes = require("./routes/form");
const jobRoutes = require("./routes/job");
const jobWorkAreaRoutes = require("./routes/jobWorkArea");
const jobSkillsRoutes = require("./routes/skillSets");
const subUsersRoutes = require("./routes/sub_users");

mongoose
  .connect(
 "mongodb+srv://Arbaaz:aqFZDL5CKHiOVjuV@cluster0.simoo.mongodb.net/demoApp",
 { useUnifiedTopology: true,useNewUrlParser: true}   
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images/")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  

app.use("/api/user", userRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/jobsWorkArea", jobWorkAreaRoutes);
app.use("/api/skills", jobSkillsRoutes);
app.use("/api/subUsers", subUsersRoutes);

module.exports = app;