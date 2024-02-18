const express = require('express');
const router = express.Router();

router.get('/all', candidateController.all);

module.exports = router;