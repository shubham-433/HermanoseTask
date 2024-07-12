const Course = require('../models/Course');
const Lecture = require('../models/Lecture');

exports.addCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.send(course);
};

exports.addLecture = async (req, res) => {
  const { courseId, instructorId, date } = req.body;

  const existingLecture = await Lecture.findOne({ instructorId, date });
  if (existingLecture) {
    return res.status(400).send('Instructor is already assigned to another lecture on this date.');
  }

  const lecture = new Lecture({ courseId, instructorId, date });
  await lecture.save();

  await Course.findByIdAndUpdate(courseId, { $push: { lectures: lecture._id } });

  res.send(lecture);
};
