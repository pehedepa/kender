const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const { connect } = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

connect('mongodb+srv://kender:kender@cluster0.6hpiv.mongodb.net/usersDB');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const heroRouter = require('./src/routes/heroRouter');
const userRouter = require('./src/routes/userRouter');

app.use('/api/heroes', heroRouter);
app.use('/api/users', userRouter);

app.listen(5000, () => debug(`Server running in ${chalk.yellow(`http://localhost:${port}`)}`)); // PRIMER ARG= PUERTO ESCUCHA // SECOND ARG =
