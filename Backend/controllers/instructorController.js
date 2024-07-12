const Instructor = require('../models/Instructor');

exports.addInstructor = async (req, res) => {
  const instructor = new Instructor(req.body);
  await instructor.save();
  res.send(instructor);
};
