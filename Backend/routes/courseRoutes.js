const express = require('express');
const router = express.Router();
const { addCourse, addLecture } = require('../controllers/courseController');
const authMiddleware = require('../middlewares/auth');

router.post('/courses', authMiddleware('admin'), addCourse);
router.post('/lectures', authMiddleware('admin'), addLecture);

module.exports = router;
