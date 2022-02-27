require('./db');

const Course = require('./models/courses');

const getCourses = async(sortBy) => {
  const courses = await Course.find({ isPublished: true })
    .sort(sortBy)
    .select({ name: 1, author: 1})

  console.log(courses.map(el => [el._doc.name, el._doc.author]));
}

const updateCourses = async() => {
  const result = await Course.update({ isPublished: false }, {
    $set: { isPublished: true }
  });

  console.log(result);
}

getCourses({ name: 1 })
getCourses({ price: -1 })
updateCourses();


