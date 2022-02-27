const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
  name: String,
  author: String,
  date: {
    type: Date,
    default: Date.now
  },
  tags: [ String ]
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;

