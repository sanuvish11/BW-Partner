const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();


router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

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

router.post('/getotp', (req, res, next) => {
  if(req.body.MOBILE_NUMBER){
      DB_UserCredential.findOne({
          where: {
              MOBILE_NUMBER: req.body.MOBILE_NUMBER
          }
      })
          .then((data) => {
              var _OTP = Math.floor(1000 + Math.random() * 9000);
              if (data) {
                  DB_UserCredential.update(
                      {
                          PASSCODE: _OTP,
                      }, {
                      where: {
                          MOBILE_NUMBER: req.body.MOBILE_NUMBER
                      }
                  })
                      .then((responseData) => {
                          //console.log(responseData)
                          res.send({
                              STATUS: 1,
                              USERDATA: {
                                  MOBILE_NUMBER: req.body.MOBILE_NUMBER,
                                  OTP: _OTP
                              }
                          })
                      })
              }
              else {
                  DB_UserCredential.create({
                      MOBILE_NUMBER: req.body.MOBILE_NUMBER,
                      PASSCODE: _OTP
                  }).then(response => {
                      //  console.log(response);
                      // sendSMS(response.PASSWORD, response.MOBILE_NUMBER)
                      res.send({
                          STATUS: 1,
                          USER: {
                              MOBILE_NUMBER: response.MOBILE_NUMBER,
                              OPT: _OTP
                          }
                      })
                  })
              }
          })
          .catch((err) => {
              res.send({
                  ERROR: err,
                  STATUS: 0
              })
          })
  }
  if(req.body.EMAIL){
      DB_UserCredential.findOne({
          where: {
              EMAIL: req.body.EMAIL
          }
      })
          .then((data) => {
              var _OTP = Math.floor(1000 + Math.random() * 9000);
              if (data) {
                  DB_UserCredential.update(
                      {
                          PASSCODE: _OTP,
                      }, {
                      where: {
                          EMAIL: req.body.EMAIL
                      }
                  })
                      .then((responseData) => {
                          //console.log(responseData)
                          res.send({
                              STATUS: 1,
                              USERDATA: {
                                  EMAIL: req.body.EMAIL,
                                  OTP: _OTP
                              }
                          })
                      })
              }
              else {
                  DB_UserCredential.create({
                      EMAIL: req.body.EMAIL,
                      PASSCODE: _OTP
                  }).then(response => {
                      console.log(response);
                      // sendSMS(response.PASSWORD, response.MOBILE_NUMBER)
                      res.send({
                          STATUS: 1,
                          USER: {
                              EMAIL: response.EMAIL,
                              OPT: _OTP
                          }
                      })
                  })
              }
          })
          .catch((err) => {
              res.send({
                  ERROR: err,
                  STATUS: 0
              })
          })
  }
});


router.post('/verify_otp', (req, res, next) => {
  if (req.body.EMAIL) {
      DB_UserCredential.findOne(
          {
              where: {
                  EMAIL: req.body.EMAIL,
                  PASSCODE: req.body.PASSCODE
              }
          }
      ).then((data) => {
          var _token = JWT.sign(data.ID, config.secret);
          if (data) {
              DB_UserCredential.update({
                  APP_TOKEN: _token
              }, {
                  where: {
                      EMAIL: req.body.EMAIL,
                  }
              }).then(response => {
                  res.send({
                      STATUS: 1,
                      ACCESSTOKEN: _token,
                      MESSAGE: "PASSCODE MATCHED."
                  })
              })
          }
          else {
              res.send({
                  STATUS: 0,
                  MESSAGE: "PASSCODE OR EMAIL MISMATCH."
              })
          }
      }).catch(err => {
          res.send({
              STATUS: 0,
              MESSAGE: err
          })
      })


  } else {
      DB_UserCredential.findOne(
          {
              where: {
                  MOBILE_NUMBER: req.body.MOBILE_NUMBER,
                  PASSCODE: req.body.PASSCODE
              }
          }
      ).then((data) => {
          // console.log(data)
          var _token = JWT.sign(data.ID, config.secret);
          if (data) {
              DB_UserCredential.update({
                  APP_TOKEN: _token
              }, {
                  where: {
                      MOBILE_NUMBER: req.body.MOBILE_NUMBER,
                  }
              }).then(response => {
                  res.send({
                      STATUS: 1,
                      ACCESSTOKEN: _token,
                      MESSAGE: "PASSCODE MATCHED."
                  })
              })
          }
          else {
              res.send({
                  STATUS: 0,
                  MESSAGE: "PASSCODE OR MOBILE NUMBER MISMATCH."
              })
          }
      }).catch(err => {
          res.send({
              STATUS: 204,
              MESSAGE: err
          })
      })
  }
});


module.exports = router;
