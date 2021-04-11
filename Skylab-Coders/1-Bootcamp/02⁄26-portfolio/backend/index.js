const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const { connect } = require('mongoose');

const genericRouter = require('./src/routes/genericRoute');
const academicRouter = require('./src/routes/academicRoute');
const tradeSkillsRouter = require('./src/routes/tradeSkillsRoute');
const workExperienceRouter = require('./src/routes/workExperienceRoute');

const app = express();
const port = process.env.PORT || 5000;

connect('mongodb+srv://kender:kender@cluster0.6hpiv.mongodb.net/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.use(express.urlencoded({ encoded: true }));
app.use(express.json());

app.use('/api/portfolio/generic', genericRouter);
app.use('/api/portfolio/academic', academicRouter);
app.use('/api/portfolio/tradeskills', tradeSkillsRouter);
app.use('/api/portfolio/workexperience', workExperienceRouter);

app.listen(port, () => {
  debug(`Server running in ${chalk.yellow(`http://localhost:${port}`)}`);
});
