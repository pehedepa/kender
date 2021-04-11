const express = require('express');
const debug = require('debug')('app');
const cors = require('cors');
const { connect } = require('mongoose');
const session = require('express-session');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRouter = require('./src/routes/productRouter');
const authRouter = require('./src/routes/authRouter');
const userRouter = require('./src/routes/userRouter');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

connect(process.env.DATABASE_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }));
app.use(session({ secret: process.env.SECRET }));
app.use(bodyParser.json({ limit: '25mb' }));

require('./src/passport')(app);

app.use('/api/products', productRouter);
app.use('/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  debug(`Server running in ${chalk.yellow(`http://localhost:${port}`)}`);
});
