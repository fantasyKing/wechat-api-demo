import menu from './menu';
import auth from './../../middlewares/auth';
import dispatch from './dispatch';
import material from './material';
import message from './message';

const api = Object.assign({}, menu, dispatch, material, message);

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
  ],
  material: [
    ['GET', '/uploadMaterial/:filepath/:type', [], api.uploadMaterial, ['filepath', 'type'], [1, 1], ['string', 'string']],
    ['GET', '/uploadNewsMaterial', [], api.uploadNewsMaterial, [], [], []]
  ],
  news: [
    ['GET', '/sendMass', [], api.sendNews, [], [], []]
  ]
};
