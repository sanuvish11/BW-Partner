const express = require("express");
const Form = require("../models/form");
const multer = require("multer");
const { extname } = require('path');
const router = express.Router();

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
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
  
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, file.fieldname + "_" + Date.now() + extname(file.originalname))
    // cb(null, name + "-" + Date.now() + "." + ext);
  }
});

router.post(
  "",
  multer({ storage: storage }).single("image"),
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

    router.get('/get/all', (req, res, next) => {
      Form.find()
      .then(documents => {
        console.log(documents)
        res.status(201).json({
          message: "Data Fetched!",
          formData: documents
        });
      });
    });



    // router.put(
    //   "/update/:id",
    //   multer({ storage: storage }).single("addressProof"),
    //   (req, res, next) => {
    //     let addressProof = req.body.addressProof;
    //     let adharFront = req.body.adharFront;
    //     let adharBack = req.body.adharBack;
    //     if (req.file) {
    //       const url = req.protocol + "://" + req.get("host");
    //       adharFront = url + "/images/" + req.file.filename;
    //       adharBack = url + "/images/" + req.file.filename;
    //       addressProof = url + "/images/" + req.file.filename;
    //     }
    //     const form = new Form({
    //       _id: req.params.id,
    //       moNumber: req.body.moNumber,
    //       adharNumber: req.body.adharNumber,
    //       firstName: req.body.firstName,
    //       middleName: req.body.middleName,
    //       lastName: req.body.lastName,
    //       fatherName: req.body.fatherName,
    //       address1: req.body.address1,
    //       address2: req.body.address2,
    //       address3: req.body.address3,
    //       area: req.body.area,
    //       city: req.body.city,
    //       state: req.body.state,
    //       pincode: req.body.pincode,
    //       SKILLS: req.body.SKILLS,
    //       CORE_SKILLS: req.body.CORE_SKILLS,
    //       WORK_EXPERIENCE: req.body.WORK_EXPERIENCE,
    //       addressProof: addressProof,
    //       adharFront: adharFront,
    //       addressProof: addressProof,
    //     });
    //     Form.updateOne({ _id: req.params.id }, form).then(result => {
    //       res.status(200).json({ message: "Update successful!" });
    //     }).catch(err => {
    //       console.log(err);
    //     });
    //   }
    // );

    router.put(
      "/update/:id",
      multer({ storage: storage }).array("images", 3),
      (req, res, next) => {
        
        if (req.files) {
          console.log(req.files);
          // const url = req.protocol + "://" + req.get("host");
          // imagePath = url + "/images/" + req.files;
          imagePath = req.files;
          console.log(imagePath);
          // adharBack = url + "/images/" + req.file.filename;
          // addressProof = url + "/images/" + req.file.filename;
        }
        const form = new Form({
          _id: req.params.id,
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
          SKILLS: req.body.SKILLS,
          CORE_SKILLS: req.body.CORE_SKILLS,
          WORK_EXPERIENCE: req.body.WORK_EXPERIENCE,
          agreement: req.body.agreement,
          imagePath: req.files
        });
        Form.updateOne({ _id: req.params.id }, form).then(result => {
          res.status(200).json({ message: "Update successful!" });
        }).catch(err => {
          console.log(err);
        });
      }
    );
    
    

  module.exports = router;