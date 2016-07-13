import menu from './menu';
import auth from './../../middlewares/auth';
import dispatch from './dispatch';

const api = Object.assign({}, menu, dispatch);

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
    ['POST', '/', [auth.validateSign], api.dispatchEvent, [], [], []]
  ]
};
