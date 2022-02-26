const debug = require('debug')('app:startup');
const courses = require('./routes/courses');
const home = require('./routes/home');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const app = express();
app.use(express.json());
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', './views');

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  debug('Morgan enabled');
}

app.use('/', home);
app.use('/api/courses', courses);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
