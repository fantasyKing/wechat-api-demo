import express from 'express';
import api from './api';
import routerSetup from './../util/router_setup';

const apiRouter = express.Router();
routerSetup(apiRouter, api);

export default {
  apiRouter
};
