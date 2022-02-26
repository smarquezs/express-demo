const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDD'))
  .catch(error => console.log('Error connecting to MongoDD', error));


const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  data: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

const saveCourse = async () => {
  const course = new Course({
    name: 'React course',
    author: 'Sergio',
    tags: ['react', 'front'],
    isPublished: true
  });

  const result  = await course.save();
  console.log(result);
}

const getCourses = async () => {
  const courses = await Course.find().
    select({ name: 1 });
  console.log(courses);
}

getCourses();
// saveCourse();

