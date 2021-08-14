const express = require("express");
const router = express.Router();
const API = require("../controllers/api")

   
router.get("/", API.fetchAllTest);
router.get("/:id", API.fetchTestByID);
router.post("/", API.createTest);
// router.patch("/:id", API.updateTest);
// router.delete("/:id", API.deleteTest);





  module.exports = router;