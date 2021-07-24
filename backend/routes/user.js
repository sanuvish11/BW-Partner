const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

//signup
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
//login
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

});
router.post('/verify_otp', (req, res, next) => {

});
//change password
router.post('/changepassword/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        User.findOne({
            _id: id
        }).then(data => {
            if (data) {
                const passwordIsValid = bcrypt.compareSync(req.body.currentPassword, data.password);
                console.log(passwordIsValid)
                if (!passwordIsValid) {
                    return res.status(401).send({
                        status: 401,
                        message: "Invalid Password!"
                    });
                }
                else {
                    User.updateOne({ _id: id }, {
                        password: bcrypt.hashSync(req.body.newPassword, 8),
                    }).then(updateData => {
                        if (updateData.ok == 1) {
                            res.status(200).send({ status: 200 });
                        }
                        else {
                            res.status(304).send({ status: 304 });
                        }
                    })
                }
            } else {
                res.status(404).send({ code: 404 });
            }

        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ code: 500 });
    }
});

//user list
router.get('/list', async (req, res, next) => {
    try {
        const data = await User.find({})
        if (data) {
            res.send(data);
        }
        else {
            res.send("No Record Found!");
        }

    } catch (error) {
        console.log(error)
        res.send(error)
    }
});

module.exports = router;
