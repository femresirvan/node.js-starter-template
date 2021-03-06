const path = require('path');
const cors = require('cors');
const http = require('http');
const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const passport = require('passport');

const swaggerDocument = YAML.load('./swagger.yaml');
const router = require('./routers/router');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({
  path: '.env',
});

/**
 * Pass the global passport object into the configuration function
 */

require('./middlewares/passport')(passport);

/**
 * Mongoose Database Connection
 */
require('./configs/db_conn');

/**
 * Create Express server.
 */
const app = express();
app.use(cors());

/**
 * Swagger conf.
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * Express configuration.
 */
// #region EXPRESS CONF
app.use(passport.initialize());
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('layouts', path.join(__dirname, 'views/layouts'));
app.set('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
// If you want to code with bootstrap then enable it. I do not recommend that. Use Webpack.
// app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// #endregion
app.use('/', router);

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'dev') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      msg: err.msg || 'Unexpected err',
      success: false,
      status: err.status || 500,
    });
  });
} else {
  app.use((err, req, res) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

/**
 * Start Express server.
 */
const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(
    '%s App is running at http://localhost:%d in %s mode',
    chalk.green('???'),
    app.get('port'),
    app.get('env')
  );
  console.log(chalk.magentaBright('  Press CTRL-C to stop'));
});
