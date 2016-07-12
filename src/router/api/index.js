import menu from './menu';
import signature from './signature';

const api = Object.assign({}, menu, signature);

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
    ['GET', '/', [], api.checkSignature, [], [], []]
  ]
};
