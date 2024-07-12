const express = require('express');
const router = express.Router();
const { addInstructor } = require('../controllers/instructorController');
const authMiddleware = require('../middlewares/auth');

router.post('/instructors', authMiddleware('admin'), addInstructor);

module.exports = router;
