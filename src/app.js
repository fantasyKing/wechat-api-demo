import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';

import errorHandler from './middlewares/error';
import config from './config/config';
import Router from './router/index';

const app = express();

app.use(morgan('[:date[iso]] [:method :url] [:status] [:response-time ms]'));
app.use(cors());
app.use(bodyParser({ limit: '64mb' }));
app.use(bodyParser.urlencoded({ limit: '64mb', extended: true }));
app.use(compression());

app.use('/', Router);

app.use(errorHandler.notFoundHandler);
app.use(errorHandler.errorLog);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.errorHandler);

const server = app.listen(config.serverPort, () => {
  console.log('Http listen at port:', config.serverPort);
});

process.on('SIGINT', () => {
  console.log('http exiting...');
  server.close(() => {
    console.log('http exited.');
    process.exit(0);
  });
});
