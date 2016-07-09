import express from 'express';
import menuRouter from './menu';

const Router = express.Router();

Router.get('/menu/createmenu', menuRouter.createMenu.bind(menuRouter));

export default Router;
