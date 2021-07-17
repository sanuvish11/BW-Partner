const express = require("express");
const JOBS = require("../models/jobWorkArea");

const router = express.Router();

router.get('/get/all/jobsWorkArea', (req, res, next) => {
    JOBS.find()
    .then(documents => {
      res.status(201).json({
        message: "Data Fetched!",
        formData: documents
      });
    });
  });

  router.get("/:id", (req, res, next) => {
        JOBS.find({JOB_UID: req.params.id}).then(post => {
            if (post) {
              res.status(200).json(post);
            } else {
              res.status(404).json({ message: "Post not found!" });
            }
          }).catch((err) => {
            res.send({
                ERROR: err,
                STATUS: 0
            })
        });
  });
  
  router.post('/save/coreSkills', (req, res, next) => {
    const job = new JOBS({
      JOB_UID: req.body.JOB_UID,
      STATUS: req.body.STATUS,
      WORK_AREA: req.body.WORK_AREA
    });
    job.save()
    .then(documents => {
      res.status(201).json({
        formData: documents
      });
    });
  });


module.exports = router;

