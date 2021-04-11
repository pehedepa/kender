const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const { connect } = require('mongoose');

const commerceRouter = require('./src/routes/commerceRouter');

const app = express();
const port = process.env.PORT || 5000;

connect('mongodb+srv://kender:kender@cluster0.6hpiv.mongodb.net/commerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.use(express.urlencoded({ encoded: true }));
app.use(express.json());

app.use('/api/commerce', commerceRouter);

app.listen(port, () => {
  debug(`Server running in ${chalk.yellow(`http://localhost:${port}`)}`);
});
