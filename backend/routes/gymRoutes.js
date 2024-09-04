const express = require('express');
const { getGyms, addGym } = require('../controllers/gymController');
const router = express.Router();

router.get('/', getGyms);
router.post('/', addGym);

module.exports = router;
