import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import busboy from 'connect-busboy';
import ms_utils from 'ms-utils';

import errorHandler from './middlewares/error';
import config from './config/config';
import Router from './router';
import { morganParams } from './util/router_setup';
global.logger = ms_utils.logger(config.logger.category, config.logger.level);

const app = express();
morgan.token('params', req => JSON.stringify(morganParams(req, req.method)));
app.use(morgan('[:date[iso]] [:method :url] [:status] [:response-time ms] [:params]'));
app.use(cors());
app.use(bodyParser.json({ limit: '64mb' }));
app.use(bodyParser.urlencoded({ limit: '64mb', extended: true }));
app.use(compression());
app.use(busboy({ limits: { fileSize: 1024 * 1024 * 1024 } })); // 1G

app.use('/', Router.apiRouter);

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
