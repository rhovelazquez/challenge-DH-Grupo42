const express = require('express');
const router = express.Router();

const candidateController= require("../../controllers/api/candidateController");
router.get('/all', candidateController.all);

module.exports = router;