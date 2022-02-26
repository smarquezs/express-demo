const express = require('express');
const router = express.Router();
const Joi = require('joi');

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

router.get('/', (_req, res) => res.send(courses));

router.get('/:id', (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given ID was not found.')
  res.send(course)
});

router.post('/', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const body = req.body;
  const result = schema.validate(body);

  if(result.error) {
    const errorMessage = result.error.details.map((item) => item.message).join(';');
    res.status(400).send(errorMessage);
    return
  }

  const course = {
    id: courses.length + 1,
    name: body.name
  }
  courses.push(course);
  res.send(course)
});

module.exports = router;
