const express = require("express");
const Form = require("../models/form");
const multer = require("multer");
const { extname } = require('path');
const router = express.Router();
const request = require('request');

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "../backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");

    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, file.fieldname + "_" + Date.now() + extname(file.originalname))
  }
});

router.post("", multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const form = new Form({
      imagePath: url + "/images/" + req.file.filename
    });
    form.save().then(createdPost => {
      console.log(createdPost);
      // res.status(201).json({
      //   message: "Post added successfully",
      //   post: {
      //     ...createdPost,
      //     id: createdPost._id
      //   }
      // });
    }).catch(err => {
      console.log(err);
    });
  }
);

router.post("/save", (req, res, next) => {
  const form = new Form({
    moNumber: req.body.moNumber,
    adharNumber: req.body.adharNumber,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    fatherName: req.body.fatherName,
    address1: req.body.address1,
    address2: req.body.address2,
    address3: req.body.address3,
    area: req.body.area,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
  });
  form
    .save()
    .then(result => {
      res.status(201).json({
        message: "User created!",
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
//list with image done
router.get('/getall', async (req, res, next) => {
  try {
    let photofile = []
    const data = await Form.find();
    const results = await Promise.all(data.map(async posts => {
      posts = posts.toJSON();
      list = posts.imagePath;
      list.forEach(element => {
        let body = {
          photo: "https://" + req.headers.host + '/images/' + element.photo
        }
        photofile.push(body);
      });
      posts.imagePath = photofile
      photofile = [];
      return posts;
    }));
    res.send({
      data: results
    })
  } catch (error) {
    console.log(error);
  }
});

//update 
router.post("/update/:id", multer({ storage: storage }).array("images", 3), (req, res, next) => {
  let list = [];
  let photofile = [];
  list = req.files
  list.forEach(element => {
    const body = {
      photo: element.filename
    }
    photofile.push(body)
  })
  const form = {
    adharNumber: req.body.adharNumber,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    fatherName: req.body.fatherName,
    address1: req.body.address1,
    address2: req.body.address2,
    address3: req.body.address3,
    area: req.body.area,
    city: req.body.city,
    date_of_birth: req.body.date_of_birth,
    state: req.body.state,
    pincode: req.body.pincode,
    SKILLS: req.body.SKILLS,
    CORE_SKILLS: req.body.CORE_SKILLS,
    WORK_EXPERIENCE: req.body.WORK_EXPERIENCE,
    agreement: req.body.agreement,
    imagePath: photofile
  };
  Form.updateOne({ _id: req.params.id }, form).then(result => {
    res.status(200).json({ message: "Update successful!" });
  }).catch(err => {
    console.log(err);
  });
}
);

//get otp
router.get('/getotp/:mobileNo', async (req, res, next) => {
  try {
    const mobileNo = req.params.mobileNo;
    Form.findOne({
      moNumber: mobileNo
    }).exec((err, user) => {
      var otpValue = Math.floor(1000 + Math.random() * 9000);
      if (!user) {
        const form = new Form({
          moNumber: req.params.mobileNo,
          otp: otpValue,
        });
        form.save().then(result => {
          res.status(200).send({
            status: 200,
            mobileNo: mobileNo,
            otp: otpValue,
          })
        })
      }
      else {
        var otpValue = Math.floor(1000 + Math.random() * 9000);
        Form.updateOne({
          moNumber: mobileNo
        }, {
          otp: otpValue,
        }).then(response => {
          console.log(response)
          if (response.ok == 1) {
            sendSMS(otpValue, mobileNo);
            res.status(201).send({
              status: 201,
              mobileNo: mobileNo,
              otp: otpValue,
            });
          }
        })
      }
    })
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Unable To Process"

    })
  }
});
//verify otp
router.post('/verify_otp', async (req, res, next) => {
  console.log(req.body)
  const mobileNo = req.body.mobileNo
  Form.findOne({
    moNumber: mobileNo
  }).then(data => {
    if (!data) {
      res.send({
        status: 3,
        message: "please try again."
      });
    } else {
      if (req.body.otp == data.otp) {
        res.status(200).send({
          status: 200,
          data: data
        })
      }
      else {
        res.status(404).send({
          status: 404,
          message: "Miss Match Otp"
        });
      }
    }
  })


});

function sendSMS(otp, msg) {
  var options = {
    'method': 'POST',
    'url': 'http://text.radicaltechsupport.com/V2/http-api.php?',
    form: {
      'apikey': '2FOIKXErhyfpHlYT',
      'senderid': 'ACCVRF',
      'number': '91' + '7999368324',
      'message': 'Use ' + otp + ' as OTP to login into your account. ' + msg,
      'format': 'json',
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    console.log(error)
  });

}

module.exports = router;