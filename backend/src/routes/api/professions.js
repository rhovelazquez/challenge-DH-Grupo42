const express = require('express');
const router = express.Router();

const professionsController= require("../../controllers/api/professionController");

router.get('/all', professionsController.all);

module.exports = router;