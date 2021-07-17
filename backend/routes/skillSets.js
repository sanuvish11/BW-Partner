const express = require("express");
const SKILL = require("../models/skillSets");

const router = express.Router();

// router.get('/get/all/jobsWorkArea', (req, res, next) => {
//     JOBS.find()
//     .then(documents => {
//       res.status(201).json({
//         message: "Data Fetched!",
//         formData: documents
//       });
//     });
//   });

  router.get("/:id", (req, res, next) => {
        SKILL.find({CORE_SKILL_ID: req.params.id}).then(data => {
            if (data) {
              res.status(200).json(data);
            } else {
              res.status(404).json({ message: "Skill not found!" });
            }
          }).catch((err) => {
            console.log(err);
        });
  });

  router.post('/save/expe', (req, res, next) => {
    const skill = new SKILL({
      CORE_SKILL_ID: req.body.CORE_SKILL_ID,
      STATUS: req.body.STATUS,
      WORK_EXPE: req.body.WORK_EXPE
    });
    skill.save()
    .then(documents => {
      res.status(201).json({
        formData: documents
      });
    });
  });
  

module.exports = router;

