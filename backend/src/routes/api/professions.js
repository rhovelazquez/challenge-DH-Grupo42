const express = require('express');
const router = express.Router();

router.get('/all', professionsController.all);

module.exports = router;