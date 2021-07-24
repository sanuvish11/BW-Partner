const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const formRoutes = require("./routes/form");
const jobRoutes = require("./routes/job");
const jobWorkAreaRoutes = require("./routes/jobWorkArea");
const jobSkillsRoutes = require("./routes/skillSets");
const subUsersRoutes = require("./routes/sub_users");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.use("/api/user", userRoutes);
    app.use("/api/forms", formRoutes);
    app.use("/api/jobs", jobRoutes);
    app.use("/api/jobsWorkArea", jobWorkAreaRoutes);
    app.use("/api/skills", jobSkillsRoutes);
    app.use("/api/subUsers", subUsersRoutes);
    //read images
    app.use('/images', express.static('../backend/images'));
}