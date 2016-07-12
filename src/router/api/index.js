import menu from './menu';
import auth from './../../middlewares/auth';

const api = Object.assign({}, menu);

/**
 * routes = {
 *  passport: [
 *   [method, route, [middlewares], handler, [params], [params_options], [params_types]]
 *  ]
 * }
 */
export default {
  menu: [
    ['GET', '/createMenu', [], api.createMenu, [], [], []]
  ],
  '': [
    ['GET', '/', [auth.validateSign], [], [], [], []],
    ['POST', '/', [auth.validateSign], [], [], [], []]
  ]
};
