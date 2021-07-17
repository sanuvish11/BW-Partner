const express = require("express");
const SUB_USERS = require("../models/sub_users");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/save", (req, res, next) => {
    const subUsers = new SUB_USERS({
      userName: req.body.userName,
      moNumber: req.body.moNumber,
      status: req.body.status,
      jobType: req.body.jobType,
      email: req.body.email,
      password: req.body.password
  });
  subUsers
    .save()
    .then(result => {
      res.status(201).json({
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Internal Server Error",
        error: err
      });
    });    
  });

  router.get('/get/all', (req, res, next) => {
    SUB_USERS.find()
    .then(documents => {
      res.status(201).json({
        formData: documents
      });
    });
  });

  router.get("/:id", (req, res, next) => {
    SUB_USERS.findOne({_id: req.params.id}).then(data => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json({ message: "User Not Found!" });
        }
      }).catch((err) => {
        console.log(err);
    });
});

router.put(
  "/update/:id",
  (req, res, next) => {
    const subUsers = new SUB_USERS({
      _id: req.params.id,
      userName: req.body.userName,
      moNumber: req.body.moNumber,
      status: req.body.status,
      jobType: req.body.jobType,
      email: req.body.email,
      password: req.body.password
    });
    SUB_USERS.updateOne({ _id: req.params.id }, subUsers).then(result => {
      res.status(200).json({ message: "Update successful!" });
    }).catch(err => {
      console.log(err);
    });
  }
);

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(400).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});

router.post("/user/login", (req, res, next) => {
  console.log(req.body.MOBILE_NUMBER);
  console.log(req.body.PASSWORD);
  console.log(req.body.JOB_TYPE);
  SUB_USERS.find({ moNumber: req.body.MOBILE_NUMBER, password: req.body.PASSWORD, jobType: req.body.JOB_TYPE})
    .then(user => {
      console.log(user)
      const token = jwt.sign(
                { moNumber: user.moNumber, userId: user._id },
                "secret_this_should_be_longer"
              );
              console.log(user)
              if(user.length != 0){
                user.forEach((data) => {
                  if(data.status === "inActive"){
                    res.send({
                      STATUS: 201,
                      MESSAGE: "Account is not active."
                  })
                  }
                  else{
                    res.send({
                      STATUS: 200,
                      ACCESSTOKEN: token,
                      MESSAGE: "PASSCODE MATCHED."
                  })
                  }
                })
              }
              else{
                res.send({
                  STATUS: 202,
                  MESSAGE: "."
              })
              }
              
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});

module.exports = router;

