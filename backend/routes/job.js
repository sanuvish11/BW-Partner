const express = require("express");
const JOBS = require("../models/jobs");

const router = express.Router();

router.get('/get/all/jobs', (req, res, next) => {
    JOBS.find()
    .then(documents => {
      res.status(201).json({
        message: "Data Fetched!",
        formData: documents
      });
    });
  });

  router.post('/save/skill', (req, res, next) => {
    const job = new JOBS({
      JOB_NAME: req.body.JOB_NAME,
      STATUS: req.body.STATUS
    });
    job.save()
    .then(documents => {
      res.status(201).json({
        formData: documents
      });
    });
  });

module.exports = router;

